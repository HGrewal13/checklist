
// 🧠 Final Suggested Module Architecture:
// 1. Task Class Module (createTask.js)

//     Class that defines a Task with:

//         name, description, due date, priority, completed, (optionally project)

//     Keeps logic minimal — this is just the blueprint.

// 2. Task Manager Module (taskManager.js)

//     Central data store (an array of task objects)

//     Exposes methods:

//         addTask(taskObj)

//         removeTask(id or index)

//         toggleComplete(id)

//         editTask(id, newValues)

//         getTasks() / getTaskById()

//     Maybe getTasksByProject(projectName) later

//     Think of this as your model layer — it’s all about managing the data.

// 3. UI Module (taskUI.js)

//     Takes in task objects and renders them

//     Methods:

//         renderTask(taskObj)

//         removeTaskFromDOM(id)

//         updateTaskCompletion(id, isComplete)

//         renderAll(tasksArray)

//     You may even break this into:

//         Form-related UI

//         Task list UI

//     Focused purely on DOM interaction — no data logic.

// 4. Form Handler Module (formController.js)

//     Grabs user input

//     Clears or resets the form

//     Handles validation if needed

// 5. App Controller Module (main.js)

//     Coordinates everything:

//         Listens to form submission

//         Calls createTask(), taskManager.addTask()

//         Calls taskUI.renderTask()

//         Handles checkbox events, delete buttons, etc.

//         Syncs data and UI

//     This is your middleman/orchestrator.

// Optional for Later:
// 6. Project Manager Module

//     Stores an array of projects

//     Lets you create/delete/switch projects

//     Works with taskManager to filter tasks