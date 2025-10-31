function mostraPianeti() {
    const container = document.querySelector('.pianeti-container');
    container.classList.remove("hidden");

    document.querySelector('.grid-buttons:not(.pianeti-container):not(.nani-container)').classList.add("hidden");
    document.querySelector('.nani-container').classList.add("hidden");

    container.innerHTML = '';

    // Cicla correttamente sugli oggetti
    Object.entries(pianeti).forEach(([id, pianeta]) => {
        const btn = document.createElement('button');

        const img = document.createElement('img');
        img.src = pianeta.immagine;
        img.alt = pianeta.nome;
        img.classList.add('costellazione-img');

        const label = document.createElement('span');
        label.textContent = pianeta.nome;

        btn.appendChild(img);
        btn.appendChild(label);
        btn.classList.add('costellazione-btn');

        // Click -> apre la modale del pianeta
        btn.addEventListener('click', () => {
            if (pianeta.azione) {
                // Se esiste un'azione, eseguila
                pianeta.azione();
            } else {
                // Altrimenti apri la modale
                openPlanetCard(id);
            }
        });

        container.appendChild(btn);
    });
}

function openPlanetCard(id) {
    const data = pianeti[id];
    if (!data) return;

    closeModal();

    // Titolo e immagine
    document.getElementById("pianeta-title").innerHTML = data.nome;
    document.getElementById("pianeta-image").src = data.immagine;
    document.getElementById("pianeta-image").alt = data.nome;

    // Descrizione principale
    document.getElementById("pianeta-info").innerHTML = data.informazioni;

    // Sezioni secondarie
    document.getElementById("modal-mitologia").innerHTML = data.mitologia || "";
    document.getElementById("modal-lune").innerHTML = data.lune || "";
    document.getElementById("modal-missioni").innerHTML = data.missioni || "";

    // Nasconde tutte le sub-section
    ["modal-mitologia", "modal-lune", "modal-missioni"].forEach(id => {
        document.getElementById(id).classList.add("hidden");
    });

    // Mostra la modale
    const modal = document.getElementById("modal-pianeta");
    modal.classList.remove("hidden");

    // Chiudi cliccando fuori
    modal.addEventListener("click", function handler(event) {
        if (event.target === modal) {
            closeModal();
            modal.removeEventListener("click", handler);
        }
    });

    // Listener per i bottoni secondari
    const sections = ["modal-mitologia", "modal-lune", "modal-missioni"];

    sections.forEach(sectionId => {
        const btn = document.querySelector(`button[onclick="toggleSub('${sectionId}')"]`);
        if (btn) {
            btn.onclick = () => {
                sections.forEach(id => {
                    document.getElementById(id).classList.add("hidden");
                });
                document.getElementById(sectionId).classList.remove("hidden");
            };
        }
    });
}

function generaPianetiNani() {
    const container = document.querySelector(".nani-container");
    const pianetiContainer = document.querySelector('.pianeti-container');
    const altreGrid = document.querySelector('.grid-buttons:not(.pianeti-container):not(.nani-container)');

    if (!container || !pianetiContainer || !altreGrid) return;

    // Nascondi pianeti principali e altre sezioni
    pianetiContainer.classList.add("hidden");
    altreGrid.classList.add("hidden");

    // Mostra il container dei pianeti nani
    container.classList.remove("hidden");
    container.innerHTML = "";

    // Genera i bottoni dei pianeti nani
    Object.entries(pianetiNani).forEach(([id, pianeta]) => {
        const btn = document.createElement("button");
        btn.classList.add("costellazione-btn");

        btn.innerHTML = `
            <img src="${pianeta.immagine}" alt="${pianeta.nome}" class="costellazione-img">
            <span>${pianeta.nome}</span>
        `;

        // Al click, apri la modale con i dati del pianeta nano
        btn.onclick = () => openPlanetCardNano(id);

        container.appendChild(btn);
    });
}

function openPlanetCardNano(id) {
    const data = pianetiNani[id];
    if (!data) return;

    // Chiudi eventuali modali aperte
    closeModal();

    // Titolo e immagine del pianeta nano
    const modal = document.getElementById("modal-pianeta");
    document.getElementById("pianeta-title").innerHTML = data.nome;
    document.getElementById("pianeta-image").src = data.immagine;
    document.getElementById("pianeta-image").alt = data.nome;

    // Descrizione principale
    document.getElementById("pianeta-info").innerHTML = data.informazioni || "";

    // Sub-sezioni
    document.getElementById("modal-mitologia").innerHTML = data.mitologia || "";
    document.getElementById("modal-lune").innerHTML = data.lune || "";
    document.getElementById("modal-missioni").innerHTML = data.missioni || "";

    // Nascondi tutte le sub-section inizialmente
    ["modal-mitologia", "modal-lune", "modal-missioni"].forEach(sectionId => {
        document.getElementById(sectionId).classList.add("hidden");
    });

    // Mostra la modale principale del pianeta
    modal.classList.remove("hidden");

    // Event listener per chiudere la modale cliccando fuori
    modal.addEventListener("click", function handler(event) {
        if (event.target === modal) {
            closeModal();
            modal.removeEventListener("click", handler);
        }
    });
    const sections = ["modal-mitologia", "modal-lune", "modal-missioni"];
    sections.forEach(sectionId => {
        const btn = document.querySelector(`button[onclick="toggleSub('${sectionId}')"]`);
        if (btn) {
            btn.onclick = () => {
                sections.forEach(id => document.getElementById(id).classList.add("hidden"));
                document.getElementById(sectionId).classList.remove("hidden");
            };
        }
    });

}
