
document.getElementById('signupForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await axios.post('http://localhost:3000/api/auth/login', { email, password });
        const data = response.data;
        alert(data.message || 'Login successful!'); // Hiển thị message nếu có, nếu không thì thông báo mặc định
    } catch (error) {
        console.log('Error:', error); // Log lỗi để debug
        if (error.response) {
            alert(error.response.data.message || 'Login failed');
        } else {
            alert('Cannot connect to server');
        }
    }
});