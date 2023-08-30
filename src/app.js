const express = require('express')
const app = express()
const port = 5002
const routes = require('../routes/routes')

app.use('/api', routes)

app.listen(port, ()=>{console.log('server')})

/*configuracion de produccion https://webpack.js.org/guides/production/
*
* "build": "webpack --mode=production --node-env=production",
    "build:dev": "webpack --config webpack.dev.js --mode=development",
    "build:prod": "webpack --mode=production --node-env=production",
    "watch": "webpack --watch"
*
* */