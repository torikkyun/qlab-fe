const getUsers = async () => {
  try {
    const token = localStorage.getItem("access_token");
    if (!token) {
      window.location.href = "/pages/signin.html";
      return;
    }

    const response = await axios.get("http://localhost:3000/api/users", {
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

const getUserById = async (userId) => {
  try {
    const token = localStorage.getItem("access_token");
    if (!token) {
      window.location.href = "/pages/signin.html";
      return;
    }

    const response = await axios.get(
      `http://localhost:3000/api/users/${userId}`,
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

const createUser = async (userData) => {
  try {
    const token = localStorage.getItem("access_token");
    if (!token) {
      window.location.href = "/pages/signin.html";
      return;
    }

    const response = await axios.post(
      "http://localhost:3000/api/users/",
      {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        phone: userData.phone,
        password: userData.password,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
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

const updateUser = async (userId, userData) => {
  try {
    const token = localStorage.getItem("access_token");
    if (!token) {
      window.location.href = "/pages/signin.html";
      return;
    }

    const response = await axios.patch(
      `http://localhost:3000/api/users/${userId}`,
      {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        phone: userData.phone,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
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

const deleteUserById = async (userId) => {
  try {
    const token = localStorage.getItem("access_token");
    if (!token) {
      window.location.href = "/pages/signin.html";
      return;
    }

    const response = await axios.delete(
      `http://localhost:3000/api/users/${userId}`,
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

const getUserStatistics = async () => {
  try {
    const token = localStorage.getItem("access_token");
    if (!token) {
      window.location.href = "/pages/signin.html";
      return;
    }
    const response = await axios.get(
      `http://localhost:3000/api/users/statistics`,
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
