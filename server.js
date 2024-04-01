require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: 'https://dbeben2.github.io/LeftoverLounge/clubMember.html' // Adjust this according to your CORS policy
}));

// Endpoint to provide the API key
app.get('/api/key', (req, res) => {
    // Send the API key as a JSON response
    res.json({ apiKey: process.env.API_KEY });
});

// Start the server using HTTP
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});