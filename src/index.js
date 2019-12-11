// this is to remove problem messages regarding the $ import from jQuery
/* global $ */
import "./styles.css";
//add jQuery to this file
var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
script.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(script);

//add fontawesome to this file
var scriptFA = document.createElement("script");
scriptFA.src = "https://kit.fontawesome.com/6c6f98601d.js";
scriptFA.crossOrigin = "anonymous";
document.getElementsByTagName("head")[0].appendChild(scriptFA);

//this function will be executed when the button is clicked
function getWeatherData() {
  // get city name from input field via jQuery
  var city = $("#city").val();
  console.log(city);
  //construct the URL for the HTTP request
  var requestURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=57929bf0b3325f1c124d69b87728dc32";
  //use jQuery function to send HTTP GET request
  $.ajax({
    url: requestURL,
    //when the request is successful, execute this function
    success: function(data) {
      //log the retrieved data in the console
      console.log(data);
      //Temp is given in Kelvin, transform to Celsius and cut off after 2 digits
      var degree = (data.main.temp - 273.15).toFixed(2);
      //use jQuery to change the text from the element with id=hello
      $("#hello").text("It is " + degree + " °C right now in " + city);
      //use jQuery to add icon to info container
      if (!$("#icon").length) {
        $("#infoContainer").append('<i id="icon" class="fas fa-sun"></i>');
      } else {
        // don't do anything if icon already exists
      }
    }
  });
}

window.onload = function() {
  this.console.log("TEST");
};

//get button reference to modify in JavaScript
var button = document.getElementById("weatherbutton");
//add function to the button
button.addEventListener("click", getWeatherData);

// Get the input field
var input = document.getElementById("city");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("weatherbutton").click();
  }
});
