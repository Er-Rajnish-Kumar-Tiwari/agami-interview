const express = require("express");
const router = express.Router();
const Game = require("../Models/Game");

// Save game
router.post("/", async (req, res) => {
  const game = new Game(req.body);
  await game.save();
  res.json(game);
});

// Get all games
router.get("/", async (req, res) => {
  const games = await Game.find();
  res.json(games);
});

module.exports = router;