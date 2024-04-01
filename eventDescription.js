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

function eventDetailsBox(){
  const eventDetailsBoxContainer = document.createElement('div');
  eventDetailsBoxContainer.classList.add('event-details-box-container');

  const eventDetailsBox = document.createElement('div');
  eventDetailsBox.classList.add('event-details-box');

  //Heading 
  const heading = document.createElement('clubMeeting');
  heading.textContent = 'Club Event Heading';
  heading.classList.add('heading'); // Add class for styling

  //Logo - will depend on the club- add later 

   // Inner Box
   const innerBox = document.createElement('div');
   innerBox.classList.add('details'); // Add class for styling

     // Lines for Location, Date, Time, Food, and Description
  const locationLine = document.createElement('div');
  locationLine.textContent = 'Location: ';
  locationLine.classList.add('text-line'); // Add class for styling

  const dateLine = document.createElement('div');
  dateLine.textContent = 'Date: ';
  dateLine.classList.add('text-line'); // Add class for styling

  const timeLine = document.createElement('div');
  timeLine.textContent = 'Time: ';
  timeLine.classList.add('text-line');

  const foodLine = document.createElement('div');
  foodLine.textContent = 'Food: ';
  foodLine.classList.add('text-line');

  const descriptionLine = document.createElement('div');
  descriptionLine.textContent = 'Description: ';
  descriptionLine.classList.add('text-line');

   // Button for Event Feedback
   const feedbackButton = document.createElement('button');
   feedbackButton.textContent = 'Event Feedback';
   feedbackButton.classList.add('feedback-button'); // Add class for styling
   document.addEventListener('DOMContentLoaded', function() {
    document.body.appendChild(feedbackButton);
    feedbackButton.addEventListener('click', function() {window.location.href = 'feedback.html?event=event1';});
   });

  // Appending lines to the inner box
  innerBox.appendChild(locationLine);
  innerBox.appendChild(dateLine);
  innerBox.appendChild(timeLine);
  innerBox.appendChild(foodLine);
  innerBox.appendChild(descriptionLine);

  eventDetailsBox.appendChild(heading)
  eventDetailsBox.appendChild(innerBox);
  eventDetailsBox.appendChild(feedbackButton);
  eventDetailsBoxContainer.appendChild(eventDetailsBox)

  return eventDetailsBoxContainer;

}


function createEventDescriptionPage() {
  const createEventDetails = document.createElement('div');
  createEventDetails.classList.add('create-Event');

  const header = document.createElement('header');
  header.classList.add('header');

  const logo = document.createElement('img');
  logo.classList.add('logo');
  logo.src = 'images/LeftoverLoungeLogo.png'; 
  logo.alt = 'Logo'; // Add an alt attribute for accessibility

  document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the logo
    document.querySelector('.logo').addEventListener('click', function() {
        window.location.href = 'clubMember.html';
    });
});

  const tabs = createTabs();
  const notifications = createNotifications();

  header.appendChild(logo);
  header.appendChild(tabs);
  header.appendChild(notifications);

  const mainContent = document.createElement('main');
  mainContent.classList.add('main-content');

  const eventDBox = eventDetailsBox();

  mainContent.appendChild(eventDBox);

  createEventDetails.appendChild(header);
  createEventDetails.appendChild(mainContent);

  return createEventDetails;
}

module.exports = createEventDescriptionPage;
