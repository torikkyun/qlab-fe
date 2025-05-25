// function getPageTitle() {
//   const path = window.location.pathname;
//   switch (path) {
//     case "/pages/dashboard.html":
//       return "Trang chủ";
//     case "/pages/users.html":
//       return "Người dùng";
//     case "/pages/devices.html":
//       return "Thiết bị";
//     case "/pages/projects.html":
//       return "Dự án";
//     case "/pages/profile.html":
//       return "Hồ sơ";
//     case "/pages/loans.html":
//       return "Mượn trả thiết bị";
//     default:
//       return "Trang chủ";
//   }
// }

// function setHeaderTitle() {
//   const headerTitle = document.querySelector(".header-title");
//   if (headerTitle) {
//     headerTitle.textContent = getPageTitle();
//   }
// }

// function handleLogout() {
//   localStorage.removeItem("access_token");
//   window.location.href = "/pages/signin.html";
// }

function loadLayout() {
  axios
    .get("/components/header.html")
    .then((response) => {
      document.getElementById("header").outerHTML = response.data;
      // setHeaderTitle();
    })
    .catch((error) => console.error("Lỗi khi load header:", error));

  axios
    .get("/components/sidebar.html")
    .then((response) => {
      document.getElementById("sidebar").outerHTML = response.data;

      // Thêm sự kiện click ẩn hiện sidebar
      const toggle = document.querySelector(".btn-toggle");
      const sidebar = document.querySelector("aside");
      toggle.addEventListener("click", () => {
        sidebar.classList.toggle("show-sidebar");
        sidebar.classList.toggle("hide-sidebar");
      });
    })
    .catch((error) => console.error("Lỗi khi load sidebar:", error));

  axios
    .get("/components/footer.html")
    .then((response) => {
      document.getElementById("footer").outerHTML = response.data;
    })
    .catch((error) => console.error("Lỗi khi load footer:", error));
}

document.addEventListener("DOMContentLoaded", loadLayout);
const API_BASE_URL = "http://localhost:3000/api/";
