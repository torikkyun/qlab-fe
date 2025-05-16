class DataSection {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    this.options = {
      title: "Danh sách dữ liệu",
      addButtonText: "Thêm mới",
      onAdd: null,
      ...options,
    };
    this.dataTable = null;
    this.init();
  }

  async init() {
    try {
      const response = await axios.get("../partials/data-section.html");
      this.container.innerHTML = response.data;

      document.getElementById("section-title").textContent = this.options.title;
      document.getElementById("btn-add-text").textContent =
        this.options.addButtonText;

      if (this.options.onAdd) {
        document
          .getElementById("btn-add")
          .addEventListener("click", this.options.onAdd);
      }

      if (this.options.table) {
        this.dataTable = new DataTable(
          "data-container",
          this.options.table.columns,
          this.options.table.options
        );
      }
    } catch (error) {
      console.error("Error initializing DataSection:", error);
    }
  }

  renderData(data) {
    if (this.dataTable) {
      this.dataTable.render(data);
    }
  }
}
