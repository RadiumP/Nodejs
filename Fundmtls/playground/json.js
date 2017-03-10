////jsonize
//var obj = {
//    name: 'Andrew'
//};
//
//var stringObj = JSON.stringify(obj);
//
//console.log(typeof stringObj);
//console.log(stringObj);
//
////parse
//var personString = '{"name": "Andrew", "age": 25}';
//var person = JSON.parse(personString);
//
//console.log(typeof person);
//console.log(person);

//save file
const fs = require('fs');
var originalNote = {
    title: 'Name',
    body: 'Content'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);


//note
console.log(typeof note);
console.log(note.title);



