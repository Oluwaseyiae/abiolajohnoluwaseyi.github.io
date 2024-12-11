// Get the menu and hamburger icon
const menuLinks = document.querySelector(".menu-links");
const menuIcon = document.querySelector(".hamburger-icon");

// Toggle the sidebar when the hamburger icon is clicked
menuIcon.addEventListener("click", () => {
  menuLinks.classList.toggle("open");
  menuIcon.classList.toggle("open");
});

// Close the sidebar when a link inside the menu is clicked
const menuItems = document.querySelectorAll(".menu-links a");
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuLinks.classList.remove("open"); // Closes the sidebar
    MenIcon.classList.remove("open");
  });
});
