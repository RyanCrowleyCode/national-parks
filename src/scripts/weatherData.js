// created object API that fetches from json server and returns a js object
const weatherAPI = {
    getWeather: function (lat, long) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${weatherApiKey}/${lat},${long}`)
        .then(response => response.json())
    }
}



