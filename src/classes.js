import { writeToDo } from "./domManipulation";
import {activeProject} from './projectController'

class ToDo {
    constructor(title, description, dueDate, priority, notes, done) {
        this.title = title,
        this.description = description
        this.dueDate = dueDate,
        this.priority = priority,
        this.notes = notes,
        this.done = done;
    }
};

class Project {
    constructor(title, description) {
        this.title = title,
        this.description = description,
        this.list = [];
        this.id = title.split(' ').join('');
    };

    writeList() { // This should probably sit in dom manipulation or index
        for (let i = 0; i < this.list.length; i++) {
            writeToDo(this.list[i], `#${this.id}`);
        };
    };

    deleteProject() {
        delete window[Project]
    };

    makeActive() {
        activeProject = Project // Currently broken
    }
};

export {ToDo, Project};