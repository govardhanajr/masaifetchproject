window.addEventListener('DOMContentLoaded', () => {
    const todosTable = document.getElementById('todos-table');
    const todosBody = document.getElementById('todos-body');
  
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todos => {
        todos.forEach(todo => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${todo.id}</td>
            <td>${todo.title}</td>
            <td>${todo.completed ? 'Completed' : 'Incomplete'}</td>
          `;
          todosBody.appendChild(row);
        });
        todosTable.style.display = 'table';
      })
      .catch(error => {
        console.error('Failed to fetch todos:', error);
      });
  });
  