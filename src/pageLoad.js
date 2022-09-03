function pageLoad () {
    let body = document.querySelector('body');

    // Project Html Fields

    let projectFields = document.createElement('div');

    let newProject = document.createElement('button');
    newProject.textContent = 'New Project';
    newProject.setAttribute('id', 'newProject');

    let projectTitle = document.createElement('input');
    projectTitle.setAttribute('type', 'text');
    projectTitle.setAttribute('id', 'pTitle');

    let projectDescription = document.createElement('input')
    projectDescription.setAttribute('type', 'text');
    projectDescription.setAttribute('id', 'pDescription');

    projectFields.append(newProject, projectTitle, projectDescription);

    body.append(projectFields);
};

export {pageLoad as default};