import {writeToDo, writeToDoButton, writeHeaders} from "./domManipulation";
import {toDoList} from './toDos'

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

let projectList = [];

class Project {
    constructor(title, description) {
        this.title = title,
        this.description = description,
        this.id = title.split(' ').join('');
    };

    writeNewToDoButton() {
        writeToDoButton(this);
    };

    writeToDoList() {
        writeHeaders(this)
        for (let i = 0; i < toDoList.length; i++) {
            if (toDoList[i].project.title === this.title && toDoList[i].done == false) {
                writeToDo(toDoList[i])
                console.log('added!')
            }
        };
    };

    storeProject() {
        projectList.push(this)
        if (storageAvailable('localStorage')) {
            window.localStorage.setItem('projects', JSON.stringify(projectList));
        } 
    }

    deleteProject() {
        for (let i = 0; i < projectList.length; i++) {
            if (projectList[i] === this) {
                projectList.splice(i, 1)
            };
        };
        delete window[Project]
        if (storageAvailable('localStorage')) {
            window.localStorage.setItem('projects', JSON.stringify(projectList));
        } 
    };

};

class Inbox extends Project {
    writeToDoList() {
        writeHeaders(this)
        for (let i = 0; i < toDoList.length; i++) {
            if (toDoList[i].done == false) {
                writeToDo(toDoList[i]);
            }
        };
    };
};

class Dates extends Project {
    constructor(title, description, func) {
        super(title, description)
        this.func = func;
    };

    writeToDoList() {
        writeHeaders(this);
        for (let i = 0; i < toDoList.length; i++) {
            console.log(toDoList[i].dueDate)
            if (this.func(new Date(toDoList[i].dueDate)) && toDoList[i].done == false) {
                writeToDo(toDoList[i]);
            };
        };
    };
};

class Completed extends Project {
    writeToDoList() {
        writeHeaders(this);
        for (let i = 0; i < toDoList.length; i++) {
            if (toDoList[i].done == true) {
                writeToDo(toDoList[i]);
            };
        };
    };
};

export {Project, Inbox, Dates, Completed, projectList};
