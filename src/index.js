console.log("YEE")

function getWeatherData() {
    // get city name from input field
    city = $('#city').val();
    requestURL = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=57929bf0b3325f1c124d69b87728dc32'
    $.ajax({
        url: requestURL, 
        success: function(data){
            console.log(data);
            //Temp is given in Kelvin, transform to Celsius and cut off after 2 digits
            degree = (data.main.temp - 273.15).toFixed(2);
            $('#hello').text("It is "+ degree + " °C right now in " + city);
        }
    });
}