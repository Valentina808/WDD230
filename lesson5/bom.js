const input = document.getElementById("favchap");
const list = document.getElementById("list");
const addButton = document.getElementById("add");

addButton.addEventListener('click', function(){
    const userInput = input.value;
    if (userInput !== ""){
        const listElement = document.createElement("li");
        listElement.textContent = userInput[0].toUpperCase() + userInput.slice(1).toLowerCase();
        const removeItemButton = document.createElementNS("button");
        removeItemButton.textContent = "X";
        removeItemButton.setAttribute("id","dButton");
        removeItemButton.addEventListener('click', function(){
            listElements.remove();
            input.focus();
        });

        listElements.appendChild(removeItemButton);
        list.appendChild(listElements);
        input.value = '';
        input.focus();

    }
});