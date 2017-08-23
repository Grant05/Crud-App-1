const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
  item: {type: String, required: true, min: 1},
  // date: {type: Date}
})

module.exports = mongoose.model("Item", itemSchema);
