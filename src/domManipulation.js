import {ToDo} from './toDos'
import {loadProjectFields} from './pageLoad'

//Clears all inputs

function clearFields() {
    let inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
    });
};

// Clears main section of To-Do's and Project information

function clearMain() {
    let main = document.querySelector(`#main`);
    main.innerHTML = ''
};

// Writes a project

function writeProject(project) {

    const sidebar = document.querySelector('#sidebar');
    
    let projectFields = document.querySelector('#projectFields')

    let projectContainer = document.createElement('div');
    projectContainer.setAttribute('class', 'project');
    projectContainer.setAttribute('id', project.id)
    projectContainer.addEventListener('click', () => {
        clearMain();
        project.writeToDoList();
        if (project.constructor.name == 'Project' || project.constructor.name == 'Inbox')
        project.writeNewToDoButton();
    });

    projectFields.remove();

    let title

    if (project.constructor.name === 'Project') {
        title = document.createElement('h4');
    }
    if (project.constructor.name != 'Project') {
        title = document.createElement('h2');
    }

    title.textContent = project.title;

    projectContainer.append(title);

    if (project.constructor.name == 'Project') {
        let deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete Project'
        deleteButton.addEventListener('click', () => {
            event.stopPropagation()
            projectContainer.remove();
            project.deleteProject()
            clearMain();
        })

        projectContainer.append(deleteButton);

    };

    sidebar.append(projectContainer);
    loadProjectFields(); // Should this be called from dom manipulation instead of page load?
}

// Writes the Project Headers that appear in the main section

function writeHeaders(project) {
    let main = document.querySelector('#main');
    let title = document.createElement('h2');
    title.textContent = project.title;
    
    let description = document.createElement('h3');
    description.textContent = project.description;

    main.append(title, description);
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

// Makes fields to write in new todo

function writeToDoFields(project) {

     let toDoFields = document.createElement('div');

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

     //Button confirms new ToDo and writes new object

     let newToDo = document.createElement('button');
     newToDo.textContent = 'Add';
     newToDo.setAttribute('class', 'newToDo')
     newToDo.addEventListener('click', () => {
        let toDo = new ToDo(title.value, description.value, dueDate.value, priority.value, project); // rmeove done from project
        clearMain()
        toDo.addToList()
        toDo.project.writeToDoList();
        toDo.project.writeNewToDoButton();
    });
 
    toDoFields.append(title, description, dueDate, priority, newToDo);

    let main = document.querySelector(`#main`)
    main.append(toDoFields);
};

// Writes a To Do from the To Do Fields

function writeToDo(toDo) {
    let main = document.querySelector(`#main`);

    let toDoContainer = document.createElement('div');
    toDoContainer.setAttribute('class', 'toDo');

    // To Do Fields

    let done = document.createElement('input');
    done.setAttribute('type', 'checkbox');
    done.checked = toDo.done;
    done.addEventListener('change', () => {
        toDo.done = done.checked;
        clearMain()
        toDo.project.writeToDoList();
        toDo.project.writeNewToDoButton();
    });

    let title = document.createElement('div');
    title.textContent = toDo.title;
    
    let description = document.createElement('div');
    description.textContent = toDo.description;
    
    let dueDate = document.createElement('input');
    dueDate.setAttribute('type', 'date')
    dueDate.value = toDo.dueDate;
    dueDate.addEventListener('change', () => {
        toDo.dueDate = dueDate.value;
    });

    let priority = document.createElement('select');
    let priorityOptions = ['Low', 'Normal', 'High']

     for (let i = 0; i < priorityOptions.length; i++) {
        let option = document.createElement('option');
        option.value = priorityOptions[i];
        option.text = priorityOptions[i];
        priority.append(option);
     };

     priority.value = toDo.priority;

     priority.addEventListener('change', () => {
        toDo.priority = priority.value;
     })
    
    let notes = document.createElement('div');
    notes.textContent = toDo.notes;

    // Modal Generation (Expanded To Do)

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

    // Only available from expanded ToDo, Allows user to change title, description and add notes

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
            clearMain();
            toDo.project.writeToDoList();
        })

        modalContent.append(title, description, notes, save);
    }

    // Deletes ToDo

    let deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete ToDo';
    deleteButton.addEventListener('click', () => {
        event.stopPropagation();
        toDo.deleteToDo()
        toDoContainer.remove();
    })

    toDoContainer.append(done, title, description, dueDate, priority, notes, expandButton, deleteButton, expandModal);
    main.append(toDoContainer);
}


export {writeToDo, writeProject, clearFields, clearMain, writeToDoButton, writeHeaders};