function mostraPianeti() {
    const container = document.querySelector('.grid-buttons');

    // 1. Svuota la griglia
    container.innerHTML = '';

    // 2. Crea nuovi pulsanti
    const pianeti = [
        {
            nome: 'Marte',
            img: 'img/marte.png',
            azione: () => alert('Hai cliccato Marte!')
        },
        {
            nome: 'Giove',
            img: 'img/giove.png',
            azione: () => alert('Hai cliccato Giove!')
        }
    ];

    // 3. Aggiungi i pulsanti
    pianeti.forEach(pianeta => {
        const btn = document.createElement('button');

        const img = document.createElement('img');
        img.src = pianeta.img;
        img.alt = pianeta.nome;
        img.classList.add('costellazione-img'); // puoi usare lo stesso stile

        const label = document.createElement('span');
        label.textContent = pianeta.nome;

        btn.appendChild(img);
        btn.appendChild(label);
        btn.addEventListener('click', pianeta.azione);

        container.appendChild(btn);
    });
}
