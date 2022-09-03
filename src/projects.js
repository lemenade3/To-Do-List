import {writeToDo, domToDoFields} from "./domManipulation";
import {toDoList} from './toDos'

class Project {
    constructor(title, description) {
        this.title = title,
        this.description = description,
        this.id = title.split(' ').join('');
    };

    writeFields() {
        domToDoFields(this);
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

};

export {Project};