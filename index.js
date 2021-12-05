const form = document.querySelector('form');
const email = document.querySelector('#email');
const emailError = document.querySelector('#email-error');
const country = document.querySelector('#country');
const countryError = document.querySelector('#country-error');
const postcode = document.querySelector('#postcode');
const postcodeError = document.querySelector('#postcode-error');
const password = document.querySelector('#password');
const passwordError = document.querySelector('#password-error');
const confirmPassword = document.querySelector('#confirm-password');
const confirmPasswordError = document.querySelector('#confirm-password-error');
let password1;
let formIsValid = false;

email.addEventListener('blur', (e) => {
  if (email.validity.valid) {
    email.setAttribute('class', 'valid');
    emailError.innerText = '';
    formIsValid = true;
  } else {
    formIsValid = false;
    email.setAttribute('class', 'error');
    emailError.innerText = 'Please enter a valid email!'
    email.addEventListener('input', () => {
      if (email.validity.valid) {
        email.setAttribute('class', 'valid');
        emailError.innerText = '';
      } else {
        email.setAttribute('class', 'error');
        emailError.innerText = 'Please enter a valid email!'
      }
    })
  }
});

country.addEventListener('blur', (e) => {
  if (country.validity.valid) {
    formIsValid = true;
    country.setAttribute('class', 'valid');
    countryError.innerText = '';
  } else {
    formIsValid = false;
    country.setAttribute('class', 'error');
    countryError.innerText = 'Required field, only letter characters!'
    country.addEventListener('input', () => {
      if (country.validity.valid) {
        country.setAttribute('class', 'valid');
        countryError.innerText = '';
      } else {
        country.setAttribute('class', 'error');
        countryError.innerText = 'Required field, only letter characters!'
      }
    })
  }
});

postcode.addEventListener('blur', (e) => {
  if (postcode.validity.valid) {
    formIsValid = true;
    postcode.setAttribute('class', 'valid');
    postcodeError.innerText = '';
  } else {
    formIsValid = false;
    postcode.setAttribute('class', 'error');
    postcodeError.innerText = 'Doesn\'t look quite right!'
    postcode.addEventListener('input', () => {
      if (postcode.validity.valid) {
        postcode.setAttribute('class', 'valid');
        postcodeError.innerText = '';
      } else {
        postcode.setAttribute('class', 'error');
        postcodeError.innerText = 'Doesn\'t look quite right!'
      }
    })
  }
});

password.addEventListener('blur', (e) => {
  if (password.validity.valid) {
    formIsValid = true;
    password.setAttribute('class', 'valid');
    passwordError.innerText = '';
    password1 = e.target.value;
  } else {
    formIsValid = false;
    password.setAttribute('class', 'error');
    passwordError.innerText = 'Minimum 8 characters!'
    password.addEventListener('input', () => {
      if (password.validity.valid) {
        password.setAttribute('class', 'valid');
        passwordError.innerText = '';
      } else {
        password.setAttribute('class', 'error');
        passwordError.innerText = 'Minimum 8 characters!'
      }
    })
  }
});

confirmPassword.addEventListener('blur', (e) => {
  const password2 = e.target.value;
  if (confirmPassword.validity.valid && password1 === password2) {
    formIsValid = true;
    confirmPassword.setAttribute('class', 'valid');
    confirmPasswordError.innerText = '';
  } else {
    formIsValid = false;
    confirmPassword.setAttribute('class', 'error');
    confirmPasswordError.innerText = 'Incorrect password!'
    confirmPassword.addEventListener('input', () => {
      const password2 = e.target.value;
      if (confirmPassword.validity.valid && password1 === password2) {
        confirmPassword.setAttribute('class', 'valid');
        confirmPasswordError.innerText = '';
      } else {
        confirmPassword.setAttribute('class', 'error');
        confirmPasswordError.innerText = 'Incorrect password!'
      }
    })
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (formIsValid && email.validity.valid
    && country.validity.valid
    && postcode.validity.valid
    && password.validity.valid
    && confirmPassword.validity.valid) {
    confirmPasswordError.innerText = 'Everything looks good!';
    confirmPasswordError.style.color = 'green';
  } else {
    confirmPasswordError.innerText = 'Something doesn\'t look right!'
  }

});
