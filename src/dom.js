import taskFactory from './index.js';
import editTask from './editTodo.js';
import { projectsFactory } from './projects.js';
import { deleteProjectProperty, storeTasksDomContent, storeToLocalStorage, resetTasksDomContent, defaultCounter } from './storage.js';
import createTodo from './createTodo.js';
import { format } from 'date-fns';

function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

function createForm() {
  const form = document.createElement("form");
  const modal = document.createElement("dialog");

  // Add a close button to close modal
  const closeBtn = document.createElement("a");
  const closeSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const closePath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  const svgTitle = document.createElement('title');
  svgTitle.textContent = "close-circle-outline";
  closeSvg.setAttribute('viewBox', '0 0 24 24');
  closePath.setAttribute('d', "M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z")
  closeSvg.appendChild(svgTitle);
  closeSvg.appendChild(closePath);
  closeBtn.appendChild(closeSvg);

  closeBtn.classList.add("closeModal");
  modal.setAttribute('data-modal', "");
  closeBtn.addEventListener('click', () => {
    closeModal(modal);
    modal.remove();
    form.remove();
  });
  form.appendChild(closeBtn);

  // Create input for task title
  const titleAttributes = {
    'type': 'text',
    'id': 'taskTitle',
    'name': 'taskTitle',
    'required': ''
  }
  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "taskTitle");
  titleLabel.textContent = "Title";

  const titleInput = document.createElement("input");
  setAttributes(titleInput, titleAttributes);
  form.appendChild(titleLabel);
  form.appendChild(titleInput);

  // Create input for task description
  const descriptionAttributes = {
    'id': 'taskDescription',
    'name': 'taskDescription',
    'rows': 10,
    'cols': 50
  }
  const descriptionLabel = document.createElement("label");
  descriptionLabel.setAttribute("for", "taskDescription");
  descriptionLabel.textContent = "Description";

  const descriptionInput = document.createElement("textArea");
  setAttributes(descriptionInput, descriptionAttributes);
  form.appendChild(descriptionLabel);
  form.appendChild(descriptionInput);

  // Create input for task due date
  const dueDateAttributes = {
    'type': 'datetime-local',
    'id': 'taskDueDate',
    'name': 'taskDueDate',
  }
  const dueDateLabel = document.createElement("label");
  dueDateLabel.setAttribute("for", "taskDueDate");
  dueDateLabel.textContent = "Due Date";

  const dueDateInput = document.createElement("input");
  setAttributes(dueDateInput, dueDateAttributes);
  form.appendChild(dueDateLabel);
  form.appendChild(dueDateInput);

  // Create input for task priority
  const priorities = ["None", "Low", "Medium", "High"];

  const selectPriorityLabel = document.createElement('label');
  selectPriorityLabel.setAttribute('for', 'taskPriority');
  selectPriorityLabel.textContent = "Priority";

  const selectPriority = document.createElement('select');
  const selectPriorityAttributes = {'id': 'taskPriority', 'name': 'taskPriority'};
  setAttributes(selectPriority, selectPriorityAttributes);

  for (let i = 0; i < priorities.length; i++) {
    const priorityOptions = document.createElement("option");
    priorityOptions.setAttribute("value", i);
    priorityOptions.textContent = priorities[i];
    selectPriority.appendChild(priorityOptions);
  }
  form.appendChild(selectPriorityLabel);
  form.appendChild(selectPriority); 

  // Create submit button
  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit")
  submitBtn.textContent = "Submit";
  form.appendChild(submitBtn);

  form.action = "#";

  modal.appendChild(form);
  document.body.appendChild(modal);
} 

