document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the logo
    document.querySelector('.logo').addEventListener('click', function() {
        window.location.href = 'clubMember.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const pointsLink = document.getElementById('points');
    pointsLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'yourPoints.html';
    });
});

function initMap() {

    const mapOptions = {
        zoom: 15,
        center: { lat: 41.8719, lng: -87.6479 },
    };

    const map = new google.maps.Map(document.getElementById('visitedMap'), mapOptions);

    // Visited locations - replace these with actual data
    const visitedLocations = [
        { lat: 41.87478, lng:  -87.65088, title: 'ARC' }, 
        { lat: 41.87449, lng: -87.651625, title: 'UIC Theatre' }, 
        { lat: 41.8722771, lng: -87.6522044, title: 'SELE' }, 
        { lat: 41.8718536, lng: -87.652622, title: 'Richard J. Daley Library' },
        { lat: 41.8739089, lng: -87.6548138, title: 'UIC BSB' },
    ];

    // Add markers for visited locations
    visitedLocations.forEach(function(location) {
        const marker = new google.maps.Marker({
            position: location,
            map: map,
            title: location.title // Tooltip text on hover
        });
    });
}

window.initMap = initMap;