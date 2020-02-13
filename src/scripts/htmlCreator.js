let moneySymbol = "$";
let reviewZone = "";
let flag = "";

const htmlCreator = interests => {
    if (interests.place.id === 1) {
        moneySymbol = "€"
        flag = `<img class="flag" src="pictures/ItalianFlag.png">`
    } else if (interests.place.id === 2) {
        moneySymbol = "Fr"
        flag = `<img class="flag" src="pictures/SwissFlag.jpg">`
    } else if (interests.place.id === 3) {
        moneySymbol = "€"
        flag = `<img class="flag" src="pictures/FrenchFlag.jpg">`
    } if (interests.review == "") {
        reviewZone = ""
    } else {
        reviewZone = `<p><strong>Review: </strong>${interests.review}</p>`
    }
    return `
    <hr>
    <p><strong>Point of interest:</strong> ${interests.name}
    <button class="deleteButton" id=delete-${interests.id}>Delete</button>
    <button class="editButton" id=edit-${interests.id}>Edit</button>
    <p><strong>Description:</strong> ${interests.description}</p>
    <p id="cost-${interests.id}"><strong>Cost:</strong> ${moneySymbol} ${interests.cost}<span>${flag}</p>
    <p><strong>Country:</strong> ${interests.place.name}</p>
    ${reviewZone}
    `
}

export default htmlCreator;