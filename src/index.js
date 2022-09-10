// Imports from various modules

import {pageLoad} from './pageLoad';
import { writeProject, writeHeaders, writeToDoButton } from './domManipulation';
import './style.css';
import { Project , Inbox , Dates, Completed} from './projects';
import {isToday, isTomorrow, isThisWeek, isPast} from 'date-fns';

// Calls initial page load

pageLoad();

// Creates the inbox project

let inbox = new Inbox('Inbox', 'All of your outstanding tasks are stored here');
writeProject(inbox)
writeHeaders(inbox)
writeToDoButton(inbox);

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

/*
use intlFormat Date to display date in todo instead of input, move input to expandModal / if date !valid reject it
*/
