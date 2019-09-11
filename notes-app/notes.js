const fs = require("fs");

const getNotes = function () {
  console.log("Your Notes!");
};

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log("New Note Added");
  } else {
    console.log('Note Title Taken');
  }
};

const removeNote = function (title) {
  const notes = loadNotes();
  const notesToSave = notes.filter(function (note) {
    return note.title !== title;
  });
  if (notesToSave.length !== notes.length) {
    saveNotes(notesToSave)
    console.log("Note removed");
  } else {
    saveNotes(notes)
    console.log("Note does not exist");
  }
}

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const listNotes = function () {
  
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes
};
