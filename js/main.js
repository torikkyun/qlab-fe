function loadLayout() {
  axios
    .get("/partials/header.html")
    .then((response) => {
      document.getElementById("header-container").innerHTML = response.data;
    })
    .catch((error) => console.error("Lỗi khi load header:", error));

  axios
    .get("/partials/sidebar.html")
    .then((response) => {
      document.getElementById("sidebar-container").innerHTML = response.data;
      setActiveMenuItem();
      initializeSidebarEvents();
    })
    .catch((error) => console.error("Lỗi khi load sidebar:", error));
}

document.addEventListener("DOMContentLoaded", loadLayout);
