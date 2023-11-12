const { SceGoogleApiHandler } = require("./SceGoogleApiHandler");

const scopes = ["https://mail.google.com/"];
const pathToToken = __dirname + "/token.json";
const apiHandler = new SceGoogleApiHandler(scopes, pathToToken);

async function setup() {
  const tokenJson = await apiHandler.checkIfTokenFileExists();
  if (tokenJson) {
    if (apiHandler.checkIfTokenIsExpired(tokenJson)) {
      logger.warn("refreshing token");
      apiHandler.refreshToken();
    }
  } else {
    logger.warn("getting new token! ", { tokenJson });
    apiHandler.getNewToken();
  }
}
// -------------

async function sendCoolEmail(emailData) {
  const template = {
    from: emailData.from,
    to: emailData.to,
    subject: emailData.subject,
    generateTextFromHTML: emailData.generateTextFromHTML,
    html: emailData.html,
  };
  try {
    console.log(template);
    
    if (!emailData) {
      throw new Error("emailData is undefined");
    }

    return await apiHandler.sendEmail(template);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

// setup();
// sendCoolEmail();

// module.exports = sendCoolEmail;

function sendCoolEmail() {
  const template = {
    from: 'cool guy',
    to: "anton@vitalisstaffing.com",
    subject: 'yeah we did that',
    generateTextFromHTML: true,
    html: `
      <h1>ALERT!!!!!!</h1>
      <pre>whatever</pre>
    `
  }
  apiHandler.sendEmail(template)
}

setup()
sendCoolEmail()
