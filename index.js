const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

require('./models/Personas');

mongoose.connect('mongodb+srv://usuario:USer@cluster0-bqqra.mongodb.net/g6-node?retryWrites=true');

require('./routes/personasRoutes')(app);

app.listen(5000);