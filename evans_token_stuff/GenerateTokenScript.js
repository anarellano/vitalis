const { AuthManager } = require('./AuthManager');
const { SceGoogleApiHandler } =
  require('./SceGoogleApiHandler');

const authManager = new AuthManager();
const configPath = __dirname + '/config.json';
authManager.setAuthCredentials(configPath, () => {
  const scopes = [
    'https://mail.google.com/',
  ];
  const tokenPath = __dirname + '/token.json';
  const apiHandler = new SceGoogleApiHandler(
    scopes,
    tokenPath,
  );

  if (apiHandler) {
    apiHandler.getNewToken(true);
  }
});
