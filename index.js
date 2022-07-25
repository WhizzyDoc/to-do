let input = document.querySelector("#todo");
let btn = document.querySelector("#btn");
let list = document.querySelector("#list");
let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
savedTasks.forEach(addItems);

function addItems(text) {
    let li = document.createElement("li")
    li.innerHTML = text
    list.insertBefore(li, list.childNodes[0])
    
    const delBtn = document.createElement("button")
    delBtn.textContent = ""
    delBtn.classList.add("fa", "fa-trash-alt")
    li.appendChild(delBtn)
    
    delBtn.style.color = "yellow"
    delBtn.style.fontSize = "20px"
    delBtn.style.outline = "none"
    
    delBtn.addEventListener("click", (e) => {
        li.parentNode.removeChild(li);
        savedTasks = savedTasks.filter ((e) => e !== text);
        localStorage.setItem("tasks", JSON.stringify(savedTasks))
    });
}


btn.addEventListener("click", () => {
    let text =  input.value
    if (text === "") {
        alert("Hello, you didn't input anything.")
    } else {
        savedTasks.push(text)
        localStorage.setItem("tasks", JSON.stringify(savedTasks))
        input.value=""
        addItems(text)
    }
});


list.addEventListener("click", (e) => {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("done")
    }
});
