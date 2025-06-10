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
    },
    {
        nome: 'Pianeti Nani',
        img: 'img/plutone.png',
        azione: () => generaPianetiNani(),
    },
];

    // Lista dei pianeti nani
    const pianetiNani = [
        { id: "plutone", nome: "Plutone", img: "img/plutone.png"},
        { id: "cerere", nome: "Cerere" },
        { id: "eris", nome: "Eris", img: "img/eris.png"}
        { id: "makemake", nome: "Makemake" },
        { id: "haumea", nome: "Haumea" }
    ];
