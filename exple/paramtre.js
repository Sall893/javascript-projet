document.addEventListener('DOMContentLoaded', function() {
    const parametresForm = document.getElementById('parametres-form');

    parametresForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Empêche l'envoi du formulaire par défaut

        const nombreQuestions = document.getElementById('nombre-questions').value;
        const difficulte = document.getElementById('difficulte').value;

        // Vous pouvez ici enregistrer les paramètres dans localStorage ou envoyer à un serveur, etc.
        console.log('Nombre de questions:', nombreQuestions);
        console.log('Difficulté:', difficulte);

        alert('Paramètres enregistrés avec succès !'); // Message d'alerte pour informer l'utilisateur
    });
});
