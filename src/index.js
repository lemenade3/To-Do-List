// Imports from various modules

import {pageLoad} from './pageLoad';
import { writeProject } from './domManipulation';
import './style.css';
import { Project, Inbox, Dates, Completed, projectList } from './projects';
import {isToday, isTomorrow, isThisWeek, isPast} from 'date-fns';
import { ToDo, toDoList } from './toDos'

// Calls initial page load

pageLoad();

// Creates the inbox project

let inbox = new Inbox('Inbox', 'All of your outstanding tasks are stored here');
writeProject(inbox)

let today = new Dates('Today', 'All tasks Due Today', isToday)
writeProject(today);

let tomorrow = new Dates('Tomorrow', 'All Tasks Due Tomorrow', isTomorrow);
writeProject(tomorrow);

let thisWeek = new Dates('This Week', 'All Tasks Due This Week', isThisWeek);
writeProject(thisWeek);

let overdue = new Dates('Overdue', 'These Tasks are Overdue', isPast)
writeProject(overdue);

let completed = new Completed('Completed', 'Tasks That Are Marked Complete');
writeProject(completed);

loadProjects();

loadToDos();

inbox.writeToDoList();
inbox.writeNewToDoButton();

function loadProjects() {
    if (localStorage.getItem('projects')) {
        let projects = window.localStorage.getItem('projects');
        let parsedList = JSON.parse(projects);
        for (let i = 0; i < parsedList.length; i++) {
            let project = new Project(parsedList[i].title, parsedList[i].description)
            writeProject(project);
        };
    }
};

function loadToDos() {
    if (localStorage.getItem('toDos')) {
        let toDos = window.localStorage.getItem('toDos');
        let parsedList = JSON.parse(toDos);
        for (let i = 0; i < parsedList.length; i++) {
            if (parsedList[i].project.title === 'Inbox') {
                parsedList[i].project = inbox
            } 
            for (let i = 0; i < projectList.length; i++) {
                if (projectList[i].title == parsedList[i].project.title) {
                    parsedList[i].project = projectList[i];
                }
            }
            let toDo = new ToDo(parsedList[i].title, parsedList[i].description, parsedList[i].dueDate, parsedList[i].priority, parsedList[i].project, parsedList[i].done, parsedList[i].notes);
            toDoList.push(toDo);
        };
    }
};



/*
use intlFormat Date to display date in todo instead of input, move input to expandModal / if date !valid reject it
*/
