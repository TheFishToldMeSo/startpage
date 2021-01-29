/*CREATE OBJECTS{
    propertyLabel1: "property's value",
    propertyLabel2: "property's value"
}
*/
_0 = {
    base01: "#a03c3c",
    base02: "#5e1db2",
    base03: "#5fa092",
    base04: "#5e1db2",
    base05: "#5fa092",
    base06: "#5e1db2",
    base07: "#5fa092",
    base08: "#5e1db2"
}

_1  = {
    base01: "#b37979",
    base02: "#7b8d5e",
    base03: "#5fa092",
    base04: "#5e1db2",
    base05: "#5fa092",
    base06: "#5e1db2",
    base07: "#5fa092",
    base08: "#5e1db2"
}

_2 = {
    base01: "#b37979",
    base02: "#7b8d5e",
    base03: "#ce92b5",
    base04: "#5e1db2",
    base05: "#5fa092",
    base06: "#5e1db2",
    base07: "#5fa092",
    base08: "#5e1db2"
}

_3 = {
    base01: "#b37979",
    base02: "#7b8d5e",
    base03: "#ce92b5",
    base04: "#5e1db2",
    base05: "#5fa092",
    base06: "#5e1db2",
    base07: "#5fa092",
    base08: "#5e1db2"
}

_4 = {
    base01: "#b37979",
    base02: "#7b8d5e",
    base03: "#ce92b5",
    base04: "#5e1db2",
    base05: "#5fa092",
    base06: "#5e1db2",
    base07: "#5fa092",
    base08: "#5e1db2"
}

_5 = {
    base01: "#b37979",
    base02: "#7b8d5e",
    base03: "#ce92b5",
    base04: "#5e1db2",
    base05: "#5fa092",
    base06: "#5e1db2",
    base07: "#5fa092",
    base08: "#5e1db2"
}

//create list of themes objects
const givenThemes = [_0, _1, _2, _3, _4, _5];

//put all the properties' labels in one list as string 
const labels = ['base01', 'base02', 'base03', 'base04', 'base05', 'base06', 'base07', 'base08'];

//use Math.floor(Math.random() * n); 
//to returns a random integer from 0 to n
function cycleThemes(){
    //choose a random theme from list of givenThemes
    let themeIndex = (Math.floor(Math.random() * givenThemes.length));

    //loop through all the properties' labels and set them
    //with the theme-object's properties (whose named the same for convenience)
    labels.forEach(label =>{
        document.documentElement.style.setProperty(`--${label}`, givenThemes[themeIndex][label]);
    });
    //change the image according to theme's number
    document.getElementById('decoration').src =`images/${themeIndex}.JPG`;
}

//array of Note objects
const arr = [
    {
        title: "note 1",
        content: "content here"
    }
];

//put Note objects into the note containers section
arr.map(item => {
    document.querySelector('.extraNotes').innerHTML += 
    `<div class="note">
        <div class="title">${item.title}</div>
        <div class="content">${item.content}</div>
    </div>`;
});

//process clicking submit button
const submitButton = document.querySelector("input[type=submit]");
console.log(submitButton);
submitButton.addEventListener("click", function(e){
    const button = e.currentTarget; 
    const container = button.parentNode;
    
    const newNote = {
        title: container.querySelector("input.inputTitle").value,
        content: container.querySelector("input.inputContent").value
    };
    arr.push(newNote);

    console.log("point");
    document.querySelector('.extraNotes').innerHTML += 
    `<div class="note">
        <div class="title">${newNote.title}</div>
        <div class="content">${newNote.content}</div>
    </div>`;
    
    e.preventDefault();
});

function openForm() {
    document.getElementById("myNote").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myNote").style.display = "none";
  }


