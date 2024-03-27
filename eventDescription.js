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
    const heading = document.createElement('h2');
    heading.textContent = 'Meeting: SIG Game Lead';
    heading.classList.add('heading'); // Add class for styling

    eventDetailsBox.appendChild(heading)
    eventDetailsBoxContainer.appendChild(eventDetailsBox)

    return eventDetailsBoxContainer;

  }


  function createEventDescription() {
    const createEventDetails = document.createElement('div');
    createEventDetails.classList.add('create-Event');
  
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
  
    const eventDBox = eventDetailsBox();
  
    mainContent.appendChild(eventDBox);
  
    createEventDetails.appendChild(header);
    createEventDetails.appendChild(mainContent);
  
    return createEventDetails;
  }
  
  module.exports = createEventDescription;