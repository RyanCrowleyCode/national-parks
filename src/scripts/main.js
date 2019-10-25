// call fetch call function
// TODO: .then the parks response and send as argument to dom printer function.
parkAPI.getParks()
.then(parkList => printParksToDOM(parkList)) // put your function call here