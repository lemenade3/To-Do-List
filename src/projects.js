import {writeToDo, writeToDoButton, writeHeaders} from "./domManipulation";
import {toDoList} from './toDos'

class Project {
    constructor(title, description) {
        this.title = title,
        this.description = description,
        this.id = title.split(' ').join('');
    };

    writeFields() {
        writeToDoButton(this);
    };

    writeList() {
        writeHeaders(this)
        for (let i = 0; i < toDoList.length; i++) {
            if (toDoList[i].project === this) {
                writeToDo(toDoList[i])
            }
        };
    };

    deleteProject() {
        delete window[Project]
    };

};

class Inbox extends Project {
    writeList() {
        writeHeaders(this)
        for (let i = 0; i < toDoList.length; i++) {
            writeToDo(toDoList[i]);
        };
    };
};

export {Project, Inbox};