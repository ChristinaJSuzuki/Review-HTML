document.addEventListener("DOMContentLoaded", function () {
  var colorBox = document.getElementById("color-box");
  var colors = ["#FFC0CB", "#FA8072", "#FFFACD", "98FB98", "#ADD8E6"];
  var currentColorIndex = 0;

  document
    .getElementById("change-color")
    .addEventListener("click", function () {
      //Uodate the current color index
      currentColorIndex = (currentColorIndex + 1) % colors.length;
      //Change the color of the box
      colorBox.style.backgroundColor = colors[currentColorIndex];
    });
});
