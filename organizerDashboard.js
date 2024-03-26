
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

  const clubName = document.createElement('img');
  clubName.src = 'images/acmLogo.png';
  clubName.alt = 'Club Logo'
  clubName.classList.add('clubLogo'); // Add a class to the image for styling

  notifications.appendChild(notify);
  notifications.appendChild(clubName);

  return notifications;
}


function createEventImagesBox() {
  const eventImagesBox = document.createElement('div');
  eventImagesBox.classList.add('event-images-box');

  const eventImageSrcs = ['event-image1.png', 'event-image2.png', 'event-image3.png'];
  eventImageSrcs.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Event Image';
    eventImagesBox.appendChild(img);
  });

  return eventImagesBox;
}

function createEventManagementBox() {
  // Create the event management box container
  const eventManagementBoxContainer = document.createElement('div');
  eventManagementBoxContainer.classList.add('event-management-box-container');

  // Create the event management box
  const eventManagementBox = document.createElement('div');
  eventManagementBox.classList.add('event-management-box');

  // Create the heading for the event management box
  const heading = document.createElement('h2');
  heading.textContent = 'Event Management';
  heading.classList.add('event-heading'); // Add class for styling

  // Create the event inside the event management box
  const event1 = document.createElement('div');
  event1.classList.add('event'); // Add class for styling

  // Create the event name for ACM Meeting: Meet & Greet 12PM 4/26
  const eventName1 = document.createElement('div');
  eventName1.textContent = 'ACM Meeting: Meet & Greet 12PM 4/26';

  // Create the "Attending" button for ACM Meeting: Meet & Greet 12PM 4/26
  const attendingButton1 = document.createElement('button');
  attendingButton1.textContent = 'Attending';
  attendingButton1.classList.add('attending-button'); // Add class for styling

  // Create the "Send Update" button for ACM Meeting: Meet & Greet 12PM 4/26
  const sendUpdateButton1 = document.createElement('button');
  sendUpdateButton1.textContent = 'Send Update';
  sendUpdateButton1.classList.add('send-update-button'); // Add class for styling

  // Create the "edit event" button for ACM Meetings: SIG Game Lead 3PM 4/29
  const editEventButton1 = document.createElement('button');
  editEventButton1.textContent = 'Edit Event';
  editEventButton1.classList.add('edit-event-button'); // Add class for styling

  // Create the icon for "edit event" buttons
  const editEventIcon = document.createElement('img');
  editEventIcon.src = 'images/edit.png'; // Add the path to your image
  editEventIcon.alt = 'Edit Event Icon'; // Add alt text for accessibility
  editEventIcon.classList.add('edit-icon'); // Add class for styling

  // Append the icon to the "Send Update" button
  editEventButton1.prepend(editEventIcon);

  // Create the icon for "Send Update" buttons
  const sendUpdateButtonIcon = document.createElement('img');
  sendUpdateButtonIcon.src = 'images/send-update-icon.png'; // Add the path to your image
  sendUpdateButtonIcon.alt = 'Send Update Icon'; // Add alt text for accessibility
  sendUpdateButtonIcon.classList.add('send-update-icon'); // Add class for styling

  // Append the icon to the "Send Update" button
  sendUpdateButton1.prepend(sendUpdateButtonIcon);

  // Clone the icon element for the second "Send Update" button
  const sendUpdateButtonIconClone = sendUpdateButtonIcon.cloneNode(true);

  // Clone the icon element for the second "edit event" button
  const editEventButtonIconClone = editEventIcon.cloneNode(true);

  // Create the "Send Update" button for ACM Meetings: SIG Game Lead 3PM 4/29
  const sendUpdateButton2 = document.createElement('button');
  sendUpdateButton2.textContent = 'Send Update';
  sendUpdateButton2.classList.add('send-update-button'); // Add class for styling
  sendUpdateButton2.prepend(sendUpdateButtonIconClone); // Append the cloned icon to the second button

  // Create the "edit event" button for ACM Meetings: SIG Game Lead 3PM 4/29
  const editEventButton2 = document.createElement('button');
  editEventButton2.textContent = 'Edit Event';
  editEventButton2.classList.add('edit-event-button'); // Add class for styling
  editEventButton2.prepend(editEventButtonIconClone);

  // Create the event name for ACM Meetings: SIG Game Lead 3PM 4/29
  const eventName2 = document.createElement('div');
  eventName2.textContent = 'ACM Meetings: SIG Game Lead 3PM 4/29';

  // Create the "Attending" button for ACM Meetings: SIG Game Lead 3PM 4/29
  const attendingButton2 = document.createElement('button');
  attendingButton2.textContent = 'Attending';
  attendingButton2.classList.add('attending-button'); // Add class for styling

  // Append the event elements to the event management box
  event1.appendChild(eventName1);
  event1.appendChild(attendingButton1);
  event1.appendChild(sendUpdateButton1);
  event1.appendChild(editEventButton1);

  // Append the event elements for the second event to the event management box
  const event2 = document.createElement('div');
  event2.classList.add('event'); // Add class for styling
  event2.appendChild(eventName2);
  event2.appendChild(attendingButton2);
  event2.appendChild(sendUpdateButton2);
  event2.appendChild(editEventButton2);

  // Append the heading and events to the event management box
  eventManagementBox.appendChild(heading);
  eventManagementBox.appendChild(event1);
  eventManagementBox.appendChild(event2);

  // Append the event management box to the container
  eventManagementBoxContainer.appendChild(eventManagementBox);

  // Return the container
  return eventManagementBoxContainer;
}



function createFeedbackAnalyticsBox() {
  const feedbackAnalyticsBox = document.createElement('div');
  feedbackAnalyticsBox.classList.add('feedback-analytics-box');

  const heading = document.createElement('h2');
  heading.textContent = 'Feedback and Analytics';

  // Include feedback and analytics content here

  feedbackAnalyticsBox.appendChild(heading);

  return feedbackAnalyticsBox;
}

function createOrganizerDashboard() {
  const organizerDashboard = document.createElement('div');
  organizerDashboard.classList.add('organizer-dashboard');

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

  const eventManagementBox = createEventManagementBox();
  const feedbackAnalyticsBox = createFeedbackAnalyticsBox();

  mainContent.appendChild(eventManagementBox);
  mainContent.appendChild(feedbackAnalyticsBox);

  organizerDashboard.appendChild(header);
  organizerDashboard.appendChild(mainContent);

  return organizerDashboard;
}

module.exports = createOrganizerDashboard;
