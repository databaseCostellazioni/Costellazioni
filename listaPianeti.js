const pianeti = {
    "mercurio": {
        nome: "Mercurio",
        immagine: "img/mercurio.png",

        informazioni: `<strong>Mercurio</strong> è il primo pianeta del Sistema Solare, più vicino al Sole. 
È un pianeta roccioso di piccole dimensioni, con una superficie craterizzata simile a quella della Luna. 
Mercurio ha temperature estreme: molto elevate durante il giorno e estremamente basse di notte, a causa della sua atmosfera quasi inesistente, composta principalmente da ossigeno, sodio e idrogeno. 
Il pianeta possiede un nucleo metallico molto grande rispetto alla sua dimensione, responsabile di un campo magnetico debole ma presente.`,

        lune: `<strong>Mercurio</strong> non possiede satelliti naturali. 
Essendo così vicino al Sole, la sua attrazione gravitazionale e le perturbazioni solari rendono instabile l’orbita di eventuali piccoli corpi, impedendo la formazione di lune.`,

        mitologia: `Il pianeta prende il nome da <strong>Mercurio</strong>, il dio romano del commercio, dei viaggi e dei messaggeri, equivalente del greco <strong>Ermes</strong>. 
Il suo movimento veloce nel cielo, apparendo spesso al crepuscolo o all’alba, richiamava le caratteristiche del dio messaggero.`,

        missioni: `<strong>Mercurio</strong> è stato esplorato principalmente dalle sonde <em>Mariner 10</em> negli anni ’70 e <em>MESSENGER</em> dal 2011 al 2015. 
Queste missioni hanno studiato la sua superficie, la composizione del suolo e il campo magnetico, rivelando dettagli sulle sue craterizzazioni e la sua geologia interna.`
    },

    "venere": {
        nome: "Venere",
        immagine: "img/venere.png",

        informazioni: `<strong>Venere</strong> è il secondo pianeta del Sistema Solare e spesso chiamato “pianeta gemello” della Terra per dimensioni e massa simili. 
La sua atmosfera è densa e composta principalmente da anidride carbonica, con nuvole di acido solforico, che provocano un effetto serra estremo: la temperatura superficiale può superare i 460°C. 
Venere ha un terreno vulcanico e pianure estese, con poche montagne. La rotazione è lenta e retrograda, quindi il Sole sorge a ovest e tramonta a est.`,

        lune: `<strong>Venere</strong> non possiede satelliti naturali. 
La sua orbita stabile e l’influenza gravitazionale del Sole probabilmente impediscono la formazione o il mantenimento di lune.`,

        mitologia: `Il pianeta prende il nome da <strong>Venere</strong>, dea romana dell’amore e della bellezza, equivalente della greca <strong>Afrodite</strong>. 
Il suo splendore brillante nel cielo notturno e mattutino evocava bellezza e fascino, motivo per cui venne associato alla dea dell’amore.`,

        missioni: `<strong>Venere</strong> è stato esplorato da numerose missioni spaziali, tra cui <em>Venera</em> (URSS), <em>Mariner</em> (USA) e <em>Magellan</em>, che ha mappato la superficie tramite radar. 
Le sonde hanno studiato l’atmosfera, il clima estremo e la geologia vulcanica del pianeta, rivelando un mondo dominato da calore, pressione e fenomeni atmosferici intensi.`
    },

    "terra": {
        nome: "Terra",
        immagine: "img/terra.png",

        informazioni: `<strong>Terra</strong> è il terzo pianeta del Sistema Solare e l’unico conosciuto a ospitare vita. 
È un pianeta roccioso con una superficie composta da continenti e oceani, dove l’acqua liquida è abbondante. 
L’atmosfera è ricca di azoto e ossigeno, elementi fondamentali per sostenere la vita. 
La Terra possiede un campo magnetico che protegge il pianeta dai venti solari e una geologia attiva, caratterizzata da vulcani, terremoti e formazione di montagne. 
Il clima varia ampiamente tra le diverse regioni, con zone polari ghiacciate, deserti aridi e foreste tropicali.`,

        lune: `<strong>Terra</strong> possiede un solo satellite naturale: <strong>la Luna</strong>. 
È relativamente grande rispetto alla Terra e influisce sulle maree oceaniche grazie alla sua gravità. 
La Luna ha una superficie craterizzata e polverosa, con mari basaltici e montagne. 
La sua presenza contribuisce alla stabilità dell’asse terrestre e quindi al clima del pianeta.`,

        mitologia: `Il pianeta prende il nome dalla <strong>Terra</strong>, personificazione femminile della natura e della vita nella mitologia romana, 
equivalente della <strong>Gea</strong> greca. 
Nella tradizione, la Terra rappresenta la fertilità, la generosità e il nutrimento, essendo la fonte di tutto ciò che vive. 
La Luna, che le orbita attorno, è spesso collegata ai cicli naturali, alla crescita e ai ritmi della vita.`,

        missioni: `<strong>Terra</strong> è stata studiata fin dall’inizio dell’era spaziale da numerose missioni satellitari e osservatori spaziali. 
Le prime immagini globali furono scattate dai satelliti <em>Explorer</em> e <em>Landsat</em>. 
Oggi, una rete di satelliti meteorologici, di osservazione terrestre e scientifici — come <em>Copernicus</em>, <em>Sentinel</em> e <em>Terra</em> — 
monitorano continuamente il clima, l’ambiente, gli oceani e la geologia del pianeta, fornendo dati fondamentali per la ricerca e la protezione del nostro mondo.`
    },

    "marte": {
        nome: "Marte",
        immagine: "img/marte.png",

        informazioni: `<strong>Marte</strong> è il quarto pianeta del Sistema Solare e l’ultimo dei pianeti rocciosi. 
È conosciuto come il <em>pianeta rosso</em> per via del colore della sua superficie, ricca di ossido di ferro. 
L’atmosfera è molto sottile e composta principalmente da anidride carbonica, rendendo impossibile la presenza stabile di acqua liquida in superficie, 
anche se ci sono prove di antichi letti fluviali e depositi ghiacciati ai poli. 
Marte ha vulcani giganteschi come l’<strong>Olympus Mons</strong> (alto tre volte l’Everest) e canyon profondissimi come la <strong>Valles Marineris</strong>. 
È uno dei principali obiettivi dell’esplorazione spaziale: numerose sonde e rover — tra cui <em>Curiosity</em>, <em>Perseverance</em> e <em>InSight</em> — studiano la geologia e il clima del pianeta.`,

        lune: `<strong>Marte</strong> possiede due piccoli satelliti naturali: <strong>Fobos</strong> e <strong>Deimos</strong>. 
Entrambi hanno forma irregolare e si pensa siano asteroidi catturati dal pianeta. 
Fobos orbita molto vicino alla superficie e si sta lentamente avvicinando a Marte: in futuro potrebbe disgregarsi a causa delle forze mareali. 
Deimos ha un’orbita più distante e regolare. Entrambe le lune sono craterizzate e ricoperte di polvere scura.`,

        mitologia: `Il pianeta prende il nome da <strong>Marte</strong>, dio romano della guerra, equivalente del greco <strong>Ares</strong>. 
Il colore rosso evocava il sangue e la battaglia, motivo per cui venne associato al dio guerriero. 
Marte rappresentava violenza, conflitto, forza e protezione del popolo romano. 
Le lune <em>Fobos</em> (paura) e <em>Deimos</em> (terrore) sono i cavalli che accompagnavano Ares nei miti greci.`,

        missioni: `<strong>Marte</strong> è stato oggetto di numerose missioni spaziali, sia orbitali che di superficie. 
Le prime esplorazioni furono le sonde <em>Mariner</em> negli anni ’60 e ’70, seguite dai lander <em>Viking 1</em> e <em>Viking 2</em>, primi a trasmettere immagini dal suolo. 
Negli ultimi decenni, missioni come <em>Spirit</em>, <em>Opportunity</em>, <em>Curiosity</em>, <em>Perseverance</em> e <em>InSight</em> hanno studiato geologia e atmosfera, mentre <em>Mars Express</em> e <em>MAVEN</em> ne analizzano l’orbita.`
    },

    "giove": {
        nome: "Giove",
        immagine: "img/giove.png",

        informazioni: `<strong>Giove</strong> è il quinto pianeta del Sistema Solare e il più grande tra tutti. 
È un gigante gassoso composto principalmente da idrogeno ed elio, senza una superficie solida definita. 
Il pianeta è caratterizzato da una forte attività atmosferica: tempeste immense, vortici e bande colorate dovute a correnti d’aria ad alta velocità. 
Il più famoso è la <strong>Grande Macchia Rossa</strong>, una tempesta più grande della Terra. 
Giove possiede un intenso campo magnetico che genera fasce di radiazioni molto potenti.`,

        lune: `<strong>Giove</strong> ha un sistema di satelliti estremamente ricco: oltre 90 lune confermate. 
Le quattro principali, chiamate <strong>Galileiane</strong>, sono <em>Io</em>, <em>Europa</em>, <em>Ganimede</em> e <em>Callisto</em>. 
Ganimede è la luna più grande del Sistema Solare. Alcune di queste lune potrebbero avere oceani sotterranei e, in futuro, potrebbero essere esplorate per cercare tracce di vita.`,

        mitologia: `Il pianeta prende il nome da <strong>Giove</strong>, re degli dei nella mitologia romana, equivalente del greco <strong>Zeus</strong>. 
Rappresentava il cielo, la legge e l’ordine, e la sua immensa dimensione e forza nel cielo notturno evocavano potere e maestà divina. 
Le lune Galileiane furono scoperte da Galileo Galilei nel 1610, rivoluzionando la comprensione del Sistema Solare.`,

        missioni: `<strong>Giove</strong> è stato studiato da missioni come <em>Pioneer</em> e <em>Voyager</em>, seguite da <em>Galileo</em>, che ha orbitato il pianeta dal 1995 al 2003, e più recentemente da <em>Juno</em>. 
Queste missioni hanno analizzato atmosfera, campo magnetico, anelli e lune, fornendo informazioni cruciali sulla composizione e l’evoluzione dei giganti gassosi.`
    },

    "saturno": {
        nome: "Saturno",
        immagine: "img/saturno.png",

        informazioni: `<strong>Saturno</strong> è il sesto pianeta del Sistema Solare e il secondo per dimensioni, dopo Giove. 
È un gigante gassoso composto principalmente da idrogeno ed elio, senza una superficie solida definita. 
È famoso per il suo sistema di anelli spettacolari, composti da miliardi di frammenti di ghiaccio e roccia di varie dimensioni. 
La sua atmosfera è caratterizzata da venti fortissimi, tempeste e bande di nubi simili a quelle di Giove. 
Saturno possiede un intenso campo magnetico e un nucleo probabilmente roccioso e metallico.`,

        lune: `<strong>Saturno</strong> ha oltre 80 lune confermate. 
Tra le più note ci sono <em>Titan</em>, la più grande, che possiede un’atmosfera densa e laghi di metano liquido, e <em>Encelado</em>, che emette geyser di acqua e potrebbe ospitare oceani sotterranei. 
Le lune di Saturno variano da piccoli corpi irregolari a grandi satelliti con caratteristiche geologiche complesse.`,

        mitologia: `Il pianeta prende il nome da <strong>Saturno</strong>, dio romano dell’agricoltura e del tempo, equivalente del greco <strong>Crono</strong>. 
Rappresentava la fertilità della terra, la ciclicità del tempo e il raccolto. 
Il suo splendore nel cielo e la maestosità degli anelli evocavano la grandezza del dio e la sua associazione con i cicli naturali.`,

        missioni: `<strong>Saturno</strong> è stato esplorato da diverse sonde, tra cui <em>Pioneer 11</em> e le <em>Voyager</em> negli anni ’70 e ’80. 
La missione più famosa è <em>Cassini-Huygens</em>, che ha orbitato Saturno dal 2004 al 2017, studiando anelli, atmosfera e lune, e inviando il lander <em>Huygens</em> sulla superficie di Titan. 
Grazie a queste missioni, la conoscenza di Saturno e del suo complesso sistema di satelliti è aumentata enormemente.`
    },

    "urano": {
        nome: "Urano",
        immagine: "img/urano.png",

        informazioni: `<strong>Urano</strong> è il settimo pianeta del Sistema Solare e il primo dei giganti ghiacciati. 
È composto principalmente da idrogeno, elio e composti volatili come acqua, ammoniaca e metano, che conferiscono il caratteristico colore azzurro-verde. 
Urano ha un’orbita inclinata quasi di 98 gradi, il che significa che “rotola” sul suo lato rispetto al piano orbitale. 
L’atmosfera è fredda e ventosa, con temperature estremamente basse che lo rendono uno dei pianeti più gelidi del Sistema Solare.`,

        lune: `<strong>Urano</strong> possiede 27 lune conosciute. 
Le principali includono <em>Titania</em>, <em>Oberon</em>, <em>Umbriel</em>, <em>Ariel</em> e <em>Mab</em>. 
Molte lune sono craterizzate e presentano segni di attività geologica passata, mentre alcune mostrano ghiaccio e caratteristiche superficiali insolite.`,

        mitologia: `Il pianeta prende il nome da <strong>Urano</strong>, dio del cielo nella mitologia romana e greca (equivalente di Ouranos). 
Rappresenta l’infinito del cielo e l’ordine cosmico. 
Il suo colore freddo e il movimento peculiare evocano il mistero e la distanza dai pianeti interni.`,

        missioni: `<strong>Urano</strong> è stato visitato direttamente solo dalla sonda <em>Voyager 2</em> nel 1986, che ha fornito dati su atmosfera, anelli e lune. 
Oggi viene studiato principalmente tramite osservazioni telescopiche e missioni future sono pianificate per approfondire la conoscenza dei giganti ghiacciati e del loro sistema di satelliti.`
    },

    "nettuno": {
        nome: "Nettuno",
        immagine: "img/nettuno.png",

        informazioni: `<strong>Nettuno</strong> è l’ottavo e ultimo pianeta del Sistema Solare. 
Come Urano, è un gigante ghiacciato, composto da idrogeno, elio e ghiacci di acqua, ammoniaca e metano, che gli conferiscono un colore blu intenso. 
L’atmosfera presenta venti tra i più veloci del Sistema Solare e grandi tempeste, come la <strong>Grande Macchia Scura</strong>. 
Il pianeta ha un nucleo roccioso e metallicamente denso, circondato da un mantello ghiacciato e da un’ampia atmosfera gassosa.`,

        lune: `<strong>Nettuno</strong> ha 14 lune conosciute. 
La più grande è <em>Tritone</em>, caratterizzata da geyser di azoto e un’orbita retrograda, che suggerisce sia un oggetto catturato. 
Altre lune sono piccole e craterizzate, e molte presentano caratteristiche ghiacciate simili a quelle di Urano.`,

        mitologia: `Il pianeta prende il nome da <strong>Nettuno</strong>, dio romano del mare, equivalente del greco <strong>Posidone</strong>. 
Rappresenta le acque profonde, la potenza e il mistero degli oceani. 
Il colore blu intenso e i venti tempestosi riflettono la natura del dio e la sua associazione con le tempeste marine.`,

        missioni: `<strong>Nettuno</strong> è stato esplorato direttamente solo dalla sonda <em>Voyager 2</em> nel 1989, che ha studiato atmosfera, anelli e lune. 
Le osservazioni successive sono state condotte da telescopi terrestri e spaziali. 
Future missioni sono considerate per esplorare più a fondo il gigante ghiacciato e il suo sistema lunare.`
    },

    "pianeti nani": {
        nome: "Pianeti Nani",
        immagine: "img/plutone.png",
        azione: () => generaPianetiNani(),
    },
}
   
