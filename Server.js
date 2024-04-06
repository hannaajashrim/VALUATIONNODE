const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connection = require('./CONFIGURE/Connection');
const router = require('./ROUTER/TestRouter');


connection();
const app = express();

app.use(express.json());
app.use(cors());
app.use('/',router);

dotenv.config()

Port = process.env.Port;
app.listen(Port,console.log(`Server is running on ${Port}`));