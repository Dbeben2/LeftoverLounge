import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import {  getDatabase, ref, get, query, orderByChild, set } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js';

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
    const container = document.getElementById('someContainerId'); // Ensure this container exists in your HTML
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
        // Sort students by total points
        students.sort((a, b) => (b.Points + b.BonusPoints) - (a.Points + a.BonusPoints));
        // Update rank
        students.forEach((student, index) => {
            const newRank = index + 1;  // Rank is index + 1 because array is zero-indexed
            set(ref(database, `Student/${student.id}/Rank`), newRank);
        });
    }
}


function createPointDetailsPage() {
    const container = document.createElement('div');
    container.className = 'container';

    // Create input and button for getting user details
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter User ID';
    const button = document.createElement('button');
    button.textContent = 'Get Details';

    // Create container for user details
    const userInfo = document.createElement('div');
    userInfo.id = 'userInfo';

    // Create container for badge progress
    const badgeProgress = document.createElement('div');
    badgeProgress.id = 'badgeProgress';

    // Create container for earned badges
    const earnedBadges = document.createElement('div');
    earnedBadges.id = 'earnedBadges';

    // Event listener for button click to fetch user details
    button.addEventListener('click', async () => {
        const userId = input.value.trim();
        await updateAllStudentRanks();  // Update ranks before fetching user info
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

                // Calculate badge progress
                const points = data.Points + data.BonusPoints;
                const badges = ['Cooper', 'Brass', 'Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Diamond Elite'];
                let progressHTML = '<h2>Badge Progress</h2>';
                for (let i = 0; i < badges.length; i++) {
                    const thresholdPoints = [500, 1000, 1500, 2500, 3500, 5000, 7000, 10000]; // Threshold points for each badge
                    const progress = Math.min((points / thresholdPoints[i]) * 100, 100); // Calculate progress percentage
                    const pointsNeeded = thresholdPoints[i] - points; // Calculate points needed for next badge
                    if (pointsNeeded > 0) {
                        progressHTML += `<p><strong>${badges[i]}:</strong> ${progress.toFixed(2)}% (${pointsNeeded} points needed)</p>`;
                    } else {
                        progressHTML += `<p><strong>${badges[i]}:</strong> ${progress.toFixed(2)}%</p>`;
                    }
                }
                badgeProgress.innerHTML = progressHTML;

                // Display earned badges
                const earnedBadgesHTML = generateEarnedBadgesHTML(data);
                earnedBadges.innerHTML = earnedBadgesHTML;
            } else {
                userInfo.innerHTML = `<p>No user data available for ID: ${userId}</p>`;
            }
        }).catch(error => {
            console.error('Error fetching user data:', error);
            userInfo.innerHTML = `<p>Error fetching user data.</p>`;
        });
    });

    // Append input, button, user details, badge progress, and earned badges containers to the main container
    container.appendChild(input);
    container.appendChild(button);
    container.appendChild(userInfo);
    container.appendChild(badgeProgress);
    container.appendChild(earnedBadges);

    return container;
}


function generateEarnedBadgesHTML(data) {
    // Logic to generate HTML for earned badges based on data
    // For example:
    const earnedBadges = data.Badges; // Assuming 'Badges' is an array of earned badge names
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

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const header = createHeader();
    body.insertBefore(header, body.firstChild);

    const pointDetailsContainer = document.getElementById('pointDetails');
    const detailsPage = createPointDetailsPage();
    pointDetailsContainer.appendChild(detailsPage);
});