function setActiveMenuItem() {
  const currentPath = window.location.pathname;

  const menuItems = document.querySelectorAll("ul.nav-links li");
  menuItems.forEach((item) => item.classList.remove("active"));

  menuItems.forEach((item) => {
    const link = item.querySelector("a");
    if (link && link.getAttribute("href") === currentPath) {
      item.classList.add("active");
    }
  });
}

function initializeSidebarEvents() {
  document.querySelectorAll("ul.nav-links a").forEach((link) => {
    link.addEventListener("click", function (e) {
      document.querySelectorAll("ul.nav-links li").forEach((item) => {
        item.classList.remove("active");
      });
      this.closest("li").classList.add("active");
    });
  });
}

window.setActiveMenuItem = setActiveMenuItem;
window.initializeSidebarEvents = initializeSidebarEvents;
