const express = require('express')
const app = express()
const port = 5002
const routes = require('../routes/routes')


app.use('/', routes)


app.listen(port, ()=>{console.log('server')})