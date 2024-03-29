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