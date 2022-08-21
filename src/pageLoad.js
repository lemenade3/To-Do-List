function pageLoad () {
    let body = document.querySelector('body');

    // To Do Html Fields

    let toDoFields = document.createElement('div');

    let newToDo = document.createElement('button');
    newToDo.textContent = 'New To-Do Item';
    newToDo.setAttribute('id', 'newToDo')

    let title = document.createElement('input')
    title.setAttribute('type', 'text');
    title.setAttribute('id', 'title');

    let description = document.createElement('input')
    description.setAttribute('type', 'text');
    description.setAttribute('id', 'description');

    let dueDate = document.createElement('input');
    dueDate.setAttribute('type', 'date');
    dueDate.setAttribute('id', 'dueDate');

    let priority = document.createElement('input');
    priority.setAttribute('type', 'text');
    priority.setAttribute('id', 'priority');

    let notes = document.createElement('input');
    notes.setAttribute('type', 'text');
    notes.setAttribute('id', 'notes');

    let done = document.createElement('input');
    done.setAttribute('type', 'checkbox');
    done.setAttribute('id', 'done');

    toDoFields.append(newToDo, title, description, dueDate, priority, notes, done);

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

    body.append(toDoFields, projectFields);
};

export {pageLoad as default};