const express = require('express');
const cors = require('cors');
const { connectToMongoDB } = require('./db/config')



const app = express();
connectToMongoDB()


app.use(cors());
app.use(express.json());

app.use('/exercises', require('./routes/exercises'))
app.use('/users', require('./routes/users'))

app.listen(3001, (() => console.log('listening on port 3001')));