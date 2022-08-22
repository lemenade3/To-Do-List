import { writeToDo } from "./domManipulation";

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
    };

    writeList() {
        for (let i = 0; i < this.list.length; i++) {
            writeToDo(this.list[i]);
        };
    };
};

export {ToDo, Project};