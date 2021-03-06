import API from "./API.js";
import render from "./render.js";

API.getEntries().then(render);

// Reference fields in the form

const hiddenEntryId = document.querySelector("#entryId");
const nameInput = document.querySelector("#nameInput");
const descriptionInput = document.querySelector("#descriptionInput");
const costInput = document.querySelector("#costInput");
const reviewInput = document.querySelector("#reviewInput");
const countryInput = document.querySelector("#countryInput");
const updateButton = document.querySelector("#update");
const container = document.querySelector("#container");
const reviewBox = document.querySelector("#reviewBox");

const clearForm = () => {
  hiddenEntryId.value = "";
  nameInput.value = "";
  descriptionInput.value = "";
  costInput.value = "";
  reviewInput.value = "";
  reviewBox.setAttribute("hidden", "");
  nameInput.removeAttribute("disabled", "");
  descriptionInput.removeAttribute("disabled", "");
  countryInput.removeAttribute("disabled", "");
};

//Update event listener

const updateEventListener = () => {
  updateButton.addEventListener("click", () => {
    container.innerHTML = "";
    const newEntry = {
      placeId: parseInt(countryInput.value),
      name: nameInput.value,
      description: descriptionInput.value,
      cost: costInput.value,
      review: reviewInput.value
    };
    if (hiddenEntryId.value !== "") {
      newEntry.id = parseInt(hiddenEntryId.value);
      API.updateEntry(newEntry).then(() => {
        API.getEntries()
          .then(render)
          .then(clearForm);
      });
    } else {
      API.saveEntry(newEntry).then(() => {
        API.getEntries()
          .then(render)
          .then(clearForm);
      });
    }
  });
};

updateEventListener();

// Edit and delete buttons

container.addEventListener("click", event => {
  if (event.target.id.startsWith("delete-")) {
    const check = confirm("Are you sure you want to delete this entry?");
    if (check == true) {
      const entryToDelete = event.target.id.split("-")[1];
      API.deleteEntry(entryToDelete)
        .then(API.getEntries)
        .then(render)
        .then(clearForm);
    }
  } else if (event.target.id.startsWith("edit-")) {
    const entryToEdit = event.target.id.split("-")[1];
    API.refillEntry(entryToEdit);
    heading.scrollIntoView();
    reviewBox.removeAttribute("hidden");
    nameInput.setAttribute("disabled", "");
    descriptionInput.setAttribute("disabled", "");
    countryInput.setAttribute("disabled", "");
  }
});
