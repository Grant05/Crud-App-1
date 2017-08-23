const Item = require('./itemModel');

const itemController = {};

itemController.postItems = (req, res, next) => {
  let newItem = {
    item: req.body.items,
  }

  Item.create(newItem, (err, db) => {
    if (err) console.log(err)
    else {
      res.json(db)
    }
  })
}

itemController.getItems = (req, res) => {
  Item.find({}, (err, db) => {
    res.json(db)
  })
}

itemController.clearItems = (req, res) => {
  Item.remove({}, (err, db) => {
    res.send(db)
  })
}

itemController.deleteItem = (req, res) => {
  Item.remove({ _id: req.params.itemID }, function (err) {
    if (err) console.log(err);
    res.send(req.params)
  })
}

itemController.editItem = (req, res) => {
  Item.findOneAndUpdate({ _id: req.params.itemID }, {$set: { item: req.body.items }}, {new: true, runValidators: true}, function (err, data) {
    if (err) console.log(err);
    res.send(data)
  })
}


module.exports = itemController
