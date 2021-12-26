const inputForm = document.querySelector(".contact-form");

let messagesRef = firebase.database().ref("messages");

// Listen for form submit
inputForm.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //Get value
  // let name = getInputVal('name');
  // let company = getInputVal('company');
  // let email = getInputVal('email');
  // let phone = getInputVal('phone');
  // let message = getInputVal('message');
  let firstName = document.querySelector("#first-name").value;
  let lastName = document.querySelector("#last-name").value;
  let phoneNumber = document.querySelector("#phone-number").value;
  let emailAddress = document.querySelector("#email-id").value;
  let contactMessage = document.querySelector("#contact-message").value;
  let currentTime = String(new Date());

  // Save message

  saveMessage(
    firstName,
    lastName,
    phoneNumber,
    emailAddress,
    contactMessage,
    currentTime
  );
  // window.alert("Form Submit Successfully");
  setTimeout(function () {
    location.href = "https://ujjwalkapoor.com/thanku.html";
  }, 1000);

  // Clear form
  inputForm.reset();
}

function saveMessage(fName, lName, phone, email, message, time) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    FirstName: fName,
    LastName: lName,
    Phone: phone,
    Email: email,
    Message: message,
    Date: time,
  });
}
