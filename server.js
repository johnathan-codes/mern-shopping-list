const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items');

const app = express();

app.use(bodyParser.json());

const db = require('./config/db').mongoURI;
//const db = process.env.DB;

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('Database connection successful.'))
    .catch(err => console.log(err));

app.use('/api/items', items);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));