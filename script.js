// HTML elements select karo
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add button par click event
addBtn.addEventListener("click", function () {

    // Input se task lena
    const taskText = taskInput.value.trim();

    // Empty input check karna
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Naya list item banana
    const li = document.createElement("li");

    // Task ka text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Complete button banana
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";

    completeBtn.addEventListener("click", function () {
        span.style.textDecoration =
            span.style.textDecoration === "line-through"
                ? "none"
                : "line-through";
    });

    // Delete button banana
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    // Buttons aur text ko list mein add karna
    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    // Input box clear karna
    taskInput.value = "";
});