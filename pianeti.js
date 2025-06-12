function mostraPianeti() {
    const container = document.querySelector('.pianeti-container');
    container.classList.remove("hidden");

    document.querySelector('.grid-buttons:not(.pianeti-container):not(.nani-container)').classList.add("hidden");
    document.querySelector('.nani-container').classList.add("hidden");

    container.innerHTML = '';

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

        //  Se è un pianeta speciale con "azione", usa quella
        if (typeof pianeta.azione === 'function') {
            btn.addEventListener('click', pianeta.azione);
        } else {
            // Altrimenti apri la modale con i suoi dati
            btn.addEventListener('click', () => openPlanetCard(pianeta.nome));
        }

        container.appendChild(btn);
    });
}


function openPlanetCard(id) {
    const data = pianeti.find(p => p.nome.toLowerCase() === id.toLowerCase());
    if (!data) return;

    closeModal();

    // Titolo e immagine
    document.getElementById("pianeta-title").innerHTML = data.nome;
    document.getElementById("pianeta-image").src = data.img;
    document.getElementById("pianeta-image").alt = data.nome;

    // Descrizione
    document.getElementById("pianeta-info").innerHTML = data.descrizione;

    // Contenuti secondari
    document.getElementById("modal-mitologia").innerHTML = data.mitologia;
    document.getElementById("modal-lune").innerHTML = data.lune;

    // Nasconde tutte le sub-section
    ["modal-mitologia", "modal-lune"].forEach(id => {
        document.getElementById(id).classList.add("hidden");
    });

    // Mostra la modale
    const modal = document.getElementById("modal-pianeta");
    modal.classList.remove("hidden");

    // Chiudi la modale cliccando fuori dal contenuto
    modal.addEventListener("click", function handler(event) {
        if (event.target === modal) {
            closeModal();
            modal.removeEventListener("click", handler);
        }
    });

    // Listener per i bottoni "Mitologia" e "Lune"
    const buttonsMap = {
        "modal-mitologia": "btn-mitologia",
        "modal-lune": "btn-lune"
    };

    // Rimuove eventuali listener precedenti
    Object.keys(buttonsMap).forEach(sectionId => {
        const btn = document.querySelector(`button[onclick="toggleSub('${sectionId}')"]`);
        if (btn) {
            btn.onclick = () => {
                // Nasconde tutte le sub-section
                Object.keys(buttonsMap).forEach(id => {
                    document.getElementById(id).classList.add("hidden");
                });
                // Mostra solo quella cliccata
                document.getElementById(sectionId).classList.remove("hidden");
            };
        }
    });
}


function generaPianetiNani() {
    const container = document.querySelector(".nani-container");
    if (!container) return;

    container.classList.remove("hidden");
    document.querySelector('.pianeti-container').classList.add("hidden");
    document.querySelector('.grid-buttons:not(.pianeti-container):not(.nani-container)').classList.add("hidden");

    container.innerHTML = "";

    pianetiNani.forEach(({ id, nome }) => {
        const btn = document.createElement("button");
        btn.classList.add("costellazione-btn"); // Riusa lo stile esistente
        btn.onclick = () => alert(`Hai selezionato ${nome}`);

        btn.innerHTML = `
      <img src="img/${id}.png" alt="${nome}" class="costellazione-img">
      <span>${nome}</span>
    `;

        container.appendChild(btn);
    });
}

