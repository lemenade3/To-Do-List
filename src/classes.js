class ToDo {
    constructor(title, description, dueDate, priority, notes, done) {
        this.title = title,
        this.description = description
        this.dueDate = dueDate,
        this.priority = priority,
        this.notes = notes,
        this.done = done;
    }

    logNote() {
        console.log(this.title, this.description, this.dueDate, this.priority, this.notes, this.done);
    };
};

class Project {
    constructor(title, description) {
        this.title = title,
        this.description = description,
        this.list = [];
    };
}

export {ToDo, Project};