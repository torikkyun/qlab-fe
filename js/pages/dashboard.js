const loadDashboardData = async () => {
  const deviceStatistics = await getDeviceStatistics();
  const userStatistics = await getUserStatistics();
  const loanStatistics = await getLoanStatistics();

  document.getElementById("totalDevices").textContent =
    deviceStatistics.totalDevices;
  document.getElementById("availableDevices").textContent =
    deviceStatistics.availableDevices;
  document.getElementById("borrowedDevices").textContent =
    deviceStatistics.borrowedDevices;
  document.getElementById("totalUsers").textContent = userStatistics.totalUsers;
  document.getElementById("borrowingUsers").textContent =
    userStatistics.borrowingUsers;

  document.getElementById("totalLoans").textContent = loanStatistics.totalLoans;
  document.getElementById("unreturnedLoans").textContent =
    loanStatistics.unreturnedLoans;
  document.getElementById("returnedLoans").textContent =
    loanStatistics.returnedLoans;

  const token = checkAccessToken();
  const response = await axios.get(`${API_BASE_URL}/statistics`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { totalUsers, borrowingUsers } = response.data.userStats;

  const { totalDevices, availableDevices, borrowedDevices } =
    response.data.deviceStats;

  const monthlyLoans = response.data.monthlyLoans;
  const labels = [];
  const counts = [];
  monthlyLoans.forEach((loan) => {
    labels.push(loan.month);
    counts.push(loan.count);
  });

  const userChart = new Chart(document.getElementById("userChart"), {
    type: "pie",
    data: {
      labels: ["Đang mượn", "Không mượn"],
      datasets: [
        {
          data: [borrowingUsers, totalUsers - borrowingUsers],
          backgroundColor: ["#FF6384", "#36A2EB"],
        },
      ],
    },
    options: {
      response: true,
      radius: "80%",
      plugins: {},
    },
  });

  const deviceChart = new Chart(document.getElementById("deviceChart"), {
    type: "bar",
    data: {
      labels: ["Tổng thiết bị", "Có sẵn", "Đã mượn"],
      datasets: [
        {
          data: [totalDevices, availableDevices, borrowedDevices],
          backgroundColor: ["#4BC0C0", "#36A2EB", "#FF6384"],
        },
      ],
    },
    options: {
      response: true,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });

  const loanChart = new Chart(document.getElementById("loanChart"), {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Lượt mượn",
          data: counts,
          borderColor: "#FF6384",
        },
      ],
    },
    options: {
      scales: {
        y: {
          ticks: {
            stepSize: 1,
            callback: function (value) {
              if (Number.isInteger(value)) {
                return value;
              }
            },
          },
        },
      },
    },
  });
};

document.addEventListener("DOMContentLoaded", loadDashboardData);
