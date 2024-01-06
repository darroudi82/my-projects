// function for saving student information

// our array for saving people in the our class
var saved_name = [];
var saved_family = [];

function add() {
    // name and family that received from user
    var person_name = document.getElementById('name').value;
    var person_family = document.getElementById('family').value;

    // adding information from user to our array
    saved_family.push(person_family);
    saved_name.push(person_name);


}

var button = document.getElementById("button");
button.addEventListener("click", add);

// function for showing students information
function show() {
    var index = document.getElementById('index').value;
    index = parseInt(index) - 1;

    var p = saved_family[index] + " " + saved_name[index];
    var sh = document.getElementById("sh");

    // updating the paragraph with id 'sh'
    sh.innerHTML = p;
}

var button_2 = document.getElementById("button2");
button_2.addEventListener("click", show);






