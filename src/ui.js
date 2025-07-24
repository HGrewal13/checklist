import { taskManager } from "./taskManager.js";
import { taskController } from "./taskController.js";

const UI = (function() {
    const addNew = document.querySelector(".addNew");
    const dialog = document.getElementById("taskCreation");
    const form = document.querySelector("form");
    const submitButton = document.querySelector(".submitButton");
    const checklist = document.querySelector(".checklist");

    const clearChecklist = function() {
        console.log(taskManager.getTasks());
        checklist.innerHTML = "";
    }

    const renderTask = function(taskObj) {
        const task = document.createElement("div");
        task.classList.add("task");
        task.dataset.id = taskObj.id;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "completed";
        checkbox.classList.add("status");

        const taskName = document.createElement("h3");
        taskName.classList.add("taskName");
        taskName.textContent = taskObj.taskName;

        const description = document.createElement("p");
        description.classList.add("description");
        description.textContent = taskObj.description;

        const dueDate = document.createElement("p");
        dueDate.classList.add("dueDate");
        dueDate.textContent = taskObj.dueDate;

        const tools = document.createElement("div");
        tools.classList.add("tools");

        const note = document.createElement("div");
        note.classList.add("note");

        const trash = document.createElement("div");
        trash.classList.add("trash");

        // Appends
        checklist.appendChild(task);
        task.appendChild(checkbox);
        task.appendChild(taskName);
        task.appendChild(description);
        task.appendChild(dueDate);
        task.appendChild(tools);
        tools.appendChild(note);
        tools.appendChild(trash);
    }

    // Event Listeners

    addNew.addEventListener("click", e => {
        console.log("add new");
        dialog.showModal();
    })

    submitButton.addEventListener("click", e => {
        e.preventDefault();
        dialog.close();
        const name = form.taskName.value;
        const desc = form.description.value;
        const date = form.dueDate.value;
        const prio = form.priority.value;

        taskController.processNewTask(name, desc, date, prio);
        clearChecklist();

        taskManager.getTasks().forEach(t => {
            console.log(t);    
            renderTask(t);
        })
    })

    checklist.addEventListener("click", e => {
        const parentTask = e.target.parentElement.parentElement;
        const taskId = parentTask.dataset.id;
        if(e.target.classList.contains("trash")) {
            taskManager.deleteTask(taskId);
            clearChecklist();
            taskManager.getTasks().forEach(t => {  
                renderTask(t);
            })
        }
    })
}())

export {UI};