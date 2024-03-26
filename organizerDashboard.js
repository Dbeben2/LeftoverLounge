function createTab(tabName) {
  const tab = document.createElement('div');
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

  const icon = document.createElement('img');
  icon.src = 'notification-icon.png';
  icon.alt = 'Notifications';

  const clubName = document.createElement('span');
  clubName.textContent = 'Club Name';

  notifications.appendChild(icon);
  notifications.appendChild(clubName);

  return notifications;
}

function createEventManagementBox() {
  const eventManagementBox = document.createElement('div');
  eventManagementBox.classList.add('event-management-box');

  const heading = document.createElement('h2');
  heading.textContent = 'Event Management';

  const eventImages = document.createElement('div');
  eventImages.classList.add('event-images');

  const eventImageSrcs = ['event-image1.png', 'event-image2.png', 'event-image3.png'];
  eventImageSrcs.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Event Image';
    eventImages.appendChild(img);
  });

  eventManagementBox.appendChild(heading);
  eventManagementBox.appendChild(eventImages);

  return eventManagementBox;
}

function createFeedbackAnalyticsBox() {
  const feedbackAnalyticsBox = document.createElement('div');
  feedbackAnalyticsBox.classList.add('feedback-analytics-box');

  const heading = document.createElement('h2');
  heading.textContent = 'Feedback and Analytics';

  // Include feedback and analytics content here

  feedbackAnalyticsBox.appendChild(heading);

  return feedbackAnalyticsBox;
}

function createOrganizerDashboard() {
  const organizerDashboard = document.createElement('div');
  organizerDashboard.classList.add('organizer-dashboard');

  const header = document.createElement('header');
  header.classList.add('header');

  const logo = document.createElement('div');
  logo.classList.add('logo');
  logo.textContent = 'Logo';

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

  organizerDashboard.appendChild(header);
  organizerDashboard.appendChild(mainContent);

  return organizerDashboard;
}

module.exports = createOrganizerDashboard;
