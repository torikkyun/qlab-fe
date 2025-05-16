async function initializeProjects() {
  const projectsSection = new DataSection("projects-container", {
    title: "Danh sách dự án",
    addButtonText: "Thêm dự án",
    onAdd: () => addProject(),
    table: {
      columns: [
        { field: "id", label: "ID" },
        { field: "name", label: "Tên dự án" },
        { field: "startDate", label: "Ngày bắt đầu", type: "date" },
        { field: "endDate", label: "Ngày kết thúc", type: "date" },
        { field: "description", label: "Mô tả" },
      ],
      options: {
        rowActions: [
          { label: "Sửa", class: "btn-edit", handler: "editProject" },
          { label: "Xóa", class: "btn-delete", handler: "deleteProject" },
        ],
      },
    },
  });

  try {
    const projects = await getProjects();
    projectsSection.renderData(projects);
  } catch (error) {
    console.error("Lỗi khi tải dữ liệu:", error);
    alert("Có lỗi xảy ra khi tải dữ liệu dự án");
  }
}

document.addEventListener("DOMContentLoaded", initializeProjects);
