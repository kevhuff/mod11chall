let noteTitle = document.querySelector('.note-title');
let noteText = document.querySelector('.note-textarea');
let saveNoteButton = document.querySelector('.save-note');
let newNoteButton = document.querySelector('.new-note');
let noteList = document.querySelector('.list-group');

// Function to save a new note
saveNoteButton.addEventListener('click', function() {
  let newNote = {
    title: noteTitle.value,
    text: noteText.value
  };
  
  fetch('/api/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newNote),
  })
  .then(response => response.json())
  .then(data => {
    // Add new note to the note list
    let newNoteListItem = document.createElement('li');
    newNoteListItem.textContent = newNote.title;
    noteList.append(newNoteListItem);

    // Clear the note title and note text
    noteTitle.value = '';
    noteText.value = '';
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});

// Function to create a new note
newNoteButton.addEventListener('click', function() {
  noteTitle.value = '';
  noteText.value = '';
});

// Function to get all notes
window.addEventListener('load', function() {
  fetch('/api/notes')
    .then(response => response.json())
    .then(data => {
      data.forEach(note => {
        let noteListItem = document.createElement('li');
        noteListItem.textContent = note.title;
        noteList.append(noteListItem);
      });
    });
});
