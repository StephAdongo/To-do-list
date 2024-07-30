import { createAddProjectForm, openModal, closeModal, displayProjects, createTask, tasksDom, projectsDom, taskCounter, addTaskButton } from "./dom";
import createTodo from "./createTodo";
import { storeToLocalStorage, addNewTaskLocalStorage, addNewProjectLocalStorage, resetTasksDomContent, defaultCounter } from "./storage";

// Create a projects factory
export const projectsFactory = (() => {
  let projectCount = 0;

  let projects = {
    "0": {"My Day": []},
    "currentProjNumberTracker": 0,
  };

  
  let projectNumber = "0";
  

  let currentProjName = "My Day";
  
  function addTaskToProject(projectNum, projectName, task) {
    console.log(projectName);
    if (projectNum) {
      projects[projectNum][projectName].push(task);
      addNewTaskLocalStorage(projectNum, projectName, task);
    }
  }
  
  function addProject(projectNum, projectName) {
    console.log(projectNum);
    projects[projectNum] = {[projectName]: []};
    storeToLocalStorage("projects", projects);
  }

  function updateCurrentProjectName(newName) {
    currentProjName = newName;
  }

  // when a user clicks on a project, update the current project number
  // and also update the display of tasks matching that specific project's 
  //tasks
  function setProjectNumber(project, projectTitleName, projectClickHolder) {
    projectClickHolder.addEventListener('click', () => {
      projectNumber = project.getAttribute('data-project-number');
      currentProjName = projectTitleName;
      storeToLocalStorage("currentProjName", {name: projectTitleName})

      projects.currentProjNumberTracker = parseInt(projectNumber);
      localStorage.removeItem("projects");
      localStorage.setItem("projects", JSON.stringify(projects));
      // remove the current tasks 
      const tasks = document.querySelectorAll('.task');
      const tasksContainer = document.querySelector('.tasks');
      const addTaskBtn = document.querySelector('.addTask');
      
      
      resetTasksDomContent();
      
      tasksDom.resetTasks();
      [...tasks].forEach(task => {
        task.remove();
      })
      
      console.log(projects);
      projects[projectNumber][projectTitleName].forEach(task => {
        createTask(tasksContainer, task, task.taskNumber);
      })

      if (addTaskBtn === null) {
        addTaskButton();
      }
    })
  }

  function getProjectNumber() {
    return projectNumber;
  }

  function getProjects() {
    return projects;
  }

  function getProjectCount() {
    return projectCount;
  }
  function updateProjectNumber(newNum) {
    projectNumber = newNum;
  }

  function projectCounterIncrease() {
    projectCount++;
    storeToLocalStorage("totalProjectsTracker", {total: projectCount});
  }

  function updateProjectCounter(num) {
    projectCount = num;
  }

  function getCurrentProjectName() {
    return currentProjName;
  }

  function updateProjects(newProj) {
    projects = newProj;
  }

  return { updateProjectCounter, updateCurrentProjectName, updateProjectNumber,  getCurrentProjectName, updateProjects, addTaskToProject, addProject, getProjects, getProjectCount, projectCounterIncrease, setProjectNumber, getProjectNumber }; 
})()

// Make a function to add a project
export function createProject() {
  createAddProjectForm();
  const form = document.querySelector('form');
  const modal = document.querySelector('dialog');

  openModal(modal);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formElements = form.elements;

    const projectTitleName = formElements.projectName.value;

    // create and append the project to the container;
    displayProjects(projectsFactory.getProjectCount(), projectTitleName);

    // Add newly created object to the projects object in the project factory
    projectsFactory.addProject(String(projectsFactory.getProjectCount()), projectTitleName);

    projectsFactory.projectCounterIncrease();
    closeModal(modal);
    form.remove();
    modal.remove();
  });
}