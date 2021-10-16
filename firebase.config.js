var admin = require("firebase-admin");
require("dotenv").config();

var serviceAccount = require(`./${process.env.FIREBASE_KEY}`);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = {
  db,
};
