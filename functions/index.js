const functions = require('firebase-functions');
const {app} = require(`${process.cwd()}/dist/server/main.js`);

exports.app = functions
  .region('asia-east2')
  .runWith({ memory: '128MB', maxInstances: 2, minInstances: 1 })
  .https.onRequest(app());
