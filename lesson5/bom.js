const input = document.getElementById("favchap");
const list = document.getElementById("list");
const addButton = document.getElementById("add");

addButton.addEventListener('click', function(){
    const userInput = input.value;
    if (userInput !== ""){
        const listElements = document.createElement("li");
        listElements.textContent = userInput[0].toUpperCase() + userInput.slice(1).toLowerCase();
        const removeItemButton = document.createElement("button");
        removeItemButton.textContent = "X";
        removeItemButton.setAttribute("id","button");
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