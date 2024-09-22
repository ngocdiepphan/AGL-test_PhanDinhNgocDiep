// Attach event listeners to the menu and close icons
const menuIcon = document.querySelector('.header__icon-menu'); // Select the menu icon
const closeIcon = document.querySelector('.sidebar__icon-close'); // Select the close icon
const sidebar = document.querySelector('.sidebar-mobile'); // Select the sidebar

// Open the sidebar when the menu icon is clicked
menuIcon.addEventListener('click', () => {
  sidebar.classList.add('active'); // Add the 'active' class to open the sidebar
});

// Close the sidebar when the close icon is clicked
closeIcon.addEventListener('click', () => {
  sidebar.classList.remove('active'); // Remove the 'active' class to close the sidebar
});
