import { openModal, createForm, editTaskDom, taskCounter } from './dom.js';
import taskFactory from './index.js';
import { projectsFactory } from './projects.js';

export default function editTask(taskEditBtn, taskNumber) {
  // add event listener to the taskEditBtn to open the form
  if (!taskEditBtn.dataset.listenerAdded) {
    taskEditBtn.addEventListener('click', () => {
      // create and open the form
      createForm();
    
      const editTaskForm = document.querySelector('form');
      const modal = document.querySelector('dialog');
      const taskToEdit = document.querySelector(`[data-task-number="${String(taskNumber)}"]`);
      const taskToEditDiv = document.querySelector(`.taskDetails${taskNumber}`);
      console.log(taskToEditDiv);
      openModal(modal);

      // add event listener to form upon submit
      editTaskForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // get the values that user inputs
        const elements = editTaskForm.elements;

        const taskTitle = elements.taskTitle.value;
        const taskDescription = elements.taskDescription.value;
        const taskDueDate = elements.taskDueDate.value;
        const taskPriority = parseInt(elements.taskPriority.value);

        // edit the taskEditBtn's details
        const newTask = taskFactory(taskTitle, taskDescription, taskDueDate, taskPriority, taskNumber);

        // remove the form and modal
        editTaskForm.remove();
        modal.remove();

        editTaskDom(taskToEdit, taskToEditDiv, taskNumber, newTask);

        taskCounter.increaseCount();
      })
    })
  }
  taskEditBtn.dataset.listenerAdded = true;
}