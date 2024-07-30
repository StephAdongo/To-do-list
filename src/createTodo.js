import taskFactory from "./index.js";
import { openModal, closeModal, createTask, createForm, taskCounter, deleteObject } from "./dom.js";
import { projectsFactory } from "./projects.js";

export default function createTodo() {
  // Dynamically create the form
  createForm();

  const addTaskForm = document.querySelector("form");
  const modal = document.querySelector("dialog");
  const taskContainer = document.querySelector('.tasks');


  // Open the form's modal
  openModal(modal);


  // Add Event Listener to form upon submit
  addTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Save the form input from user and store in variables
    const elements = addTaskForm.elements;
    
    const taskTitle = elements.taskTitle.value;
    const taskDescription = elements.taskDescription.value;
    const taskDueDate = elements.taskDueDate.value;
    const taskPriority = parseInt(elements.taskPriority.value);

    // Create task based on user input
    const newTask = taskFactory(taskTitle, taskDescription, taskDueDate, taskPriority, taskCounter.getCount());

    createTask(taskContainer, newTask, newTask.getTaskNumber());

    taskCounter.increaseCount();

    // Add the newly create task to its corresponding project
    projectsFactory.addTaskToProject(projectsFactory.getProjectNumber(), projectsFactory.getCurrentProjectName(), newTask);

    // Close form
    closeModal(modal);
  
    // Remove the Form 
    addTaskForm.remove();
    modal.remove();
  });
}