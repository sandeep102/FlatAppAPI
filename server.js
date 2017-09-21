import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import ip from 'ip'

import routes from './component/router'

let app = express()
let port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/flatapp');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(routes) // register the route

app.listen(port, ip.address());

console.log('API server started on: ' + port);
