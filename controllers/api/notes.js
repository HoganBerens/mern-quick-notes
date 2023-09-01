const Note = require("../../models/note");

async function getAll(req, res) {
  const notes = await Note.find({
    user: req.user._id,
  });
  res.json(posts);
}

async function create(req, res) {
  const note = await Note.create({
    text: req.body.text,
  });
  res.json(note);
}

module.exports = {
  create,
};
