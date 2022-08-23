const body = document.querySelector('body');

//Clears all inputs

function clearFields() {
    let inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
    });
};

// Writes a project

function writeProject(item) {

    let project = document.createElement('div');
    project.setAttribute('class', 'project');
    project.setAttribute('id', item.id);

    let writeTitle = document.createElement('div');
    writeTitle.textContent = item.title;
    
    let writeDescription = document.createElement('div');
    writeDescription.textContent = item.description;

    project.append(writeTitle, writeDescription);
    body.append(project);
}

// Writes a To Do

function writeToDo(item, id) {
    let project = document.querySelector(id);

    let toDo = document.createElement('div');
    toDo.setAttribute('class', 'item');

    let writeTitle = document.createElement('div');
    writeTitle.textContent = item.title;
    
    let writeDescription = document.createElement('div');
    writeDescription.textContent = item.description;
    
    let writeDueDate = document.createElement('div');
    writeDueDate.textContent = item.dueDate;

    let writePriority = document.createElement('div');
    writePriority.textContent = item.priority;
    
    let writeNotes = document.createElement('div');
    writeNotes.textContent = item.notes;
    
    let writeDone = document.createElement('div');
    writeDone.textContent = item.done;

    toDo.append(writeTitle, writeDescription, writeDueDate, writePriority, writeNotes, writeDone);
    project.append(toDo);
}


export {writeToDo, writeProject, clearFields};