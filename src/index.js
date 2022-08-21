import pageLoad from './pageLoad';
import ToDo from './toDoConstructor';
import {writeToDo, clearFields} from './domManipulation';

pageLoad();

let toDoButton = document.querySelector('button');
let title =  document.querySelector('#title');
let description = document.querySelector('#description');
let dueDate = document.querySelector('#dueDate');
let priority = document.querySelector('#priority');
let notes = document.querySelector('#notes');
let done = document.querySelector('#done');


toDoButton.addEventListener('click', () => {
    let toDo = new ToDo(title.value, description.value, dueDate.value, priority.value, notes.value, done.value);
    toDo.logNote();
    writeToDo(title.value, description.value, dueDate.value, priority.value, notes.value, done.value);
    clearFields(title.value, description.value, dueDate.value, priority.value, notes.value, done.value);
})

