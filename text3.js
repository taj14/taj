// text3.js
function saveNote() {
  // Get the text area value
  const note = document.getElementById('note').value;

  // Get the existing notes from local storage
  let notes = localStorage.getItem('notes');

  // If notes is null, initialize it as an empty array
  if (!notes) {
    notes = [];
  } else {
    // Parse the notes from JSON string to an array
    notes = JSON.parse(notes);
  }

  // Add the new note to the array
  notes.push(note);

  // Convert the array to a JSON string and save it to local storage
  localStorage.setItem('notes', JSON.stringify(notes));

  // Clear the text area
  document.getElementById('note').value = '';

  // Display the saved notes
  displayNotes();
}

function displayNotes() {
  // Get the notes from local storage
  const notes = JSON.parse(localStorage.getItem('notes'));

  // Create a list of notes
  const notesList = document.getElementById('notes');
  notesList.innerHTML = '';

  notes.forEach((note, index) => {
    const noteElement = document.createElement('p');
    noteElement.textContent = `${index + 1}. ${note}`;

    // Create a delete button for each note
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'حذف';
    deleteButton.style.backgroundColor = 'red';
    deleteButton.style.color = 'white';
    deleteButton.onclick = () => {
      deleteNote(index);
    };
    noteElement.appendChild(deleteButton);

    notesList.appendChild(noteElement);
  });
}

function deleteNote(index) {
  // Get the notes from local storage
  const notes = JSON.parse(localStorage.getItem('notes'));

  // Remove the note at the specified index
  notes.splice(index, 1);

  // Convert the array to a JSON string and save it to local storage
  localStorage.setItem('notes', JSON.stringify(notes));

  // Display the updated notes
  displayNotes();
}

// Load the saved notes when the page loads
document.addEventListener('DOMContentLoaded', displayNotes);