require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port=process.env.PORT || 3003;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

const classesRouter = require('./routes/classes');
app.use('/classes',classesRouter );

app.listen(port, () => console.log(`server running on ${port}`));