function createAddProjectForm() {
  const form = document.createElement("form");
  const modal = document.createElement("dialog");

  // Add a close button to close modal
  const closeBtn = document.createElement("a");
  const closeSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const closePath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  const svgTitle = document.createElement('title');
  svgTitle.textContent = "close-circle-outline";
  closeSvg.setAttribute('viewBox', '0 0 24 24');
  closePath.setAttribute('d', "M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z")
  closeSvg.appendChild(svgTitle);
  closeSvg.appendChild(closePath);
  closeBtn.appendChild(closeSvg);

  closeBtn.classList.add("closeModal");
  modal.setAttribute('data-modal', "");
  closeBtn.addEventListener('click', () => {
    closeModal(modal);
    modal.remove();
    form.remove();
  });
  form.appendChild(closeBtn);

  modal.setAttribute('data-modal', '');
  form.setAttribute('action', '#');
  modal.appendChild(form);

  // Create form label for project name
  const projectName = document.createElement("label");
  projectName.textContent = "Project Name";
  projectName.setAttribute("name", "projectName");

  const projectNameInput = document.createElement('input');
  const projectNameAttributes = {
    // Create form input
    'name': 'projectName',
    'id': 'projectName',
    'required': ''
  };

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit";
  submitBtn.setAttribute("type", "submit");

  form.appendChild(projectName);
  form.appendChild(projectNameInput);
  form.appendChild(submitBtn);
  
  setAttributes(projectNameInput, projectNameAttributes);

  document.body.appendChild(modal);
}

function openModal(modal) {
  modal.showModal();
}

function closeModal(modal) {
  modal.close();
}

const taskCounter = (() => {
  let count = 0;

  function getCount() {
    return count;
  }

  function increaseCount() {
    count++;
    storeToLocalStorage("taskCounter", {count: count})
  }

  function resetCount() {
    count = 0;
  }

  function updateCount(newCount) {
    count = newCount
  }

  return { updateCount, getCount, increaseCount, resetCount }
})()

const tasksDom = (() => {
  let tasks = {
    "taskInDisplay": [],
  };

  function pushToTaskDom(task) {
    tasks["taskInDisplay"].push(task);
    getTasksDomArr()
    storeToLocalStorage("tasksDom", tasks);
  }

  function resetTasks() {
    tasks = {
      "taskInDisplay": [],
    };
  }

  function getTasksDomArr() {
    return tasks;
  }

  function editTask(taskNumber, newTask) {
    tasks["taskInDisplay"].forEach(task => {
      if (task.taskNumber === parseInt(taskNumber)) {
        const index = tasks["taskInDisplay"].indexOf(task);
        tasks["taskInDisplay"].splice(index, 1);
        tasks["taskInDisplay"].splice(index, 0, newTask);
      }
    })
    localStorage.removeItem("tasksDom");
    localStorage.setItem("tasksDom", JSON.stringify(tasks));
  }

  function deleteTask(taskNumber) { 
    tasks["taskInDisplay"].forEach(task => {
      if (task.taskNumber === parseInt(taskNumber)) {
        const index = tasks["taskInDisplay"].indexOf(task);
        tasks["taskInDisplay"].splice(index, 1);
      }
    })
    localStorage.removeItem("tasksDom");
    localStorage.setItem("tasksDom", JSON.stringify(tasks));
  }

  return { pushToTaskDom, resetTasks, getTasksDomArr, deleteTask, editTask }
})()

