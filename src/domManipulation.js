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
    writeDueDate.addEventListener('change', () => {
        toDo.dueDate = writeDueDate.value;
    });

    let writePriority = document.createElement('select');

    let priorityOptions = ['Low', 'Normal', 'High']

     for (let i = 0; i < priorityOptions.length; i++) {
        let option = document.createElement('option');
        option.value = priorityOptions[i];
        option.text = priorityOptions[i];
        writePriority.append(option);
     };

     writePriority.value = toDo.priority;

     writePriority.addEventListener('change', () => {
        toDo.priority = writePriority.value;
     })
    
    let writeNotes = document.createElement('div');
    writeNotes.textContent = toDo.notes;
    
    let writeDone = document.createElement('input');
    writeDone.setAttribute('type', 'checkbox');
    writeDone.checked = toDo.done;
    writeDone.addEventListener('change', () => {
        toDo.done = writeDone.checked;
    });

    let expandButton = document.createElement('button')
    expandButton.textContent = 'Expand';

    let expandModal = document.createElement('div');
    expandModal.setAttribute('class', 'modal');

    let modalContent = document.createElement('div');

    function writeModalContent() {
        modalContent.innerHTML = '';

        let modalTitle = document.createElement('div');
        modalTitle.textContent = toDo.title;
        modalTitle.setAttribute('class', 'modalTitle')

        let modalDescription = document.createElement('div');
        modalDescription.textContent = toDo.description;
        modalDescription.setAttribute('class', 'modalDescription');

        let modalNotes = document.createElement('div');
        modalNotes.textContent = toDo.notes;
        modalNotes.setAttribute('class', 'modalNotes');

        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.setAttribute('class', 'editButton');
        editButton.addEventListener('click', () => {
            edit()
        })

        modalContent.append(modalTitle, modalDescription, modalNotes, editButton);
    }
    
    let closeModal = document.createElement('button');
    closeModal.textContent = 'close';
    closeModal.setAttribute('class', 'close');

    expandModal.append(closeModal, modalContent);

    expandButton.addEventListener('click', () => {
        expandModal.style.display = 'block';
        writeModalContent();
    });

    closeModal.addEventListener('click', () => {
        expandModal.style.display = 'none';
    });

    function edit() {

        modalContent.innerHTML = '';

        let title = document.createElement('input');
        title.setAttribute('type', 'text');
        title.value = toDo.title;

        let description = document.createElement('input');
        description.setAttribute('type', 'text');
        description.value = toDo.description;

        let notes = document.createElement('textarea');
        notes.value = toDo.notes;

        let save = document.createElement('button');
        save.textContent = 'Save';
        save.addEventListener('click', () => {
            toDo.title = title.value;
            toDo.description = description.value;
            toDo.notes = notes.value;
            writeModalContent();
            clearList();
            toDo.project.writeList();
        })

        modalContent.append(title, description, notes, save);
    }

    let deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete ToDo';
    deleteButton.addEventListener('click', () => {
        event.stopPropagation();
        toDo.deleteToDo()
        toDoDiv.remove();
    })

    toDoDiv.append(writeDone, writeTitle, writeDescription, writeDueDate, writePriority, writeNotes, expandButton, deleteButton, expandModal);
    container.append(toDoDiv);
}


export {writeToDo, writeProject, writeInbox, clearFields, clearList, writeToDoButton, writeHeaders};