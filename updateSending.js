
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
  
  
  function updateSendingBox() {
    // Create the event management box container
    const eventBoxContainer = document.createElement('div');
    eventBoxContainer.classList.add('event-box-container');
  
    // Create the event management box
    const eventBox = document.createElement('div');
    eventBox.classList.add('event-box');
  
    const event = document.createElement('div');
    event.classList.add('event'); // Add class for styling

    const text1 = document.createElement('p');
    text1.textContent = 'Event Name';
    text1.classList.add('text1'); // Add class for styling

    const text2 = document.createElement('p');
    text2.textContent = 'Update Reason';
    text2.classList.add('text2'); // Add class for styling
  
    // var eventName = document.createElement('input');
    // eventName.type = "text";
    // eventName.placeholder = "Enter event name";
    // eventName.classList.add('event-name'); // Add class for styling
  
    
  
    // Append the event elements to the event management box
    event.appendChild(text1);
    event.appendChild(text2);
  
    // Append the heading and events to the event management box
    eventBox.appendChild(event);
  
    // Append the event management box to the container
    eventBoxContainer.appendChild(eventBox);
  
    // Return the container
    return eventBoxContainer;
  }
  
  function createUpdateSending() {
    const updateSending = document.createElement('div');
    updateSending.classList.add('create-Event');
  
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
  
    const updateBox = updateSendingBox();
  
    mainContent.appendChild(updateBox);
  
    updateSending.appendChild(header);
    updateSending.appendChild(mainContent);
  
    return updateSending;
  }
  
  module.exports = createUpdateSending;
  