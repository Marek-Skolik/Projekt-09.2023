// CAROUSEL

const carousel = document.querySelector('#myCarousel');
const prevButton = document.querySelector('.control-prev');
const nextButton = document.querySelector('.control-next');
const downloadButton = document.querySelector('.download');

let imageIndexes = [0, 1, 2, 3];
let activeIndex = 0;

function moveCarouselLeft() {
    if (activeIndex > 0) {
        activeIndex--;
        updateCarousel();
    }
}

function moveCarouselRight() {
    if (activeIndex < 3) {
        activeIndex++;
        updateCarousel();
    }
}

function updateCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    items.forEach((item, index) => {
        const newIndex = (activeIndex + index) % 4;
        item.style.order = imageIndexes[newIndex];
    });
}

prevButton.addEventListener('click', function(event) {
    moveCarouselLeft();
    event.preventDefault(); 
});

nextButton.addEventListener('click', function(event) {
    moveCarouselRight();
    event.preventDefault(); 
});

downloadButton.addEventListener('click',function(event) {
    event.preventDefault();
})


// TO DO LIST

const taskInput = document.getElementById('taskInput');
const addTaskIcon = document.getElementById('addTaskIcon');
const taskList = document.querySelector('.task-list');

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item'); 

    const birdIcon = document.createElement('img');
    birdIcon.src = 'icons/ptaszek.svg';
    birdIcon.alt = 'Zadanie'; 

    taskItem.appendChild(birdIcon); 

    const taskTextElement = document.createElement('span');
    taskTextElement.textContent = taskText;

    taskItem.appendChild(taskTextElement);

    const deleteIcon = document.createElement('img');
    deleteIcon.src = 'icons/kosz.svg';
    deleteIcon.alt = 'Usuń zadanie';
    deleteIcon.classList.add('delete-task'); 
    deleteIcon.addEventListener('click', () => {
      deleteTask(index);
    });

    taskItem.appendChild(deleteIcon);

    taskList.appendChild(taskItem);

    taskInput.value = '';

    saveTask(taskText);
  }
}

function saveTask(taskText) {
  const tasks = loadTasks();
  tasks.push(taskText);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const tasksJSON = localStorage.getItem('tasks');
  return tasksJSON ? JSON.parse(tasksJSON) : [];
}

function deleteTask(index) {
  const taskItems = document.querySelectorAll('.task-item');
  if (taskItems.length > index) {
    taskList.removeChild(taskItems[index]);
  }

  const tasks = loadTasks();
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

addTaskIcon.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

window.addEventListener('load', () => {
  const tasks = loadTasks();
  
  tasks.forEach((taskText, index) => {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item'); 

    const birdIcon = document.createElement('img');
    birdIcon.src = 'icons/ptaszek.svg';
    birdIcon.alt = 'Zadanie'; 

    taskItem.appendChild(birdIcon); 

    const deleteIcon = document.createElement('img');
    deleteIcon.src = 'icons/kosz.svg';
    deleteIcon.alt = 'Usuń zadanie';
    deleteIcon.classList.add('delete-task');
    deleteIcon.addEventListener('click', () => {
      deleteTask(index);
    });

    const taskTextElement = document.createElement('span');
    taskTextElement.textContent = taskText;

    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(deleteIcon);

    taskList.appendChild(taskItem);
  });
});