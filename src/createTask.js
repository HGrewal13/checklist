// Only responsible for the blueprint of creating task objects
import { randomNumGenerator } from "./randomNumGenerator";

class task {
    constructor(taskName, description, dueDate, priority, project = null) {
        this.taskName = taskName;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = {};
        this.id = randomNumGenerator();
        this.project = project || "misc";
    }
}

export {task};