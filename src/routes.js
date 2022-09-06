const express = require('express')

const routes = express.Router();

const Controller = require('./Controller')

routes.get('/users', Controller.index)
routes.get('/user/:id', Controller.show)
routes.post('/user', Controller.store)
routes.put('/user/:id', Controller.update)
routes.delete('/user/:id', Controller.destroy)


module.exports = routes