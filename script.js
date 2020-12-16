var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var colorUni = document.getElementsByClassName("color1");

console.log(css);
console.log(color1);
console.log(color2);
console.log(colorUni[0]);

var settingGradient = function() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " +
  color2.value + ")";
  css.textContent = body.style.background + ";";
}

function setGradiendt(){
  body.style.background = "linear-gradient(to right, " + color1.value + ", " +
  color2.value + ")";
  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", settingGradient);
// color1.addEventListener("input", setGradiendt);

color2.addEventListener("input", function(){
  console.log(color2.value);
  body.style.background = "linear-gradient(to right, " + color1.value + ", " +
  color2.value + ")";
  css.textContent = body.style.background + ";";
});
