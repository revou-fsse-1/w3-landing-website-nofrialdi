//submit function
function submitFunction() {
  var fullName = document.getElementById("fullName").value;
  alert("Thank you " + fullName + " for filling out the form :)");
}
// navbar slide function
const menyToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menyToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
