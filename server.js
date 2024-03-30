// server code

require('dotenv').config(); // Make sure this is at the top to load environment variables
const express = require('express'); // Only declare express once
const app = express();
const port = process.env.PORT || 3000; // Use the port from environment variables or default to 3000

const cors = require('cors');

// Enable All CORS Requests
app.use(cors());

app.use(cors({
    origin: 'https://dbeben2.github.io'
}));

app.get('/api/key', (req, res) => {
    res.json({ apiKey: process.env.API_KEY });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening at http://34.42.177.65:${port}`);
});