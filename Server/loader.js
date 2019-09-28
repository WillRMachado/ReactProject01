const server = require('./config/server')
const db = require('./config/db')
const routes = require('./config/routes')

routes(server)