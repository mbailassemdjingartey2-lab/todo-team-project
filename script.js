// Mahamat More - JavaScript

const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Ajouter une tâche
addBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Veuillez entrer une tâche !');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    // Marquer comme terminée
    li.addEventListener('click', function() {
        li.classList.toggle('terminee');
    });

    // Bouton supprimer
    const btnSupprimer = document.createElement('button');
    btnSupprimer.textContent = 'Supprimer';
    btnSupprimer.classList.add('supprimer');
    btnSupprimer.addEventListener('click', function(e) {
        e.stopPropagation();
        taskList.removeChild(li);
    });

    li.appendChild(btnSupprimer);
    taskList.appendChild(li);
    taskInput.value = '';
});

// Ajouter avec la touche Entrée
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addBtn.click();
    }
});