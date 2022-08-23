// Imports from various modules

import pageLoad from './pageLoad';
import {ToDo, Project} from './classes';
import {writeProject, clearFields} from './domManipulation';
import './style.css';

// Calls initial page load

pageLoad();

// Query Selectors for the To Do inputs and submit button

let toDoButton = document.querySelector('#newToDo');
let title =  document.querySelector('#title');
let description = document.querySelector('#description');
let dueDate = document.querySelector('#dueDate');
let priority = document.querySelector('#priority');
let notes = document.querySelector('#notes');
let done = document.querySelector('#done');

// Query Selectors for the Project Inputs

let projectButton = document.querySelector('#newProject');
let projectTitle = document.querySelector('#pTitle');
let projectDescription = document.querySelector('#pDescription');

let allToDos = new Project('All Items', 'A List of All Outstanding Items');
writeProject(allToDos);

// Stores the active project, this should be put somewhere better once the app is working fully
let activeProject;

// Button creates new Project

projectButton.addEventListener('click', () => {
    let project = new Project(projectTitle.value, projectDescription.value)
    writeProject(project)
    activeProject = project;
    clearFields();
})

//Button creates new ToDo

toDoButton.addEventListener('click', () => {
    let toDo = new ToDo(title.value, description.value, dueDate.value, priority.value, notes.value, done.value);
    allToDos.list.push(toDo);
    allToDos.writeList();
    if (activeProject != undefined) {
        activeProject.list.push(toDo);
        activeProject.writeList();
        console.log(activeProject.list)
        console.log(allToDos.list)
    }
    clearFields();
});

// todos need to have a project field which determines where the todo is shown