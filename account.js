const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
     wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

let popup=document.getElementById("popup");
function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){ 
}
// Function to register a user
function registerUser(event) {
    event.preventDefault(); // Prevent form submission
    
// Validate form fields
var a = document.forms["myName"]["username"].value;
var b = document.forms["myName"]["email"].value;
var c = document.forms["myName"]["password"].value;

if (a == "") {
  alert("Username must be filled out");
  return false;
}
 if (b == "") {
    alert("Email must be filled out");
    return false;
  }
  if (c == "") {
    alert("Password must be filled out");
    return false;
  }

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    
    // Store user data in sessionStorage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Registration successful! You can now log in.');
    document.getElementById('registrationForm').reset();


}

// Function to log in a user
function loginUser(event) {
    event.preventDefault(); // Prevent form submission

    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

// Validate form fields
var x = document.forms["myForm"]["email"].value;
var c = document.forms["myForm"]["password"].value;


if (x == "") {
  alert("Email must be filled out");
  return false;
}
 if (c == "") {
    alert("Password must be filled out");
    return false;
  }
   

    if (loginEmail === storedEmail && loginPassword === storedPassword) {
        alert('Login successful! Welcome, ' + localStorage.getItem('username') + '!');
        window.location.href = 'bookingForm.html'; // Redirect to user dashboard
    } else {
        alert('Invalid email or password. Please try again.');
    }
}

// Function to log out a user
function logoutUser() {
  /*localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('password'); */
    
    alert('You have logged out successfully.');
    window.location.href = 'index.html'; // Redirect to login page
}



