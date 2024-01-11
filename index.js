const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const  router  = require('./routes.js');

const app = express();
const port = 3001;
const DB_URL = 'mongodb+srv://userr:userr@cluster0.erxpmtc.mongodb.net/?retryWrites=true&w=majority';

app.use(express.json());
app.use(cors());
app.use('/api',router)


async function startApp() {
  try {
    await mongoose.connect(DB_URL);
        app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
}

startApp();
