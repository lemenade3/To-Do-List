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
    let main = document.querySelector(`#main`);
    main.innerHTML = ''
};

function writeInbox(project) {
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

    let title = document.createElement('div');
    title.textContent = project.title;

    projectFields.remove();
    projectDiv.append(title);
    writeHeaders(project)
    sidebar.append(projectDiv);
    writeToDoButton(project);
    loadProjectFields();
}

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

    let title = document.createElement('div');
    title.textContent = project.title;

    let deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete Project'
    deleteButton.addEventListener('click', () => {
        event.stopPropagation()
        projectDiv.remove();
        project.deleteProject()
        clearList();
    })

    projectFields.remove();
    projectDiv.append(title, deleteButton);
    writeHeaders(project)
    sidebar.append(projectDiv);
    writeToDoButton(project);
    loadProjectFields();
}

function writeHeaders(project) {
    let main = document.querySelector('#main');
    let mainTitle = document.createElement('div');
    mainTitle.textContent = project.title;
    
    let description = document.createElement('div');
    description.textContent = project.description;

    main.append(mainTitle, description);
}

// Writes button that generates todo fields

function writeToDoButton(project) {
    let main = document.querySelector('#main')
    let button = document.createElement('button');
    button.setAttribute('class', 'writeToDoButton');
    button.textContent = 'New To Do'
    button.addEventListener('click', () => {
        writeToDoFields(project)
        button.remove();
    })
    main.append(button);
 }

function writeToDoFields(project) {
     // To Do Html Fields

     let toDoFields = document.createElement('div');

     //Button creates new ToDo

     let newToDo = document.createElement('button');
     newToDo.textContent = 'Add';
     newToDo.setAttribute('class', 'newToDo')

     let title = document.createElement('input')
     title.setAttribute('type', 'text');
     title.setAttribute('id', 'title');
     title.setAttribute('placeholder', 'Title');

     let description = document.createElement('input')
     description.setAttribute('type', 'text');
     description.setAttribute('id', 'description');
     description.setAttribute('placeholder', 'Description');
 
     let dueDate = document.createElement('input');
     dueDate.setAttribute('type', 'date');
     dueDate.setAttribute('id', 'dueDate');
 
     let priority = document.createElement('select');
     priority.setAttribute('id', 'priority');

     let priorityOptions = ['Low', 'Normal', 'High']

     for (let i = 0; i < priorityOptions.length; i++) {
        let option = document.createElement('option');
        option.value = priorityOptions[i];
        option.text = priorityOptions[i];
        priority.append(option);
     };

     newToDo.addEventListener('click', () => {
        let toDo = new ToDo(title.value, description.value, dueDate.value, priority.value, project); // rmeove done from project
        clearList()
        toDo.addToList()
        toDo.project.writeList();
        toDo.project.writeFields();
    });
 
    toDoFields.append(newToDo, title, description, dueDate, priority);

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
    
    let writeDueDate = document.createElement('input');
    writeDueDate.setAttribute('type', 'date')
    writeDueDate.value = toDo.dueDate;

    let writePriority = document.createElement('div');
    writePriority.textContent = toDo.priority;
    
    let writeNotes = document.createElement('div');
    writeNotes.textContent = toDo.notes;
    
    let writeDone = document.createElement('input');
    writeDone.setAttribute('type', 'checkbox');
    writeDone.checked = toDo.done;

    let deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete ToDo'
    deleteButton.addEventListener('click', () => {
        event.stopPropagation();
        toDo.deleteToDo()
        toDoDiv.remove();
    })

    toDoDiv.append(writeDone, writeTitle, writeDescription, writeDueDate, writePriority, writeNotes, deleteButton);
    container.append(toDoDiv);
}


export {writeToDo, writeProject, writeInbox, clearFields, clearList, writeToDoButton, writeHeaders};