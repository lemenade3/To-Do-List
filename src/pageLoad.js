function pageLoad () {
    let body = document.querySelector('body');

    let makeToDo = document.createElement('button');
    makeToDo.textContent = 'New To-Do Item'

    let title = document.createElement('input')
    title.setAttribute('type', 'text');
    title.setAttribute('id', 'title');

    let description = document.createElement('input')
    description.setAttribute('type', 'text');
    description.setAttribute('id', 'description');

    let dueDate = document.createElement('input');
    dueDate.setAttribute('type', 'date');
    dueDate.setAttribute('id', 'dueDate');

    let priority = document.createElement('input');
    priority.setAttribute('type', 'text');
    priority.setAttribute('id', 'priority');

    let notes = document.createElement('input');
    notes.setAttribute('type', 'text');
    notes.setAttribute('id', 'notes');

    let done = document.createElement('input');
    done.setAttribute('type', 'checkbox');
    done.setAttribute('id', 'done');

    body.append(makeToDo, title, description, dueDate, priority, notes, done);
};

export {pageLoad as default};