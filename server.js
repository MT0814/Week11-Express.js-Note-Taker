const express = require("express");
const path = require("path")
const app = express();

const PORT = process.env.PORT || 3001

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// GET Route for retrieving all the tips
// app.get('/api/tips', (req, res) => {
//     console.info(`${req.method} request received for tips`);
//     readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
//   });

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);




app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT} 🚀`)
})
