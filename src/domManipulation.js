import { activeProject } from "./projectController";

const body = document.querySelector('body');

//Clears all inputs

function clearFields() {
    let inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
    });
};

function clearList() {
    document.querySelector(`#${activeProject.id}container`).innerHTML = ''; // something is going wrong with this function that breaks the app
}

// Writes a project

function writeProject(item) {

    let project = document.createElement('div');
    project.setAttribute('class', 'project');
    project.setAttribute('id', item.id)
    project.addEventListener('click', () => {
        // event listener needs to call class method to change active project then hide and show todos accordingly
    });

    let container = document.createElement('div');
    container.setAttribute('id', `${item.id}container`)

    let writeTitle = document.createElement('div');
    writeTitle.textContent = item.title;
    
    let writeDescription = document.createElement('div');
    writeDescription.textContent = item.description;

    let deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete Project'
    deleteButton.setAttribute('id', `deleteProject${item.id}`)
    deleteButton.addEventListener('click', () => {
        project.remove();
        item.deleteProject()
    })

    project.append(writeTitle, writeDescription, container, deleteButton);
    body.append(project);
}

// Writes a To Do

function writeToDo(item) {
    let container = document.querySelector(`#${activeProject.id}container`);

    let toDo = document.createElement('div');
    toDo.setAttribute('class', 'item');

    let writeTitle = document.createElement('div');
    writeTitle.textContent = item.title;
    
    let writeDescription = document.createElement('div');
    writeDescription.textContent = item.description;
    
    let writeDueDate = document.createElement('div');
    writeDueDate.textContent = item.dueDate;

    let writePriority = document.createElement('div');
    writePriority.textContent = item.priority;
    
    let writeNotes = document.createElement('div');
    writeNotes.textContent = item.notes;
    
    let writeDone = document.createElement('div');
    writeDone.textContent = item.done;

    toDo.append(writeTitle, writeDescription, writeDueDate, writePriority, writeNotes, writeDone);
    container.append(toDo);
}


export {writeToDo, writeProject, clearFields, clearList};