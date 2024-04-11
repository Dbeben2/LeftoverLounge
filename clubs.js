
function createTab(tabName) {
  const tab = document.createElement('button'); // Create button element
  tab.classList.add('tab');
  tab.textContent = tabName;
  return tab;
}

function createTabs() {
  const tabs = document.createElement('div');
  tabs.classList.add('tabs');

  const tabNames = ['Clubs at UIC', 'Your Points'];
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
  

  
  function createFindClub() {
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

  
    //mainContent.appendChild(eventBox);
  
    createEvent.appendChild(header);
    createEvent.appendChild(mainContent);
  
    return createEvent;
  }
  
  module.exports = createFindClub;
  