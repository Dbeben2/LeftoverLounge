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

  // Create search input box
  const searchInput = document.createElement('input');
  searchInput.setAttribute('type', 'text');
  searchInput.setAttribute('placeholder', 'Search for a club by name');
  searchInput.classList.add('search-input');

  // Create search button
  const searchButton = document.createElement('button');
  searchButton.textContent = 'Search';
  searchButton.classList.add('search-button');

  // Create divider for search elements
  const searchContainer = document.createElement('div');
  searchContainer.classList.add('search-container');
  searchContainer.appendChild(searchInput);
  searchContainer.appendChild(searchButton);

  // Append search container to main content
  mainContent.appendChild(searchContainer);

  // Create container for club list
  const clubListContainer = document.createElement('div');
  clubListContainer.classList.add('club-list-container');

  // Create list to display search results
  const clubList = document.createElement('ul');
  clubList.classList.add('club-list');

  // Append club list to container
  clubListContainer.appendChild(clubList);
  mainContent.appendChild(clubListContainer);

  // Set to store unique club names that have been searched for
  const searchedClubs = new Set();

  // Function to perform search
  function performSearch() {
    const query = searchInput.value.toLowerCase();
    // Display only unique club names
    const filteredClubs = Array.from(searchedClubs).filter(club => club.toLowerCase().includes(query));
    displayClubs(filteredClubs, clubList);
  }

  // Add event listener for search input keydown event (Enter key)
  searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      performSearch();
    }
  });

  // Add event listener for search button click event
  searchButton.addEventListener('click', performSearch);


  const dropdown = document.createElement('select');
dropdown.classList.add('facet-dropdown');

// Append dropdown to search container
searchContainer.appendChild(dropdown);

// Array to store unique facets
const uniqueFacets = [];

// Function to populate dropdown with unique facets
function populateDropdown() {
  uniqueFacets.forEach(facet => {
    const option = document.createElement('option');
    option.textContent = facet;
    dropdown.appendChild(option);
  });
}

// Read club names from CSV file
function readCSV(file) {
  const reader = new FileReader();
  reader.onload = function(event) {
    const csv = event.target.result;
    const lines = csv.split('\n');
    for (let i = 1; i < lines.length; i++) { // Skip the first line
      const line = lines[i];
      const columns = line.split(',');
      for (let j = 4; j < columns.length; j++) { // Start from the fifth column (facet columns)
        const facet = columns[j].trim();
        if (!uniqueFacets.includes(facet)) { // Check if facet already exists in the array
          uniqueFacets.push(facet); // Add facet to array
        }
      }
      const clubName = columns[0].replace(/"/g, '').trim(); // Strip double quotes and get the first column (club name)
      searchedClubs.add(clubName); // Add club name to searchedClubs set
    }
    populateDropdown(); // Populate dropdown with unique facets
  };
  reader.readAsText(file);
}

// Create button for applying facet filter
const applyFilterButton = document.createElement('button');
applyFilterButton.textContent = 'Apply Filter';
applyFilterButton.classList.add('apply-filter-button');

// Append button to search container
searchContainer.appendChild(applyFilterButton);

// Add event listener for apply filter button click event
applyFilterButton.addEventListener('click', () => {
  performSearchWithFacet();
});

// Function to perform search with selected facet
function performSearchWithFacet() {
  const query = searchInput.value.toLowerCase();
  const facet = dropdown.value.toLowerCase();
  
  // Array to store clubs matching the selected facet
  const matchingClubs = [];
  
  // Iterate through each line of the CSV file
  for (const club of searchedClubs) {
    const facets = clubData.get(club);
    
    // Check if the club has the selected facet
    if (facets.includes(facet) && club.toLowerCase().includes(query)) {
      matchingClubs.push(club);
    }
  }
  
  // Display filtered clubs
  displayClubs(matchingClubs, clubList);
}



// Function to display club names in a list
function displayClubs(clubs, clubList) {
  clubList.innerHTML = ''; // Clear existing list
  clubs.forEach(club => {
    const listItem = document.createElement('li');
    listItem.textContent = club;
    clubList.appendChild(listItem);
  });
}

// Fetch the CSV file and call readCSV function
fetch('clubinfo.csv')
  .then(response => response.blob())
  .then(readCSV)
  .catch(error => console.error('Error fetching CSV file:', error));

createEvent.appendChild(header);
createEvent.appendChild(mainContent);
createEvent.appendChild(clubListContainer);

return createEvent;
}