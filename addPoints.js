// Import Firebase modules
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getDatabase, ref, get, update } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBaabbq4ffoxWd8NGW6JQ8MUxd1cLRWyIA",
    authDomain: "leftoverlounge.firebaseapp.com",
    databaseURL: "https://leftoverlounge-default-rtdb.firebaseio.com",
    projectId: "leftoverlounge",
    storageBucket: "leftoverlounge.appspot.com",
    messagingSenderId: "9645054242",
    appId: "1:9645054242:web:c0bc8499ec54c6f1086d7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function createTab(tabName) {
    const tab = document.createElement('button');
    tab.classList.add('tab');
    tab.textContent = tabName;
    return tab;
}

function createNotifications() {
    const notifications = document.createElement('div');
    notifications.classList.add('notifications');

    const notify = document.createElement('img');
    notify.src = 'Images/notify.png';
    notify.alt = 'Notifications';
    notify.classList.add('notify');

    const clubName = document.createElement('img');
    clubName.src = 'Images/acmLogo.png';
    clubName.alt = 'Club Logo';
    clubName.classList.add('clubLogo');

    notifications.appendChild(notify);
    notifications.appendChild(clubName);

    return notifications;
}

function updateSendingBox() {
    const eventBoxContainer = document.createElement('div');
    eventBoxContainer.classList.add('event-box-container');
    const eventBox = document.createElement('div');
    eventBox.classList.add('event-box');

    const text1 = document.createElement('p');
    text1.textContent = 'Add Points for users.';
    text1.classList.add('text1');
    eventBox.appendChild(text1);

    const dropdown = document.createElement('select');
    dropdown.classList.add('dropdown');
    const placeholderOption = document.createElement('option');
    placeholderOption.textContent = 'Choose a user';
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    dropdown.appendChild(placeholderOption);

    // Fetch user names from Firebase database to populate dropdown
    const usersRef = ref(database, 'Student');
    get(usersRef).then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const userId = childSnapshot.key;
            const userName = childSnapshot.child('Name').val();
            const option = document.createElement('option');
            option.textContent = userName;
            option.value = userId;
            dropdown.appendChild(option);
        });
    }).catch((error) => {
        console.error("Error fetching user data:", error);
    });

    const pointsInput = document.createElement('input');
    pointsInput.type = 'text';
    pointsInput.placeholder = 'Enter points';
    pointsInput.classList.add('points-input');

    const bonusPointsInput = document.createElement('input');
    bonusPointsInput.type = 'text';
    bonusPointsInput.placeholder = 'Enter bonus points';
    bonusPointsInput.classList.add('bonus-points-input');

    const sendUpdate = document.createElement('button');
    sendUpdate.textContent = 'Send Update';
    sendUpdate.classList.add('send-update');
    sendUpdate.addEventListener('click', function() {
        const userId = dropdown.value;
        const addedPoints = parseInt(pointsInput.value, 10) || 0;
        const addedBonusPoints = parseInt(bonusPointsInput.value, 10) || 0;

        const userRef = ref(database, 'Student/' + userId);
        get(userRef).then((snapshot) => {
            if (snapshot.exists()) {
                const userData = snapshot.val();
                const currentPoints = userData.Points || 0;
                const currentBonusPoints = userData.BonusPoints || 0;

                const newPointsTotal = currentPoints + addedPoints;
                const newBonusPointsTotal = currentBonusPoints + addedBonusPoints;

                update(userRef, {
                    Points: newPointsTotal,
                    BonusPoints: newBonusPointsTotal
                }).then(() => {
                    console.log('Points and bonus points updated successfully');
                    alert("Updated points to " + newPointsTotal + " and bonus points to " + newBonusPointsTotal);
                }).catch((error) => {
                    console.error('Error updating points:', error);
                    alert("Failed to update points: " + error.message);
                });
            } else {
                console.log('No user data available for:', userId);
                alert('No data available for selected user.');
            }
        }).catch((error) => {
            console.error('Failed to fetch user data:', error);
            alert("Failed to fetch user data: " + error.message);
        });
    });

    const box1 = document.createElement('div');
    box1.classList.add('box1');
    box1.appendChild(dropdown);
    box1.appendChild(pointsInput);
    box1.appendChild(bonusPointsInput);

    eventBox.appendChild(box1);
    eventBox.appendChild(sendUpdate);
    eventBoxContainer.appendChild(eventBox);
    return eventBoxContainer;
}

export function createUpdateSending() {
    const updateSending = document.createElement('div');
    updateSending.classList.add('create-Event');

    const header = document.createElement('header');
    header.classList.add('header');

    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.src = 'Images/LeftoverLoungeLogo.png';
    logo.alt = 'Logo';
    logo.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

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

function createTabs() {
    const tabs = document.createElement('div');
    tabs.classList.add('tabs');
    const tabNames = ['Create Events', 'Add Points'];
    tabNames.forEach(tabName => {
        const tab = createTab(tabName);
        tabs.appendChild(tab);
        if (tabName === 'Create Events') {
            tab.addEventListener('click', () => {
                window.location.href = 'CE.html';
            });
        }
        if (tabName === 'Add Points') {
            tab.addEventListener('click', () => {
                window.location.href = 'AP.html';
            });
        }
    });
    return tabs;
}