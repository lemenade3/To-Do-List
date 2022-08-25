// Imports from various modules

import pageLoad from './pageLoad';
import {ToDo, Project} from './classes';
import {writeProject, clearFields, clearList} from './domManipulation';
import './style.css';
import {makeActive, activeProject} from './projectController';

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

let projectList = []

// Creates Default Project

let defaultProject = new Project('All Items', 'A List of All Outstanding Items');
writeProject(defaultProject);
makeActive(defaultProject)
projectList.push(defaultProject);

// Button creates new Project

projectButton.addEventListener('click', () => {
    let project = new Project(projectTitle.value, projectDescription.value)
    writeProject(project)
    makeActive(project);
    clearFields();
    projectList.push(project);
    changeProject()
})

// Move the below to projectController

function changeProject() {
    let projects = document.querySelectorAll('.project')
    projects.forEach(project => {
        project.addEventListener('click', () => {
            clearList()
            for (let i = 0; i < projectList.length; i++) {
                if (project.lastChild.id === projectList[i].id) {
                    makeActive(projectList[i])
                    activeProject.writeList();
                }
            }
        })
    })
}

//Button creates new ToDo

toDoButton.addEventListener('click', () => {
    let toDo = new ToDo(title.value, description.value, dueDate.value, priority.value, notes.value, done.value);
    clearList()
    activeProject.list.push(toDo);
    activeProject.writeList();
    if (activeProject != defaultProject) { // This line should also be within projectswitcher
        defaultProject.list.push(toDo);
    };
    clearFields();
});
