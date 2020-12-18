//  Function, createTaskHtml
const createTaskHtml = (id, taskName, taskDescription, assignTo, dueDate, status) =>
  //cardTemplate.innerHTML=

  `<div class="card shadow p-2 mb-4 bg-white m-2" style="width: 18rem">
          <div class="card-body" data-task-id=${id}>
            <h5 class="card-title">${taskName}</h5>
            <p class="card-text">
              ${taskDescription}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="assigned-to-label list-group-item">
             Assigned to:
              <span class="assignee">${assignTo}</span>
            </li>
            <li class="list-group-item due-date-label">
              Due date:
              <span class="due-date">${dueDate}</span>
            </li>
            <li class="list-group-item status-label">
              Status:
              <span class="status">${status}</span>
            </li>
          </ul>
       <div class="card-body">
      <!-- Buttons -->
            <button type="button" class="btn btn-success done-button" ">Done</button>
            <button type="button" class="btn btn-danger">Delete</button>
            <button type="button" class="btn btn-primary">Edit</button>
          </div>
        </div>
      </div>`;

// TaskManager class
class TaskManager {
  constructor(currentId = "0") {
    this._tasks = [];
    this._currentId = currentId;
  }
  // Method for adding tasks
  addTask(taskName, taskDescription, assignedTo, dueDate) {
    const newTask = {
      id: this._currentId++,
      taskName: taskName,
      taskDescription: taskDescription,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: "TODO",
    };
    this._tasks.push(newTask);
  }
  // Create method to get task by id
  getTaskById(taskId) {
    let foundTask;

    for (let i = 0; i <this._tasks.length; i++) {
      const task = this._tasks[i];
      if (taskId === newTask.id) {
        foundTask = task;
      }
    }
    return foundTask;
  }
  // Create render method
  render() {
    // Creating variable to store task html
    const tasksHtmlList = [];

    // Loop over tasks to create html & store in array
    for (let i = 0; i < this._tasks.length; i++) {
      // Store the current task in a variable
      const newTask = this._tasks[i];

      // Create date variable to store formatted date
      const date = new Date(newTask.dueDate);
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let formattedDate = `${day}/${month}/${year}`;

      // Create variable to store the html of current task
      const taskHtml = createTaskHtml(
        newTask.id,
        newTask.taskName,
        newTask.taskDescription,
        newTask.assignedTo,
        formattedDate,
        newTask.status
      );
      tasksHtmlList.push(taskHtml);
    }
    // Create a variable to join task to html string
    const tasksHtml = tasksHtmlList.join("\n");
    cardContainer.innerHTML = tasksHtml; //cardTemplare

  
  }
}

//const cardTemplate = document.querySelector("#cardTemplate");
const cardContainer = document.querySelector("#card-container");

