function initMap() {
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

function loadGoogleMapsScript(apiKey) {
    var script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

const apiKey = 'AIzaSyBJK6RcFZyq_vmK7ruJH6ztyF1l7YVdk7k';
loadGoogleMapsScript(apiKey);