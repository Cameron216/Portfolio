const express = require('express');
const bodyParser = require('body-parser');

const port = 4000;

const app = express();

const contactRoutes = require('./routes/contact');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(contactRoutes);

app.use((req, res, next) => {
    res.status(404).send('Page not found!');
});

app.listen(port, () => {
    console.log(`Server listening on port '${port}'`);
});
