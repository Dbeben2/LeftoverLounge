
function createTab(tabName) {
  const tab = document.createElement('button'); // Create button element
  tab.classList.add('tab');
  tab.textContent = tabName;
  return tab;
}

function createTabs() {
  const tabs = document.createElement('div');
  tabs.classList.add('tabs');

  const tabNames = ['Menu', 'Create Events', 'Analytics'];
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
  notify.classList.add('notify'); // Add a class to the image for styling

  const clubName = document.createElement('img');
  clubName.src = 'Images/acmLogo.png';
  clubName.alt = 'Club Logo'
  clubName.classList.add('clubLogo'); // Add a class to the image for styling

  notifications.appendChild(notify);
  notifications.appendChild(clubName);

  return notifications;
}


function createEventBox() {
  // Create the event management box container
  const eventBoxContainer = document.createElement('div');
  eventBoxContainer.classList.add('event-box-container');

  // Create the event management box
  const eventBox = document.createElement('div');
  eventBox.classList.add('event-box');

  // Create the heading for the event management box
  const heading = document.createElement('h2');
  heading.textContent = 'Event Details';
  heading.classList.add('event-heading'); // Add class for styling

  const event = document.createElement('div');
  event.classList.add('event'); // Add class for styling

  var eventName = document.createElement('input');
  eventName.type = "text";
  eventName.placeholder = "Enter event name";
  eventName.classList.add('event-name'); // Add class for styling

  var date = document.createElement('input');
  date.type = "text";
  date.placeholder = "Enter date(mm/dd/yyyy)";
  date.classList.add('date'); // Add class for styling

  var time = document.createElement('input');
  time.type = "text";
  time.placeholder = "Enter time(hour:minute)";
  time.classList.add('time'); // Add class for styling

  var description = document.createElement('input');
  description.type = "text";
  description.placeholder = "Description";
  description.classList.add('description'); // Add class for styling

  var collaborated = document.createElement('input');
  collaborated.type = "text";
  collaborated.placeholder = "Enter Club/Organization collaborated with if any.";
  collaborated.classList.add('collaborated'); // Add class for styling


  const imageUploadButton = document.createElement('button');
  imageUploadButton.textContent = 'Image Upload';
  imageUploadButton.classList.add('image-upload-button'); // Add class for styling

  const imageUploadButtonIcon = document.createElement('img');
  imageUploadButtonIcon.src = 'images/file.png'; // Add the path to your image
  imageUploadButtonIcon.alt = 'Image Upload Icon'; // Add alt text for accessibility
  imageUploadButtonIcon.classList.add('image-upload-icon'); // Add class for styling

  imageUploadButton.append(imageUploadButtonIcon);

  const publish = document.createElement('button');
  publish.textContent = 'Publish';
  publish.classList.add('publish'); // Add class for styling

  publish.addEventListener('click', function() {
    window.location.href = 'index.html';
  });

  // Append the event elements to the event management box
  event.appendChild(eventName);
  event.appendChild(date);
  event.appendChild(time);
  event.appendChild(description);
  event.appendChild(collaborated);
  event.appendChild(imageUploadButton);
  event.appendChild(publish);  

  // Append the heading and events to the event management box
  eventBox.appendChild(heading);
  eventBox.appendChild(event);

  // Append the event management box to the container
  eventBoxContainer.appendChild(eventBox);

  // Return the container
  return eventBoxContainer;
}

function createCreateEvent() {
  const createEvent = document.createElement('div');
  createEvent.classList.add('create-Event');

  const header = document.createElement('header');
  header.classList.add('header');

  const logo = document.createElement('img');
  logo.classList.add('logo');
  logo.src = 'images/LeftoverLoungeLogo.png'; // Replace 'logo.png' with the path to your logo image file
  logo.alt = 'Logo'; // Add an alt attribute for accessibility

  const tabs = createTabs();
  const notifications = createNotifications();

  header.appendChild(logo);
  header.appendChild(tabs);
  header.appendChild(notifications);

  const mainContent = document.createElement('main');
  mainContent.classList.add('main-content');

  const eventBox = createEventBox();

  mainContent.appendChild(eventBox);

  createEvent.appendChild(header);
  createEvent.appendChild(mainContent);

  return createEvent;
}

module.exports = createCreateEvent;
