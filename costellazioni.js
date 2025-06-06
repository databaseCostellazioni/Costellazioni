function openCard(id) {
  const data = costellazioni[id];
  if (!data) return;

  closeModal();

  // Dati principali
  document.getElementById("modal-title").textContent = data.nome;
  document.getElementById("modal-image").src = data.immagine;
  document.getElementById("modal-image").alt = data.nome;
  document.getElementById("modal-informazioni").textContent = data.informazioni;
  document.getElementById("modal-visibility").textContent = `Periodo di visibilità: ${data.visibilita}`;

  // Mitologia con immagine dinamica
  document.getElementById("modal-myth").innerHTML = `
    <p>${data.mitologia}</p>
    <img 
      src="img/mitologia-${id}.jpg" 
      alt="Mitologia di ${data.nome}" 
      class="mito-img"
      onerror="this.style.display='none'"
    >
  `;

  // Stelle con elenco e immagini multiple dinamiche
  let stelleHTML = `<ul>${data.stelle.map(stella => `<li>${stella}</li>`).join("")}</ul>`;
  for (let i = 1; i <= 5; i++) {
    stelleHTML += `
      <img 
        src="img/stelle-${id}-${i}.jpg" 
        alt="Stelle di ${data.nome} - ${i}" 
        class="stelle-img"
        onerror="this.style.display='none'"
      >
    `;
  }
  document.getElementById("modal-stars").innerHTML = stelleHTML;

  // Come trovarla
  document.getElementById("modal-trova").innerHTML = `
    <p>${data.trova}</p>
    <img 
      src="img/trova-${id}.jpg" 
      alt="Come trovare ${data.nome}" 
      class="trova-img"
      onerror="this.style.display='none'"
    >
  `;

  // Nasconde tutte le sezioni, poi puoi mostrarle come ti serve
  ["modal-myth", "modal-stars", "modal-trova"].forEach(id => {
    document.getElementById(id).classList.add("hidden");
  });

  document.getElementById("modal").classList.remove("hidden");
}


function closeModal() {
  document.querySelectorAll(".modal").forEach(modal => {
    modal.classList.add("hidden");
  });
}

function toggleSub(id) {
  document.getElementById(id).classList.toggle("hidden");
}

// Ordina e genera pulsanti
function generaPulsantiCostellazioni() {
  const container = document.querySelector(".grid-buttons");
  if (!container || !costellazioni) return;

  const meseCorrente = new Date().getMonth() + 1;

  const visibiliOra = [];
  const nonVisibili = [];

  for (const [id, info] of Object.entries(costellazioni)) {
    if (info.mesiVisibili?.includes(meseCorrente)) {
      visibiliOra.push({ id, nome: info.nome });
    } else {
      nonVisibili.push({ id, nome: info.nome });
    }
  }

  const ordinati = [
    ...visibiliOra.sort((a, b) => a.nome.localeCompare(b.nome)),
    ...nonVisibili.sort((a, b) => a.nome.localeCompare(b.nome))
  ];

  ordinati.forEach(({ id, nome }) => {
    const btn = document.createElement("button");
    btn.classList.add("costellazione-btn");
    btn.onclick = () => openCard(id);

    // Aggiungi immagine e testo dentro il bottone
    btn.innerHTML = `
      <img src="img/${id}.png" alt="${nome}" class="costellazione-img">
      <span>${nome}</span>
    `;

    container.appendChild(btn);
  });
}


// Al caricamento della pagina
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");

  modal.addEventListener("click", function (e) {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  generaPulsantiCostellazioni();
});

function openMiniModal(id, event) {
  const modal = document.getElementById("mini-modal");
  const title = document.getElementById("mini-modal-title");
  const img = document.getElementById("mini-modal-image");

  // Contenuto
  const image = `img/${id}.png`;
  title.textContent = id.charAt(0).toUpperCase() + id.slice(1);
  img.src = image;
  img.alt = id;

  // Posizione
  const linkRect = event.target.getBoundingClientRect();
  modal.style.display = "block";

  const modalRect = modal.getBoundingClientRect();
  let top = linkRect.top - modalRect.height - 8;
  let left = linkRect.left + (linkRect.width / 2) - (modalRect.width / 2);

  if (left < 8) left = 8;
  if (left + modalRect.width > window.innerWidth - 8) {
    left = window.innerWidth - modalRect.width - 8;
  }
  if (top < 8) top = linkRect.bottom + 8;

  modal.style.top = `${top}px`;
  modal.style.left = `${left}px`;
  modal.classList.add("visible");

  // 👇 Delay per evitare conflitto col click corrente
  setTimeout(() => {
    document.addEventListener("click", handleOutsideClick);
  }, 0);
}


function closeMiniModal() {
  const modal = document.getElementById("mini-modal");
  modal.classList.remove("visible");
  modal.style.display = "none";

  // 👇 Rimuove il listener quando la modale si chiude
  document.removeEventListener("click", handleOutsideClick);
}

function handleOutsideClick(e) {
  const modal = document.getElementById("mini-modal");
  if (!modal.contains(e.target)) {
    closeMiniModal();
  }
}

