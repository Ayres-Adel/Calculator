const display = document.getElementById("display");
let test = false;
function appendToDisplay(input) {
    if(test ==true) {
        display.value= null;
        test = false;
    }
    display.value += input;
}

function ClearToDisplay() {
    display.value= null;
}

function calculate() {
    display.value = eval(display.value);
     test = true;
}

