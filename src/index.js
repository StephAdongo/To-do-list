import './styles.css';
import createTodo from './createTodo.js';
import { createProject, projectsFactory } from './projects.js';
import { deleteProjectProperty, renderStoredTaskContent, resetTasksDomContent, renderStoredProjectsContent, storeToLocalStorage } from './storage.js';
import { displayProjects, projectsDom, addTaskButton, taskCounter } from './dom.js';

export default function task(title, description, dueDate, priority, taskNumber) {
  let newTitle = "";
  
  if (priority === 3) {
    newTitle += `!!! ${title}` // High
  } else if (priority === 2) {  
    newTitle += `!! ${title}` // Medium Priority
  } else if (priority === 1 ) {
    newTitle += `! ${title}` // Low Priority
  } else {
    return { title, description, dueDate, priority, taskNumber, getTaskNumber }
  }
  title = newTitle;

  function getTaskNumber() {
    return taskNumber
  }

  return { title, description, dueDate, priority, taskNumber, getTaskNumber }
}

document.addEventListener('DOMContentLoaded', () => { 
  if (localStorage.getItem("currentProjName")) {
    projectsFactory.updateCurrentProjectName(JSON.parse(localStorage.getItem("currentProjName")).name)
  }

  if (localStorage.getItem("totalProjectsTracker")) {
    projectsFactory.updateProjectCounter(JSON.parse(localStorage.getItem("totalProjectsTracker")).total);
  }

  if (localStorage.getItem("taskCounter")) {
    taskCounter.updateCount(JSON.parse(localStorage.getItem("taskCounter")).count)
  }
  
  // render projects if it exists in local storage
  if (localStorage.getItem("projects")) {
    let counterProj = JSON.parse(localStorage.getItem("projects"));
    if (counterProj.currentProjNumberTracker) {
      projectsFactory.updateProjectNumber(JSON.parse(localStorage.getItem("projects")).currentProjNumberTracker);
    } 

    if (Object.keys(JSON.parse(localStorage.getItem("projects"))).length !== 1) {
      addTaskButton();
      let newProjects = JSON.parse(localStorage.getItem("projects"));
      projectsFactory.updateProjects(newProjects);
      renderStoredProjectsContent();

    }
  } else {
      addTaskButton();
      displayProjects(projectsFactory.getProjectNumber(), "My Day");
      projectsFactory.projectCounterIncrease();
      storeToLocalStorage("projects", projectsFactory.getProjects());
  }

  // load the tasks in display if it exists in local storage
  if (localStorage.getItem("tasksDom")) {
    renderStoredTaskContent();
  }

  const addProjBtn = document.querySelector('.addProject');
  addProjBtn.addEventListener('click', createProject);
})