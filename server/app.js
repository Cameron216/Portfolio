const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

require('dotenv').config();

const port = process.env.PORT || 4000;

const app = express();

const contactRoutes = require('./routes/contact');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(contactRoutes);
console.log(__dirname);
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));

    app.use('*', (req, res) => {
        res.sendfile(path.join((__dirname = '../client/build/index.html')));
    });
}

app.use((req, res, next) => {
    res.status(404).send('Page not found!');
});

app.listen(port, () => {
    console.log(`Server listening on port '${port}'`);
});
