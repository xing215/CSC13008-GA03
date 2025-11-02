// Todo page JavaScript
// LocalStorage operations (add/remove/mark as done) is not implemented

document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const todoInput = document.getElementById('todoInput');
    const addTodoBtn = document.getElementById('addTodoBtn');
    const todoList = document.getElementById('todoList');
    const emptyState = document.getElementById('emptyState');
    const todoCount = document.getElementById('todoCount');
    const clearCompleted = document.getElementById('clearCompleted');
    
    // Filter buttons
    const filterAll = document.getElementById('filterAll');
    const filterActive = document.getElementById('filterActive');
    const filterCompleted = document.getElementById('filterCompleted');
    
    // Event listeners
    addTodoBtn.addEventListener('click', function() {
        const taskText = todoInput.value.trim();
        if (taskText) {
            console.log('Add task:', taskText);
            addTodo(taskText);
            todoInput.value = '';
        }
    });
    
    todoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTodoBtn.click();
        }
    });
    
    clearCompleted.addEventListener('click', function() {
        console.log('Clear completed tasks');
        clearCompletedTodos();
    });
    
    let currentFilter = 'all';

    // Filter button event listeners
    filterAll.addEventListener('click', function() {
        setActiveFilter(this);
        currentFilter = 'all';
        renderTodos();
    });
    
    filterActive.addEventListener('click', function() {
        setActiveFilter(this);
        currentFilter = 'active';
        renderTodos();
    });
    
    filterCompleted.addEventListener('click', function() {
        setActiveFilter(this);
        currentFilter = 'completed';
        renderTodos();
    });
    
    function setActiveFilter(activeBtn) {
        [filterAll, filterActive, filterCompleted].forEach(btn => {
            btn.classList.remove('text-blue-600', 'border-b-2', 'border-blue-600');
            btn.classList.add('text-gray-600', 'hover:text-gray-900');
        });
        activeBtn.classList.remove('text-gray-600', 'hover:text-gray-900');
        activeBtn.classList.add('text-blue-600', 'border-b-2', 'border-blue-600');
    }
    
    // Functions to be implemented
    // - loadTodos() - Load todos from localStorage
    // - addTodo(text) - Add new todo to localStorage
    // - toggleTodo(id) - Mark todo as done/undone
    // - deleteTodo(id) - Remove todo from localStorage
    // - clearCompletedTodos() - Clear all completed todos
    // - renderTodos(filter) - Render todos based on filter
    // - updateTodoCount() - Update remaining tasks count

    // === LocalStorage helper ===
    function loadTodos() {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }
    function saveTodos(todos) {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    // === Add todo ===
    function addTodo(text) {
        const todos = loadTodos();
        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false
        };
        todos.push(newTodo);
        saveTodos(todos);
        renderTodos();
        updateTodoCount();
    }

    // === Toggle todo ===
    function toggleTodo(id) {
        let todos = loadTodos();
        const todoIndex = todos.findIndex(t => t.id === id);
        
        if (todoIndex > -1) {
            todos[todoIndex].completed = !todos[todoIndex].completed;
            saveTodos(todos);
            renderTodos();
            updateTodoCount();
        }
    }

    // === Delete todo ===
    function deleteTodo(id) {
        let todos = loadTodos();
        todos = todos.filter(t => t.id !== id);
        saveTodos(todos);
        renderTodos();
        updateTodoCount();
    }

    // === Clear Completed Todos ===
    function clearCompletedTodos() {
        let todos = loadTodos();
        todos = todos.filter(t => !t.completed); 
        saveTodos(todos);
        renderTodos();
        updateTodoCount();
    }

    // === Render todos ===
    function renderTodos() {
        const allTodos = loadTodos();
        let todosToRender = [];

        if (currentFilter === 'active') {
            todosToRender = allTodos.filter(todo => !todo.completed);
        } else if (currentFilter === 'completed') {
            todosToRender = allTodos.filter(todo => todo.completed);
        } else { 
            todosToRender = allTodos;
        }

        todoList.innerHTML = '';

        if (allTodos.length === 0) {
            emptyState.classList.remove('hidden');
        } else {
            emptyState.classList.add('hidden');
        }

        todosToRender.forEach(todo => {
            const li = document.createElement('li');
            li.className = 'p-4 hover:bg-gray-50 transition-colors';

            const textClass = todo.completed ? 'line-through text-gray-500' : 'text-gray-800';

            li.innerHTML = `
                <div class="flex items-center gap-3">
                    <input 
                        id="todo-${todo.id}"
                        type="checkbox" 
                        title="Mark task as completed"
                        aria-label="Mark task as completed"
                        class="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                        ${todo.completed ? 'checked' : ''} />
                    <label for="todo-${todo.id}" class="sr-only">Mark task as completed</label>
                    <span class="flex-1 ${textClass}">${todo.text}</span> <button class="text-red-600 hover:text-red-800 font-medium text-sm px-3 py-1 rounded hover:bg-red-50 transition-colors">
                        Delete
                    </button>
                </div>
            `;

            li.querySelector('input[type="checkbox"]').addEventListener('change', () => toggleTodo(todo.id));
            
            li.querySelector('button').addEventListener('click', () => deleteTodo(todo.id));
            todoList.appendChild(li);
        });
    }

    function updateTodoCount() {
        const todos = loadTodos();
        const remaining = todos.filter(todo => !todo.completed).length;
        todoCount.textContent = `${remaining} task${remaining !== 1 ? 's' : ''} remaining`;
    }
    // Initial render
    setActiveFilter(filterAll); 
    renderTodos();
    updateTodoCount();
});
