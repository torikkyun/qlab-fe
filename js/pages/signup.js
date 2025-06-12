document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('register-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = document.getElementById('email').value.trim();
      var fullname = document.getElementById('fullname').value.trim();
      var password = document.getElementById('password').value;
      var terms = document.getElementById('terms').checked;
      if (email && fullname && password && terms) {
        alert('Đăng ký thành công!');
        window.location.href = 'login.html';
      } else {
        alert('Vui lòng điền đầy đủ thông tin và chấp nhận điều khoản!');
      }
    });
  }
});
