const pianeti = [
    {
        nome: 'Mercurio',
        img: 'img/mercurio.png',
        descrizione: `<span class="scaled-text">Mercurio è il pianeta più vicino al Sole e il più piccolo del sistema solare. La sua superficie è coperta di crateri e ha una temperatura estremamente variabile, con un'atmosfera molto sottile.</span>`,
        lune: `<span class="scaled-text">Mercurio non ha lune. La sua orbita è molto ellittica e il pianeta ruota lentamente, completando una rotazione completa in circa 59 giorni terrestri.</span>`,
        mitologia: `<span class="scaled-text">Mercurio, nella mitologia romana, era il messaggero degli dei, associato al commercio e ai viaggi. Era noto per la sua velocità e astuzia, spesso rappresentato con un caduceo e sandali alati.</span>`,
    },
    {
        nome: 'Venere',
        img: 'img/venere.png',
        descrizione: `<span class="scaled-text">Venere è il secondo pianeta dal Sole e il più simile alla Terra in termini di dimensioni e composizione. La sua atmosfera densa e calda è composta principalmente da anidride carbonica, con nuvole di acido solforico.</span>`,
        lune: `<span class="scaled-text">Venere non ha lune. La sua rotazione è molto lenta e retrograda, il che significa che ruota in direzione opposta rispetto alla maggior parte dei pianeti del sistema solare.</span>`,
        mitologia: `<span class="scaled-text">Venere, nella mitologia romana, era la dea dell'amore e della bellezza. Spesso associata alla fertilità e alla natura, era venerata come simbolo di amore romantico e desiderio.</span>`,
    },
    {
        nome: 'Terra',
        img: 'img/terra.png',
        descrizione: `<span class="scaled-text">La Terra è il terzo pianeta dal Sole e l'unico conosciuto per ospitare la vita. Ha un'atmosfera ricca di ossigeno e acqua liquida, con una superficie composta da continenti e oceani.</span>`,
        lune: `<span class="scaled-text">La Terra ha una luna, il nostro satellite naturale, che influisce sulle maree e stabilizza l'asse di rotazione del pianeta. La Luna è stata oggetto di esplorazione spaziale e continua a essere un simbolo di mistero e bellezza.</span>`,
        mitologia: `<span class="scaled-text">La Terra, nella mitologia romana, era spesso personificata come Gaia o Tellus, la madre di tutti gli dei e degli esseri viventi. Rappresentava la fertilità e la stabilità, ed era venerata come fonte di vita.</span>`,
    },
    {
        nome: 'Marte',
        img: 'img/marte.png',
        descrizione: `<span class="scaled-text">Marte è il quarto pianeta dal Sole, noto per il suo colore rosso distintivo dovuto alla presenza di ossido di ferro. Ha una superficie rocciosa con vulcani, canyon e segni di antichi corsi d'acqua.</span>`,
        lune: `<span class="scaled-text">Marte ha due piccole lune, Fobos e Deimos, che sono irregolari e probabilmente catturate dalla gravità del pianeta. Queste lune sono molto più piccole della Luna terrestre e hanno forme irregolari.</span>`,
        mitologia: `<span class="scaled-text">Marte, nella mitologia romana, era il dio della guerra e della fertilità. Spesso associato alla forza e al coraggio, era venerato come protettore dei soldati e simbolo di vittoria in battaglia.</span>`,
    },
    {
        nome: 'Giove',
        img: 'img/giove.png',
        descrizione: `<span class="scaled-text">Giove è il quinto pianeta dal Sole e il più grande del sistema solare. È un gigante gassoso con un'atmosfera densa, caratterizzata da bande di nuvole e tempeste, tra cui la Grande Macchia Rossa.</span>`,
        lune: `<span class="scaled-text">Giove ha un vasto sistema di lune, tra cui le quattro lune galileiane: Io, Europa, Ganimede e Callisto. Queste lune sono tra le più grandi del sistema solare e presentano caratteristiche uniche, come vulcani attivi e oceani sotterranei.</span>`,
        mitologia: `<span class="scaled-text">Giove, nella mitologia romana, era il re degli dei e dio del cielo e del tuono. Era considerato il protettore dello stato e della giustizia, spesso rappresentato con un fulmine e un'aquila.</span>`,
    },
    {
        nome: 'Saturno',
        img: 'img/saturno.png',
        descrizione: `<span class="scaled-text">Saturno è il sesto pianeta dal Sole, noto per i suoi anelli spettacolari composti da ghiaccio e polvere. È un gigante gassoso con un'atmosfera densa e molte lune, tra cui Titano, la più grande.</span>`,
        lune: `<span class="scaled-text">Saturno ha un vasto sistema di lune, con Titano come la più grande. Altre lune note includono Encelado, che mostra segni di attività geologica, e Mimas, famosa per il suo cratere gigante che le conferisce un aspetto simile a quello di un Death Star.</span>`,
        mitologia: `<span class="scaled-text">Saturno, nella mitologia romana, era il dio dell'agricoltura e del raccolto. Spesso associato al tempo e alla prosperità, era venerato come simbolo di abbondanza e fertilità della terra.</span>`,
    },
    {
        nome: 'Urano',
        img: 'img/urano.png',
        descrizione: `<span class="scaled-text">Urano è il settimo pianeta dal Sole, un gigante gassoso con un'atmosfera composta principalmente da idrogeno ed elio. È unico per il suo asse di rotazione inclinato, che lo fa ruotare quasi su un lato.</span>`,
        lune: `<span class="scaled-text">Urano ha un sistema di 27 lune conosciute, tra cui Titania, Oberon, Umbriel, Ariel e Miranda. Queste lune presentano superfici ghiacciate e caratteristiche geologiche uniche.</span>`,
        mitologia: `<span class="scaled-text">Urano, nella mitologia romana, era il dio del cielo primordiale. Rappresentava l'elemento celeste e la vastità dell'universo, spesso associato alla creazione e alla nascita degli dei.</span>`,
    },
    {
        nome: 'Nettuno',
        img: 'img/nettuno.png',
        descrizione: `<span class="scaled-text">Nettuno è l'ottavo pianeta dal Sole, un gigante gassoso con un'atmosfera densa e venti estremamente forti. È noto per il suo colore blu intenso, causato dalla presenza di metano nell'atmosfera.</span>`,
        lune: `<span class="scaled-text">Nettuno ha 14 lune conosciute, tra cui Tritone, la più grande, che ha un'atmosfera sottile e mostra segni di attività geologica. Altre lune includono Nereide e Proteo, che hanno superfici ghiacciate.</span>`,
        mitologia: `<span class="scaled-text">Nettuno, nella mitologia romana, era il dio del mare e dei terremoti. Spesso rappresentato con un tridente, era venerato come protettore dei marinai e simbolo della potenza e della vastità degli oceani.</span>`,
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