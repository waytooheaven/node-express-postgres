const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000
const { handleError } = require('./helpers/error')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})
//user part
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/user', db.createUser)
//order part
app.get('/orders', db.getOrders)
app.get('/orders/:id', db.getOrderById)
app.post('/order', db.createOrder)
app.delete('/orders/:id', db.deleteOrder)
app.put('/orders/:id', db.updateOrder)
app.get('/orders/filter/status/:status', db.getOrdersByStatus)
app.get('/orders/filter/user/:id', db.getOrdersByUser)
app.get('/orders/track/:status', db.trackOrder)
//error handling globally
app.use((err, req, res, next) => {
  handleError(err, res);
});
//the server part
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
module.exports = app
