const API = {
  getEntries: function() {
    return fetch("http://localhost:3000/interests?_expand=place").then(resp =>
      resp.json()
    );
  },
  saveEntry(entry) {
    return fetch(`http://localhost:3000/interests/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    });
  },
  refillEntry(entryId) {
    const hiddenEntryId = document.querySelector("#entryId");
    const nameInput = document.querySelector("#nameInput");
    const descriptionInput = document.querySelector("#descriptionInput");
    const costInput = document.querySelector("#costInput");
    const reviewInput = document.querySelector("#reviewInput");
    fetch(`http://localhost:3000/interests/${entryId}`)
      .then(resp => resp.json())
      .then(entry => {
        hiddenEntryId.value = entry.id;
        nameInput.value = entry.name;
        descriptionInput.value = entry.description;
        costInput.value = entry.cost;
        reviewInput.value = entry.review;
      });
  },
  updateEntry(entry) {
    return fetch(`http://localhost:3000/interests/${entry.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    });
  },
  deleteEntry(entryId) {
    return fetch(`http://localhost:3000/interests/${entryId}`, {
      method: "DELETE"
    }).then(response => response.json());
  }
};

export default API;