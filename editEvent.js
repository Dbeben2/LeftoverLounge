
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
  
  
  function createEventBox(eventName, eventDate, eventTime, eventLocation, eventFood, eventDescription) {
    // Create the event management box container
    const eventBoxContainer = document.createElement('div');
    eventBoxContainer.classList.add('event-box-container');
  
    // Create the event management box
    const eventBox = document.createElement('div');
    eventBox.classList.add('event-box');
  
    // Create the heading for the event management box
    const heading = document.createElement('h2');
    heading.textContent = 'Edit Event Details'
    heading.classList.add('event-heading'); // Add class for styling
  
    const event = document.createElement('div');
    event.classList.add('event'); // Add class for styling
  
    var location = document.createElement('input');
    location.type = "text";
    location.placeholder = eventLocation ? eventLocation : "Location"; // Use eventLocation if not null, otherwise use "Location"
    location.classList.add('event-name'); // Add class for styling

      
    var date = document.createElement('input');
    date.type = "text";
    date.placeholder = eventDate ? eventDate : "Enter date (mm/dd/yyyy)";
    date.classList.add('date'); // Add class for styling
  
    var time = document.createElement('input');
    time.type = "text";
    time.placeholder = eventTime ? eventTime : "Enter time (hour:minute)";
    time.classList.add('time'); // Add class for styling
  
    var food = document.createElement('input');
    food.type = "text";
    food.placeholder = eventFood ? eventFood : "Food: Enter yes or no.";
    food.classList.add('food'); // Add class for styling
  
    var description = document.createElement('input');
    description.type = "text";
    description.placeholder = eventDescription ? eventDescription : "Description";
    description.classList.add('description'); // Add class for styling
  
    const publish = document.createElement('button');
    publish.textContent = 'Publish';
    publish.classList.add('publish'); // Add class for styling
  
    publish.addEventListener('click', function() {
      window.location.href = 'index.html';
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

  
  function createEditEvent() {
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
      window.location.href = 'index.html'; // Event listener to take you back to the homepage
    });
  
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
  
  module.exports = createEditEvent;
  