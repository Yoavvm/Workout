const express = require('express');
const cors = require('cors');
const { connectToMongoDB } = require('./db/config')



const app = express();
connectToMongoDB()


app.use(cors());
app.use(express.json());

app.use('/', require('./routes/routes'))

app.listen(3001, (() => console.log('listening on port 3001')));