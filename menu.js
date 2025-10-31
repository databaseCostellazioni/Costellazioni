document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menuDropdown = document.getElementById('menu-dropdown');

    // Mostra/nasconde il menu
    menuToggle.addEventListener('click', () => {
        menuDropdown.classList.toggle('hidden');
    });

    // Chiude il menu cliccando fuori
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !menuDropdown.contains(e.target)) {
            menuDropdown.classList.add('hidden');
        }
    });

    // Gestione click dei pulsanti del menu
    menuDropdown.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            const action = button.dataset.action;
            menuDropdown.classList.add('hidden'); // Chiudi il menu

            // Esegui l’azione corrispondente
            switch (action) {
                case 'costellazioni':
                    generaPulsantiCostellazioni(); 
                    break;
                case 'pianeti':
                    mostraPianeti();
                    break;
                case 'cielo':
                    window.open('https://stellarisphere.github.io/Astrolabio/', '_blank');
                    break;
            }
        });
    });
});
