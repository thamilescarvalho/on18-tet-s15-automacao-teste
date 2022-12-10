// NÚCLEO DO PROEJTO

require('dotenv').config()

const express = require('express');
const cors = require('cors');
const app = express();

const database = require('./database/moogoseConnect');
// const db = require('./config/database');
const todasAsRotas = require('./routes/cozinhaRoutes');

app.use(cors());
app.use(express.json())
app.use("/cozinha", todasAsRotas)

database.connect();

module.exports = app


