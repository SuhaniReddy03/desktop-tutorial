document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('task-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const taskInput = document.getElementById('task-input').value;
        const priorityInput = document.getElementById('priority-input').value;
        const categoryInput = document.getElementById('category-input').value;
        const dueDateInput = document.getElementById('duedate-input').value;

        const li = document.createElement('li');

        const taskDetails = document.createElement('div');
        taskDetails.classList.add('task-details');
        taskDetails.innerHTML = <strong>${taskInput}</strong> - ${categoryInput} - ${priorityInput} - ${dueDateInput};
        li.appendChild(taskDetails);

        const taskActions = document.createElement('div');
        taskActions.classList.add('task-actions');

        const completeBtn = document.createElement('button');
        completeBtn.classList.add('complete');
        completeBtn.textContent = 'Complete';
        completeBtn.addEventListener('click', () => {
            taskDetails.style.textDecoration = 'line-through';
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        taskActions.appendChild(completeBtn);
        taskActions.appendChild(deleteBtn);

        li.appendChild(taskActions);

        document.getElementById('task-list').appendChild(li);

        document.getElementById('task-form').reset();
    });
});