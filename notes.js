const fs = require("fs");
const chalk = require("chalk");
var fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.json"));
  } catch (err) {
    return [];
  }
};

var addingNote = (title, body) => {
  var notes = fetchNotes();

  var note = {
    title,
    body,
  };

  var double = notes.filter((note) => note.title === title);

  if (double.length === 0) {
    notes.push(note);

    fs.writeFileSync("notes.json", JSON.stringify(notes));
    console.log(chalk.black.bgGreenBright("New note created!"));
  } else {
    console.log(chalk.black.bgRedBright("Title already taken!"));
  }
};

var removeNote = (title) => {
  var notes = fetchNotes();

  var filteredNotes = notes.filter((note) => note.title !== title);
  if (notes.length === filteredNotes.length) {
    console.log(chalk.black.bgRedBright("Note not found!"));
  } else {
    fs.writeFileSync("notes.json", JSON.stringify(filteredNotes));
    console.log(chalk.black.bgGreenBright("Note removed!"));
  }
};

var readNote = (title) => {
  var notes = fetchNotes();

  var filteredNotes = notes.filter((note) => note.title === title);
  console.log(chalk.black.bgYellowBright(filteredNotes[0].title));
  console.log(filteredNotes[0].body);
};

var getAll = () => {
  var notes = fetchNotes();

  notes.forEach((note) => logNote(note));
};

var logNote = (note) => {
  console.log(note.title);
  //console.log(`Title: ${note.title}`);
  //console.log(`Body: ${note.body}`);
};

module.exports = {
  addingNote,
  removeNote,
  readNote,
  getAll,
};
