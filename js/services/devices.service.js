const getDevices = async () => {
  try {
    const token = localStorage.getItem("access_token");
    if (!token) {
      window.location.href = "/pages/signin.html";
      return;
    }

    const response = await axios.get("http://localhost:3000/api/devices", {
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

const getDeviceById = async (deviceId) => {
  try {
    const token = localStorage.getItem("access_token");
    if (!token) {
      window.location.href = "/pages/signin.html";
      return;
    }

    const response = await axios.get(
      `http://localhost:3000/api/devices/${deviceId}`,
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

const createDevice = async (deviceData) => {
  try {
    const token = localStorage.getItem("access_token");
    if (!token) {
      window.location.href = "/pages/signin.html";
      return;
    }

    const response = await axios.post(
      "http://localhost:3000/api/devices/",
      {
        name: deviceData.name,
        code: deviceData.code,
        cost: deviceData.cost,
        description: deviceData.description,
        statusId: 1,
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

const updateDevice = async (deviceId, deviceData) => {
  try {
    const token = localStorage.getItem("access_token");
    if (!token) {
      window.location.href = "/pages/signin.html";
      return;
    }

    const response = await axios.patch(
      `http://localhost:3000/api/devices/${deviceId}`,
      {
        name: deviceData.name,
        code: deviceData.code,
        cost: deviceData.cost,
        description: deviceData.description,
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

const deleteDeviceById = async (deviceId) => {
  try {
    const token = localStorage.getItem("access_token");
    if (!token) {
      window.location.href = "/pages/signin.html";
      return;
    }

    const response = await axios.delete(
      `http://localhost:3000/api/devices/${deviceId}`,
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

const borrowDeviceByUserId = async (userId, deviceIds) => {
  try {
    const token = localStorage.getItem("access_token");
    if (!token) {
      window.location.href = "/pages/signin.html";
      return;
    }
    await axios.post(
      `http://localhost:3000/api/loans/borrow`,
      {
        userId: userId,
        devices: deviceIds.map((deviceId) => ({ deviceId: deviceId })),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("access_token");
      window.location.href = "/pages/signin.html";
    }
    throw error;
  }
};

const returnDeviceByUserId = async (userId, deviceIds) => {
  try {
    const token = localStorage.getItem("access_token");
    if (!token) {
      window.location.href = "/pages/signin.html";
      return;
    }
    await axios.post(
      `http://localhost:3000/api/loans/return`,
      {
        userId: userId,
        devices: deviceIds,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("access_token");
      window.location.href = "/pages/signin.html";
    }
    throw error;
  }
};

const getDeviceStatistics = async () => {
  try {
    const token = localStorage.getItem("access_token");
    if (!token) {
      window.location.href = "/pages/signin.html";
      return;
    }
    const response = await axios.get(
      `http://localhost:3000/api/devices/statistics`,
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
