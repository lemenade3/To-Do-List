// Imports from various modules

import pageLoad from './pageLoad';
import {Project} from './projects';
import {clearFields, clearList, writeProject} from './domManipulation';
import './style.css';

// Calls initial page load

pageLoad();

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
});
