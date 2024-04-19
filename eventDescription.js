import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getDatabase, ref, query, orderByChild, equalTo, onValue } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBaabbq4ffoxWd8NGW6JQ8MUxd1cLRWyIA",
    authDomain: "leftoverlounge.firebaseapp.com",
    databaseURL: "https://leftoverlounge-default-rtdb.firebaseio.com",
    projectId: "leftoverlounge",
    storageBucket: "leftoverlounge.appspot.com",
    messagingSenderId: "9645054242",
    appId: "1:9645054242:web:c0bc8499ec54c6f1086d7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

document.addEventListener('DOMContentLoaded', () => {
    createNavigationBar();
    createSearchAndEventDetailsContainer();
});

function createNavigationBar() {
    const header = document.createElement('header');
    header.className = 'header';

    const logo = document.createElement('img');
    logo.src = 'images/LeftoverLoungeLogo.png';
    logo.alt = 'Logo';
    logo.className = 'logo';
    logo.onclick = () => window.location.href = 'clubMember.html';

    const tabs = createTabs();
    const notifications = createNotifications();

    header.appendChild(logo);
    header.appendChild(tabs);
    header.appendChild(notifications);

    document.body.insertBefore(header, document.body.firstChild);
}

function createTabs() {
    const tabs = document.createElement('div');
    tabs.className = 'tabs';
    const tabNames = ['Clubs at UIC', 'Your Points'];

    tabNames.forEach(name => {
        const tab = document.createElement('button');
        tab.textContent = name;
        tab.className = 'tab';
        tabs.appendChild(tab);
    });

    return tabs;
}

function createNotifications() {
  const notifications = document.createElement('div');
  notifications.className = 'notifications';

  const notifyIcon = document.createElement('img');
  notifyIcon.src = 'images/notify.png';
  notifyIcon.alt = 'Notifications';
  notifyIcon.className = 'notify';

  const userProfile = document.createElement('img');
  userProfile.src = 'images/agent1.png';
  userProfile.alt = 'User Profile';
  userProfile.className = 'userProfile';

  notifications.appendChild(notifyIcon);
  notifications.appendChild(userProfile);

  return notifications;
}

function createSearchAndEventDetailsContainer() {
  const mainContent = document.createElement('div');
  mainContent.className = 'main-content';
  document.body.appendChild(mainContent);

  const eventDetailsContainer = document.createElement('div');
  eventDetailsContainer.id = 'event-details-container';
  mainContent.appendChild(eventDetailsContainer);

  const searchContainer = document.createElement('div');
  searchContainer.className = 'search-container';
  eventDetailsContainer.appendChild(searchContainer);

  const inputClub = document.createElement('input');
  inputClub.type = 'text';
  inputClub.id = 'search-club';
  inputClub.placeholder = 'Enter club name...';
  searchContainer.appendChild(inputClub);

  const inputDate = document.createElement('input');
  inputDate.type = 'date';
  inputDate.id = 'search-date';
  searchContainer.appendChild(inputDate);

  const searchButton = document.createElement('button');
  searchButton.textContent = 'Search';
  searchButton.id = 'search-button';
  searchButton.onclick = searchEvents;
  searchContainer.appendChild(searchButton);

  const eventDetails = document.createElement('div');
  eventDetails.id = 'event-details';
  eventDetailsContainer.appendChild(eventDetails);
}

function searchEvents() {
  const clubName = document.getElementById('search-club').value.trim();
  const eventDate = document.getElementById('search-date').value;
  const eventsRef = query(ref(database, 'events'), orderByChild('clubName'), equalTo(clubName));

  onValue(eventsRef, snapshot => {
      let found = false;
      snapshot.forEach(childSnapshot => {
          const event = childSnapshot.val();
          if (event.date === eventDate) {
              displayEventDetails(event);
              found = true;
          }
      });
      if (!found) {
          document.getElementById('event-details').innerHTML = "No event found for the selected club and date.";
      }
  }, {
      onlyOnce: true
  });

}

function displayEventDetails(event) {
    const detailsContainer = document.getElementById('event-details');
    const detailsHtml = `
        <h2>Event Details</h2>
        <p>Name: ${event.eventName}</p>
        <p>Date: ${event.date}</p>
        <p>Time: ${event.time}</p>
        <p>Location: ${event.location}</p>
        <p>Food: ${event.foodRestrictions || 'None'}</p>
        <p>Description: ${event.description}</p>
    `;
    detailsContainer.innerHTML = detailsHtml;}
    