window.onload = function () {
  let text = "";

  for (i = 0; i < 7; i++) {
    text = text + "The number is " + i + "<br>";
  }

  document.getElementById("demo").innerHTML = text;
};
