import {ToDo} from './toDos'
import {loadProjectFields} from './pageLoad'
import { intlFormatDistance, endOfToday } from 'date-fns';
import deleteIcon from './icons/delete.svg';
import deleteIconHover from './icons/deleteHover.svg'
import expand from './icons/expand.svg'
import expandHover from './icons/expandHover.svg'

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

    let title = document.createElement('div');

    title.textContent = project.title;

    projectContainer.append(title);

    if (project.constructor.name == 'Project') {
        project.storeProject()
        let deleteButton = new Image()
        deleteButton.src = deleteIcon;
        deleteButton.addEventListener('click', () => {
            event.stopPropagation()
            projectContainer.remove();
            project.deleteProject()
            clearMain();
        })
        deleteButton.addEventListener('mouseover', () => {
            deleteButton.src = deleteIconHover;
            deleteButton.addEventListener('mouseleave', () => {
                deleteButton.src = deleteIcon;
            })
        })

        projectContainer.append(deleteButton);

    };

    if (project.constructor.name === 'Project') {
        let container = document.querySelector('#writtenProjects');
        container.append(projectContainer);
    };

    if (project.constructor.name != 'Project') {
        let container = document.querySelector('#defaultProjects');
        container.append(projectContainer);
    };

    loadProjectFields(); // Should this be called from dom manipulation instead of page load?
}

// Writes the Project Headers that appear in the main section

function writeHeaders(project) {
    let main = document.querySelector('#main');
    let projectTitle = document.createElement('h2');
    projectTitle.textContent = project.title;
    
    let projectDescription = document.createElement('h3');
    projectDescription.textContent = project.description;

    let headers = document.createElement('div');
    headers.setAttribute('id', 'headers')

    let title = document.createElement('div');
    title.setAttribute('id', 'titleHeader');
    title.textContent = 'Title';

    let description = document.createElement('div');
    description.setAttribute('id', 'descriptionHeader');
    description.textContent = 'Description';

    let due = document.createElement('div');
    due.setAttribute('id', 'dueHeader');
    due.textContent = 'Due';

    let priority = document.createElement('div');
    priority.setAttribute('id', 'priorityHeader');
    priority.textContent = 'Priority';

    headers.append(title, description, due, priority);

    main.append(projectTitle, projectDescription, headers);
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
        let toDo = new ToDo(title.value, description.value, dueDate.value, priority.value, project);
        clearMain()
        toDo.storeToDo()
        toDo.project.writeToDoList();
        toDo.project.writeNewToDoButton();
        console.log(toDo.project)
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
        toDoContainer.remove();
        toDo.updateStoredList();
    });
    done.setAttribute('class', 'toDoDone');

    let title = document.createElement('div');
    title.textContent = toDo.title;
    title.setAttribute('class', 'toDoTitle')
    
    let description = document.createElement('div');
    description.textContent = toDo.description;
    description.setAttribute('class', 'toDoDescription');
    
    let dueDate = document.createElement('div');
    dueDate.textContent = intlFormatDistance(new Date(toDo.dueDate), endOfToday());
    dueDate.setAttribute('class', 'toDoDue');

    let priority = document.createElement('select');
    let priorityOptions = ['Low', 'Normal', 'High']
    priority.setAttribute('class', 'toDoPriority');

     for (let i = 0; i < priorityOptions.length; i++) {
        let option = document.createElement('option');
        option.value = priorityOptions[i];
        option.text = priorityOptions[i];
        priority.append(option);
     };

     priority.value = toDo.priority;

     priority.addEventListener('change', () => {
        toDo.priority = priority.value;
        toDo.updateStoredList();
     })

    // Modal Generation (Expanded To Do)
    let expandButton = new Image();
    expandButton.src = expand;

    expandButton.addEventListener('mouseover', () => {
        expandButton.src = expandHover;
        expandButton.addEventListener('mouseleave', () => {
            expandButton.src = expand;
        })
    })


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

        let dueDate = document.createElement('input');
        dueDate.setAttribute('type', 'date')
        dueDate.value = toDo.dueDate;
            

        let priority = document.createElement('select');
        let priorityOptions = ['Low', 'Normal', 'High']

        for (let i = 0; i < priorityOptions.length; i++) {
            let option = document.createElement('option');
            option.value = priorityOptions[i];
            option.text = priorityOptions[i];
            priority.append(option);
        };

        priority.value = toDo.priority;

        let notes = document.createElement('textarea');
        notes.value = toDo.notes;

        let save = document.createElement('button');
        save.textContent = 'Save';
        save.addEventListener('click', () => {
            toDo.title = title.value;
            toDo.description = description.value;
            toDo.dueDate = dueDate.value;
            toDo.notes = notes.value;
            toDo.priority = priority.value;
            writeModalContent();
            clearMain();
            toDo.project.writeToDoList();
            toDo.updateStoredList();
        })

        modalContent.append(title, description, dueDate, priority, notes, save);
    }

    // Deletes ToDo

    let deleteButton = new Image();
    deleteButton.src = deleteIcon;
    deleteButton.addEventListener('click', () => {
        event.stopPropagation();
        toDo.deleteToDo()
        toDoContainer.remove();
    })

    deleteButton.addEventListener('mouseover', () => {
        deleteButton.src = deleteIconHover;
        deleteButton.addEventListener('mouseleave', () => {
            deleteButton.src = deleteIcon;
        })
    })


    toDoContainer.append(done, title, description, dueDate, priority, expandButton, deleteButton, expandModal);
    main.append(toDoContainer);

    if (toDo.done) {
        expandButton.remove()
    }
}


export {writeToDo, writeProject, clearFields, clearMain, writeToDoButton, writeHeaders};