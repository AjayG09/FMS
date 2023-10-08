/* eslint-disable import/no-extraneous-dependencies */
const { AutoComplete, Toggle } = require('enquirer');
const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs');
const { createProxyMiddleware } = require('http-proxy-middleware');
const apiMocker = require('connect-api-mocker');

const app = express();
const apiRootPath = '/api';
const proxies = [
  'https://localhost:8443', // Locally running API
  'https://lsm.proxy1.net',
  'https://lsm.proxy2.net',
];

const runServer = async () => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

  const isMockServer = await new Toggle({
    disabled: 'Proxy',
    enabled: 'Mock',
    message: 'Server type?',
  }).run();

  app.locals.type = isMockServer ? 'mock' : 'proxy';

  if (isMockServer) {
    app.use([apiRootPath], apiMocker(`_mockServer${apiRootPath}`));
    console.log(`Mock server started: _mockServer${apiRootPath}\r`);
  } else {
    const endpoint = await new AutoComplete({
      choices: proxies,
      limit: 5,
      message: 'Select a Proxy',
      name: 'endpoint',
    }).run();

    app.use(
      [apiRootPath],
      createProxyMiddleware({
        changeOrigin: true,
        logLevel: 'info',
        secure: false,
        target: endpoint,
      })
    );
  }

  const credentials = {
    cert: fs.readFileSync(path.join(__dirname, './ssl/cert.pem')),
    key: fs.readFileSync(path.join(__dirname, './ssl/key.pem')),
    passphrase: 'Test123!',
  };
  const httpsServer = https.createServer(credentials, app);

  httpsServer.listen(7070);
};

runServer();
