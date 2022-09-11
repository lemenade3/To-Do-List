let toDoList = [];

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

class ToDo {
    constructor(title, description, dueDate, priority, project, done, notes) {
        this.title = title,
        this.description = description
        this.dueDate = dueDate,
        this.priority = priority,
        this.notes = notes || '',
        this.done = done || false,
        this.project = project;
    };

    storeToDo() {
        toDoList.push(this);
        if (storageAvailable('localStorage')) {
            window.localStorage.setItem('toDos', JSON.stringify(toDoList));
        } 
    };

    removeFromList() {
        for (let i = 0; i < toDoList.length; i++) {
            if (toDoList[i] === this) {
                toDoList.splice(i, 1)
            };
        };
    };

    updateStoredList() {
        for (let i = 0; i < toDoList.length; i++) {
            if (toDoList[i] === this) {
                toDoList[i] = this;
            };
        };
        if (storageAvailable('localStorage')) {
            window.localStorage.setItem('toDos', JSON.stringify(toDoList));
        } 
    }

    deleteToDo() {
        delete window[ToDo];
        for (let i = 0; i < toDoList.length; i++) {
            if (toDoList[i] === this) {
                toDoList.splice(i, 1)
            };
        };
        if (storageAvailable('localStorage')) {
            window.localStorage.setItem('toDos', JSON.stringify(toDoList));
        } 
    };
};

export {ToDo, toDoList};