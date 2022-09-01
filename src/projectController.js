import {writeProject} from './domManipulation'
import {Project} from './classes'

let activeProject;

function makeProject(title, description) {
    let project = new Project(title, description)
    writeProject(project)
    activeProject = project;
}

export {makeProject, activeProject};