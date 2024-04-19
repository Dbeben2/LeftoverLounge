import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "leftoverlounge.firebaseapp.com",
  databaseURL: "https://leftoverlounge-default-rtdb.firebaseio.com",
  projectId: "leftoverlounge",
  storageBucket: "leftoverlounge.appspot.com",
  messagingSenderId: "9645054242",
  appId: "1:9645054242:web:c0bc8499ec54c6f1086d7b"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

async function fetchCSV() {
    const response = await fetch('locations.csv');
    const data = await response.text();
    return data;
}

async function loadAndParseCSV() {
    const csvData = await fetchCSV();
    const parsedData = Papa.parse(csvData, {
        skipEmptyLines: true,
        
        complete: function(results) {
            return results.data;
        }
    });
    return parsedData.data; 
}

async function populateLocationDropdown() {
    const locations = await loadAndParseCSV();
    const locationSelect = document.createElement('select');
    locationSelect.id = 'locationDropdown';
    locations.forEach(location => {
      const option = document.createElement('option');
      option.value = location;
      option.textContent = location;
      locationSelect.appendChild(option);
    });
    document.body.appendChild(locationSelect); 
}

async function createLocationDropdown() {
    const locations = await loadAndParseCSV();
    const locationSelect = document.createElement('select');
    locationSelect.id = 'locationDropdown';
    locations.forEach(location => {
        const option = document.createElement('option');
        option.value = location[0];  
        option.textContent = location[0];  
        locationSelect.appendChild(option);
    });

    return locationSelect;  
}

async function fetchClubsCSV() {
    const response = await fetch('clubinfo.csv');
    const data = await response.text();
    return data;
}

async function loadAndParseClubsCSV() {
    const csvData = await fetchClubsCSV();
    const parsedData = Papa.parse(csvData, {
        header: true, 
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: function(results) {
            return results.data;
        }
    });
    return parsedData.data.map(club => club.Name); 
}

async function populateClubDropdown() {
    const clubs = await loadAndParseClubsCSV();
    const clubSelect = document.createElement('select');
    clubSelect.id = 'clubDropdown';
    clubSelect.className = 'collaborated'; // Use the CSS class
    clubs.forEach(club => {
        const option = document.createElement('option');
        option.value = club;  // Assuming the name is what you want to submit
        option.textContent = club;
        clubSelect.appendChild(option);
    });
    return clubSelect;
}

function createTab(tabName) {
    const tab = document.createElement('button'); // Create button element
    tab.classList.add('tab');
    tab.textContent = tabName;
    return tab;
  }
  
function createTabs() {
    const tabs = document.createElement('div');
    tabs.classList.add('tabs');
  
    const tabNames = ['Create Events'];
    tabNames.forEach(tabName => {
      const tab = createTab(tabName);
      tabs.appendChild(tab);
      if (tabName === 'Create Events') {
        tab.addEventListener('click', function() {
          // Redirect to the Create Event page
          window.location.href = 'CE.html';
        });
      }
    });
    return tabs;
  }

function createNotifications() {
    const notifications = document.createElement('div');
    notifications.classList.add('notifications');
    const notify = document.createElement('img');
    notify.src = 'Images/notify.png';
    notify.alt = 'Notifications';
    notify.classList.add('notify');
    const clubName = document.createElement('img');
    clubName.src = 'Images/acmLogo.png';
    clubName.alt = 'Club Logo';
    clubName.classList.add('clubLogo');
    notifications.appendChild(notify);
    notifications.appendChild(clubName);
    return notifications;
}

function createDateDropdown() {
    const dateSelect = document.createElement('select');
    dateSelect.classList.add('date');
    const today = new Date();
    const endDate = new Date(today.getFullYear(), today.getMonth() + 2, 0);

    for (let dt = new Date(today); dt <= endDate; dt.setDate(dt.getDate() + 1)) {
        const option = document.createElement('option');
        option.value = dt.toISOString().split('T')[0];
        option.textContent = dt.toLocaleDateString();
        dateSelect.appendChild(option);
    }
    return dateSelect;
}

function createTimeDropdown() {
    const timeSelect = document.createElement('select');
    timeSelect.id = 'timeDropdown';
    timeSelect.className = 'time';

    // Start at 8 AM (8 hours) and end at 8 PM (20 hours)
    for (let hour = 8; hour <= 20; hour++) {
        // Create options for each hour and half-hour mark
        ['00', '30'].forEach(minute => {
            const option = document.createElement('option');
            const time = hour + ':' + minute;
            const formattedTime = formatTime(time);
            option.value = formattedTime;
            option.textContent = formattedTime;
            timeSelect.appendChild(option);
        });
    }

    return timeSelect;
}

function formatTime(time) {
    // Convert 24-hour time format to 12-hour format with AM/PM
    const [hour, minute] = time.split(':');
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;  // Convert 0 (midnight) to 12
    return `${hour12}:${minute} ${ampm}`;
}

