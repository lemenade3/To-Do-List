# To-Do-List
To Do App to demonstrate skills learned in Javascript to date.

This App will allow the user to add different task to a To-Do List. The tasks will each include information such as the task title, a brief description, the due date, priority and a checkbox. the user may also add notes to the task to update how it is going.


Properties a todo item should have:

- Title
- Description
- Due Date / Time
- Priority
- Done
- Notes
- Project

App should have standard todo list with all todos.
User should also have option to make own projects to separate out lists (create new object for each list but show all object items in main list)

(Possible goal is to allow list of different app users and assign the task to one of them via a drop down).

The app will also allow the user to create different projects and to group together different tasks. All of these tasks should be viewable from the main list however.

Tasks to be completed today or this week should be in their own separate groupings.

There should be a filter by owner button to see all tasks done by that individual and those outstanding

If task is complete and out of date remove from list

if task is not complete and out of date highlight in red


------ Notes ------

Page load carries out initial page load
File to construct new todos
Dom manipulator file to show new todos as they are made
File to edit todo’s after creation (change priority, properties, assigned project etc.
File to move todo’s from one project to another based on state changes

rename todoconstructor to classes 
create new projects class
projects should act as an array for the todos
intial project should be hardcoded in index and all todos shown in it.

initial project should loop through every todo and show it.

other projects should have todos created within them and added to the project.list at that point

there should be tab switching logic that pulls the required .list up and displays all items within it.


Possibly change entire app logic, most functions should be contained within the classes of projects and todos, keep dom manipulation separate though.

----------

write todo fields should be method in project class, should call dom functions that passes project as the argument. project is then passed to toDo to remove need of activeProject.