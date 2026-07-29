const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const { connection } = require('./config/db');

app.use(cors());

app.listen(PORT, async () => {
    try {
        await connection;
        console.log("Connection to DB is established");
    } catch (error) {
        console.log(error);
    }
    console.log(`Server is running on ${PORT}`);
});


app.get('/', (req, res) => {
    res.send('<h2 style="color: violet; text-align: center;">Server is running, Welcome!</h2>');
});
// app.get('/products', (req, res) => {
//     res.sendFile(__dirname + '/products.json');
// });

const users = [
    {
        "name": "Bikash",
        "uni": "AdtU"
    },
    {
        "name": "Dhimon",
        "uni": "AdtU"
    },
    {
        "name": "Asif",
        "uni": "AdtU"
    }
]

app.get('/users', (req, res) => {
    res.json(users);
});



