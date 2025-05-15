async function renderProjects() {
  try {
    const projectsTableBody = document.getElementById("projects-table-body");
    const projects = await getProjects();

    projectsTableBody.innerHTML = projects
      .map(
        (project) => `
      <tr>
        <td>${project.id}</td>
        <td>${project.name}</td>
        <td>${new Date(project.startDate).toLocaleDateString("vi-VN")}</td>
        <td>${new Date(project.endDate).toLocaleDateString("vi-VN")}</td>
        <td>${project.description}</td>
        <td>
          <button class="btn-edit" onclick="editProject(${
            project.id
          })">Sửa</button>
          <button class="btn-delete" onclick="deleteProject(${
            project.id
          })">Xóa</button>
        </td>
      </tr>
    `
      )
      .join("");
  } catch (error) {
    console.error("Lỗi khi tải dữ liệu:", error);
    alert("Có lỗi xảy ra khi tải dữ liệu dự án");
  }
}

document.addEventListener("DOMContentLoaded", renderProjects);
