// created object API that fetches from json server and returns a js object
const API = {
    getParks: function () {
        return fetch("http://localhost:8088/parks")
        .then(response => response.json())
    }
}
