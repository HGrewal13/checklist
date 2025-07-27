
// Only for storing, adding and retrieving tasks data

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

    const filterTasks = function(project) {
        return tasks.filter(task => task.project === project);
    }

    const getProjects = () => {
        let uniqueProjects = [];
        
        tasks.forEach(task => {
            if(!uniqueProjects.includes(task.project)) {
                uniqueProjects.push(task.project);
            }
        });

        return uniqueProjects;
    }

    return {addTask, deleteTask, getTasks, filterTasks, getProjects};
}())

export {taskManager};


// add a random id to each task so it can be specifically deleted
