// Build an application that gets data about national parks from your json-server API and displays the list of national parks on the DOM. Each national park should be formatted in HTML like below:

// <article>
//     <h3>Park Name</h3>
//     <p>State the park in located in</p>
// </article>
// If the park has been visited, the article tag should have a red dashed border. If the park has not been visited, it should have a green solid border.

const createHtmlEl = park => {
    // create the elements
    const parkDiv = document.createElement("article")
    const parkName = document.createElement("h3")
    const parkDetails = document.createElement("p")

    // populate elements


    // logic for whether to add a green or red solid border to article tag


    // append elements to the parkDiv article

    
    // return parkDiv
    return parkDiv
}