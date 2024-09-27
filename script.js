$(document).ready(function(){
  $('#icon').click(function(){
      $('ul').toggleClass('show');
  });

  // Hide the menu when a link is clicked
  $('.nav-links a').click(function(){
      $('ul').removeClass('show');
  });
});
function validateForm(event){
  event.preventDefault(); // Prevent form submission
  // Validate form fields
  var x = document.forms["myName"]["firstName"].value;
  var c = document.forms["myName"]["lastName"].value;
  var v = document.forms["myName"]["emailAddress"].value;
  var n = document.forms["myName"]["message"].value;
  
  if (x == "") {
    alert("First Name must be filled out");
    return false;
  }
   if (c == "") {
      alert("Last Name must be filled out");
      return false;
    }
     if (v == "") {
      alert("Email must be filled out");
      return false;
    }
     if (n == "") {
      alert("message must be filled out");
      return false;
    }
    
}
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const mess = document.getElementById("message");

function validateForm() {
    const errors = [];

    // Check if fields are empty
    if (fullName.value.trim() === "") {
        errors.push("First Name must be filled out.");
    }
    if (surname.value.trim() === "") {
        errors.push("Last Name must be filled out.");
    }
    if (email.value.trim() === "") {
        errors.push("Email must be filled out.");
    }
    if (mess.value.trim() === "") {
        errors.push("Message must be filled out.");
    }

    // If there are errors, alert and return false
    if (errors.length > 0) {
        alert(errors.join("\n")); // Join the errors with line breaks
        return false;
    }
    return true; // No errors found
}

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Surname: ${surname.value}<br> Email: ${email.value}<br> Message: ${mess.value}`;
    
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "mlenzentosh@gmail.com",
        Password: "095631EB0A05B999527BCF787EDC96A77554",
        To: 'mlenzentosh@gmail.com',
        From: "mlenzentosh@gmail.com",
        Subject: "Enquiry Feedback",
        Body: bodyMessage
    }).then(
        message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateForm()) { // Only send email if validation passes
        sendEmail();
    }
});
