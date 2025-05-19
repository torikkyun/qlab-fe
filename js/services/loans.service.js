const getLoans = async () => {
  try {
    const token = localStorage.getItem("access_token");
    if (!token) {
      window.location.href = "/pages/signin.html";
      return;
    }

    const response = await axios.get("http://localhost:3000/api/loans", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("access_token");
      window.location.href = "/pages/signin.html";
    }
    throw error;
  }
};

const getLoanByUserId = async (userId) => {
  try {
    const token = localStorage.getItem("access_token");
    if (!token) {
      window.location.href = "/pages/signin.html";
      return;
    }

    const response = await axios.get(
      `http://localhost:3000/api/loans/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("access_token");
      window.location.href = "/pages/signin.html";
    }
    throw error;
  }
};

const getLoanStatistics = async () => {
  try {
    const token = localStorage.getItem("access_token");
    if (!token) {
      window.location.href = "/pages/signin.html";
      return;
    }
    const response = await axios.get(
      `http://localhost:3000/api/loans/statistics`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("access_token");
      window.location.href = "/pages/signin.html";
    }
    throw error;
  }
};
