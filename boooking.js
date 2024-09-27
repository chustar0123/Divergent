function bookSlot(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const emailAddress = document.getElementById('emailAddress').value.trim();
    const phoneNumber = document.getElementById('phoneNum').value.trim();
    const bookDate = document.getElementById('dateTime').value;
    const timeSlot = document.getElementById('timeSlot').value;
    const serviceType = document.getElementById('serviceType').value; 

    // Validate form fields
     var x = document.forms["myName"]["field1"].value;
    var c = document.forms["myName"]["field2"].value;
    var v = document.forms["myName"]["field3"].value;
    var n = document.forms["myName"]["field4"].value;
    var i = document.forms["myName"]["field5"].value;
    var m = document.forms["myName"]["field6"].value;
    var d = document.forms["myName"]["field7"].value;
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
        alert("Phone number must be filled out");
        return false;
      }
      if (i == "") {
        alert("Date must be filled out");
        return false;
      }
       if (m == "") {
        alert("Time must be filled out");
        return false;
      }
       if (d == "") {
        alert("Service must be filled out");
        return false;
      } 
  
    
    

    // Store user-specific booking data in localStorage
    const username = localStorage.getItem('username');
    localStorage.setItem(username + '_firstName', firstName);
    localStorage.setItem(username + '_lastName', lastName);
    localStorage.setItem(username + '_emailAddress', emailAddress);
    localStorage.setItem(username + '_phoneNum', phoneNumber);
    localStorage.setItem(username + '_dateTime', bookDate);
    localStorage.setItem(username + '_timeSlot', timeSlot);
    localStorage.setItem(username + '_serviceType', serviceType);

    // Display the booking details on the page
    document.getElementById('displayFullName').innerText = `${firstName} ${lastName}`;
    document.getElementById('displayEmail').innerText = emailAddress;
    document.getElementById('displayPhone').innerText = phoneNumber;
    document.getElementById('displayDate').innerText = bookDate;
    document.getElementById('displayTime').innerText = timeSlot;
    document.getElementById('displayService').innerText = serviceType;

    // Show the booking details section
    document.getElementById('bookingDetails').style.display = 'block';

    // Reset the form
    document.getElementById('bookingForm').reset();

    alert('Booking successful!');
}

  



// Function to validate email address
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

// Function to validate phone number (basic validation)
function validatePhoneNumber(phone) {
    const phonePattern = /^[0-9]{10,15}$/;
    return phonePattern.test(phone);
}


