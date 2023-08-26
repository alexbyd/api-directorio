const express = require('express')
const app = express()
const port = 5002
const routes = require('../routes/routes')


app.use('/api', routes)



app.listen(port, ()=>{console.log('server')})