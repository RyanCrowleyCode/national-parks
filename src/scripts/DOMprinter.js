// function to create the individual HTML element for each park
const createHtmlEl = (park, weather) => {

    // create the elements
    const parkDiv = document.createElement("article")
    const parkName = document.createElement("h3")
    const parkDetails = document.createElement("p")
    const weatherPara = document.createElement("p")
    const weatherUl = document.createElement("ul")
    const currentLi = document.createElement("li")
    const todayLi = document.createElement("li")
    const weekLi = document.createElement("li")


    // populate elements
    parkName.textContent = `${park.name}`
    parkDetails.textContent = `This state park is located in ${park.state}`
    weatherPara.textContent = "Weather:"
    currentLi.textContent = `Currently: ${weather.currently.summary}`
    todayLi.textContent = `Today: ${weather.hourly.summary}`
    weekLi.textContent = `Week: ${weather.daily.summary}`


    // add classes that don't require extra logic
    parkDiv.classList.add("park-article")

    // logic for whether to add a green or red solid border to article tag
    if (park.visited) {
        parkDiv.classList.add("red-border")
    }  else {
        parkDiv.classList.add("green-border")
    }

    // append li's to ul
    weatherUl.appendChild(currentLi)
    weatherUl.appendChild(todayLi)
    weatherUl.appendChild(weekLi)

    // append elements to the parkDiv article
    parkDiv.appendChild(parkName)
    parkDiv.appendChild(parkDetails)
    parkDiv.appendChild(weatherPara)
    parkDiv.appendChild(weatherUl)
    
    // return parkDiv
    return parkDiv
}

// function to loop through an array of parks, call createHtmlEl function, and print parks to the DOM
const printParksToDOM = parkArray => {
    const parksContainer = document.createElement("div")

    parkArray.forEach( park => {
        weatherAPI.getWeather(park.latitude, park.longitude)
        .then(weather => parksContainer.appendChild(createHtmlEl(park, weather)))
    })

    // target the container div on the DOM, and update the DOM
    const containerEl = document.querySelector("#main-container")
    containerEl.appendChild(parksContainer)
}