
function createTab(tabName) {
  const tab = document.createElement('button'); // Create button element
  tab.classList.add('tab');
  tab.textContent = tabName;
  return tab;
}

function createTabs() {
  const tabs = document.createElement('div');
  tabs.classList.add('tabs');

  const tabNames = ['Events Near Me', 'Calendar', 'Clubs at UIC', 'Your Points'];
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
  notify.src = 'images/notify.png';
  notify.alt = 'Notifications';
  notify.classList.add('notify'); // Add a class to the image for styling

  const userProfile = document.createElement('img');
  userProfile.src = 'images/agent1.png';
  userProfile.alt = 'Club Logo'
  userProfile.classList.add('userProfile'); // Add a class to the image for styling

  notifications.appendChild(notify);
  notifications.appendChild(userProfile);
  

  return notifications;
}


function createEventBox(eventName, eventDate, eventTime, eventLocation, eventFood, eventDescription) {
  // Create the event management box container
  const eventBoxContainer = document.createElement('div');
  eventBoxContainer.classList.add('event-box-container');

  // Create the event management box
  const eventBox = document.createElement('div');
  eventBox.classList.add('event-box');

  // Create the heading for the event management box
  const heading = document.createElement('h2');
  heading.textContent = 'Event Details'
  heading.classList.add('event-heading'); // Add class for styling

  const event = document.createElement('div');
  event.classList.add('event'); // Add class for styling

  const location = document.createElement('span');
  location.textContent = 'Location:';
  location.classList.add('Location'); // Add a class for styling

  const date = document.createElement('span');
  date.textContent = 'Date:';
  date.classList.add('date'); // Add a class for styling

  const time = document.createElement('span');
  time.textContent = 'Time:';
  time.classList.add('time'); // Add a class for styling

  const food = document.createElement('span');
  food.textContent = 'Food:';
  food.classList.add('food'); // Add a class for styling

  const description = document.createElement('span');
  description.textContent = 'Description:';
  description.classList.add('description'); // Add a class for styling

  const publish = document.createElement('button');
  publish.textContent = 'Publish';
  publish.classList.add('publish'); // Add class for styling

  publish.addEventListener('click', function() {
    window.location.href = 'clubMember.html';
  });

  // Append the event elements to the event management box
  event.appendChild(location);
  event.appendChild(date);
  event.appendChild(time);
  event.appendChild(food);
  event.appendChild(description);
  event.appendChild(publish);  

  // Append the heading and events to the event management box
  eventBox.appendChild(heading);
  eventBox.appendChild(event);

  // Append the event management box to the container
  eventBoxContainer.appendChild(eventBox);

  // Return the container
  return eventBoxContainer;
}


function createEventDescriptionPage() {
  const createEvent = document.createElement('div');
  createEvent.classList.add('create-Event');

  const header = document.createElement('header');
  header.classList.add('header');

  const logo = document.createElement('img');
  logo.classList.add('logo');
  logo.src = 'images/LeftoverLoungeLogo.png'; 
  logo.alt = 'Logo'; // Add an alt attribute for accessibility

   // Add an event listener to the logo
  logo.addEventListener('click', function() {
    window.location.href = 'clubMember.html'; // Event listener to take you back to the homepage
  });

  const tabs = createTabs();
  const notifications = createNotifications();
  const userProfileText = document.createElement('span');
  userProfileText.textContent = 'Justin';
  userProfileText.classList.add('user-profile-text'); // Add a class for styling

  header.appendChild(logo);
  header.appendChild(tabs);
  header.appendChild(notifications);
  header.appendChild(userProfileText);

  const mainContent = document.createElement('main');
  mainContent.classList.add('main-content');

  const eventBox = createEventBox();

  mainContent.appendChild(eventBox);

  createEvent.appendChild(header);
  createEvent.appendChild(mainContent);

  return createEvent;
}

module.exports = createEventDescriptionPage;
