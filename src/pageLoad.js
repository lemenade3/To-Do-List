function pageLoad () {
    let body = document.querySelector('body');

    let header = document.createElement('header');

    let centre = document.createElement('div');
    centre.setAttribute('id', 'centre');

    let sidebar = document.createElement('div');
    sidebar.setAttribute('id', 'sidebar');

    let main = document.createElement('div');
    main.setAttribute('id', 'main');
    
    let footer = document.createElement('footer');

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

    header.append(projectFields)
    centre.append(sidebar, main);
    body.append(header, centre, footer);
};

export {pageLoad as default};