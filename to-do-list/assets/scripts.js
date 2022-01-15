const ADD_IN = document.getElementById('buttonSubmit');
const TO_DO = document.getElementById('tarefa');
const LIST = document.getElementById('itemlist');

function loaded() {
    ADD_IN.addEventListener("click", function() {addList(TO_DO.value)}, false);
}

function addList(item) {
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    var li = document.createTextNode(item);
    var br = document.createElement("br");

    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("id", "checkBox");
    label.setAttribute("for", "checkBox");

    LIST.appendChild(checkBox);
    LIST.appendChild(label);
    LIST.appendChild(br);
    label.appendChild(li);
}

document.addEventListener("DOMContentLoaded", loaded, false);