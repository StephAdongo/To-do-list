import { createTask, tasksDom, projectsDom, taskCounter, displayProjects } from "./dom";
import { projectsFactory } from "./projects";

// function to save  to local storage after new project is made
function storeToLocalStorage(propertyName, object) {
  const serialized = JSON.stringify(object);
  localStorage.setItem(propertyName, serialized);
}

function addNewProjectLocalStorage(projectNum, projectObj) {
  let deserialized = JSON.parse(projectObj);
  deserialized[projectNum] = [];
  
  localStorage.removeItem(projectObj)
  const serialized = JSON.stringify(deserialized);
  localStorage.setItem("projects", serialized)
} 

// save task to local storage after new task is made
function addNewTaskLocalStorage(projectNumber, projectName, task) {
  // get the projects obj in local storage
  const obj = localStorage.getItem("projects");

  if (obj === null) {
    let projects = {
      "0": {"My Day": []}
    }
    let projectsStringified = JSON.stringify(projects);
    localStorage.setItem("projects", projectsStringified);
  }

  const newObj = localStorage.getItem("projects");
  const newObjParsed = JSON.parse(newObj);

  // convert to object in js and add task
  newObjParsed[projectNumber][projectName].push(task); 

  // convert back to string and put it back in local storage
  const serialized = JSON.stringify(newObjParsed);
  localStorage.removeItem(newObj);
  localStorage.setItem("projects", serialized);
}

function deleteProjectProperty(projectNumber) {
  let obj = localStorage.getItem("projects");

  let deserialized = JSON.parse(obj);

  console.log(projectsFactory.getProjectNumber());

  if (deserialized) {
    Object.keys(deserialized).forEach(projects => {
      if (projects === projectNumber) {
        delete deserialized[projectNumber];
      }
    })
  }
    
  let serialized = JSON.stringify(deserialized);

  localStorage.removeItem(obj);

  localStorage.setItem("projects", serialized);
}

function renderStoredTaskContent() {
  const tasks = localStorage.getItem("tasksDom");
  const tasksParsed = JSON.parse(tasks);
  const taskContainer = document.querySelector('.tasks');
  
  tasksParsed["taskInDisplay"].forEach(task => {
    createTask(taskContainer, task, task.taskNumber);
  })
}

function renderStoredProjectsContent() {
  const projects = localStorage.getItem("projects");
  const projectsParsed = JSON.parse(projects);

  const projectsDom = document.querySelectorAll("li");

  [...projectsDom].forEach(project => {
    project.remove();
  })

  Object.keys(projectsParsed).forEach(projectsKey => {
    Object.keys(projectsParsed[projectsKey]).forEach(key => {
      displayProjects(projectsKey, key);
    })
  })

}

function resetTasksDomContent() {
  let tasksDom = localStorage.getItem("tasksDom");
  localStorage.removeItem(tasksDom);

  let tasks = {
    "taskInDisplay": [],
  }

  let tasksSerialized = JSON.stringify(tasks);
  localStorage.setItem("tasksDom", tasksSerialized);
}
export { resetTasksDomContent, deleteProjectProperty, storeToLocalStorage, addNewTaskLocalStorage, addNewProjectLocalStorage, renderStoredTaskContent, renderStoredProjectsContent };