async function initializeUsers() {
  const usersSection = new DataSection("users-container", {
    title: "Danh sách người dùng",
    addButtonText: "Thêm người dùng",
    onAdd: () => addProject(),
    table: {
      columns: [
        { field: "id", label: "ID" },
        { field: "firstName", label: "Tên" },
        { field: "lastName", label: "Họ" },
        { field: "email", label: "Email" },
        { field: "phone", label: "Điện thoại" },
      ],
      options: {
        rowActions: [
          { label: "Sửa", class: "btn-edit", handler: "editUser" },
          { label: "Xóa", class: "btn-delete", handler: "deleteUser" },
        ],
      },
    },
  });

  try {
    const users = await getUsers();
    usersSection.renderData(users);
  } catch (error) {
    console.error("Lỗi khi tải dữ liệu:", error);
    alert("Có lỗi xảy ra khi tải dữ liệu người dùng");
  }
}

function editUser(id) {
  // TODO: Implement edit staff
  console.log("Edit user:", id);
}

function deleteUser(id) {
  // TODO: Implement delete staff
  console.log("Delete user:", id);
}

document.addEventListener("DOMContentLoaded", initializeUsers);
