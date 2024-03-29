function initMap() {
    var mapOptions = {
        zoom: 15,
        center: {lat: 41.8719, lng: -87.6479}, 

    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);


    var marker = new google.maps.Marker({
        position: {lat: 41.8719, lng: -87.6479},
        map: map,
        title: 'SCE'
    });

    // Add more markers as needed
}

fetch('/api/proxy', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ requestData: 'example' }), // if your server expects a body
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

// API key security
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

const API_BASE_URL = 'https://example.com/api';
const API_KEY = AIzaSyA-IOe3ioJ_kq5X89B1J3xrk-hpKuxXfR8;

app.use(express.json());

app.post('/api/proxy', async (req, res) => {
    try {
        const apiResponse = await fetch(`${API_BASE_URL}?key=${API_KEY}`, {
            method: 'GET', // Or POST, etc.
            headers: {
                // Add any necessary headers
                'Content-Type': 'application/json',
            },
            // Include body if needed: JSON.stringify(req.body)
        });
        const data = await apiResponse.json();
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch data' });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));