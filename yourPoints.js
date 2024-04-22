import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import {    getDatabase, ref, set, get, query, orderByChild, equalTo } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js';

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
    const tab = document.createElement('button'); 
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

async function updateAllStudentRanks() {
    const studentRef = ref(database, 'Student');
    const snapshot = await get(query(studentRef, orderByChild('Points')));
    if (snapshot.exists()) {
        const students = [];
        snapshot.forEach(child => {
            const student = child.val();
            student.id = child.key;
            students.push(student);
        });

        students.sort((a, b) => (b.Points + b.BonusPoints) - (a.Points + a.BonusPoints));

        students.forEach((student, index) => {
            const newRank = index + 1;  
            set(ref(database, `Student/${student.id}/Rank`), newRank);
        });
    }
}


function createPointDetailsPage() {
    const container = document.createElement('div');
    container.className = 'container';

    const leftContainer = document.createElement('div');
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter UIN';
    
    const button = document.createElement('button');
    button.textContent = 'Get Details';

    button.addEventListener('click', async () => {
        const uinValue = input.value.trim();
        if (uinValue) {
            await fetchData(uinValue);
        } else {
            userInfo.innerHTML = '<p>Please enter a valid UIN to search.</p>'; 
        }
    });

    const userInfo = document.createElement('div');
    userInfo.id = 'userInfo';
    leftContainer.appendChild(input);
    leftContainer.appendChild(button);
    leftContainer.appendChild(userInfo);

    const middleContainer = document.createElement('div');
    const badgeProgress = document.createElement('div');
    badgeProgress.id = 'badgeProgress';
    middleContainer.appendChild(badgeProgress);

    const rightContainer = document.createElement('div');
    const earnedBadges = document.createElement('div');
    earnedBadges.id = 'earnedBadges';
    rightContainer.appendChild(earnedBadges);

    container.appendChild(leftContainer);
    container.appendChild(middleContainer);
    container.appendChild(rightContainer);

    return container;
}

function displayUserInfo(data) {
    const userInfo = document.getElementById('userInfo'); 
    userInfo.innerHTML = `
        <h3>${data.Name}</h3>
        <p>Name: ${data.Name}</p>
        <p>Points: ${data.Points}</p>
        <p>Bonus Points: ${data.BonusPoints}</p>
        <p>Rank: ${data.Rank}</p>
    `;
}

function updateBadgeProgress(data) {
    const badgeProgress = document.getElementById('badgeProgress'); 
    const points = data.Points + data.BonusPoints;
    const badges = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Diamond Elite'];
    let progressHTML = '<h2>Badge Progress</h2>';
    const thresholdPoints = [500, 1000, 1500, 2500, 3500, 5000]; 

    badges.forEach((badge, index) => {
        const progress = Math.min((points / thresholdPoints[index]) * 100, 100);
        const pointsNeeded = thresholdPoints[index] - points;
        progressHTML += `<p><strong>${badge}:</strong> ${progress.toFixed(2)}%${pointsNeeded > 0 ? ` (${pointsNeeded} points needed)` : ''}</p>`;
    });
    badgeProgress.innerHTML = progressHTML;
}


function generateEarnedBadgesHTML(data) {
    const earnedBadges = data.Badges;
    let earnedBadgesHTML = '<h2>Earned Badges</h2>';
    if (earnedBadges && earnedBadges.length > 0) {
        earnedBadgesHTML += '<ul>';
        earnedBadges.forEach(badge => {
            earnedBadgesHTML += `<li>${badge}</li>`;
        });
        earnedBadgesHTML += '</ul>';
    } else {
        earnedBadgesHTML += '<p>No badges earned yet.</p>';
    }
    return earnedBadgesHTML;
}

async function fetchData(uinValue) {
    await updateAllStudentRanks(); 
    const userRef = ref(database, 'Student');
    const queryRef = query(userRef, orderByChild('UIN'), equalTo(uinValue));

    return get(queryRef).then((snapshot) => {
        if (snapshot.exists()) {
            const data = Object.values(snapshot.val())[0]; 
            displayUserInfo(data);
            updateBadgeProgress(data);
            generateEarnedBadgesHTML(data);
            return true;
        } else {
            const userInfo = document.getElementById('userInfo');
            userInfo.innerHTML = '<p>No user data available for this UIN.</p>';
            return false;
        }
    }).catch(error => {
        console.error('Error fetching user data:', error);
        const userInfo = document.getElementById('userInfo');
        userInfo.innerHTML = '<p>Error fetching user data.</p>';
    });
}

const badges = [
    { name: "Bronze", points: 1500, imagePath: "images/Bronze.png" },
    { name: "Silver", points: 2500, imagePath: "images/Silver.png" },
    { name: "Gold", points: 3500, imagePath: "images/Gold.png" },
    { name: "Platinum", points: 5000, imagePath: "images/Platinum.png" },
    { name: "Diamond", points: 7000, imagePath: "images/Diamond.png" },
    { name: "Diamond Elite", points: 10000, imagePath: "images/Diamond_Elite.png" }
];

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('someContainerId'); 
    const tabs = createTabs();
    container.appendChild(tabs);
  });


document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const header = createHeader();
    body.insertBefore(header, body.firstChild);

    const pointDetailsContainer = document.getElementById('pointDetails'); 
    const detailsPage = createPointDetailsPage();
    pointDetailsContainer.appendChild(detailsPage);
});