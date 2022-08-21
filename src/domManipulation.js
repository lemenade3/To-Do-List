const body = document.querySelector('body');

function clearFields(title, description, dueDate, priority, notes, done) {
    title = ''
    description = ''
    dueDate = ''
    priority = ''
    notes = ''
    done = ''
};

function writeToDo(title, description, dueDate, priority, notes, done) {
    let toDo = document.createElement('div');

    let writeTitle = document.createElement('div');
    writeTitle.textContent = title;
    
    let writeDescription = document.createElement('div');
    writeDescription.textContent = description;
    
    let writeDueDate = document.createElement('div');
    writeDueDate.textContent = dueDate;

    let writePriority = document.createElement('div');
    writePriority.textContent = priority;
    
    let writeNotes = document.createElement('div');
    writeNotes.textContent = notes;
    
    let writeDone = document.createElement('div');
    writeDone.textContent = done;

    toDo.append(writeTitle, writeDescription, writeDueDate, writePriority, writeNotes, writeDone);
    body.append(toDo);
}

export {writeToDo, clearFields};