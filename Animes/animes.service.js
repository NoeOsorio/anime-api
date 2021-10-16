const { db } = require("../firebase.config");

module.exports = {
  get: async () => {
    const snapshot = await db.collection("animes").get();
    return snapshot.docs.map((doc) => doc.data());
  },
  create: (anime) => {
    return db.collection("animes").add(anime);
  },
};
