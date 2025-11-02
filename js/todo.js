// Todo page JavaScript
// LocalStorage operations (add/remove/mark as done) is not implemented

document.addEventListener("DOMContentLoaded", function () {
    // DOM elements
    const todoInput = document.getElementById("todoInput");
    const addTodoBtn = document.getElementById("addTodoBtn");
    const todoList = document.getElementById("todoList");
    const emptyState = document.getElementById("emptyState");
    const todoCount = document.getElementById("todoCount");
    const clearCompleted = document.getElementById("clearCompleted");

    // Filter buttons
    const filterAll = document.getElementById("filterAll");
    const filterActive = document.getElementById("filterActive");
    const filterCompleted = document.getElementById("filterCompleted");

    // Event listeners
    addTodoBtn.addEventListener("click", function () {
        const taskText = todoInput.value.trim();
        if (taskText) {
            console.log("Add task:", taskText);
            addTodo(taskText);
            todoInput.value = "";
        }
    });

    todoInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            addTodoBtn.click();
        }
    });

    clearCompleted.addEventListener("click", function () {
        console.log("Clear completed tasks");
        // TODO: Call localStorage clear completed function
    });

    // Filter button event listeners
    filterAll.addEventListener("click", function () {
        setActiveFilter(this);
        console.log("Filter: All");
        // TODO: Call filter function
    });

    filterActive.addEventListener("click", function () {
        setActiveFilter(this);
        console.log("Filter: Active");
        // TODO: Call filter function
    });

    filterCompleted.addEventListener("click", function () {
        setActiveFilter(this);
        console.log("Filter: Completed");
        // TODO: Call filter function
    });

    function setActiveFilter(activeBtn) {
        [filterAll, filterActive, filterCompleted].forEach((btn) => {
            btn.classList.remove(
                "text-blue-600",
                "border-b-2",
                "border-blue-600"
            );
            btn.classList.add("text-gray-600", "hover:text-gray-900");
        });
        activeBtn.classList.remove("text-gray-600", "hover:text-gray-900");
        activeBtn.classList.add(
            "text-blue-600",
            "border-b-2",
            "border-blue-600"
        );
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
        return JSON.parse(localStorage.getItem("todos")) || [];
    }
    function saveTodos(todos) {
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    // === Add todo ===
    function addTodo(text) {
        const todos = loadTodos();
        const newTodo = {
            id: Date.now(),
            text: text,
        };
        todos.push(newTodo);
        saveTodos(todos);
        renderTodos();
        updateTodoCount();
    }

    // === Delete todo ===
    function deleteTodo(id) {
        let todos = loadTodos();
        todos = todos.filter((t) => t.id !== id);
        saveTodos(todos);
        renderTodos();
        updateTodoCount();
    }

    // === Render todos ===
    function renderTodos() {
        const todos = loadTodos();
        todoList.innerHTML = "";

        if (todos.length === 0) {
            emptyState.classList.remove("hidden");
            return;
        } else {
            emptyState.classList.add("hidden");
        }

        todos.forEach((todo) => {
            const li = document.createElement("li");
            li.className = "p-4 hover:bg-gray-50 transition-colors";
            li.innerHTML = `
                <div class="flex items-center gap-3">
                    <input 
                        id="todo-${todo.id}"
                        type="checkbox" 
                        title="Mark task as completed"
                        aria-label="Mark task as completed"
                        class="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                    />
                    <label for="todo-${todo.id}" class="sr-only">Mark task as completed</label>
                    <span class="flex-1 text-gray-800">${todo.text}</span>
                    <button class="text-red-600 hover:text-red-800 font-medium text-sm px-3 py-1 rounded hover:bg-red-50 transition-colors">
                        Delete
                    </button>
                </div>
            `;
            li.querySelector("button").addEventListener("click", () =>
                deleteTodo(todo.id)
            );
            todoList.appendChild(li);
        });
    }

    function updateTodoCount() {
        const todos = loadTodos();
        const remaining = todos.filter((todo) => !todo.completed).length;
        todoCount.textContent = `${remaining} task${
            remaining !== 1 ? "s" : ""
        } remaining`;
    }
    renderTodos();

    //Expose function globally
    window.renderTodos = renderTodos;
    window.updateTodoCount = updateTodoCount;
});
