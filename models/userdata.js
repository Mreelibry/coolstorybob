
const mongoose = require('mongoose');
const userDataSchema = mongoose.Schema({
  username: String,
  userID: String,
  serverID: String,
  badges: { type: String, default: '' },
  coins: { type: Number, default: 0 },
  lvl: { type: Number, default: 1 },
  warns: { type: Number, default: 0 },
  xp: { type: Number, default: 0 },
  reputation: { type: Number, default: 0 },
  wins: { type: Number, default: 0 },
  loss: { type: Number, default: 0 },
  msgcount: { type: Number, default: 0 },
});

module.exports = mongoose.model("UserData", userDataSchema);