
  function loginfunc() {

    var validname = /^[a-zA-Z0-9]+$/;
  
    if (!(document.getElementById("name").value.match(validname))) {
  
      alert("Invalid username!");
  
      document.getElementById("name").focus();
      return false;
    }
    else if(document.getElementById("pw").value.length==0)
    {
      alert("Password cannot be blank!");
      document.getElementById("pw").focus();
      return false;
    }
    else return true;
  }
  function signupfunc(mail) {
  
    var validpw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*s).{8,15}$/;
    
    var validmail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-.]+(?:\.[a-zA-Z0-9-]+)*$/;
    var validname = /^[a-zA-Z0-9]+$/;
    if(document.getElementById("uname").value.length==0)
    {
      alert("Username cannot be blank!");
      document.getElementById("uname").focus();
     
    }
    else if (!(document.getElementById("uname").value.match(validname))) {
  
      alert("Username must contain at least 1 lowercase letter, 1 uppercase letter and a number!");
  
      document.getElementById("uname").focus();
      
     }
    else if (!(document.getElementById("mail").value.match(validmail))) {
  
  
      alert("Invalid email address!");
  
      document.getElementById("mail").focus();
      
    }
   else if(document.getElementById("psw").value.length==0){
     alert("Password cannot be blank!");
     document.getElementById("psw").focus();
    
   }
  
    else if(!(document.getElementById("psw").value.match(validpw))) {
      alert("Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character and it should be 8-15 characters long.")
      document.getElementById("psw").focus();
      
    }
  
   else 
   alert("You are signed in!");
   
   }
  
   //cart
   function increaseprice(val)
   {
     if(val!=1)
   document.getElementById("price").innerHTML="₹"+(val*799);
   }