function createTask(container, task, taskNumber) {
  const taskContainer = document.createElement("div");
  const taskDetails = document.createElement("div");
  taskDetails.classList.add(`taskDetails${taskNumber}`);
  taskDetails.classList.add('taskDetails');
  taskContainer.classList.add("task");
  taskContainer.dataset.taskNumber = taskNumber;
 
  
  const checkButton = document.createElement('input');
  checkButton.classList.add('checkBox');
  checkButton.type = "checkbox";
  taskContainer.appendChild(checkButton);

  checkButton.addEventListener('click', () => {
    setTimeout(() => {
      deleteTaskFromObject(projectsFactory.getProjects(), projectsFactory.getCurrentProjectName(), deleteBtn.dataset.deleteBtnNumber);
      taskContainer.remove();
    }, 1000);
  })

  const taskTitleDom = document.createElement("h3");
  taskTitleDom.classList.add(`taskTitle${taskNumber}`);
  taskTitleDom.textContent = task.title;
  taskDetails.appendChild(taskTitleDom);
  
  if (task.description !== "") {
    const taskDescriptionDom = document.createElement("p");
    taskDescriptionDom.classList.add(`taskDescription${taskNumber}`);
    taskDescriptionDom.textContent = task.description;
    taskDetails.appendChild(taskDescriptionDom);
  }
  
  if (task.dueDate !== "") {
    const taskDueDateDom = document.createElement("p");
    taskDueDateDom.classList.add(`taskDueDate${taskNumber}`);
    taskDueDateDom.textContent = `Due on ${format(task.dueDate, "PPPPpppp")}`;
    taskDetails.appendChild(taskDueDateDom);
  }

  taskContainer.appendChild(taskDetails);

  // add an edit button for a task
  const editBtn = document.createElement('a');
  const editSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const editPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  const svgTitle = document.createElement('title');
  svgTitle.textContent = "pencil";
  editSvg.setAttribute('viewBox', '0 0 24 24');
  editPath.setAttribute('d', "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z")
  editSvg.appendChild(svgTitle);
  editSvg.appendChild(editPath);
  editBtn.appendChild(editSvg);
  editBtn.classList.add("editTask");

  taskContainer.appendChild(editBtn);

  // add a delete button for a task
  const deleteBtn = document.createElement('a');
  deleteBtn.classList.add("deleteTask");
  deleteBtn.dataset.deleteBtnNumber = taskNumber;
  const deleteSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const deletePath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  const deleteSvgTitle = document.createElement('title');
  deleteSvgTitle.textContent = "delete";
  deleteSvg.setAttribute('viewBox', '0 0 24 24');
  deletePath.setAttribute('d', "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" )
  deleteSvg.appendChild(svgTitle);
  deleteSvg.appendChild(deletePath);
  deleteBtn.appendChild(deleteSvg);

  // delete corresponding task from dom and object when clicked
  deleteBtn.addEventListener('click', () => {
    deleteTaskFromObject(projectsFactory.getProjects(), projectsFactory.getCurrentProjectName(), deleteBtn.dataset.deleteBtnNumber);
    taskContainer.remove();
  })
  taskContainer.appendChild(deleteBtn);
  container.appendChild(taskContainer);
  editTask(editBtn, taskNumber); 
  tasksDom.pushToTaskDom(task);
}

function editTaskDom(taskToEdit, taskToEditDiv, taskNumber, task) {
  const taskTitleDom = document.querySelector(`.taskTitle${taskNumber}`);
  taskTitleDom.textContent = task.title;

  if (task.description !== "") {
    const taskDescriptionDom = document.querySelector(`.taskDescription${taskNumber}`);
    if (taskDescriptionDom === null) {
      const newTaskDescriptionDom = document.createElement("p");
      newTaskDescriptionDom.classList.add(`taskDescription${taskNumber}`)
      newTaskDescriptionDom.textContent = task.description;
      taskToEditDiv.appendChild(newTaskDescriptionDom);
    } else {
      taskDescriptionDom.textContent = task.description;
    }
  } else {
    const taskDescriptionDom = document.querySelector(`.taskDescription${taskNumber}`);
    if (taskDescriptionDom !== null) {
      taskDescriptionDom.remove();
    }
  }

  if (task.dueDate !== "") {
    const taskDueDateDom = document.querySelector(`.taskDueDate${taskNumber}`);
    if (taskDueDateDom === null) {
      const newTaskDueDateDom = document.createElement("p");
      newTaskDueDateDom.classList.add(`taskDueDate${taskNumber}`);
      newTaskDueDateDom.textContent = `Due on ${format(task.dueDate, "PPPPpppp")}`;
      taskToEditDiv.appendChild(newTaskDueDateDom);
    } else {
      taskDueDateDom.textContent = `Due on ${format(task.dueDate, "PPPPpppp")}`;
    }
  } else {
    const taskDueDateDom = document.querySelector(`.taskDueDate${taskNumber}`);
    if (taskDueDateDom !== null) {
      taskDueDateDom.remove();
    }
  }
  console.log(projectsFactory.getProjects())

  editTaskObject(projectsFactory.getProjects(), projectsFactory.getCurrentProjectName(), taskNumber, task)
}

