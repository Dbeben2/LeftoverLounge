// server code

require('dotenv').config(); // Make sure this is at the top to load environment variables
const express = require('express'); // Only declare express once
const app = express();
const port = process.env.PORT || 3000; // Use the port from environment variables or default to 3000

const cors = require('cors');

// Enable All CORS Requests
app.use(cors());

app.use(cors({
    origin: 'http://127.0.0.1:5500'
  }));

app.get('/api/key', (req, res) => {
    res.json({ apiKey: process.env.API_KEY });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});