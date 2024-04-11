// Function to create tabs
function createTabs() {
  const tabs = document.createElement('div');
  tabs.classList.add('tabs');

  const tabNames = ['Clubs at UIC', 'Your Points'];
  tabNames.forEach(tabName => {
      const tab = createTab(tabName);
      tabs.appendChild(tab);
  });

  return tabs;
}

// Function to create notifications
function createNotifications() {
  const notifications = document.createElement('div');
  notifications.classList.add('notifications');

  const notify = document.createElement('img');
  notify.src = 'images/notify.png';
  notify.alt = 'Notifications';
  notify.classList.add('notify');

  const userProfile = document.createElement('img');
  userProfile.src = 'images/agent1.png';
  userProfile.alt = 'Club Logo';
  userProfile.classList.add('userProfile');

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
  logo.alt = 'Logo';
  logo.addEventListener('click', function() {
      window.location.href = 'clubMember.html'; // Redirects to the homepage
  });

  const tabs = createTabs(); // Ensure this function returns the tabs correctly
  const notifications = createNotifications(); // Ensure this returns the notification setup
  const userProfileText = document.createElement('span');
  userProfileText.textContent = 'Justin';
  userProfileText.classList.add('user-profile-text');

  header.appendChild(logo);
  header.appendChild(tabs);
  header.appendChild(notifications);
  header.appendChild(userProfileText);

  const mainContent = document.createElement('main');
  mainContent.classList.add('main-content');

  createEvent.appendChild(header);
  createEvent.appendChild(mainContent);

  return createEvent;
}

// Fetch and parse CSV
async function fetchCSV() {
  const response = await fetch('clubinfo.csv');
  const data = await response.text();
  return data;
}

async function loadAndParseCSV() {
  const csvData = await fetchCSV();
  const parsedData = Papa.parse(csvData, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true
  });
  return parsedData.data; // This is an array of objects
}

// Populate filter options
function populateFilterOptions(data, facet, elementId) {
  const uniqueValues = [...new Set(data.map(item => item[facet]))];
  const selectElement = document.getElementById(elementId);
  uniqueValues.forEach(value => {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = value;
      selectElement.appendChild(option);
  });
}

// Filter data
function filterData(data) {
  const searchName = document.getElementById('searchName').value.toLowerCase();
  const filterType = document.getElementById('filterType').value;
  // Add more filters as necessary
  return data.filter(item => {
      return (item.Name.toLowerCase().includes(searchName) || searchName === '') &&
             (item.Type === filterType || filterType === '');
      // Add more conditions for additional facets
  });
}

// Display filtered data
function displayData(data) {
  const container = document.getElementById('resultsTableContainer');
  container.innerHTML = ''; // Clear previous results
  const table = document.createElement('table');

  // Add headers dynamically
  const headerRow = document.createElement('tr');
  if (data.length > 0) {
      Object.keys(data[0]).forEach(key => {
          const headerCell = document.createElement('th');
          headerCell.textContent = key;
          headerRow.appendChild(headerCell);
      });
      table.appendChild(headerRow);
  }

  // Add rows dynamically
  data.forEach(item => {
      const row = document.createElement('tr');
      Object.values(item).forEach(value => {
          const cell = document.createElement('td');
          cell.textContent = value;
          row.appendChild(cell);
      });
      table.appendChild(row);
  });

  container.appendChild(table);
}

document.addEventListener('DOMContentLoaded', async function() {
  const data = await loadAndParse