function createFoodRestrictionCheckboxes() {
    const restrictions = ['Vegan', 'Vegetarian', 'Kosher', 'Halal', 'Gluten-Free', 'None'];
    const checkboxContainer = document.createElement('div');
    checkboxContainer.classList.add('food-restrictions');

    restrictions.forEach(restriction => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'food-restriction';
        checkbox.value = restriction.toLowerCase();

        const label = document.createElement('label');
        label.textContent = restriction;

        const checkboxWrapper = document.createElement('div');
        checkboxWrapper.classList.add('checkbox-wrapper');
        checkboxWrapper.appendChild(checkbox);
        checkboxWrapper.appendChild(label);
        checkboxContainer.appendChild(checkboxWrapper);
    });

    return checkboxContainer;
}

async function createCompleteEventPage() {
    const createEvent = document.createElement('div');
    createEvent.classList.add('create-Event');

    const header = document.createElement('header');
    header.classList.add('header');

    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.src = 'Images/LeftoverLoungeLogo.png';
    logo.alt = 'Logo';
    logo.addEventListener('click', function() {
        window.location.href = 'index.html'; 
    });

    const tabs = createTabs();
    const notifications = createNotifications();

    header.appendChild(logo);
    header.appendChild(tabs);
    header.appendChild(notifications);

    const mainContent = document.createElement('main');
    mainContent.classList.add('main-content');

    const eventBox = await createEventBox(); 

    mainContent.appendChild(eventBox);

    createEvent.appendChild(header);
    createEvent.appendChild(mainContent);

    return createEvent;
}

async function createEventBox() {
    const eventBoxContainer = document.createElement('div');
    eventBoxContainer.classList.add('event-box-container');
    const eventBox = document.createElement('div');
    eventBox.classList.add('event-box');

    const heading = document.createElement('h2');
    heading.textContent = 'Event Details';
    heading.classList.add('event-heading');

    const event = document.createElement('div');
    event.classList.add('event');

    const eventName = document.createElement('input');
    eventName.type = "text";
    eventName.placeholder = "Enter event name";
    eventName.classList.add('event-name');

    const date = createDateDropdown();
    const time = createTimeDropdown();
    const food = createFoodRestrictionCheckboxes();
    const location = await createLocationDropdown();
    const description = document.createElement('input');
    description.type = "text";
    description.placeholder = "Description";
    description.classList.add('description');
    const collaborated = await populateClubDropdown();

    // RSVP Form creation and URL input
    const rsvpFormLink = document.createElement('a');
    rsvpFormLink.href = "https://forms.google.com";
    rsvpFormLink.target = "_blank";
    rsvpFormLink.textContent = "Create Google Form";
    rsvpFormLink.classList.add('button');

    const rsvpFormInput = document.createElement('input');
    rsvpFormInput.id = 'rsvpFormInput';
    rsvpFormInput.type = "url";
    rsvpFormInput.placeholder = "Paste your Google Form URL here";
    rsvpFormInput.classList.add('rsvp-url-input');

    const imageUploadLabel = document.createElement('label');
    imageUploadLabel.textContent = 'Upload Flyer';
    imageUploadLabel.htmlFor = 'image-upload';
    imageUploadLabel.classList.add('image-upload-label');

    const imageUploadButton = document.createElement('input');
    imageUploadButton.type = "file";
    imageUploadButton.accept = "image/*";
    imageUploadButton.id = 'image-upload';
    imageUploadButton.classList.add('image-upload-button');
    imageUploadButton.multiple = true;

    const publish = document.createElement('button');
    publish.textContent = 'Publish';
    publish.classList.add('publish');
    publish.addEventListener('click', async () => {
        const selectedRestrictions = document.querySelectorAll('.food-restrictions input[type="checkbox"]:checked');
        const restrictions = Array.from(selectedRestrictions).map(input => input.value);
        const rsvpUrl = rsvpFormInput.value;

        const eventData = {
            eventName: eventName.value,
            date: date.value,
            time: time.value,
            description: description.value,
            clubName: collaborated.value,
            location: location.value,
            foodRestrictions: restrictions,
            rsvpUrl: rsvpUrl  // Storing the RSVP URL
        };

        const timestamp = Date.now();  // Get a timestamp to use as an event ID
        const newEventRef = ref(database, 'events/' + timestamp);

        set(newEventRef, eventData).then(() => {
            console.log('Event created successfully!');
            // Redirect to the event details page with the event ID in the query string
            //window.location.href = `eventDetails.html?eventId=${timestamp}`;

            window.location.href = `index.html?`;

        }).catch(error => {
            console.error('Error creating event:', error);
        });
    });

    event.appendChild(eventName);
    event.appendChild(location);
    event.appendChild(date);
    event.appendChild(time);
    event.appendChild(food);
    event.appendChild(description);
    event.appendChild(collaborated);
    event.appendChild(rsvpFormLink);
    event.appendChild(rsvpFormInput);
    event.appendChild(imageUploadButton);
    event.appendChild(imageUploadLabel);
    event.appendChild(publish);

    eventBox.appendChild(heading);
    eventBox.appendChild(event);
    eventBoxContainer.appendChild(eventBox);

    return eventBoxContainer;
}

document.addEventListener('DOMContentLoaded', async () => {
    const completeEventPage = await createCompleteEventPage();
    document.getElementById('create-Event').appendChild(completeEventPage);
});

