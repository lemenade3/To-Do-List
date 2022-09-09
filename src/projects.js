import {writeToDo, writeToDoButton, writeHeaders} from "./domManipulation";
import {toDoList} from './toDos'

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
            if (toDoList[i].project === this && toDoList.done == false) {
                writeToDo(toDoList[i])
            }
        };
    };

    deleteProject() {
        delete window[Project]
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
            if (this.func(new Date(toDoList[i].dueDate))) {
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

export {Project, Inbox, Dates, Completed};
