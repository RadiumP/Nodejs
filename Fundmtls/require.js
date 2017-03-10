//console.log("Start require.js");

//title obj
const titleOptions = {
    describe:'Title of note',
    demand: true,
    alias: 't'//use -t available
};

const bodyOptions = {
    describe:'Body of note',
    demand: true,
    alias: 'b'//use -t available
};

//file system
const fs = require('fs');
//operating system
//const os = require('os');

//3rd package
const _ = require('lodash');
const yargs = require('yargs');

//point to dir
const notes = require('./notes.js');

//get command after node xx.js 'command'
//create a help flag
//demand make sure the js won't run w/o the command
const argv = yargs
.command('add','Add a new note', {
    title:titleOptions,
    body:bodyOptions   
})
.command('list', 'List all notes')
.command('read', 'Read a note', {
    title:titleOptions
})
.command('remove', 'Remove a note', {
    title:titleOptions
})
.help()
.argv;
var command = process.argv[2];
//console.log('Command: ', command);
//console.log('Process: ',process.argv);
//console.log('Yargs: ',argv);

if(command === 'add'){
    //console.log('Adding new note');
    var note = notes.addNote(argv.title, argv.body);
    //console.log([]);
    if(note){
        notes.logNote(note);
        console.log(`Added`)
    }else {
        console.log("Title Duplicate");
    }
}else if(command === 'list'){
    //console.log('Listing all notes');
    var allNotes = notes.getAll();
    console.log(`${allNotes.length} notes`);
    allNotes.forEach((note) => notes.logNote(note));
}else if(command === 'read'){
    //console.log('Reading note');
    var note = notes.getNote(argv.title);
   
    if(note){
        notes.logNote(note);
        console.log(`Found`)
    }else {
        console.log("Not Found");
    }
}else if(command === 'remove'){
    //console.log('Removing note ');
    var noteRmved = notes.removeNote(argv.title);
    var message = noteRmved ? 'Removed' : 'Not found';
    console.log(message);
}
else {
    console.log('Not recognized');
}



//3rd party methods
//console.log(_.isString(true));




//var user = os.userInfo();
//
//var res = notes.addNote();
//console.log(res);
//
//var sum = notes.add(1,2);
//console.log(sum);




//fs.appendFile('greeting.txt', `Hello ${user.username}! You are ${notes.age}` ,function(err){
//    if(err){
//        console.log('Unable to write');
//    }
//});
//




