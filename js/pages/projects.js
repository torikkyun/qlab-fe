const projectsTable = new DataTable("projects-container", {
  title: "Quản lý dự án",
  addButton: {
    text: "Thêm dự án",
    onClick: () => {
      console.log("Add new project");
    },
  },
  columns: [
    {
      field: "name",
      title: "Tên dự án",
    },
    {
      field: "startDate",
      title: "Ngày bắt đầu",
      render: (value) => new Date(value).toLocaleDateString("vi-VN"),
    },
    {
      field: "endDate",
      title: "Ngày kết thúc",
      render: (value) => new Date(value).toLocaleDateString("vi-VN"),
    },
    {
      field: "description",
      title: "Mô tả",
    },
  ],
  actions: [
    {
      label: "Sửa",
      class: "edit",
      onClick: (row) => editProject(row._id),
    },
    {
      label: "Xóa",
      class: "delete",
      onClick: (row) => deleteProject(row._id),
    },
  ],
});

// Load dữ liệu
async function loadProjects() {
  try {
    const projects = await getProjects();
    projectsTable.updateData(projects);
  } catch (error) {
    console.error("Error loading projects:", error);
  }
}

// Khởi tạo khi trang load
document.addEventListener("DOMContentLoaded", loadProjects);
