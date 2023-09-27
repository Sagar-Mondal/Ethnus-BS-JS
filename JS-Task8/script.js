function clearErrors() {
  errors = document.getElementsByClassName("poor");
  for (let item of errors) {
    item.innerHTML = "";
  }
}
function seterror(id, error) {
  element = document.getElementById(id);
  element.parentElement.querySelector(".poor").innerHTML = error;
}

function validateForm(event) {
  event.preventDefault();
  var returnval = true;
  clearErrors();
  var fname = document.forms["myForm"]["firstName"].value;
  if (fname.length < 5) {
    seterror("firstName", "POOR");
    returnval = false;
  }
  var lname = document.forms["myForm"]["lastName"].value;
  if (lname.length < 5) {
    seterror("lastName", "POOR");
    returnval = false;
  }
  var email = document.forms["myForm"]["email"].value;
  if (email.length < 15) {
    seterror("email", "POOR");
    returnval = false;
  }

  var password = document.forms["myForm"]["password"].value;
  if (password.length < 6) {
    seterror("password", "POOR");
    returnval = false;
  }

  var cpassword = document.forms["myForm"]["rePassword"].value;
  if (cpassword == "" || cpassword != password) {
    seterror("rePassword", "POOR OR MISMATCH");
    returnval = false;
  }
  var age = parseInt(document.forms["myForm"]["age"].value);
  if (Number.isNaN(age) || age < 18) {
    seterror("age", "POOR");
    returnval = false;
  }
  var phone = document.forms["myForm"]["phoneNumber"].value;
  if (phone.length != 10) {
    seterror("phoneNumber", "POOR");
    returnval = false;
  }
  var address = document.forms["myForm"]["address"].value;
  if (address.length < 10) {
    seterror("address", "POOR");
    returnval = false;
  }
  var state = document.forms["myForm"]["state"].value;
  if (state.length < 6) {
    seterror("state", "POOR");
    returnval = false;
  }
  return returnval;
}

document
  .querySelector("input.btn-register")
  .addEventListener("click", validateForm);
