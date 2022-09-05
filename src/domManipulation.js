import {ToDo} from './toDos'
import {loadProjectFields} from './pageLoad'

//Clears all inputs

function clearFields() {
    let inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
    });
};

// Clears Project containers

function clearList() {
    let container = document.querySelector(`#main`);
    container.innerHTML = ''
};

// Writes a project

function writeProject(project) {

    const sidebar = document.querySelector('#sidebar');
    let projectFields = document.querySelector('#projectFields')

    let projectDiv = document.createElement('div');
    projectDiv.setAttribute('class', 'project');
    projectDiv.setAttribute('id', project.id)
    projectDiv.addEventListener('click', () => {
        clearList();
        project.writeList();
        project.writeFields();
    });

    let writeTitle = document.createElement('div');
    writeTitle.textContent = project.title;
    
    let writeDescription = document.createElement('div');
    writeDescription.textContent = project.description;

    let deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete Project'
    deleteButton.addEventListener('click', () => {
        event.stopPropagation()
        projectDiv.remove();
        project.deleteProject()
        clearList();
    })

    projectFields.remove();
    projectDiv.append(writeTitle, writeDescription, deleteButton);
    sidebar.append(projectDiv);
    domToDoFields(project);
    loadProjectFields();
}

function domToDoFields(project) {
     // To Do Html Fields

     let toDoFields = document.createElement('div');

     //Button creates new ToDo

     let newToDo = document.createElement('button');
     newToDo.textContent = 'New To-Do Item';
     newToDo.setAttribute('class', 'newToDo')
 
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
     done.setAttribute('type', 'text');
     done.setAttribute('id', 'done');

     newToDo.addEventListener('click', () => {
        let toDo = new ToDo(title.value, description.value, dueDate.value, priority.value, notes.value, done.value, project);
        clearList()
        toDo.addToList()
        toDo.project.writeList();
        toDo.project.writeFields();
        clearFields();
    });
 
    toDoFields.append(newToDo, title, description, dueDate, priority, notes, done);

    let container = document.querySelector(`#main`)
    container.append(toDoFields);
};

// Writes a To Do

function writeToDo(toDo) {
    let container = document.querySelector(`#main`);

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


export {writeToDo, writeProject, clearFields, clearList, domToDoFields};