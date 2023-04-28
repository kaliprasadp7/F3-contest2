const btn = document.getElementById("btn");
const show_div = document.getElementById("show-div");
const mapDiv = document.getElementById("map");
const weatherDataElement = document.getElementById("weather-div");
const geo = document.getElementById("geo");

// let map;

// map view api
// function initMap(){
//     map = new google.maps.Map(mapDiv, {
//         center:{lat:20.2960587, lng:85.8245398},
//         zoom: 8
//     });
//     console.log("hi")
// }
//end map view



btn.addEventListener("click", function () {

        navigator.geolocation.getCurrentPosition(
            function (position) {
                //    initMap(position.coords.latitude, position.coords.longitude)
                let lat = position.coords.latitude;
                let long = position.coords.longitude;
                const api = 'a3db74da61fed992fdd97c3c39c48eb8';
                const geomapapi = 'AIzaSyCIJroks17eUnE_CZ4oSVadGlH7Vtl9bFU';
                
                btn.style.display="none";
                show_div.style.display="block";

                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}`;

                geo.innerHTML = `<span>Lat:\u00A0${lat}</span>
                <span>Long:\u00A0${long}</span>`;

                // mapDiv.innerHTML=`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.416949233449!2d-${long}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1618592610451!5m2!1sen!2sus" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                // `;

                mapDiv.innerHTML=`<iframe src="https://www.google.com/maps?q=${lat},${long}&output=embed" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;


                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        // Do something with the weather data
                        console.log(data);
                        weatherDataElement.innerHTML = `Location:\u00A0${data.name}<br>
                    <div class="flex"><span>Lat:\u00A0${lat}</span>
                    <span>Long:\u00A0${long}</span></div>TimeZone:\u00A0${data.timezone}<br>WindSpeed:\u00A0${data.wind.speed}<br>Pressure:\u00A0${data.main.pressure}<br>Humidity:\u00A0${data.main.humidity}<br>Wind Direction:\u00A0${data.wind.deg}<br>Feels Like:\u00A0${data.main.feels_like}`;
                    })
                    .catch(error => {
                        console.error('Error:', error);
                });

            });

    },
    function errorCallback(error) {
        console.log(error)
    }
);