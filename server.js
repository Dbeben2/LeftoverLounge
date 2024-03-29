// server code

require('dotenv').config(); // Loads environment variables from a .env file into process.env
const express = require('express');
const fetch = require('node-fetch'); // Or you can use axios

const app = express();
const PORT = process.env.PORT || 3000; // Use the port from environment variables or default to 3000

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint that your frontend can call
app.get('/api/data', async (req, res) => {
    // Use your API key securely stored in environment variables
    const apiKey = process.env.API_KEY;
    const externalApiUrl = `https://externalapi.com/data?apiKey=${apiKey}`;

    try {
        const response = await fetch(externalApiUrl);
        const data = await response.json(); // Assuming the external API responds with JSON
        res.json(data); // Send the data back to the frontend
    } catch (error) {
        console.error('Error fetching data from external API:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});