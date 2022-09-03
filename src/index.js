// Imports from various modules

import pageLoad from './pageLoad';
import {Project, activeProject} from './projects';
import ToDo from './toDos'
import {clearFields, clearList, writeProject} from './domManipulation';
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

// Button creates new Project and clears inputs

projectButton.addEventListener('click', () => {
    let project = new Project(projectTitle.value, projectDescription.value);
    clearList();
    clearFields();
    writeProject(project)
    project.makeActive();
});

//Button creates new ToDo

toDoButton.addEventListener('click', () => {
    let toDo = new ToDo(title.value, description.value, dueDate.value, priority.value, notes.value, done.value);
    clearList()
    activeProject.list.push(toDo);
    activeProject.writeList();
    clearFields();
}); // This button requies refactoring, most of this should be moved into todo class
