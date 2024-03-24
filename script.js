const button = document.querySelector('button');
const inputField = document.querySelector('input');
const todoList = document.querySelector('.todo-list');
const emptyListMessage = document.querySelector('.empty-list-message');


let activities = [];

showContent();

button.addEventListener('click', function () {
    const newActivity = inputField.value.trim();
    if (newActivity.length > 0) {

        activities.push(newActivity);
        showContent();
        inputField.value = '';
    }
});

function showContent() {
    todoList.innerText = '';
    emptyListMessage.innerText = '';
    if (activities.length > 0) {
        activities.forEach(function (activity) {
            todoList.innerHTML += `
            <li class="todo-item">
                <div class="todo-check">
                     <img src="./check.svg" alt="Check icon">
                 </div>
                <p class="todo-text">${activity}</p>
            </li>
            `;
        });
        const checks = document.querySelectorAll('.todo-check')
        checks.forEach(function (check, index) {

            check.addEventListener('click', function () {
                activities.splice(index, 1);
                showContent();
            });
        });
    } else {
        emptyListMessage.innerText = 'There are no activities';
    };
};











