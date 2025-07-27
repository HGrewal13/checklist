import { taskManager } from "./taskManager.js";
import { taskController } from "./taskController.js";
import noteIcon from "../assets/noteIcon.svg";
import trashIcon from "../assets/trashIcon.svg";

const UI = (function() {
    const addNew = document.querySelector(".addNew");
    const formDialog = document.getElementById("taskCreation");
    const form = document.querySelector("form");
    const submitButton = document.querySelector(".submitButton");
    const checklist = document.querySelector(".checklist");
    const projectsList = document.querySelector("#projectsList");
    const sidebar = document.querySelector(".sidebar");

    // Functions
    const clearElement = function(element) {
        element.innerHTML = "";
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

        const note = document.createElement("img");
        note.classList.add("note");
        note.src = noteIcon;

        const trash = document.createElement("img");
        trash.classList.add("trash");
        trash.src = trashIcon;

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

    const renderProjects = function(project) {
        const sidebar = document.querySelector(".sidebar");
        const projectEl = document.createElement("li");
        projectEl.classList.add("projectItem");
        projectEl.textContent = project;
        projectsList.appendChild(projectEl);
    }

    // used by itself when filtering
    // can possibly shorten this to accept tasks or projects and render based on that.-----------------------------
    const handleRenderTasks = function(tasks) {
        clearElement(checklist);

        tasks.forEach(t => {  
            renderTask(t);
        })
    }

    const handleRenderProjects = function(projects) {
        clearElement(projectsList);

        projects.forEach(p => {  
            renderProjects(p);
        })
    }

    const handleRenderTasksAndProjects = function(tasks, projects) {
        clearElement(checklist);
        clearElement(projectsList);

        handleRenderTasks(tasks);
        handleRenderProjects(projects);
    }

    // Event Listeners

        // fix this so filtered works with a general render function
    sidebar.addEventListener("click", e => {
        if(e.target.classList.contains("projectItem")) {
            console.log("filtering");
            const value = e.target.textContent;
            const filtered = taskManager.filterTasks(value);
            handleRenderTasks(filtered);
        }
    })

    addNew.addEventListener("click", e => {
        console.log("add new");
        formDialog.showModal();
    })

    submitButton.addEventListener("click", e => {
        e.preventDefault();
        formDialog.close();
        const name = form.taskName.value;
        const desc = form.description.value;
        const date = form.dueDate.value;
        const prio = form.priority.value;
        const proj = form.project.value;

        taskController.processNewTask(name, desc, date, prio, proj);
        handleRenderTasksAndProjects(taskManager.getTasks(), taskManager.getProjects());
    })

    checklist.addEventListener("click", e => {
        const noteDialog = document.querySelector("#noteCreation");
        const parentTask = e.target.parentElement.parentElement;
        const taskId = parentTask.dataset.id;
        if(e.target.classList.contains("note")) {
            noteDialog.showModal();
            // should show the task's list of notes, and an add note button
        }
    })

    checklist.addEventListener("click", e => {
        const parentTask = e.target.parentElement.parentElement;
        const taskId = parentTask.dataset.id;
        if(e.target.classList.contains("trash")) {
            taskManager.deleteTask(taskId);
            handleRenderTasksAndProjects(taskManager.getTasks(), taskManager.getProjects());
        }
    })
}())

export {UI};