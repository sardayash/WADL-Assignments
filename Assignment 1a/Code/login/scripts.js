function changePasswordVisibilty(element) {
  var inputPassword = element.previousElementSibling;

  if (inputPassword.type == "text") inputPassword.type = "password";
  else inputPassword.type = "text";
}

function validateEmail(email) {
  var validEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return !email.match(validEmail);
}

function validatePassword(password) {
  var validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  return !password.match(validPassword);
}

function validatePhone(phone) {
  var validPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  return !phone.match(validPhone);
}

function formAlert(object, message) {
  const wrongDiv = document.getElementById(object.id + "-wrong");

  wrongDiv.innerHTML = message;
  object.style.borderColor = "#a50303";
}

function resetInput(input) {
  input.style.borderColor = "#F3F3F3";
  const wrongDiv = document.getElementById(input.id + "-wrong");

  wrongDiv.innerHTML = "";
}

function activateButton() {
  const submitButton = document.getElementById("sign-up-submit-button");
  submitButton.disabled = !submitButton.disabled;
}

function checkAndSubmitForm(event) {
  event.preventDefault();

  const form = document.getElementById("login-form");
  const emailInput = document.getElementById("login-email");
  const passwordInput = document.getElementById("login-password");

  if (!emailInput.value) {
    formAlert(emailInput, "Please enter email");
    return;
  }
  if (!passwordInput.value) {
    formAlert(passwordInput, "Please enter password");
    return;
  }
  if (validateEmail(emailInput.value)) {
    formAlert(emailInput, "Invalid Email");
    return;
  }
  if (validatePassword(passwordInput.value)) {
    formAlert(passwordInput, "Invalid Password");
    return;
  }

  form.submit();
}

function checkAndSubmitSignUpForm(event) {
  event.preventDefault();

  const form = document.getElementById("sign-up-form");
  const nameInput = document.getElementById("sign-up-name");
  const surnameInput = document.getElementById("sign-up-surname");
  const emailInput = document.getElementById("sign-up-email");
  const phoneInput = document.getElementById("sign-up-phone");
  const passwordInput = document.getElementById("sign-up-password");
  const passwordAgainInput = document.getElementById("sign-up-password-again");
  const acceptCheckbox = document.getElementById("accept-checkbox");

  if (!nameInput.value) {
    formAlert(nameInput, "Please enter your first name");
    return;
  }
  if (!surnameInput.value) {
    formAlert(surnameInput, "Please enter your last name");
    return;
  }
  if (!emailInput.value) {
    formAlert(emailInput, "Please enter email");
    return;
  }
  if (!phoneInput.value) {
    formAlert(phoneInput, "Please enter phone no.");
    return;
  }
  if (!passwordInput.value) {
    formAlert(passwordInput, "Please enter password");
    return;
  }
  if (!passwordAgainInput.value) {
    formAlert(passwordAgainInput, "Please re-enter password");
    return;
  }

  // console.log(surnameInput.value.length);
  // if (nameInput.value.length < 3 || nameInput.value.length > 24) {
  //   formAlert(nameInput, "Name should be of minimum 3 letters");
  //   return;
  // }
  // if (surnameInput.value.length < 3 || surnameInput.value.length > 24) {
  //   formAlert(surnameInput, "Soyad 3 harften az 24 harften fazla olamaz");
  //   return;
  // }
  if (validateEmail(emailInput.value)) {
    formAlert(emailInput, "Invalid email");
    return;
  }
  if (validatePhone(phoneInput.value)) {
    formAlert(
      phoneInput,
      "Phone no. should be of 10 digit only"
    );
    return;
  }
  if (validatePassword(passwordInput.value)) {
    formAlert(passwordInput, "Invalid password");
    return;
  }
  if (passwordInput.value != passwordAgainInput.value) {
    formAlert(passwordAgainInput, "Both passwords should match exactly");
    return;
  }

  if (acceptCheckbox.checked) {
    form.submit();
  }
}
