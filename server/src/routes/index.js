const { Router } = require('express')
const usersRouter = require('./usersRouter')
const contactsRouter = require('./contactsRouter')
const loginRouter = require('./loginRouter')
const protectedRouter = require('./protectedRouter')

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/contacts', contactsRouter)
routes.use('/login', loginRouter)
routes.use('/protected', protectedRouter)

module.exports = routes
