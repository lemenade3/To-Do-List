import {ToDo} from './toDos'
import {loadProjectFields} from './pageLoad'
import { intlFormatDistance, endOfToday } from 'date-fns';
import deleteIcon from './icons/delete.svg';
import deleteIconHover from './icons/deleteHover.svg'
import expand from './icons/expand.svg'
import expandHover from './icons/expandHover.svg'
import addTask from './icons/addTask.svg'
import addTaskHover from './icons/addTaskHover.svg'
import editIcon from './icons/edit.svg'
import editHover from './icons/editHover.svg'
import saveIcon from './icons/save.svg'
import saveHover from './icons/saveHover.svg'
import addToDo from './icons/addToDo.svg'
import addToDoHover from './icons/addToDoHover.svg'

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
    let button = new Image;
    button.src = addTask
    button.setAttribute('id', 'writeToDoButton');
    button.textContent = 'New To Do'
    button.addEventListener('click', () => {
        writeToDoFields(project)
        button.remove();
    })

    let row = document.createElement('div');
    row.setAttribute('id', 'row');

    button.addEventListener('mouseover', () => {
        button.src = addTaskHover;
        button.addEventListener('mouseleave', () => {
            button.src = addTask;
        })
    })

    row.append(button);

    main.append(row);
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
     dueDate.valueAsDate = new Date();
 
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

     let newToDo = new Image();
     newToDo.src = addToDo;
     newToDo.setAttribute('class', 'newToDo')
     newToDo.addEventListener('click', () => {
        let toDo = new ToDo(title.value, description.value, dueDate.value, priority.value, project);
        clearMain()
        toDo.storeToDo()
        toDo.project.writeToDoList();
        toDo.project.writeNewToDoButton();
        console.log(toDo.project)
    });

    newToDo.addEventListener('mouseover', () => {
        newToDo.src = addToDoHover;
        newToDo.addEventListener('mouseleave', () => {
            newToDo.src = addToDo;
        })
    })
 
    toDoFields.append(title, description, dueDate, priority, newToDo);

    let row = document.querySelector(`#row`)
    row.append(toDoFields);
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

        let modalTitleHeader = document.createElement('div');
        modalTitleHeader.textContent = 'Title'

        let modalTitle = document.createElement('div');
        modalTitle.textContent = toDo.title;
        modalTitle.setAttribute('class', 'modalTitle')

        let modalDescriptionHeader = document.createElement('div');
        modalDescriptionHeader.textContent = 'Description'

        let modalDescription = document.createElement('div');
        modalDescription.textContent = toDo.description;
        modalDescription.setAttribute('class', 'modalDescription');

        let modalNotesHeader = document.createElement('div');
        modalNotesHeader.textContent = 'Notes'

        let modalNotes = document.createElement('div');
        modalNotes.textContent = toDo.notes;
        modalNotes.setAttribute('class', 'modalNotes');

        let modalDueHeader = document.createElement('div');
        modalDueHeader.textContent = 'Due Date'

        let modalDueDate = document.createElement('div');
        modalDueDate.textContent = toDo.dueDate;
        modalDueDate.setAttribute('class', 'modalDueDate');

        let modalPriorityHeader = document.createElement('div');
        modalPriorityHeader.textContent = 'Priority';

        let modalPriority = document.createElement('div');
        modalPriority.textContent = toDo.priority;
        modalPriority.setAttribute('class', 'modalPriority');

        let editButton = new Image();
        editButton.src = editIcon;
        editButton.setAttribute('class', 'editButton');
        editButton.addEventListener('click', () => {
            edit()
        })

        editButton.addEventListener('mouseover', () => {
            editButton.src = editHover;
            editButton.addEventListener('mouseleave', () => {
                editButton.src = editIcon;
            })
        })

        modalContent.append(modalTitleHeader, modalTitle, modalDescriptionHeader, modalDescription, modalNotesHeader, modalNotes, modalDueHeader, modalDueDate, modalPriorityHeader, modalPriority, editButton);
    }
    
    let closeModal = new Image();
    closeModal.src = deleteIcon
    closeModal.textContent = 'close';
    closeModal.setAttribute('class', 'close');

    closeModal.addEventListener('mouseover', () => {
        closeModal.src = deleteIconHover;
        closeModal.addEventListener('mouseleave', () => {
            closeModal.src = deleteIcon;
        })
    })

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

        let titleHeader = document.createElement('div');
        titleHeader.textContent = 'Title'

        let title = document.createElement('input');
        title.setAttribute('type', 'text');
        title.value = toDo.title;
        title.setAttribute('class', 'editTitle');

        let descriptionHeader = document.createElement('div');
        descriptionHeader.textContent = 'Description'

        let description = document.createElement('input');
        description.setAttribute('type', 'text');
        description.value = toDo.description;
        description.setAttribute('class', 'editDescription');

        let dueDateHeader = document.createElement('div');
        dueDateHeader.textContent = 'Due Date';

        let dueDate = document.createElement('input');
        dueDate.setAttribute('type', 'date')
        dueDate.value = toDo.dueDate;
        dueDate.setAttribute('class', 'editDue')
            
        let priorityHeader = document.createElement('div');
        priorityHeader.textContent = 'Priority'

        let priority = document.createElement('select');
        let priorityOptions = ['Low', 'Normal', 'High']

        for (let i = 0; i < priorityOptions.length; i++) {
            let option = document.createElement('option');
            option.value = priorityOptions[i];
            option.text = priorityOptions[i];
            priority.append(option);
        };

        priority.value = toDo.priority;
        priority.setAttribute('class', 'editPriority')

        let notesHeader = document.createElement('div');
        notesHeader.textContent = 'Notes'

        let notes = document.createElement('textarea');
        notes.value = toDo.notes;
        notes.setAttribute('class', 'editNotes');

        let save = new Image();
        save.src = saveIcon;
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
        save.setAttribute('class', 'save');

        save.addEventListener('mouseover', () => {
            save.src = saveHover;
            save.addEventListener('mouseleave', () => {
                save.src = saveIcon;
            })
        })

        modalContent.append(titleHeader, title, descriptionHeader, description, notesHeader, notes, dueDateHeader, dueDate, priorityHeader, priority, save);
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