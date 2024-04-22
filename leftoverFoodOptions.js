
function createTab(tabName, link) {
    const tab = document.createElement('button'); // Create button element
    tab.classList.add('tab');
    tab.textContent = tabName;
    tab.addEventListener('click', function() {
      window.location.href = link;
    });
    return tab;
  }
  
  function createTabs() {
    const tabs = document.createElement('div');
    tabs.classList.add('tabs');
  
    const tabDetails = [
      { name: 'Clubs at UIC', link: 'clubs.html' },
      { name: 'Your Points', link: 'yourPoints.html' },
      { name: 'Event Search', link: 'ED.html' }
    ];
  
    tabDetails.forEach(tabDetail => {
      const tab = createTab(tabDetail.name, tabDetail.link);
      tabs.appendChild(tab);
    });
  
    return tabs;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('someContainerId'); 
    const tabs = createTabs();
    container.appendChild(tabs);
  });
  
  
function createNotifications() {
    const notifications = document.createElement('div');
    notifications.classList.add('notifications');
  
    const notify = document.createElement('img');
    notify.src = 'images/notify.png';
    notify.alt = 'Notifications';
    notify.classList.add('notify'); 

    const userProfile = document.createElement('img');
    userProfile.src = 'images/agent1.png';
    userProfile.alt = 'Club Logo'
    userProfile.classList.add('userProfile'); 
  
    notifications.appendChild(notify);
    notifications.appendChild(userProfile);
    
  
    return notifications;
  }

function createBox(imageSource, textContent) {
    const box = document.createElement('div'); 

    const image = document.createElement('img');
    image.src = imageSource;
    image.alt = 'Image'; 
    image.width = 60; 
    image.height = 60; 

    const text = document.createElement('p');
    text.textContent = textContent;

    box.appendChild(image);
    box.appendChild(text);

    return box; 
}

function createScrollableBox() {

    const scrollableBox = document.createElement('div');
    scrollableBox.classList.add('scrollable-box');

    const item1 = createBox('Images/taco.png', 'Taco');
    item1.classList.add('item1');
    const box1 = document.createElement('div');
    box1.classList.add('box1');
    box1.appendChild(item1);
    const img1 = document.createElement('img');
    img1.src = 'Images/halal.png';
    img1.classList.add('img1');
    box1.appendChild(img1);
    const img2 = document.createElement('img');
    img2.src = 'Images/leaf.png';
    img2.classList.add('img2');
    box1.appendChild(img2);

    const item2 = createBox('Images/chicken-breast.png', 'Grilled Chicken');
    item2.classList.add('item1');

    const item3 = createBox('Images/churros.png', 'Churros');
    item3.classList.add('item1');

    const box3 = document.createElement('div');
    box3.classList.add('box3');
    box3.appendChild(item3);
    const img3 = document.createElement('img');
    img3.src = 'Images/vegan.png';
    img3.classList.add('img3');
    box3.appendChild(img3);

    const item4 = createBox('Images/lemonade.png', 'Lemonade');
    item4.classList.add('item1');
    const item5 = createBox('Images/mac-and-cheese.png', 'Mac and Cheese');
    item5.classList.add('item1');
    const item6 = createBox('Images/orange-juice.png', 'Orange Juice');
    item6.classList.add('item1');
    const item7 = createBox('Images/pancakes.png', 'Pancake');
    item7.classList.add('item1');

    scrollableBox.appendChild(box1);
    scrollableBox.appendChild(item2);
    scrollableBox.appendChild(box3);
    scrollableBox.appendChild(item4);
    scrollableBox.appendChild(item5);
    scrollableBox.appendChild(item6);
    scrollableBox.appendChild(item7);

    return scrollableBox;
}
  
function updateSendingBox() {
    const eventBoxContainer = document.createElement('div');
    eventBoxContainer.classList.add('event-box-container');
  
    const eventBox = document.createElement('div');
    eventBox.classList.add('event-box');

    const box = document.createElement('div');
    box.classList.add('box');

    const eventNameText = document.createElement('p');
    eventNameText.textContent = 'Meeting: SIG Game Lead';
    eventNameText.classList.add('event-name-text'); 

    const clubLogo = document.createElement('img');
    clubLogo.src = 'Images/acmLogo.png';
    clubLogo.classList.add('club-logo');

    const foodDrinkOptionsbox = document.createElement('div');
    foodDrinkOptionsbox.classList.add('food-drinks-options');

    const foodDrinkOptionsText = document.createElement('p');
    foodDrinkOptionsText.textContent = "Food/Drinks Options";
    foodDrinkOptionsText.classList.add('food-drinks-options-text');

    const scrollableBox = createScrollableBox();
    
    foodDrinkOptionsbox.appendChild(foodDrinkOptionsText);
    foodDrinkOptionsbox.appendChild(scrollableBox);

    box.appendChild(clubLogo);
    box.appendChild(eventNameText);

    eventBox.appendChild(box);
    eventBox.appendChild(foodDrinkOptionsbox);

    eventBoxContainer.appendChild(eventBox);
  
    return eventBoxContainer;
}
  
function createLeftoverFoodOptions() {
    const updateSending = document.createElement('div');
    updateSending.classList.add('create-Event');
  
    const header = document.createElement('header');
    header.classList.add('header');
  
    const logo = document.createElement('img');
    logo.src = 'Images/LeftoverLoungeLogo.png'; 
    logo.alt = 'Logo'; 
    logo.classList.add('logo');

    logo.addEventListener('click', function() {
      window.location.href = 'clubMember.html'; 
    });
  
    const tabs = createTabs();
    const notifications = createNotifications();
    const userProfileText = document.createElement('span');
    userProfileText.textContent = 'Justin';
    userProfileText.classList.add('user-profile-text'); 

    header.appendChild(logo);
    header.appendChild(tabs);
    header.appendChild(notifications);
    header.appendChild(userProfileText);
  
    const mainContent = document.createElement('main');
    mainContent.classList.add('main-content');
  
    const updateBox = updateSendingBox();
  
    mainContent.appendChild(updateBox);
  
    updateSending.appendChild(header);
    updateSending.appendChild(mainContent);
  
    return updateSending;
}
  
module.exports = createLeftoverFoodOptions;
  