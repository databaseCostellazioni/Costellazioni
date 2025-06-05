function openCard(id) {
  const data = costellazioni[id];
  if (!data) return;

  closeModal();

  // Titolo, immagine principale e descrizioni base
  document.getElementById("modal-title").textContent = data.nome;
  document.getElementById("modal-image").src = data.immagine;
  document.getElementById("modal-image").alt = data.nome;
  document.getElementById("modal-informazioni").textContent = data.informazioni;
  document.getElementById("modal-visibility").textContent = `Periodo di visibilità: ${data.visibilita}`;

  // Mitologia
  document.getElementById("modal-myth").innerHTML = `<p>${data.mitologia}</p>`;

  // Stelle
  document.getElementById("modal-stars").innerHTML = `
    <ul>${data.stelle.map(stella => `<li>${stella}</li>`).join("")}</ul>
  `;

  // Sezione "Come trovarla" con immagine dinamica
document.getElementById("modal-trova").innerHTML = `
  <p>${data.trova}</p>
  <img 
    src="img/trova-${id}.jpg" 
    alt="Come trovare ${data.nome}" 
    class="trova-img"
    onerror="this.style.display='none'"
  >
`;

  // Nasconde tutte le sotto-sezioni inizialmente
  ["modal-myth", "modal-stars", "modal-trova"].forEach(id => {
    document.getElementById(id).classList.add("hidden");
  });

  // Mostra la modale
  const modal = document.getElementById("modal");
  modal.classList.remove("hidden");
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
