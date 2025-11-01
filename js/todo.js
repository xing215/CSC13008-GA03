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
            // TODO: Call localStorage add function
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
        // TODO: Call localStorage clear completed function
    });
    
    // Filter button event listeners
    filterAll.addEventListener('click', function() {
        setActiveFilter(this);
        console.log('Filter: All');
        // TODO: Call filter function
    });
    
    filterActive.addEventListener('click', function() {
        setActiveFilter(this);
        console.log('Filter: Active');
        // TODO: Call filter function
    });
    
    filterCompleted.addEventListener('click', function() {
        setActiveFilter(this);
        console.log('Filter: Completed');
        // TODO: Call filter function
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
});
