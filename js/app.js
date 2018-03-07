const todoForm = document.getElementById('todo-form'),
      addInput = document.getElementById('add-input'),
      todoList = document.getElementById('todo-list'),
      todoItems = document.querySelectorAll('.todo-item');

function main() {
      todoForm.addEventListener('submit', addTodoItem);
      todoItems.forEach(item => bindEvents(item));
}

function createTodoItem(title) {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'checkbox';

      const label = document.createElement('label');
      label.innerText = title;
      label.className = 'title';

      const editInput = document.createElement('input');
      editInput.type = 'text';
      editInput.className = 'textfield';

      const editButton = document.createElement('button');
      editButton.innerText = 'Изменить';
      editButton.className = 'edit';
      
      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'Удалить';
      deleteButton.className = 'delete';

      const listItem = document.createElement('li');
      listItem.className = 'todo-item';

      listItem.appendChild(checkbox);
      listItem.appendChild(label);
      listItem.appendChild(editInput);
      listItem.appendChild(editButton);
      listItem.appendChild(deleteButton);
	
	bindEvents(listItem);

      return listItem;

}

const bindEvents = (todoItem) => {
	const checkbox = todoItem.querySelector('.checkbox'),
		editButton = todoItem.querySelector('button.edit'),
		deleteButton = todoItem.querySelector('button.delete');


	if (checkbox) checkbox.addEventListener('change', toggleTodoItem);
	if (editButton) editButton.addEventListener('click', editTodoItem);
	if (deleteButton) deleteButton.addEventListener('click', deleteTodoItem);

}

const addTodoItem = (event) => {
        event.preventDefault();
        if (addInput.value === '') return alert('Необходимо ввсети название задачи.');
        const todoItem = createTodoItem(addInput.value);
        todoList.appendChild(todoItem);
        addInput.value = '';
}

function toggleTodoItem()  {
	const listItem = this.parentNode;
	listItem.classList.toggle('completed');
}

function editTodoItem()  {
      const listItem = this.parentNode,
            title = listItem.querySelector('.title'),
            editInput = listItem.querySelector('.textfield')
            isEditing = listItem.classList.contains('editing');

            if (isEditing) {
                  title.innerText = editInput.value; 
                  this.innerText = 'Изменить'
            } else {
                  editInput.value = title.innerText;
                  this.innerText = 'Сохранить';
            }

            listItem.classList.toggle('editing');
}

function deleteTodoItem()  {
      const listItem = this.parentNode;
      listItem.remove();
}
main();
todoForm.addEventListener('submit', addTodoItem);