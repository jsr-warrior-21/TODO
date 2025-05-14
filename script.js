let button = document.getElementById("btn");
let data = document.querySelector("input");
let ul = document.querySelector("ul");

button.addEventListener("click", () => {
    if (data.value.trim() === "") {
        alert("Task is Empty.");
        return;
    }

    let Myli = document.createElement("li");
    Myli.appendChild(document.createTextNode(data.value));

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

   
    delBtn.addEventListener("click", function () {
        this.parentElement.remove();
    });

    Myli.appendChild(delBtn);
    ul.appendChild(Myli);
});
