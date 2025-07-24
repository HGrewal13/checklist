// middle man to create new task and store in taskManager
// thought about creating the dom elements and passing to ui.js so it can render
    // but anything related to DOM should be in ui.js

import { task } from "./createTask";
import { taskManager } from "./taskManager";

const taskController = (function() {
    

    const processNewTask = function(name, desc, date, prio) {
        const newTask = new task(name, desc, date, prio);
        taskManager.addTask(newTask);
    }

    return {processNewTask};
}())

export {taskController};