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

const pianetiNani = [
    { nome: "Plutone", img: "img/plutone.png" },
    { nome: "Cerere", img: "img/cerere.png" },
    { nome: "Eris", img: "img/eris.png" },
    { nome: "Makemake", img: "img/makemake.png" },
    { nome: "Haumea", img: "img/haumea.png" },
];
