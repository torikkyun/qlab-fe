async function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await axios.post("http://localhost:3000/api/auth/login", {
      email: email,
      password: password,
    });
    if (response.data) {
      if (response.data.access_token) {
        localStorage.setItem("access_token", response.data.access_token);
      }
      window.location.href = "/pages/dashboard.html";
    }
  } catch (error) {
    if (error.response) {
      alert(error.response.data.message || "Đăng nhập thất bại");
    } else if (error.request) {
      alert("Không thể kết nối đến server");
    } else {
      alert("Có lỗi xảy ra");
    }
    console.error("Lỗi đăng nhập:", error);
  }
}