// let bucket = 0
function displayProjects(bucket, projectTitleName) {
  const projectContainer = document.querySelector("ul");
  const project = document.createElement("li");

  const projectTitleHolder = document.createElement("span");

  projectTitleHolder.textContent = projectTitleName;
  project.setAttribute('data-project-number', bucket);
  project.appendChild(projectTitleHolder);
  projectContainer.appendChild(project);

  const deleteBtn = document.createElement('a');
  const deleteSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const deletePath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  const svgTitle = document.createElement('title');
  svgTitle.textContent = "delete";
  deleteSvg.setAttribute('viewBox', '0 0 24 24');
  deletePath.setAttribute('d', "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" )
  deleteSvg.appendChild(svgTitle);
  deleteSvg.appendChild(deletePath);
  deleteBtn.appendChild(deleteSvg);

  deleteBtn.classList.add("deleteProject");
  deleteBtn.dataset.deleteBtnNumber = bucket;
  project.appendChild(deleteBtn);

  // delete corresponding task from dom and object when clicked
  deleteBtn.addEventListener('click', () => {
      Object.keys(projectsFactory.getProjects()).forEach(projects => {
        if (projects === deleteBtn.getAttribute('data-delete-btn-number')) {
          delete projectsFactory.getProjects()[projects];
          deleteProjectProperty(deleteBtn.getAttribute('data-delete-btn-number'))
          console.log(projectsFactory.getProjectNumber());
          // delete tasks in dom if tasks in display is from project to be deleted
          if (parseInt(projectsFactory.getProjectNumber()) === parseInt(deleteBtn.getAttribute('data-delete-btn-number'))) {
            const tasks = document.querySelectorAll('.task');
            const addTaskBtn = document.querySelector('.addTask');
            resetTasksDomContent();
            [...tasks].forEach(task => {
              task.remove();
            })
            localStorage.removeItem("tasksDom");
            addTaskBtn.remove();
          }
          project.remove();
        } 
      })
    })
  projectsFactory.setProjectNumber(project, projectTitleName, projectTitleHolder);
}

function editTaskObject(object, projectName, taskNumber, newTask) {
  let keysArr = Object.keys(object);

  keysArr.forEach(keys => {
    Object.keys(object[keys]).forEach(key => {
      if (projectName === key) {
        object[keys][key].forEach(task => {
          if (task.taskNumber === parseInt(taskNumber)) {
            const index = object[keys][key].indexOf(task);
            object[keys][key].splice(index, 1);
            object[keys][key].splice(index, 0, newTask);
          }
        })
      }
    })
  })
  localStorage.removeItem("projects");
  localStorage.setItem("projects", JSON.stringify(object));
  tasksDom.editTask(taskNumber, newTask);
}

// algorithm to delete a specific element from the array values of each object properties
function deleteTaskFromObject(object, projectName, deleteBtnNumber) {   
  let keysArr = Object.keys(object);
  keysArr.forEach(keys => {
    Object.keys(object[keys]).forEach(key => {
      if (projectName === key) {
        object[keys][key].forEach(task => {
          if (task.taskNumber === parseInt(deleteBtnNumber)) {
            const index = object[keys][key].indexOf(task);
            object[keys][key].splice(index, 1);
          }
        })
      }
    })
  })
  localStorage.removeItem("projects");
  localStorage.setItem("projects", JSON.stringify(object));
  tasksDom.deleteTask(deleteBtnNumber);
}

function addTaskButton() {
  const addTaskBtnNew = document.createElement('a');
  const tasksContainer = document.querySelector(".tasksContainer");
  addTaskBtnNew.addEventListener("click", createTodo);  
  addTaskBtnNew.textContent = "Add Task";
  addTaskBtnNew.classList.add('addTask');
  tasksContainer.appendChild(addTaskBtnNew);
}

export { addTaskButton,taskCounter, createForm, openModal, closeModal, createTask, editTaskDom, createAddProjectForm, displayProjects, tasksDom }