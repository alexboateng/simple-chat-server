const data = [
  {
    intent: 'sdchat_application',
    question: 'I need to add a field to our credit app.',
    answer: 'We do not offer this feature at the moment',
  },
  {
    intent: 'sdchat_lender',
    question: 'How to add a lender or i want to add a lender',
    answer: `
      1. Setup your lenders by clicking on the integrations tab in the left side menu
      2. Search for preferred lender from the list of displayed lenders
      3. Click on the lender
      4. Fill required fields for that lender; Username, Password etc. shown in the window to the right side
      5. Lender is now available above credit applications detail and can be clicked for a submission to be made
    `,
  },
  // {
  //   intent: 'sdchat_lender',
  //   question: 'I need help adding my lenders to submit',
  //   answer: `
  //     Customer: I've set up my lenders already in the integrations tab. Unfortunately they do not appear on the applications for submission.
  
  //     1. Make sure the customer saves the lenders on the integration page after adding the credentials
  //     2. The customer clears the cache with the help of the help desk articles
  //     3. The customer logs out and logs back in if cache clearing does not log him out.
  //   `,
  // },
  {
    intent: 'sdchat_invite',
    question: 'i want to invite a user',
    answer: `1. Go to settings and click on users and click on invite user
    2. Type the new user's email
    3. Select users role
    4. Click Invite button`
  },
  {
    intent: 'sdchat_invite',
    question: 'invite user ab@gmail.com',
    answer: `1. Go to settings and click on users and click on invite user
    2. Type the new user's email
    3. Select users role
    4. Click Invite button`
  },
  {
    intent: 'sdchat_login',
    question: 'Where to login',
    answer: `Users can login here https://app.simple-dealer.com`,
  },
  {
    intent: 'sdchat_norole',
    question: 'I do not have a role or any permissions',
    answer: `Please logout and login again. If the issue persists, please contact support`,
  },
  {
    intent: 'sdchat_norole',
    question: 'I cant see credit scores and simple summary',
    answer: `Please logout and login again. If the issue persists, please contact support`,
  },
  {
    intent: 'sdchat_autofill',
    question: 'Download and install simple dealer',
    answer: `1. Download the installer from [here](https://autofill-daemon-executables.s3.amazonaws.com/Simple+Dealer%20Setup%203.2.6.exe).
      2. Double click on the downloaded file.
      3. Click More Info
      4. Click Run Anyway
      5. Click Open Simple Dealer once installation is complete
      6. Check video url [here](https://youtu.be/yNW2UXWNJ1k)`,
  },
  {
    intent: 'sdchat_application',
    question: 'Simple Dealer will not load my apps',
    answer: `1. Ask if the customer is on the web app 
      2. If yes, Please log out in the bottom left hand corner and log back in`,
  },
  {
    intent: 'sdchat_autofill',
    question: 'Autofill is not working',
    answer: `1. Check whether user has autofill daemon installed?
      a. Click here to download Simple Dealer https://autofill-daemon-executables.s3.amazonaws.com/Simple+Dealer%20Setup%203.2.9.exe
      b. Double click on downloaded file
      c. Click More Info
      d. Click Run Anyway
      e. Click Open Simple Dealer once installation is complete
      Link to tutorial video: https://youtu.be/yNW2UXWNJ1k
  2. Check user has saved credentials for the lender they’re trying to autofill?
  3. Ensure user has Google Chrome installed. Request for a screenshot when in doubt that the user has Chrome installed.`,
  },
  {
    intent: 'sdchat_signup',
    question:
      'My store is already using Simple Dealer and I want to get set up',
    answer: `Ask user to let someone who has already has access to their store invite them
      Link to tutorial video: https://youtu.be/HfS_UWCiTlQ`,
  },
  {
    intent: 'sdchat_lender',
    question:
      'My Banks/Lenders are not showing up on the credit form (Customers added lenders from integrations do not show up on their credit form)',
    answer: `1. Have the user clear their cache
      2. Press these three keys at the same time to open Clear browsing data (Ctrl + Shift + Delete)
      3. If the lenders still do not appear? Report to engineers!
      Link to tutorial video: https://youtu.be/Yg2CEMeqVBE
      `,
  },
  {
    intent: 'sdchat_billing',
    question: 'I have less funds to renew subscription',
    answer: ` 
      1. Ask if the customer have an active subscription
      2. If yes, The customer will have to make funds available before subscription ends to prevent deactivation.`,
  },
  {
    intent: 'sdchat_billing',
    question: 'Any other question on Billing',
    answer: 'The sales team will be able to help you with this',
  },
]

export default data
