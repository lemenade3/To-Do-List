let body = document.querySelector('body');

let newToDo = document.createElement('button');

newToDo.textContent = 'New To-Do Item'

let titleField = document.createElement('input')
titleField.setAttribute('type', 'text');

let descriptField = document.createElement('input')
descriptField.setAttribute('type', 'text');

let dueField = document.createElement('input')
dueField.setAttribute('type', 'date');

let priorityField = document.createElement('input')
priorityField.setAttribute('type', 'text');

let notesField = document.createElement('input')
notesField.setAttribute('type', 'text');

let doneField = document.createElement('input')
titleField.setAttribute('type', 'text');

body.append(newToDo, titleField, descriptField, dueField, priorityField, notesField, doneField);

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
        console.log(this.title, this.description, this.dueDate, this.priority, this.notes, this.done)
    }
}

newToDo.addEventListener('click', () => {
    let item = new ToDo(titleField.value, descriptField.value, dueField.value, priorityField.value, notesField.value, doneField.value)
    item.logNote();
    clearFields()
})

function clearFields() {
    titleField.value = ''
    descriptField.value = ''
    dueField.value = ''
    priorityField.value = ''
    notesField.value = ''
    doneField.value = ''
};