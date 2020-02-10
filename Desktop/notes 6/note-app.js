let notes = getSavedNotes

const filters = {
  searchText: ''
};

renderNotes(notes, filters) // Calling the variables we had earlier i.e. notes and filters

document.querySelector('#create-notes').addEventListener('click', function(e) {
  notes.push({
    title: '',
    body: ''
  });
  saveNotes(notes)
  renderNotes(notes, filters);
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters) //Added an eventListener so that one can filter the words we have on the array
})

// document.querySelector('#name-form').addEventListener('submit', function (e) {
//   e.preventDefault(); //Stops the browser from sending info into the server...it prevents the question mark from appearing
//   console.log(e.target.elements.firstName.value);
//   e.target.elements.firstName.value = ''
// })

document.querySelector('#filter-by').addEventListener('change', function (e) {
  console.log(e.target.value);
})

// document.querySelector('#create-notes').addEventListener('click', function (e) {
//   console.log(e.target.value);
// })

// document.querySelector('#remove-notes').addEventListener('click', function (e) {
//   console.log(e.target.value);
// })
