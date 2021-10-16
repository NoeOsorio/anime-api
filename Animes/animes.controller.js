const animes = [{ name: "One Piece", id: 0 }];
const port = process.env.PORT || 5001;

module.exports = {
  get: (req, res) => {
    res.status(200).json(animes);
  },
  getById: (req, res) => {
    const { id } = req.params;
    res.status(200).json(animes[id]);
  },
  create: (req, res) => {
    const anime = req.body;

    console.log(req.body);
    if (!anime) {
      res.sendStatus(404);
    }

    anime.id = animes.length;

    animes.push(anime);
    console.log({ animes });

    const route = `http://localhost:${port}/animes/${anime.id}`;

    res.status(201).json({
      id: anime.id,
      route,
    });
  },
};
