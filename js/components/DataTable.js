class DataTable {
  constructor(containerId, columns, options = {}) {
    this.container = document.getElementById(containerId);
    this.columns = columns;
    this.options = {
      rowActions: [],
      dateFormat: "vi-VN",
      ...options,
    };
  }

  formatValue(value, type) {
    if (!value) return "";

    switch (type) {
      case "date":
        return new Date(value).toLocaleDateString(this.options.dateFormat);
      default:
        return value;
    }
  }

  createActionButtons(item) {
    return this.options.rowActions
      .map(
        (action) => `
        <button
          class="${action.class || "btn-action"}"
          onclick="${action.handler}(${item.id})"
        >
          ${action.label}
        </button>
      `
      )
      .join("");
  }

  render(data) {
    const headerHtml = `
      <thead>
        <tr>
          ${this.columns.map((col) => `<th>${col.label}</th>`).join("")}
          ${this.options.rowActions.length ? "<th>Thao tác</th>" : ""}
        </tr>
      </thead>
    `;

    const bodyHtml = `
      <tbody>
        ${data
          .map(
            (item) => `
          <tr>
            ${this.columns
              .map(
                (col) => `
              <td>${this.formatValue(item[col.field], col.type)}</td>`
              )
              .join("")}
            ${
              this.options.rowActions.length
                ? `<td>${this.createActionButtons(item)}</td>`
                : ""
            }
          </tr>
        `
          )
          .join("")}
      </tbody>
    `;

    this.container.innerHTML = `
      <table class="data-table">
        ${headerHtml}
        ${bodyHtml}
      </table>
    `;
  }
}
