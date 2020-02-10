const getSavedNotes = function() {
  const notesJSON = localStorage.getItem('notes');


  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return []
  }
}


const saveNotes = function (notes) {
  localStorage.setItem('notes', JSON.stringify(notes));
};


const generateNoteDOM = function(note) {
  const noteEl = document.createElement('p');
  if (note.title.length > 0) {
    noteEL.textContent = note.title
  } else {
    noteEl.textContent = 'Unnamed Note'
  }

  return noteEl;
}


const renderNotes = function (notes, filters) { //The parameters do not refer to the variables named earlier. Instead they can be named anything i.e. (a, b)
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  });

  document.querySelector('#notes').innerHTML = ''

  filteredNotes.forEach(function (note) {
    const noteEl = generateNoteDOM(note);
    document.querySelector('#notes').appendChild(noteEl)
  })
}