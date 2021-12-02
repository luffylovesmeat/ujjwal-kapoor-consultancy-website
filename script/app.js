particlesJS.load("particles-js", "./script/particlesjs-config.json", function () {
  console.log("callback - particles.js config loaded");
});
particlesJS.load("particles-js2", "./script/particlesjs-config.json", function () {
  console.log("callback - particles.js2 config loaded");
});
particlesJS.load("particles-js3", "./script/particlesjs-config.json", function () {
  console.log("callback - particles.js2 config loaded");
});
(function () {
  'use strict'

  document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
    document.querySelector('.offcanvas-collapse').classList.toggle('open')
  })
})()