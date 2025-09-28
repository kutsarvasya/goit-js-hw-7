const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (!email.value || !password.value) {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    [email.name]: email.value,
    [password.name]: password.value,
  };
  console.log(formData);
  event.currentTarget.reset();
});
