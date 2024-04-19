// Define the updateState object
let updateState = {};

function createTab(tabName) {
    const tab = document.createElement('button'); // Create button element
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
    notify.classList.add('notify'); // Add a class to the image for styling
  
    const clubName = document.createElement('img');
    clubName.src = 'Images/acmLogo.png';
    clubName.alt = 'Club Logo'
    clubName.classList.add('clubLogo'); // Add a class to the image for styling
  
    notifications.appendChild(notify);
    notifications.appendChild(clubName);
  
    return notifications;
}

function readCSV(csvFilePath) {
    return new Promise((resolve, reject) => {
        fetch(csvFilePath)
            .then(response => response.text())
            .then(csvData => {
                const lines = csvData.split('\n');
                const names = lines.slice(1) // Exclude header line
                    .filter(line => line.trim() !== '') // Exclude empty lines
                    .map(line => line.split(',')[0]); // Extract only the first column (names)
                resolve(names);
            })
            .catch(error => reject(error));
    });
}

function updateCSV(userName, addedPoints, addedBonusPoints) {
    return new Promise((resolve, reject) => {
        fetch('StudentsPoints.csv')
            .then(response => response.text())
            .then(csvData => {
                // Parse CSV data into array of arrays
                const csvRows = csvData.split('\n').map(row => row.split(','));
                
                // Find the row corresponding to the user
                const userRow = csvRows.find(row => row[0] === userName);
                if (userRow) {
                    // Add new points and bonus points to the existing values
                    const currentPoints = parseFloat(userRow[1]);
                    const currentBonusPoints = parseFloat(userRow[3]);
                    const newPoints = currentPoints + parseFloat(addedPoints);
                    const newBonusPoints = currentBonusPoints + parseFloat(addedBonusPoints);

                    // Update points and bonus points
                    userRow[1] = newPoints.toFixed(2); // Assuming points are in the second column
                    userRow[3] = newBonusPoints.toFixed(2); // Assuming bonus points are in the fourth column
                    
                    // Join rows back into CSV format
                    const updatedCSV = csvRows.map(row => row.join(',')).join('\n');
                    
                    // Write updated CSV data back to file using POST method
                    fetch('updateCSV.php', { // Assuming updateCSV.php is a server-side script to handle CSV updates
                        method: 'POST',
                        body: updatedCSV
                    })
                    .then(() => resolve())
                    .catch(error => reject(error));
                } else {
                    reject('User not found in CSV');
                }
            })
            .catch(error => reject(error));
    });
}

  
  
function updateSendingBox() {
    // Create the event management box container
    const eventBoxContainer = document.createElement('div');
    eventBoxContainer.classList.add('event-box-container');
  
    // Create the event management box
    const eventBox = document.createElement('div');
    eventBox.classList.add('event-box');

    const text1 = document.createElement('p');
    text1.textContent = 'Add Points for users.';
    text1.classList.add('text1'); // Add class for styling

    const sendUpdate = document.createElement('button');
    sendUpdate.textContent = 'Send Update';
    sendUpdate.classList.add('send-update'); // Add class for styling

    sendUpdate.addEventListener('click', function() {
        const userName = dropdown.value; // Get the selected user name
        const addedPoints = points.value; // Get the entered points
        const addedBonusPoints = bonusPoints.value; // Get the entered bonus points
    
        // Update CSV with new points and bonus points
        updateCSV(userName, addedPoints, addedBonusPoints)
            .then(() => {
                console.log('CSV updated successfully');
                //window.location.href = 'index.html'; // Redirect to index.html after updating CSV
            })
            .catch(error => console.error('Error updating CSV:', error));
    });
    

    const event = document.createElement('div');
    event.classList.add('event'); // Add class for styling

    const box1 = document.createElement('div');
    box1.classList.add('box1');


    // Create a select element
    let dropdown = document.createElement('select');
    dropdown.classList.add('dropdown'); // Add class for styling

    // Create the initial placeholder option
    let placeholderOption = document.createElement('option');
    placeholderOption.textContent = 'Choose a user';
    placeholderOption.disabled = true; // Make it disabled so it can't be selected
    placeholderOption.selected = true; // Make it selected by default
    dropdown.appendChild(placeholderOption);

    // Call readCSV function to get names from the CSV file
    readCSV('StudentsPoints.csv')
        .then(names => {
            // Populate dropdown with names
            names.forEach(name => {
                let option = document.createElement('option');
                option.textContent = name;
                dropdown.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error reading CSV:', error);
        });


    var points = document.createElement('input');
    points.type = "text";
    points.placeholder = "Enter points"; // Set placeholder text
    points.classList.add('points'); // Add class for styling
    points.addEventListener('change', function(event) {
    // Assuming updateState is an object where you want to store the points
    updateState.points = event.target.value;
    });


    var bonusPoints = document.createElement('input');
    bonusPoints.type = "text";
    bonusPoints.placeholder = "Enter bonus points"; // Set placeholder text
    bonusPoints.classList.add('bonusPoints'); // Add class for styling
    bonusPoints.addEventListener('change', function(event) {
    // Assuming updateState is an object where you want to store the points
    updateState.points = event.target.value;
    });

    points.addEventListener('change', function(event) {
        // Store the entered points in updateState
        updateState.points = event.target.value;
    });
    
    bonusPoints.addEventListener('change', function(event) {
        // Store the entered bonus points in updateState
        updateState.bonusPoints = event.target.value;
    });
    


  
    box1.appendChild(dropdown);
    box1.appendChild(points);
    box1.appendChild(bonusPoints);

    event.appendChild(box1);

    eventBox.appendChild(text1);
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
    logo.src = 'Images/LeftoverLoungeLogo.png'; 
    logo.alt = 'Logo'; // Add an alt attribute for accessibility

    logo.addEventListener('click', function() {
      window.location.href = 'index.html'; // Event listener to take you back to the homepage
    });

    function createTabs() {
        let tabs = document.createElement('div');
        tabs.classList.add('tabs');
      
        let tabNames = ['Create Events', 'Add Points']; // Add 'Add Points' tab
        tabNames.forEach(tabName => {
          const tab = createTab(tabName);
          tabs.appendChild(tab);
          if (tabName === 'Create Events') {
            tab.addEventListener('click', function() {
              // Redirect to the Create Event page
              window.location.href = 'CE.html';
            });
          }
          if (tabName === 'Add Points') {
            tab.addEventListener('click', function() {
              // Redirect to the Add Points page
              window.location.href = 'AP.html';
            });
          }
        });
      
        return tabs;
      }
  
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