const pianetiNani = {
    "plutone": {
        nome: "Plutone",
        immagine: "img/plutone.png",
        informazioni: `<strong>Plutone</strong> è un pianeta nano situato nella <em>Fascia di Kuiper</em>, una regione remota del Sistema Solare oltre l’orbita di Nettuno. 
Scoperto nel 1930 da Clyde Tombaugh, per decenni è stato considerato il nono pianeta, fino alla sua riclassificazione nel 2006. 
La sua superficie è composta da una miscela di ghiaccio d’acqua, azoto congelato, monossido di carbonio e metano, che riflettono la luce del Sole dandogli un aspetto brillante e variegato. 
Le regioni più famose includono la vasta pianura ghiacciata chiamata <strong>Sputnik Planitia</strong>, formata probabilmente da ghiaccio di azoto, e montagne di ghiaccio d’acqua alte fino a 3 chilometri.`,
        lune: `<strong>Plutone</strong> ha cinque lune conosciute: <em>Caronte</em>, <em>Stige</em>, <em>Nix</em>, <em>Kerberos</em> e <em>Ida</em>. 
Caronte è la più grande, quasi metà delle dimensioni di Plutone, tanto che i due corpi orbitano attorno a un punto comune nello spazio. 
Le altre lune sono molto più piccole e hanno orbite caotiche, probabilmente formatesi da un antico impatto.`,
        mitologia: `Il nome <strong>Plutone</strong> deriva dal dio romano degli Inferi, signore del mondo sotterraneo e delle ricchezze della terra. 
L’associazione è dovuta al suo colore cupo e alla posizione lontana e fredda nel Sistema Solare, simbolo di mistero, silenzio e oscurità.`,
        missioni: `<strong>Plutone</strong> è stato visitato per la prima e unica volta dalla sonda <em>New Horizons</em> della NASA nel 2015. 
Le immagini inviate hanno rivelato un mondo sorprendentemente attivo, con superfici giovani, montagne di ghiaccio e indizi di attività geologica recente. 
Dopo il sorvolo, la missione ha proseguito verso altri corpi della Fascia di Kuiper.`
    },

    "cerere": {
        nome: "Cerere",
        immagine: "img/cerere.png",
        informazioni: `<strong>Cerere</strong> è il più grande corpo della <em>Fascia degli Asteroidi</em> e il pianeta nano più vicino alla Terra. 
Scoperto nel 1801 da Giuseppe Piazzi, è composto principalmente da rocce e ghiaccio e ha un diametro di circa 940 chilometri. 
La sua superficie mostra un misto di crateri, montagne e pianure lisce, segno di processi geologici antichi. 
Tra le caratteristiche più affascinanti c’è il cratere <strong>Occator</strong>, che presenta macchie bianche di sali brillanti, probabilmente depositi di carbonato formati da acqua salmastra che risaliva dal sottosuolo.`,
        lune: `<strong>Cerere</strong> non possiede satelliti naturali né anelli conosciuti. 
La sua orbita stabile e la sua massa relativamente piccola rendono improbabile la presenza di lune.`,
        mitologia: `<strong>Cerere</strong> prende il nome dalla dea romana dell’agricoltura, dei raccolti e della fertilità, equivalente della greca <strong>Demetra</strong>. 
Il nome riflette l’idea di nutrimento e abbondanza, poiché Cerere si trova nella regione del Sistema Solare “ricca” di asteroidi, visti come i semi della formazione planetaria.`,
        missioni: `<strong>Cerere</strong> è stato esplorato dalla sonda <em>Dawn</em> della NASA, che vi ha orbitato dal 2015 al 2018 dopo aver studiato Vesta. 
Dawn ha rivelato la presenza di sali, carbonati e segni di criovulcanismo, suggerendo che sotto la superficie possa ancora esistere acqua liquida o fangosa.`
    },

    "eris": {
        nome: "Eris",
        immagine: "img/eris.png",
        informazioni: `<strong>Eris</strong> è uno dei pianeti nani più massicci del Sistema Solare, situato nella regione dello <em>Scattered Disc</em>, una zona di oggetti ghiacciati oltre la Fascia di Kuiper. 
È leggermente più piccolo di Plutone, ma più denso, con una superficie estremamente riflettente composta da ghiaccio di metano e azoto congelato. 
Le temperature sono tra le più basse conosciute: circa -240°C. 
La scoperta di Eris nel 2005 da parte di Mike Brown contribuì direttamente alla ridefinizione del termine “pianeta” e alla riclassificazione di Plutone come pianeta nano.`,
        lune: `<strong>Eris</strong> possiede una luna conosciuta, <em>Dysnomia</em>, che orbita in circa 16 giorni. 
Le osservazioni della sua orbita hanno permesso di stimare la massa precisa di Eris.`,
        mitologia: `Il nome <strong>Eris</strong> deriva dalla dea greca della discordia e del caos, scelta proprio per la controversia che la sua scoperta scatenò nella comunità scientifica. 
La sua luna <em>Dysnomia</em> significa “disordine” o “illegalità”, figlia della dea stessa.`,
        missioni: `<strong>Eris</strong> non è mai stata visitata da sonde spaziali. 
Le informazioni su di essa provengono da osservazioni telescopiche terrestri e spaziali, tra cui il telescopio spaziale Hubble e l’osservatorio Keck.`
    },

    "makemake": {
        nome: "Makemake",
        immagine: "img/makemake.png",
        informazioni: `<strong>Makemake</strong> è un pianeta nano della <em>Fascia di Kuiper</em> scoperto nel 2005. 
È uno dei più brillanti corpi transnettuniani visibili dalla Terra e ha una superficie coperta da metano, etano e azoto ghiacciati, che gli conferiscono un colore rossastro. 
Makemake è leggermente più piccolo di Plutone e non mostra segni evidenti di atmosfera spessa, anche se sono stati osservati deboli segni di sublimazione dei ghiacci durante il suo perielio.`,
        lune: `<strong>Makemake</strong> possiede una piccola luna conosciuta, chiamata provvisoriamente <em>MK2</em>, scoperta nel 2016 con il telescopio spaziale Hubble. 
La sua presenza ha permesso di stimare meglio la massa e la densità del pianeta nano.`,
        mitologia: `Il nome <strong>Makemake</strong> proviene dal dio creatore della mitologia dell’Isola di Pasqua (Rapa Nui), considerato la divinità della fertilità e della vita. 
Il nome riflette l’importanza simbolica della creazione e dell’origine, in linea con il tema dei corpi primordiali del Sistema Solare.`,
        missioni: `<strong>Makemake</strong> non è stata ancora visitata da sonde spaziali. 
Tutte le informazioni provengono da osservazioni con telescopi terrestri e dallo spazio, tra cui Hubble e il Very Large Telescope dell’ESO.`
    },

    "haumea": {
        nome: "Haumea",
        immagine: "img/haumea.png",
        informazioni: `<strong>Haumea</strong> è un pianeta nano situato nella <em>Fascia di Kuiper</em>, caratterizzato da una forma ellissoidale unica, dovuta alla sua rotazione estremamente rapida (un giorno dura circa 4 ore). 
Scoperto nel 2004, è composto principalmente da ghiaccio d’acqua cristallino e roccia, con una superficie brillante e riflettente. 
La sua rapida rotazione ha deformato il pianeta, facendolo assumere la forma di un “uovo” allungato. 
Haumea è anche circondato da un sottile sistema di anelli, una rarità tra i corpi minori del Sistema Solare.`,
        lune: `<strong>Haumea</strong> possiede due lune conosciute: <em>Hi'iaka</em> e <em>Namaka</em>. 
Entrambe orbitano a diverse distanze e probabilmente si sono formate dopo un impatto che ha frammentato parte del corpo principale.`,
        mitologia: `Il nome <strong>Haumea</strong> deriva dalla dea hawaiana della fertilità e della nascita, madre di numerose divinità. 
Nella mitologia, Haumea rappresenta la vita, la rinascita e la creazione, concetti in armonia con la natura rigenerativa e dinamica del pianeta stesso.`,
        missioni: `<strong>Haumea</strong> non è ancora stata visitata da sonde spaziali. 
Le sue caratteristiche uniche sono state scoperte grazie a osservazioni telescopiche e a occultazioni stellari, che hanno rivelato la presenza di anelli e confermato la sua forma insolita.`
    }
};
