

function loginfunc() {

  var validmail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-.]+(?:\.[a-zA-Z0-9-]+)$/;

  if (!(document.getElementById("email").value.match(validmail))) {

    alert("Invalid email address!");

    document.getElementById("email").focus();
  }
  else if(document.getElementById("psw").value.length==0)
  {
    alert("Password cannot be blank!");
    document.getElementById("psw").focus();
    return false;
  }
  else return true;
}
function signupfunc() {

  var validpw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*s).{8,15}$/;
  var validmail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-.]+(?:\.[a-zA-Z0-9-]+)$/;

  if (!(document.getElementById("mail").value.match(validmail))) {

    alert("Invalid email address!");

    document.getElementById("mail").focus();
  }
 else if(document.getElementById("pw").value.length==0){
   alert("Password cannot be blank!");
   document.getElementById("pw").focus();
 }

  else if (!(document.getElementById("pw").value.match(validpw))) {
    alert("Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character and it should be 8-15 characters long.")
    document.getElementById("pw").focus();


  }
  else if ((document.getElementById("pw").value) != (document.getElementById("cpw").value)) {
    alert("Passwords do not match!");
    document.getElementById("cpw").focus();

  }
else 
alert("You are signed in!");
}
