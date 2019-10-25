// function to create the individual HTML element for each park
const createHtmlEl = park => {
    // create the elements
    const parkDiv = document.createElement("article")
    const parkName = document.createElement("h3")
    const parkDetails = document.createElement("p")

    // populate elements
    parkName.textContent = `${park.name}`
    parkDetails.textContent = `This state park is located in ${park.state}`

    // add classes that don't require extra logic
    parkDiv.classList.add("park-article")

    // logic for whether to add a green or red solid border to article tag
    if (park.visited) {
        parkDiv.classList.add("red-border")
    }  else {
        parkDiv.classList.add("green-border")
    }

    // append elements to the parkDiv article
    parkDiv.appendChild(parkName)
    parkDiv.appendChild(parkDetails)
    
    // return parkDiv
    return parkDiv
}

// function to loop through an array of parks, call createHtmlEl function, and print parks to the DOM
const printParksToDOM = parkArray => {
    const parksContainer = document.createElement("div")

    parkArray.forEach( park => {
        parksContainer.appendChild(createHtmlEl(park))
    })

    // target the container div on the DOM, and update the DOM
    const containerEl = document.querySelector("#main-container")
    containerEl.appendChild(parksContainer)
}