function mostraPianeti() {
    const container = document.querySelector('.grid-buttons');

    // 1. Svuota la griglia
    container.innerHTML = '';

    // 3. Aggiungi i pulsanti dei pianeti
    pianeti.forEach(pianeta => {
        const btn = document.createElement('button');

        const img = document.createElement('img');
        img.src = pianeta.img;
        img.alt = pianeta.nome;
        img.classList.add('costellazione-img');

        const label = document.createElement('span');
        label.textContent = pianeta.nome;

        btn.appendChild(img);
        btn.appendChild(label);
        btn.classList.add('costellazione-btn');
        btn.addEventListener('click', pianeta.azione);

        container.appendChild(btn);
    });
}

function generaPianetiNani() {
    const container = document.querySelector(".grid-buttons");
    if (!container) return;

    container.innerHTML = "";

    pianetiNani.forEach(({ nome, img }) => {
        const btn = document.createElement("button");
        btn.classList.add("costellazione-btn");
        btn.onclick = () => alert(`Hai selezionato ${nome}`);

        btn.innerHTML = `
            <img src="${img}" alt="${nome}" class="costellazione-img">
            <span>${nome}</span>
        `;

        container.appendChild(btn);
    });
}
