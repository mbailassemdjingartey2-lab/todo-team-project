// Mahamat More - JavaScript Sprint Review

const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const compteur = document.getElementById('compteur');
const clearBtn = document.getElementById('clearBtn');

// Mettre à jour le compteur
function updateCompteur() {
    const tachesRestantes = taskList.querySelectorAll('li:not(.terminee)').length;
    compteur.textContent = tachesRestantes;
}

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
        updateCompteur();
    });

    // Bouton supprimer
    const btnSupprimer = document.createElement('button');
    btnSupprimer.textContent = 'Supprimer';
    btnSupprimer.classList.add('supprimer');
    btnSupprimer.addEventListener('click', function(e) {
        e.stopPropagation();
        taskList.removeChild(li);
        updateCompteur();
    });

    li.appendChild(btnSupprimer);
    taskList.appendChild(li);
    taskInput.value = '';
    updateCompteur();
});

// Ajouter avec la touche Entrée
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addBtn.click();
    }
});

// Vider toute la liste
clearBtn.addEventListener('click', function() {
    if (confirm('Voulez-vous vider toute la liste ?')) {
        taskList.innerHTML = '';
        updateCompteur();
    }
});