// Selektorer för element
const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

// Array för att hålla todos
let todos = [];

// Funktion för att rendera todos i DOM
function renderTodos() {
    todoList.innerHTML = ''; // Rensa listan

    todos.forEach(todo => {
        const li = document.createElement("li");
        li.className = todo.completed ? "completed" : ""; // Markera klar todo
        li.innerHTML = `
            <span class="todo-text">${todo.title}</span>
            <button class="deleteBtn" data-id="${todo.id}">Ta bort</button>
        `;
        li.querySelector('.todo-text').addEventListener("click", () => toggleComplete(todo.id)); // Markera todo som klar
        todoList.appendChild(li);
    });
}

// Funktion för att lägga till en ny todo
function addTodo(event) {
    event.preventDefault(); // Förhindra sida från att laddas om
    const todoText = todoInput.value.trim(); // Hämta text från input

    if (todoText === '') return; // Om tomt, gör inget

    const newTodo = {
        id: Date.now(),
        title: todoText,
        completed: false
    };

    todos.push(newTodo); // Lägg till ny todo i listan
    todoInput.value = ''; // Töm inputfältet
    renderTodos(); // Rendera om listan
}

// Funktion för att markera en todo som klar/icke klar
function toggleComplete(id) {
    todos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
    renderTodos(); // Rendera om listan
}

// Funktion för att ta bort en todo
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id); // Ta bort todo med rätt id
    renderTodos(); // Rendera om listan
}

// Lyssnare för att lägga till todos
todoForm.addEventListener("submit", addTodo);

// Lyssnare för att ta bort todos
todoList.addEventListener("click", function (event) {
    if (event.target.classList.contains("deleteBtn")) {
        const id = parseInt(event.target.getAttribute("data-id"));
        deleteTodo(id); // Anropa ta bort-funktion
    }
});
