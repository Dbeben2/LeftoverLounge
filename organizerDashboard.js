
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
  });

  return tabs;
}


function createNotifications() {
  const notifications = document.createElement('div');
  notifications.classList.add('notifications');

  const notify = document.createElement('img');
  notify.src = '/Images/notify.png';
  notify.alt = 'Notifications';
  notify.classList.add('notify'); // Add a class to the image for styling

  const clubName = document.createElement('img');
  clubName.src = '/Images/acmLogo.png';
  clubName.alt = 'Club Logo'
  clubName.classList.add('clubLogo'); // Add a class to the image for styling

  notifications.appendChild(notify);
  notifications.appendChild(clubName);

  return notifications;
}


function createEventManagementBox() {
  // Create the event management box container
  const eventManagementBoxContainer = document.createElement('div');
  eventManagementBoxContainer.classList.add('event-management-box-container');

  // Create the event management box
  const eventManagementBox = document.createElement('div');
  eventManagementBox.classList.add('event-management-box');

  // Create the heading for the event management box
  const heading = document.createElement('h2');
  heading.textContent = 'Event Management';
  heading.classList.add('event-heading'); // Add class for styling

  // Create the event inside the event management box
  const event1 = document.createElement('div');
  event1.classList.add('event'); // Add class for styling

  // Create the event name for ACM Meeting: Meet & Greet 12PM 4/26
  const eventName1 = document.createElement('div');
  eventName1.textContent = 'ACM Meeting: Meet & Greet 12PM 4/26';

  // Create the "Attending" button for ACM Meeting: Meet & Greet 12PM 4/26
  const attendingButton1 = document.createElement('button');
  attendingButton1.textContent = 'Attending';
  attendingButton1.classList.add('attending-button'); // Add class for styling

  // Create the icon image after the attending button
  const attendingProfile = document.createElement('img');
  attendingProfile.src = '/Images/agent1.png';
  attendingProfile.alt = 'Profile 1';
  attendingProfile.classList.add('attending-profile'); // Add class for styling

  // Create the icon image after the attending button
  const attendingProfile2 = document.createElement('img');
  attendingProfile2.src = '/Images/agent2.png';
  attendingProfile2.alt = 'Profile 2';
  attendingProfile2.classList.add('attending-profile'); // Add class for styling
  
  // Create the icon image after the attending button
  const attendingProfile3 = document.createElement('img');
  attendingProfile3.src = '/Images/agent3.png';
  attendingProfile3.alt = 'Profile 3';
  attendingProfile3.classList.add('attending-profile'); // Add class for styling

  // Create the amount of others attedending the event
  const attendingAmount = document.createElement('div');
  attendingAmount.textContent = '+21';
  attendingAmount.classList.add('attending-amount'); // Add a class for styling

  attendingButton1.appendChild(attendingProfile);
  attendingButton1.appendChild(attendingProfile2);
  attendingButton1.appendChild(attendingProfile3);
  attendingButton1.appendChild(attendingAmount);

  // Create the "Send Update" button for ACM Meeting: Meet & Greet 12PM 4/26
  const sendUpdateButton1 = document.createElement('button');
  sendUpdateButton1.textContent = 'Send Update';
  sendUpdateButton1.classList.add('send-update-button'); // Add class for styling

  // Create the "edit event" button for ACM Meetings: SIG Game Lead 3PM 4/29
  const editEventButton1 = document.createElement('button');
  editEventButton1.textContent = 'Edit Event';
  editEventButton1.classList.add('edit-event-button'); // Add class for styling

  // Create the icon for "edit event" buttons
  const editEventIcon = document.createElement('img');
  editEventIcon.src = '/Images/edit.png'; // Add the path to your image
  editEventIcon.alt = 'Edit Event Icon'; // Add alt text for accessibility
  editEventIcon.classList.add('edit-icon'); // Add class for styling

  // Append the icon to the "Send Update" button
  editEventButton1.prepend(editEventIcon);

  // Create the icon for "Send Update" buttons
  const sendUpdateButtonIcon = document.createElement('img');
  sendUpdateButtonIcon.src = '/Images/send-update-icon.png'; // Add the path to your image
  sendUpdateButtonIcon.alt = 'Send Update Icon'; // Add alt text for accessibility
  sendUpdateButtonIcon.classList.add('send-update-icon'); // Add class for styling

  // Append the icon to the "Send Update" button
  sendUpdateButton1.prepend(sendUpdateButtonIcon);

  // Clone the icon element for the second "Send Update" button
  const sendUpdateButtonIconClone = sendUpdateButtonIcon.cloneNode(true);

  // Clone the icon element for the second "edit event" button
  const editEventButtonIconClone = editEventIcon.cloneNode(true);

  // Clone the icon element for the second "attending" button
  const profilePicClone = attendingProfile.cloneNode(true);
  const profilePicClone1 = attendingProfile2.cloneNode(true);
  const profilePicClone2 = attendingProfile3.cloneNode(true);

  const attendingAmount1 = document.createElement('div');
  attendingAmount1.textContent = '+11';
  attendingAmount1.classList.add('attending-amount'); // Add a class for styling

  // Create the "Send Update" button for ACM Meetings: SIG Game Lead 3PM 4/29
  const sendUpdateButton2 = document.createElement('button');
  sendUpdateButton2.textContent = 'Send Update';
  sendUpdateButton2.classList.add('send-update-button'); // Add class for styling
  sendUpdateButton2.prepend(sendUpdateButtonIconClone); // Append the cloned icon to the second button

  // Create the "edit event" button for ACM Meetings: SIG Game Lead 3PM 4/29
  const editEventButton2 = document.createElement('button');
  editEventButton2.textContent = 'Edit Event';
  editEventButton2.classList.add('edit-event-button'); // Add class for styling
  editEventButton2.prepend(editEventButtonIconClone);

  // Create the event name for ACM Meetings: SIG Game Lead 3PM 4/29
  const eventName2 = document.createElement('div');
  eventName2.textContent = 'ACM Meetings: SIG Game Lead 3PM 4/29';

  // Create the "Attending" button for ACM Meetings: SIG Game Lead 3PM 4/29
  const attendingButton2 = document.createElement('button');
  attendingButton2.textContent = 'Attending';
  attendingButton2.classList.add('attending-button'); // Add class for styling
  attendingButton2.append(profilePicClone); // Append the cloned icon to the second button
  attendingButton2.append(profilePicClone1); // Append the cloned icon to the second button
  attendingButton2.append(profilePicClone2); // Append the cloned icon to the second button
  attendingButton2.append(attendingAmount1);


  // Append the event elements to the event management box
  event1.appendChild(eventName1);
  event1.appendChild(attendingButton1);
  event1.appendChild(sendUpdateButton1);
  event1.appendChild(editEventButton1);

  // Append the event elements for the second event to the event management box
  const event2 = document.createElement('div');
  event2.classList.add('event'); // Add class for styling
  event2.appendChild(eventName2);
  event2.appendChild(attendingButton2);
  event2.appendChild(sendUpdateButton2);
  event2.appendChild(editEventButton2);

  // Append the heading and events to the event management box
  eventManagementBox.appendChild(heading);
  eventManagementBox.appendChild(event1);
  eventManagementBox.appendChild(event2);

  // Append the event management box to the container
  eventManagementBoxContainer.appendChild(eventManagementBox);

  // Return the container
  return eventManagementBoxContainer;
}


