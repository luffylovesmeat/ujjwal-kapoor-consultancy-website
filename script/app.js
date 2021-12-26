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

  // Save message
  
  saveMessage(firstName, lastName, phoneNumber, emailAddress, contactMessage);
  window.alert("Form Submit Successfully");

  // Clear form
  inputForm.reset();
}

function saveMessage(fName, lName, phone, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    FirstName: fName,
    LastName: lName,
    phone: phone,
    email: email,
    message: message
  });
}



particlesJS.load(
  "particles-js",
  "./script/particlesjs-config.json",
  function () {
    console.log("callback - particles.js config loaded");
  }
);
particlesJS.load(
  "particles-js2",
  "./script/particlesjs-config.json",
  function () {
    console.log("callback - particles.js2 config loaded");
  }
);
particlesJS.load(
  "particles-js3",
  "./script/particlesjs-config.json",
  function () {
    console.log("callback - particles.js2 config loaded");
  }
);
particlesJS.load(
  "particles-js4",
  "./script/particlesjs-config.json",
  function () {
    console.log("callback - particles.js2 config loaded");
  }
);
(function () {
  "use strict";

  document
    .querySelector("#navbarSideCollapse")
    .addEventListener("click", function () {
      document.querySelector(".offcanvas-collapse").classList.toggle("open");
    });
})();