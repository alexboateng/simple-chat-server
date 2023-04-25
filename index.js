import data from './data.js'
import express from 'express'
import bodyParser from 'body-parser'
import session from 'express-session'
import cors from 'cors'
import { openai } from './api.js'
import { processMessageIntents, getChatPromt } from './utils.js'

// ---------- Express Server ---------- //
const app = express()
app.use(
  session({
    secret: 'YOUR$UP3R$3CR3T',
    resave: true,
    saveUninitialized: true,
  }),
)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
var whiteList = [
  'http://localhost:8000',
  'http://localhost:3000',
  'http://localhost:8080',
]
var corsOptionsDelegate = function (req, callback) {
  var corsOptions
  if (whiteList.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true }
  } else {
    corsOptions = { origin: false }
  }
  callback(null, corsOptions)
}
app.use(cors(corsOptionsDelegate))
app.listen(3001, function () {
  console.log('App listening on port 3001!')
})
// ---------- Express Server ---------- //



// ---------- Routes ---------- //
app.post('/', async function (req, res, next) {
  let appData = [ ...data ]
  let dataString = ''
  let message = ''
  let user_input = req.body.user_input
  let last_bot_message = req.body.last_bot_message
  let last_user_message = req.body.last_user_message
  let messageIntent = []

  try {
    const witData = await processMessageIntents(user_input)
    if (witData) {
      messageIntent = witData.intents // array of intents
      messageIntent = messageIntent.filter((intent) => {
        return intent.confidence > 0.5
      })
      console.log('messageIntent', messageIntent)
      appData = appData.filter((item) => {
        return messageIntent.some((intent) => {
          return item.intent === intent.name
        })
      })

    }

    console.log('appData', appData)

    // filter appData to
    appData.forEach((item) => {
      dataString += `question: ${item.question}: answer: ${item.answer}
    `
    })
    const chatbotPrompt = getChatPromt({
      dataString,
      last_user_message,
      last_bot_message,
      user_input,
    })
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: chatbotPrompt,
      max_tokens: 500
    })

    message = completion.data.choices[0].message
    message.intent = messageIntent
    message.intent = message.intent.map((intent) => {
      return intent.name // remove confidence and others from intent
    }) 
    message.otherdata = witData
    message = JSON.stringify(message)
    // message = completion.data.choices[0].text
    res.status(200).send(message)
  } catch (error) {
    console.log(error.response)
    error = error.message
    res.status(400).send(error)
  }
})
