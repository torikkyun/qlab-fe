function getPageTitle() {
  const path = window.location.pathname;
  switch (path) {
    case "/dashboard.html":
      return "Trang chủ";
    case "/users.html":
      return "Người dùng";
    case "/devices.html":
      return "Thiết bị";
    case "/projects.html":
      return "Dự án";
    case "/loans.html":
      return "Mượn trả thiết bị";
    default:
      return "Trang chủ";
  }
}

function setHeaderTitle() {
  const headerTitle = document.querySelector(".title");
  if (headerTitle) {
    headerTitle.textContent = getPageTitle();
  }
}

function checkAccessToken() {
  const token = localStorage.getItem("access_token");
  if (!token) {
    window.location.href = "signin.html";
    return;
  } else {
    return token;
  }
}

function handleLogout() {
  localStorage.removeItem("access_token");
  window.location.href = "signin.html";
}

function loadLayout() {
  const headerElement = document.getElementById("header");
  if (headerElement) {
    axios
      .get("/components/header.html")
      .then((response) => {
        headerElement.outerHTML = response.data;
        setHeaderTitle();
      })
      .catch((error) => console.error("Lỗi khi load header:", error));
  }

  const sidebarElement = document.getElementById("sidebar");
  if (sidebarElement) {
    axios
      .get("/components/sidebar.html")
      .then((response) => {
        sidebarElement.outerHTML = response.data;

        // Thêm sự kiện click ẩn hiện sidebar
        const toggle = document.querySelector(".btn-toggle");
        const sidebar = document.querySelector("aside");
        if (toggle && sidebar) {
          toggle.addEventListener("click", () => {
            sidebar.classList.toggle("show-sidebar");
            sidebar.classList.toggle("hide-sidebar");
          });
        }

        // Thêm active class cho link hiện tại
        const currentPath = window.location.pathname;
        const sidebarLinks = document.querySelectorAll(".sidebar-links");
        sidebarLinks.forEach((link) => link.classList.remove("active"));
        sidebarLinks.forEach((link) => {
          if (link.getAttribute("href") === currentPath.split("/").pop()) {
            link.classList.add("active");
          }
        });
      })
      .catch((error) => console.error("Lỗi khi load sidebar:", error));
  }

  const footerElement = document.getElementById("footer");
  if (footerElement) {
    axios
      .get("/components/footer.html")
      .then((response) => {
        footerElement.outerHTML = response.data;
      })
      .catch((error) => console.error("Lỗi khi load footer:", error));
  }
}

document.addEventListener("DOMContentLoaded", loadLayout);
const API_BASE_URL = "http://192.168.100.124:3000/api";
