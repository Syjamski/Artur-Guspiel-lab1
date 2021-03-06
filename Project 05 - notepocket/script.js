//Function for creating the notes
const noteMaker = function() {
    //Taking users input
    let taskTitle = document.querySelector("#title").value;
    let task = document.querySelector("#note").value;

    //Taking divs elements
    let title = document.querySelector("#note-title");
    let text = document.querySelector("#note-text");

    //Adding the date
    const date = new Date();
    const dateText = date.getDate() + '.' + (date.getMonth()+1) + '.' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
    
    //Creating the note itself
    let note = document.createElement("div");
    note.setAttribute("class", "note");


    note.appendChild(document.createTextNode(taskTitle));
    note.appendChild(document.createElement("br"));
    note.appendChild(document.createTextNode(task));
    note.appendChild(document.createElement("br"));
    note.appendChild(document.createElement("br"));
    note.appendChild(document.createTextNode(dateText));
    text.appendChild(note);

    document.querySelector("#title").value = "";
    document.querySelector("#note").value = "";

    //Colors of the notes
    let color = document.querySelector("#colors").value;
    if (color == "green") {
        note.style.backgroundColor = "#05ad29";
    }
    else if(color == "yellow") {
        note.style.backgroundColor = "#fbf012";
    }
    else if (color == "red") {
        note.style.backgroundColor = "#f10b00";
    }
    else if (color == "blue") {
        note.style.backgroundColor = "#099ad0";
    }

    //Removing the note 
    note.onclick = removeBox;
}


//Forcing creation on enter
document.body.onkeyup = function(e) {
    if(e.keyCode == 13) {
        newTask();
    }
}

//Removing the note

function removeBox(e) {
    e.target.parentElement.removeChild(e.target);
}

//Everything needed for localstorage

const form = document.querySelector("#panel");
const input = document.querySelector("#note");

form.addEventListener('submit', function(e) {
    e.preventDefault();

    itemArray.push(input.value);
    localStorage.setItem('item', JSON.stringify(itemArray));
});

let itemArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];;

localStorage.setItem('items', JSON.stringify(itemArray));
const data = JSON.parse(localStorage.getItem('items'));

data.forEach(item => {
    boxMaker(item);
});