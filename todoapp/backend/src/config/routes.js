const express = require('express')


module.exports = function(server) {

    // API ROUTES
    const router = express.Router()
    server.use('/api', router )

    //TODO ROUTES
    const todoServices = require('../api/todo/todoService')
    todoServices.register(router, '/todos')
}