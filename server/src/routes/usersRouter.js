const { Router } = require('express')
const { postUserHandler } = require('../handlers/usersHandlers')

const usersRouter = Router()

usersRouter.post('/', postUserHandler)

module.exports = usersRouter
