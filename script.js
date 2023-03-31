input = document.getElementById("input");
add = document.getElementById("add");
list = document.getElementById("list");

add.addEventListener("click", item);
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        item();
    }
});

function item() {
    item = document.createElement("li");
    text = document.createTextNode(input.value);
    item.appendChild(text);
    list.appendChild(item);
    input.value = "";
    item.addEventListener("click", markDone);
}

function markDone() {
    this.classList.toggle("done");
    this.addEventListener("dblclick", removeItem);
}

function removeItem() {
    this.remove();
}