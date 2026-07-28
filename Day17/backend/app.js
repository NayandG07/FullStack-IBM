const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(cors());

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
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



