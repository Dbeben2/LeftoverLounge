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

document.addEventListener('DOMContentLoaded', function() {
    // Example events data
    var eventsData = [
        {
            logo: 'Images/acmLogo.png',
            name: 'Meet & Greet',
            club: 'ACM',
            rsvpLink: 'rsvpPage1.html',
            requestLink: 'requestChange1.html'
        },
        {
            logo: 'Images/fencing.png',
            name: 'Event 2 Name',
            club: 'Club Name 2',
            rsvpLink: 'rsvpPage2.html',
            requestLink: 'requestChange2.html'
        }
        // Add more events as needed
    ];

    var eventsContainer = document.getElementById('eventsContainer');
    eventsData.forEach(function(event) {
        var eventCard = document.createElement('div');
        eventCard.classList.add('event-card');
        eventCard.innerHTML = `
            <img src="${event.logo}" alt="Event Logo" class="event-logo">
            <div class="event-name">${event.name}</div>
            <div class="event-club">${event.club}</div>
            <div class="event-buttons">
                <a href="${event.rsvpLink}" class="rsvp">RSVP</a>
                <a href="${event.requestLink}" class="request-change">Request Change</a>
            </div>
        `;
        eventsContainer.appendChild(eventCard);
    });
});

const apiKey = 'AIzaSyBJK6RcFZyq_vmK7ruJH6ztyF1l7YVdk7k';
loadGoogleMapsScript(apiKey);