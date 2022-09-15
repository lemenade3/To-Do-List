import { Project } from "./projects";
import { clearMain, clearFields, writeProject } from "./domManipulation";
import logoImg from './icons/logo.svg';
import addProject from './icons/addProject.svg'
import addProjectHover from './icons/addProjectHover.svg'

function pageLoad () {

    let body = document.querySelector('body');

    let header = document.createElement('header');

    let pageTitle = document.createElement('div');
    pageTitle.textContent = 'TASKR';

    let logo = new Image();
    logo.src = logoImg;

    header.append(pageTitle, logo);

    let centre = document.createElement('div');
    centre.setAttribute('id', 'centre');

    let sidebar = document.createElement('div');
    sidebar.setAttribute('id', 'sidebar');

    let defaultProjectsContainer = document.createElement('div');
    defaultProjectsContainer.setAttribute('id', 'defaultProjects')

    let projectsContainer = document.createElement('div');
    projectsContainer.setAttribute('id', 'writtenProjects')

    let projectsTitle = document.createElement('div');
    projectsTitle.setAttribute('id', 'projectsTitle')
    projectsTitle.textContent = 'Projects';

    projectsContainer.append(projectsTitle);

    sidebar.append(defaultProjectsContainer, projectsContainer);

    let main = document.createElement('div');
    main.setAttribute('id', 'main');

    let footer = document.createElement('footer');

    centre.append(sidebar, main);
    body.append(header, centre, footer);

    loadProjectFields();

};

function loadProjectFields() {
    let container = document.querySelector('#writtenProjects');
    let projectFields = document.createElement('div');
    projectFields.setAttribute('id', 'projectFields')

    let newProject = new Image();
    newProject.src = addProject;
    newProject.setAttribute('id', 'newProject');
    newProject.addEventListener('mouseover', () => {
        newProject.src = addProjectHover;
        newProject.addEventListener('mouseleave', () => {
            newProject.src = addProject;
        })
    })

    let projectTitleField = document.createElement('input');
    projectTitleField.setAttribute('type', 'text');
    projectTitleField.setAttribute('id', 'pTitle');
    projectTitleField.setAttribute('placeholder', 'Project Title...');

    let projectDescriptionField = document.createElement('input');
    projectDescriptionField.setAttribute('type', 'text');
    projectDescriptionField.setAttribute('id', 'pDescription');
    projectDescriptionField.setAttribute('placeholder', 'Project Description...');

    projectFields.append(projectTitleField, projectDescriptionField, newProject);

    container.append(projectFields)

    newProject.addEventListener('click', () => {
        let project = new Project(projectTitleField.value, projectDescriptionField.value);
        clearMain();
        clearFields();
        writeProject(project)
        project.writeToDoList();
        project.writeNewToDoButton();
    });
}

export {pageLoad, loadProjectFields};