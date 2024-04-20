// Import Firebase modules
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js';

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
    text1.textContent = 'Enter A New User';
    text1.classList.add('text1');
    eventBox.appendChild(text1);

    const UINInput = document.createElement('input');
    UINInput.type = 'text';
    UINInput.placeholder = 'Enter UIN';
    UINInput.classList.add('UIN');

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Enter Name';
    nameInput.classList.add('name');

    const sendUpdate = document.createElement('button');
    sendUpdate.textContent = 'Add User';
    sendUpdate.classList.add('send-update');
    sendUpdate.addEventListener('click', function() {
        const name = nameInput.value.trim();
        const UIN = UINInput.value.trim(); // Get the UIN entered by the user
    
        if (name !== '') {
            // Push the new student data to the Firebase database under "Student" with default values
            push(ref(database, 'Student'), {
                Name: name,
                UIN: UIN,
                Points: 0,
                Rank: 0,
                Last: 0
            }).then(() => {
                console.log('New student added successfully');
                alert("User added successfully!"); // Display popup message
                // Redirect to index.html after adding the student
                window.location.href = 'index.html';
            }).catch((error) => {
                console.error('Error adding new student:', error);
                alert("Failed to add new student: " + error.message);
            });
        } else {
            alert("Please enter a Name");
        }
    });
    

    const box1 = document.createElement('div');
    box1.classList.add('box1');
    box1.appendChild(UINInput);
    box1.appendChild(nameInput);

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
    const tabNames = ['Create Events', 'Add Points', 'Add Student'];
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
