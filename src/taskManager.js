
// Only for storing, adding and retrieving tasks data

import { randomNumGenerator } from "./randomNumGenerator";

const taskManager = (function() {
    let tasks = [
        {
            taskName: "task1",
            description: "random desc",
            dueDate: "April 1, 2025",
            priority: "priority",
            notes: "test note 1",
            id: randomNumGenerator(),
            project: "misc"
        },
        {
            taskName: "task0",
            description: "random desc",
            dueDate: "May 1, 2025",
            priority: "priority",
            notes: "test note 2",
            id: randomNumGenerator(),
            project: "project 2"
        },
        {
            taskName: "task3",
            description: "random desc",
            dueDate: "December 1, 2025",
            priority: "priority",
            notes: "test note 3",
            id: randomNumGenerator(),
            project: "project 3"
        }
    ];

    // Basic add, delete, get task functions
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

    const getSpecificTask = function(id) {
        for(let i = 0; i < tasks.length; i++) {
            if(tasks[i].id === parseInt(id)) {
                return tasks[i];
            }
        }
    }

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

    // Notes functions
    const updateNotes = function(task, note) {
        task.notes = note;
    }

    const getNotes = (task) => task.notes;



    return {addTask, deleteTask, getTasks, getSpecificTask, filterTasks, getProjects, updateNotes, getNotes};
}())

export {taskManager};


// add a random id to each task so it can be specifically deleted