function createFeedbackAnalyticsBox() {
  // Create the feedback analytics box container
  const feedbackAnalyticsBoxContainer = document.createElement('div');
  feedbackAnalyticsBoxContainer.classList.add('feedback-box-container');

  const feedbackAnalyticsBox = document.createElement('div');
  feedbackAnalyticsBox.classList.add('feedback-analytics-box');

  const heading = document.createElement('h2');
  heading.textContent = 'Feedback and Analytics';

  const chartContainer = document.createElement('div');
  chartContainer.classList.add('chart-container');

  const pieChart = createPieChart();
  const barChart = createBarChart();

  chartContainer.appendChild(barChart); // Append the bar chart
  chartContainer.appendChild(pieChart); // Append the pie chart

  // Append the heading and chart container to the feedback analytics box
  feedbackAnalyticsBox.appendChild(heading);
  feedbackAnalyticsBox.appendChild(chartContainer);
  feedbackAnalyticsBoxContainer.appendChild(feedbackAnalyticsBox);

  return feedbackAnalyticsBoxContainer;
}



function createPieChart() {
  const container = document.createElement('div');
  container.id = 'container'; // Set the id for the container
  container.style.width = '400px'; // Set the width
  container.style.height = '200px'; // Set the height

  anychart.onDocumentReady(function() {
    var data = [
      { x: 'Vegan', value: 18 },
      { x: 'Kosher', value: 5 },
      { x: 'Vegetarian', value: 20 },
      { x: 'Halal', value: 57 }
    ];

    var chart = anychart.pie();
    chart.title('Club Dietary Restrictions');
    chart.data(data);
    chart.container(container);
    chart.draw();
  });

  return container;
}

