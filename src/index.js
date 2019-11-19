import "./styles.css";
//add jQuery to this file
var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
script.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(script);

console.log("YEE");

function getWeatherData() {
  // get city name from input field
  var city = $("#city").val();
  var requestURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=57929bf0b3325f1c124d69b87728dc32";
  $.ajax({
    url: requestURL,
    success: function(data) {
      console.log(data);
      //Temp is given in Kelvin, transform to Celsius and cut off after 2 digits
      var degree = (data.main.temp - 273.15).toFixed(2);
      $("#hello").text("It is " + degree + " °C right now in " + city);
    }
  });
}

var button = document.getElementById("weatherbutton");
button.addEventListener("click", getWeatherData);
