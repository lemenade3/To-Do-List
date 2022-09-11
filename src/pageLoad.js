import { Project } from "./projects";
import { clearMain, clearFields, writeProject } from "./domManipulation";
import logoImg from './logo.svg';

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
    let sidebar = document.querySelector('#sidebar');
    let projectFields = document.createElement('div');
    projectFields.setAttribute('id', 'projectFields')

    let newProject = document.createElement('button');
    newProject.textContent = 'New Project';
    newProject.setAttribute('id', 'newProject');

    let projectTitle = document.createElement('div')
    let projectTitleLabel = document.createElement('label')
    projectTitleLabel.setAttribute('for', "#pTitle");
    projectTitleLabel.textContent = 'Title'
    let projectTitleField = document.createElement('input');
    projectTitleField.setAttribute('type', 'text');
    projectTitleField.setAttribute('id', 'pTitle');

    let projectDescription = document.createElement('div')
    let projectDescriptionLabel = document.createElement('label');
    projectDescriptionLabel.setAttribute('for', '#pDescription');
    projectDescriptionLabel.textContent = 'Description';
    let projectDescriptionField = document.createElement('input');
    projectDescriptionField.setAttribute('type', 'text');
    projectDescriptionField.setAttribute('id', 'pDescription');

    projectTitle.append(projectTitleLabel, projectTitleField)
    projectDescription.append(projectDescriptionLabel, projectDescriptionField);

    projectFields.append(newProject, projectTitle, projectDescription);

    sidebar.append(projectFields)

    newProject.addEventListener('click', () => {
        let project = new Project(projectTitleField.value, projectDescriptionField.value);
        clearMain();
        clearFields();
        writeProject(project)
    });
}

export {pageLoad, loadProjectFields};