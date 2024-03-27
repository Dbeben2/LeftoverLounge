
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

    const text1 = document.createElement('p');
    text1.textContent = 'Event Name';
    text1.classList.add('text1'); // Add class for styling

    const text2 = document.createElement('p');
    text2.textContent = 'Update Reason';
    text2.classList.add('text2'); // Add class for styling
  
    const sendUpdate = document.createElement('button');
    sendUpdate.textContent = 'Send Update';
    sendUpdate.classList.add('send-update'); // Add class for styling
        
    const event = document.createElement('div');
    event.classList.add('event'); // Add class for styling

    const box1 = document.createElement('div');
    box1.classList.add('box1');

    const check1 = document.createElement('button');
    check1.classList.add('check1');

    const updatetext1 = document.createElement('p');
    updatetext1.textContent = 'Update students event is starting in ';
    updatetext1.classList.add('update-text1'); // Add class for styling

    var time = document.createElement('input');
    time.type = "text";
    time.classList.add('time'); // Add class for styling
  
    box1.appendChild(check1);
    box1.appendChild(updatetext1);
    box1.appendChild(time);

    const box2 = document.createElement('div');
    box2.classList.add('box2');

    const check2 = document.createElement('button');
    check1.classList.add('check2');

    const updatetext2 = document.createElement('p');
    updatetext2.textContent = 'Update students fresh food is left, they can come andd pick up.';
    updatetext2.classList.add('update-text2'); // Add class for styling

    box1.appendChild(check2);
    box1.appendChild(updatetext2);

    event.appendChild(box1);
    event.appendChild(box2);

    eventBox.appendChild(text1);
    eventBox.appendChild(text2);
    eventBox.appendChild(event);
    eventBox.appendChild(sendUpdate);

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
  