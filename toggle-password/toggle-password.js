function togglePassword() {
  const passwordInput = document.getElementById('password');
  const toggleCheckbox = document.getElementById("toggle");
  if (toggleCheckbox.checked) {
    passwordInput.type = 'text';
} else {
  passwordInput.type = 'password';
};
}
const toggleCheckbox = document.getElementById("toggle");
toggleCheckbox.addEventListener('click', togglePassword);