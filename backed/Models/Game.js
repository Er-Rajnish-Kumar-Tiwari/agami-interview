const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
  player1: String,
  player2: String,
  rounds: [
    {
      p1Choice: String,
      p2Choice: String,
      winner: String,
    },
  ],
  finalWinner: String,
});

module.exports = mongoose.model("Game", GameSchema);