//console.log('Start notes.js');
const fs = require('fs');


var fetchNotes = () =>{
    //avoid read non-existed file
    try{
        //avoid clearing when adding
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString); 
    } catch(e){
        return [];
    }
    
};

var saveNotes = (notes) => {
     fs.writeFileSync('notes-data.json', JSON.stringify(notes));    
};


var addNote = (title, body) =>{
    //console.log('Adding note', title, body);
    
    var notes = fetchNotes();
    var note = {
        title,
        body,
    };
     
//    var duplicateNotes = notes.filter((note) =>{
//        return note.title === title;
//    });
    
    var duplicateNotes = notes.filter((note)=> note.title === title); 
    
    if(duplicateNotes.length === 0){
        notes.push(note);    
        saveNotes(notes);
        return note;
    }
    
};

var getAll = ()=>{
  console.log('Getting all notes');
    return fetchNotes();
};

var getNote = (title)=>{
  //console.log('Get note', title);  
    //fetch
    var notes = fetchNotes();
    //filter
   
    
    var gotNotes = notes.filter((note)=> note.title === title);
    if(gotNotes.length === 0){
        return false;
    }else {
        return gotNotes[0];
    }
};
var removeNote = (title)=>{
    //console.log('Remove note', title);
   
    //fetch
    var notes = fetchNotes();
    //filter
   
    
    var leftNotes = notes.filter((note)=> note.title !== title); 
    //save
//    if(leftNotes.length === notes.length){
//        console.log('Not found');
//    }else {
//        console.log('Removed');
//    }
    saveNotes(leftNotes);
    return leftNotes.length !== notes.length
};

var logNote = (note) =>{
    console.log(`Title: ${note.title}, Body: ${note.body} . `);
};

module.exports = {
    //same as addNote:addNote  
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};
//module.exports.age = 25;
//
//module.exports.addNote = () => {
//    console.log('addNote');
//    return 'new note';
//};
//
//
//module.exports.add = (a, b) =>{
//    console.log('add');
//    return a + b;
//};