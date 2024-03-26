
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
  
    const event1 = document.createElement('div');
    event1.classList.add('event'); // Add class for styling

    // Create the event inside the event management box
    var eventName = document.createElement('input');
    eventName.type = "text";
    eventName.classList.add('event'); // Add class for styling
  
    
    // Append the event elements to the event management box
    event1.appendChild(eventName);  
  
    // Append the heading and events to the event management box
    eventBox.appendChild(heading);
    eventBox.appendChild(event1);
  
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
    // const feedbackAnalyticsBox = createFeedbackAnalyticsBox();
  
    mainContent.appendChild(eventBox);
    // mainContent.appendChild(feedbackAnalyticsBox);
  
    createEvent.appendChild(header);
    createEvent.appendChild(mainContent);
  
    return createEvent;
  }
  
  module.exports = createCreateEvent;
  