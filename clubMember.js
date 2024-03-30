function initMap() {
    // Map initialization logic remains the same
    var mapOptions = {
        zoom: 15,
        center: { lat: 41.8719, lng: -87.6479 },
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var marker = new google.maps.Marker({
        position: { lat: 41.8719, lng: -87.6479 },
        map: map,
        title: 'SCE'
    });
    // Add more markers as needed
}

// Function to dynamically load the Google Maps script
function loadGoogleMapsScript(apiKey) {
    var script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

// Fetch the API key from the server
//fetch('http://localhost:3000/api/key')
fetch('https://10.128.0.3:3000/api/key')
    .then(response => response.json())
    .then(data => {
        console.log('API Key from server:', data.apiKey);
        loadGoogleMapsScript(data.apiKey); // Load the Google Maps script dynamically
    })
    .catch(error => console.error('Error fetching API key:', error));