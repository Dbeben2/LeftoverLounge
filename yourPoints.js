import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getDatabase, ref, get } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js';

const firebaseConfig = {
    apiKey: "AIzaSyBaabbq4ffoxWd8NGW6JQ8MUxd1cLRWyIA",
    authDomain: "leftoverlounge.firebaseapp.com",
    databaseURL: "https://leftoverlounge-default-rtdb.firebaseio.com",
    projectId: "leftoverlounge",
    storageBucket: "leftoverlounge.appspot.com",
    messagingSenderId: "9645054242",
    appId: "1:9645054242:web:c0bc8499ec54c6f1086d7b"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function createTab(tabName, link) {
  const tab = document.createElement('button'); // Create button element
  tab.classList.add('tab');
  tab.textContent = tabName;
  tab.addEventListener('click', () => {
    window.location.href = link;
  });
  return tab;
}

function createTabs() {
  const tabs = document.createElement('div');
  tabs.classList.add('tabs');

  const tabDetails = [
    { name: 'Clubs at UIC', link: 'clubs.html' },
    { name: 'Your Points', link: 'yourPoints.html' }
  ];
  
  tabDetails.forEach(tabDetail => {
    const tab = createTab(tabDetail.name, tabDetail.link);
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
  notify.classList.add('notify');

  const userProfile = document.createElement('img');
  userProfile.src = 'images/agent1.png';
  userProfile.alt = 'User Profile';
  userProfile.classList.add('userProfile');

  notifications.appendChild(notify);
  notifications.appendChild(userProfile);

  return notifications;
}

function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const logo = document.createElement('img');
  logo.src = 'images/LeftoverLoungeLogo.png';
  logo.alt = 'Logo';
  logo.classList.add('logo');
  logo.onclick = () => window.location.href = 'clubMember.html';

  const tabs = createTabs();
  const notifications = createNotifications();

  header.appendChild(logo);
  header.appendChild(tabs);
  header.appendChild(notifications);

  return header;
}

export function createPointDetailsPage() {
    const container = document.createElement('div');
    container.className = 'container';
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter User ID';
    const button = document.createElement('button');
    button.textContent = 'Get Details';
    const userInfo = document.createElement('div');
    userInfo.id = 'userInfo';

    button.addEventListener('click', () => {
        const userId = input.value.trim();
        const userRef = ref(database, 'Student/' + userId);

        get(userRef).then((snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                userInfo.innerHTML = `<h2>User Details</h2>
                                      <p><strong>Name:</strong> ${data.Name}</p>
                                      <p><strong>Points:</strong> ${data.Points}</p>
                                      <p><strong>Rank:</strong> ${data.Rank}</p>
                                      <p><strong>Bonus Points:</strong> ${data.BonusPoints}</p>
                                      <p><strong>Last Week's Points:</strong> ${data.Last}</p>`;
            } else {
                userInfo.innerHTML = `<p>No user data available for ID: ${userId}</p>`;
            }
        }).catch(error => {
            console.error('Error fetching user data:', error);
            userInfo.innerHTML = `<p>Error fetching user data.</p>`;
        });
    });

    container.appendChild(input);
    container.appendChild(button);
    container.appendChild(userInfo);
    return container;
}

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const header = createHeader();
    body.insertBefore(header, body.firstChild);

    const pointDetailsContainer = document.getElementById('pointDetails');
    const detailsPage = createPointDetailsPage();
    pointDetailsContainer.appendChild(detailsPage);
});