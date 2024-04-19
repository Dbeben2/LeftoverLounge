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