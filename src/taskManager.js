
// Only for storing, adding and retrieving tasks

const taskManager = (function() {
    let tasks = [];

    const addTask = function(task) {
        tasks.push(task);
    }

    const deleteTask = function(id) {
        for(let i = 0; i < tasks.length; i++) {
            if(tasks[i].id === parseInt(id)) {
                tasks.splice(i,1);
            }
        }
    }

    const getTasks = () => [...tasks];

    return {addTask, deleteTask, getTasks};
}())

export {taskManager};


// add a random id to each task so it can be specifically deleted
