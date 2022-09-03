
const body = document.querySelector('body');

//Clears all inputs

function clearFields() {
    let inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
    });
};

// Clears Project containers

function clearList() {
    let containers = document.querySelectorAll(`.container`);
    for (let i = 0; i < containers.length; i++) {
        containers[i].innerHTML = '';
    };
};

// Writes a project

function writeProject(project) {

    let projectDiv = document.createElement('div');
    projectDiv.setAttribute('class', 'project');
    projectDiv.setAttribute('id', project.id)
    projectDiv.addEventListener('click', () => {
        clearList();
        project.makeActive()
        project.writeList();
    });

    let container = document.createElement('div');
    container.setAttribute('id', `${project.id}container`)
    container.setAttribute('class', 'container')

    let writeTitle = document.createElement('div');
    writeTitle.textContent = project.title;
    
    let writeDescription = document.createElement('div');
    writeDescription.textContent = project.description;

    let deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete Project'
    deleteButton.addEventListener('click', () => {
        projectDiv.remove();
        project.deleteProject()
    })

    projectDiv.append(writeTitle, writeDescription, container, deleteButton);
    body.append(projectDiv);
}

// Writes a To Do

function writeToDo(project, toDo) {
    let container = document.querySelector(`#${project.id}container`);

    let toDoDiv = document.createElement('div');
    toDoDiv.setAttribute('class', 'toDo');

    let writeTitle = document.createElement('div');
    writeTitle.textContent = toDo.title;
    
    let writeDescription = document.createElement('div');
    writeDescription.textContent = toDo.description;
    
    let writeDueDate = document.createElement('div');
    writeDueDate.textContent = toDo.dueDate;

    let writePriority = document.createElement('div');
    writePriority.textContent = toDo.priority;
    
    let writeNotes = document.createElement('div');
    writeNotes.textContent = toDo.notes;
    
    let writeDone = document.createElement('div');
    writeDone.textContent = toDo.done;

    let deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete ToDo'
    deleteButton.addEventListener('click', () => {
        event.stopPropagation();
        toDo.deleteToDo()
        toDoDiv.remove();
    })

    toDoDiv.append(writeTitle, writeDescription, writeDueDate, writePriority, writeNotes, writeDone, deleteButton);
    container.append(toDoDiv);
}


export {writeToDo, writeProject, clearFields, clearList};