function createBarChart() {
  const container = document.createElement('div');
  container.id = 'bar-container'; // Set the id for the container
  container.style.width = '400px'; // Set the width
  container.style.height = '200px'; // Set the height

  anychart.onDocumentReady(function() {
    // Create data with additional color information
    var data = [
      {x: "Hispanics", value: 60, color: "#F12222"}, // Red color
      {x: "Asians", value: 20, color: "#F2EF26"},     // Yellow color
      {x: "African Americans", value: 15, color: "#26F2EF"}, // Cyan color
      {x: "Other", value: 5, color: "#54F226"}         // Green color
    ];

    // Create a chart
    var chart = anychart.bar();

    chart.title('Membership Growth');

    // Create a bar series and set the data
    var series = chart.bar(data);

    // Set colors for each bar
    series.fill(function() {
      return this.getData('color');
    });

    // Set the container id
    chart.container(container);

    // Initiate drawing the chart
    chart.draw();
  });

  return container;
}



function createOrganizerDashboard() {
  const organizerDashboard = document.createElement('div');
  organizerDashboard.classList.add('organizer-dashboard');

  const header = document.createElement('header');
  header.classList.add('header');

  const logo = document.createElement('img');
  logo.classList.add('logo');
  logo.src = '/Images/LeftoverLoungeLogo.png'; // Replace 'logo.png' with the path to your logo image file
  logo.alt = 'Logo'; // Add an alt attribute for accessibility

  const tabs = createTabs();
  const notifications = createNotifications();

  header.appendChild(logo);
  header.appendChild(tabs);
  header.appendChild(notifications);

  const mainContent = document.createElement('main');
  mainContent.classList.add('main-content');

  const eventManagementBox = createEventManagementBox();
  const feedbackAnalyticsBox = createFeedbackAnalyticsBox();

  mainContent.appendChild(eventManagementBox);
  mainContent.appendChild(feedbackAnalyticsBox);

  const footer = createFooter(); // Create a footer section
  organizerDashboard.appendChild(header);
  organizerDashboard.appendChild(mainContent);
  organizerDashboard.appendChild(footer); // Append the footer to the dashboard

  return organizerDashboard;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  // Create image elements for the three images
  const image1 = document.createElement('img');
  image1.src = '/Images/uic1.jpg'; // Replace 'image1.png' with the path to your image file
  image1.alt = 'Image 1';
  image1.classList.add('uic1-image'); // Add class for styling

  const image2 = document.createElement('img');
  image2.src = '/Images/uic2.jpeg'; // Replace 'image2.png' with the path to your image file
  image2.alt = 'Image 2';
  image2.classList.add('uic2-image'); // Add class for styling

  const image3 = document.createElement('img');
  image3.src = '/Images/uic3.jpg'; // Replace 'image3.png' with the path to your image file
  image3.alt = 'Image 3';
  image3.classList.add('uic3-image'); // Add class for styling

  // Append the images to the footer
  footer.appendChild(image1);
  footer.appendChild(image2);
  footer.appendChild(image3);

  return footer;
}

module.exports = createOrganizerDashboard;
