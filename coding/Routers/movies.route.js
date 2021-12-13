const express = require("express");
const movies = require("../Schemas/movie.schema");
const upload = require("../Middleware/multer");

const router = express.Router();

router.get("/:actor", async (req, res) => {
  let data = await movies.find({ actors: req.params.actor }).lean().exec();
  res.send(data);
});


module.exports = router;
