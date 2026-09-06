function validateForm() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let pname = document.getElementById("input[type=tel]").value;
  let ename = document.getElementById("input[type=email]").value;

  if (fname == "" || lname == "") {
    alert("Please enter your name");
    return false;
  }

  if (pname == "" || ename == "") {
    alert("Please enter your contact details");
    return false;
  }

  let phonepat = /^[0-9]{10}$/;
  if (!phonepat.test(pname)) {
    alert("Please enter a valid phone number");
    return false;
  }

  let emailpat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailpat.test(ename)) {
    alert("Please enter a valid email address");
    return false;
  }

  alert("Registration Successful!");
  return true;
}
