// variables DOM2
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const buttonSubmit = document.querySelector("#submit");
const error1 = document.querySelector("#error-1");
const error2 = document.querySelector("#error-2");
const error3 = document.querySelector("#error-3");
const error4 = document.querySelector("#error-4");
const error5 = document.querySelector("#error-5");

// messages
const message = [
  "First Name cannot be empty",
  "Last Name cannot be empty",
  "Looks like this is not an email",
  "Password cannot be empty",
  "Looks like this is not a password",
];

window.addEventListener("load", () => {
  firstName.value = null;
  lastName.value = null;
  email.value = "";
  password.value = "";
});

// button event click
buttonSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  input_empty_check(firstName, error1);
  input_empty_check(lastName, error2);
  email_check(email);
  password_check(password);
});

function input_empty_check(input_field, error) {
  let value_field = input_field.value;

  if (value_field === "") {
    draw_error(input_field, error);
  } else {
    remove_error(input_field, error);
  }
}

function draw_error(input, error) {
  // Ej: error1 ==> slice(6, 7) ==> 1
  error_message = parseInt(error.id.slice(6, 7));
  let num_message = error_message - 1;
  console.log(input);
  input.style.border = "1px solid red";
  error.innerHTML = `<img src="./images/icon-error.svg" alt="error icon" /><p>${message[num_message]}</p>`;
}

function remove_error(input, error) {
  input.style.border = "";
  error.innerHTML = ``;
}

function email_check(email) {
  email.placeholder = "email@example.com";
  value_email = email.value;
  // console.log(email.value);
  let regExpr =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  if (regExpr.test(value_email)) {
    // It is a valid email address
    remove_error(email, error3);
    // draw_error(email, error3);
  } else {
    // It's not valid
    draw_error(email, error3);
    // remove_error(email_check);
  }
}

function password_check(password) {
  input_empty_check(password, error4);
  value_password = password.value;
  // Testing193!
  let regExpr = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

  console.log(value_password);

  if (regExpr.test(value_password) || value_password == "") {
    // It is a valid email address
    if (value_password !== "") {
      remove_error(password, error4);
      remove_error(password, error5);
    }
  } else if (value_password !== "") {
    // It's not valid
    draw_error(password, error5);
  }
}
