/*CREATE OBJECTS{
    propertyLabel1: "property's value",
    propertyLabel2: "property's value"
}
*/
_0 = {
    base01: "#a03c3c",
    base02: "#5e1db2",
    base03: "#5fa092",
    base04: "#350404"
}

_1 = {
    base01: "#b37979",
    base02: "#7b8d5e",
    base03: "#ce92b5",
    base04: "#4c71c0"
}

_2 = {
    base01: "#b37979",
    base02: "#7b8d5e",
    base03: "#ce92b5",
    base04: "#4c71c0"
}

_3 = {
    base01: "#b37979",
    base02: "#7b8d5e",
    base03: "#ce92b5",
    base04: "#4c71c0"
}

_4 = {
    base01: "#b37979",
    base02: "#7b8d5e",
    base03: "#ce92b5",
    base04: "#4c71c0"
}

_5 = {
    base01: "#b37979",
    base02: "#7b8d5e",
    base03: "#ce92b5",
    base04: "#4c71c0"
}

//create list of themes objects
const givenThemes = [_0, _1, _2, _3, _4, _5];

//put all the properties' labels in one list as string 
const labels = ['base01', 'base02', 'base03', 'base04'];

//use Math.floor(Math.random() * n); 
//to returns a random integer from 0 to n
function cycleThemes(){
    //choose a random theme from list of givenThemes
    let themeIndex = (Math.floor(Math.random() * givenThemes.length));
    console.log(themeIndex);

    //loop through all the properties' labels and set them
    //with the theme-object's properties (whose named the same for convenience)
    labels.forEach(label =>{
        document.documentElement.style.setProperty(`--${label}`, givenThemes[themeIndex][label]);
    });
    //change the image according to theme's number
    document.getElementById('decoration').src =`images/${themeIndex}.JPG`;
}


