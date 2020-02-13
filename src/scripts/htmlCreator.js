const htmlCreator = interests => {
    return `
    <hr>
    <p><strong>Point of interest:</strong> ${interests.name}</p>
    <p><strong>Description:</strong> ${interests.description}</p>
    <p><strong>Cost:</strong> $${interests.cost}</p>
    <p><strong>Country:</strong> ${interests.place.name}</p>
    <p><strong>Visa Required:</strong> ${interests.place.visa_required}</p>
    <p><strong>Review:</strong> ${interests.review}</p>
    <button id=delete-${interests.id}>Delete</button>
    <button id=edit-${interests.id}>Edit</button>
    `
}

export default htmlCreator;