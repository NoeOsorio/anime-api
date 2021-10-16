const animes = [{ name: "One Piece", id: 0 }];
const port = process.env.PORT || 5001;
const { get: getAnimes, create } = require("./animes.service");

module.exports = {
  get: async (req, res) => {
    const animesList = await getAnimes();
    res.status(200).json(animesList);
  },
  getById: (req, res) => {
    const { id } = req.params;
    res.status(200).json(animes[id]);
  },
  create: async (req, res) => {
    const anime = req.body;

    console.log(req.body);
    if (!anime) {
      res.sendStatus(404);
    }

    const doc = await create(anime);

    const route = `http://localhost:${port}/animes/${doc.id}`;

    res.status(201).json({
      id: doc.id,
      route,
    });
  },
};
