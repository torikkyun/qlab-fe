const getProjects = async () => {
  try {
    const token = localStorage.getItem("access_token");
    if (!token) {
      window.location.href = "/pages/signin.html";
      return;
    }

    const response = await axios.get("http://localhost:3000/api/projects", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Token hết hạn hoặc không hợp lệ
      localStorage.removeItem("access_token");
      window.location.href = "/pages/signin.html";
    }
    throw error;
  }
};
