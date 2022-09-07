let toDoList = [];

class ToDo {
    constructor(title, description, dueDate, priority, project) {
        this.title = title,
        this.description = description
        this.dueDate = dueDate,
        this.priority = priority,
        this.notes = '',
        this.done = false,
        this.project = project;
    };

    addToList() {
        toDoList.push(this);
    };

    deleteToDo() {
        delete window[ToDo];
        for (let i = 0; i < toDoList.length; i++) {
            if (toDoList[i] === this) {
                toDoList.splice(i, 1)
            };
        };
    };
};

export {ToDo, toDoList};