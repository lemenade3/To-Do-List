// Imports from various modules

import {pageLoad} from './pageLoad';
import { writeInbox, writeProject } from './domManipulation';
import './style.css';
import { Inbox } from './projects';

// Calls initial page load

pageLoad();

// Creates the inbox project

let inbox = new Inbox('Inbox', 'All of your outstanding tasks are stored here');
writeProject(inbox)


