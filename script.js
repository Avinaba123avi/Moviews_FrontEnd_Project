document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailInput = document.getElementById("email").value;

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const passwordInput = document.getElementById("password").value;


  if (!emailRegex.test(emailInput)) 
  {
    document.getElementById('emailError').style.display = "block";
  } 
  if (!passwordInput)
  {
    document.getElementById('passwordError').style.display = "block";
  }
  if (!emailInput)
  {
    document.getElementById('passwordError').style.display = "block";
  }
  else
  {
    document.getElementById('emailError').style.display = "none";
    document.getElementById('passwordError').style.display = "none";
    window.location.href = "index.html";
  }
 
});
function myFunction() {
  var x = document.getElementById("mySelect").value;
  document.getElementById("demo").innerHTML = "You selected: " + x;
}
function passwordChange() {
    document.getElementById('passwordError').style.display = "none";
}
function emailChange() {
  document.getElementById('emailError').style.display = "none";
}
function signup(){
  window.location.href = "signup.html";
}

