const loadDashboardData = async () => {
  // Lấy thống kê từ API
  const deviceStatistics = await getDeviceStatistics();
  console.log(deviceStatistics);
};

document.addEventListener("DOMContentLoaded", loadDashboardData);
