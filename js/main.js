var addbtn = document.querySelector("button");
var unordered = document.getElementById("u_list");
var list_item;

function addItem() {
    "use strict";
    list_item = document.createElement("li");
    list_item.innerHTML = prompt("Please enter item");
    if (list_item !== "") {
        unordered.appendChild(list_item);
        list_item.addEventListener("click", removeItem, false);
    }
}
addbtn.addEventListener("click", addItem, false);

function removeItem(ev) {
    "use strict";
    unordered.removeChild(ev.target);
    alert("Item will be removed");
}
// remove_btn.addEventListener("click", removeItem, false);