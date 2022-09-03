import { writeToDo } from "./domManipulation";
import {toDoList} from './toDos'

let activeProject;

class Project {
    constructor(title, description) {
        this.title = title,
        this.description = description,
        this.list = [];
        this.id = title.split(' ').join('');
    };

    writeList() {
        for (let i = 0; i < toDoList.length; i++) {
            if (toDoList[i].project === this) {
                writeToDo(toDoList[i])
            }
        };
    };

    deleteProject() {
        delete window[Project]
    };

    makeActive() {
        activeProject = this
    }
};

export {Project, activeProject};