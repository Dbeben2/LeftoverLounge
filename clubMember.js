function initMap() {
    var mapOptions = {
        zoom: 15,
        center: { lat: 41.8719, lng: -87.6479 },
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Specify the location of the event
    var eventLocation = { lat: 41.8719, lng: -87.6479 };

    // Create a marker at the event location
    var marker = new google.maps.Marker({
        position: eventLocation,
        map: map,
        title: 'SCE'
    });

    // Create an info window with a link
    var infoWindow = new google.maps.InfoWindow({
        content: '<div id="content"><p>Event Location. Click to learn more.</p><a href="LFO.html">Go to Left Over Food Page</a></div>'
    });

    // Add a click listener to the marker to open the info window
    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });
}



function loadGoogleMapsScript(apiKey) {
    var script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

document.addEventListener('DOMContentLoaded', function() {
    // events data
    var eventsData = [
        {
            logo: 'Images/acmLogo.png',
            name: 'Event: Meet & Greet',
            club: 'ACM',
            Time: 'Time: TBD',
            location: 'Location: TBD',
            rsvpLink: 'rsvp.html?event=event1',
            requestLink: 'changeRequest.html?event=event1'
        },
        {
            logo: 'Images/fencing.png',
            name: 'Event: Fencing Meet',
            club: 'Fencing Club',
            Time: 'Time: TBD',
            location: 'Location: TBD',
            rsvpLink: 'rsvp.html?event=event2',
            requestLink: 'changeRequest.html?event=event2'
        }
        // Add more events as needed
    ];

    var eventsContainer = document.getElementById('eventsContainer');
    eventsData.forEach(function(event) {
        var eventCard = document.createElement('div');
        eventCard.classList.add('event-card');
        eventCard.innerHTML = `
            <img src="${event.logo}" alt="Event Logo" class="event-logo">
            <div class="event-club">${event.club}</div>
            <div class="event-name">${event.name}</div>
            <div class="event-Time">${event.Time}</div> 
            <div class="event-location">${event.location}</div> 
            <a href="${event.rsvpLink}" class="event-buttons event-rsvp">RSVP</a>
            <a href="${event.requestLink}" class="event-buttons event-request-change">Request Change</a>
        `;
        eventsContainer.appendChild(eventCard);
    });
});

const apiKey = 'AIzaSyBJK6RcFZyq_vmK7ruJH6ztyF1l7YVdk7k';
loadGoogleMapsScript(apiKey);