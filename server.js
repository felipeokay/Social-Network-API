const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = 3001;
const app = express();

// Middleware to parse incoming data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

// Connection to MongoDB database, start the server
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});