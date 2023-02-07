const input = document.getElementById('task__input');
const tasksAddButton = document.getElementById('tasks__add');
const form = document.getElementById('tasks__form');
const taskList = document.getElementById('tasks__list');

form.addEventListener('submit', event => {event.preventDefault()});

function creatTaskDiv(text) {
  let taskDiv = document.createElement('div');
  taskDiv.className = 'task';
  taskDiv.innerHTML = `<div class="task__title">${text}</div>
                       <a href="#" class="task__remove">&times;</a>`;
  let taskRemoveLink = taskDiv.getElementsByClassName('task__remove')[0];
  taskRemoveLink.addEventListener('click', event => {
    event.target.parentElement.remove();
    event.preventDefault;
  });
  return taskDiv;
};

input.addEventListener('keyup', event => {
  let taskDiv = creatTaskDiv(input.value);
  if (event.key === 'Enter' && /\S/.test(input.value)) {
    taskList.append(taskDiv);
    input.value = '';
  };
});

tasksAddButton.addEventListener('click', () => {
  let taskDiv = creatTaskDiv(input.value);
  if (/\S/.test(input.value)) {
    taskList.append(taskDiv);
    input.value = '';
  };
});
