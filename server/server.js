const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const app = express()
const itemController = require('./messages/itemController')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://Grant05:jbms05@ds023523.mlab.com:23523/myfirstappgrantkang1')

app.use(bodyParser())
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.get('/items', itemController.getItems)

app.post('/items', itemController.postItems)

app.patch('/items/:itemID', itemController.editItem)

app.delete('/items', itemController.clearItems)

app.delete('/items/:itemID', itemController.deleteItem)

app.listen(8080, () => (
  console.info('Express listening on 8080!')
))
