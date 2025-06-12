document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('login-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = document.getElementById('email').value.trim();
      var password = document.getElementById('password').value;
      if (email && password) {
        alert('Đăng nhập thành công!');
      } else {
        alert('Vui lòng nhập đầy đủ thông tin!');
      }
    });
  }
});
