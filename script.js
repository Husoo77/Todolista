// Lyssna på formulärets submit-händelse
document.getElementById("todo-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Förhindrar att formuläret laddar om sidan

    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Skapa en ny <li>-element
        const newTask = document.createElement("li");

        // Skapa en span för uppgiftstexten
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        // Skapa en knapp för att markera som klar
        const completeButton = document.createElement("button");
        completeButton.textContent = "Klar";
        completeButton.className = "complete-button";

        // Lägg till en click-händelse för att markera som klar
        completeButton.addEventListener("click", function() {
            newTask.classList.toggle("completed");
        });

        // Lägg till text och knapp till <li>
        newTask.appendChild(taskSpan);
        newTask.appendChild(completeButton);

        // Lägg till den nya uppgiften i listan
        document.getElementById("task-list").appendChild(newTask);

        // Rensa input-fältet
        taskInput.value = "";
    }
});
