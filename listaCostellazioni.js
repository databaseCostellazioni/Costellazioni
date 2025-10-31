//<span class="link-costellazione" onclick="openMiniModal('orsa-maggiore', event)">grande carro</span>

const costellazioni = {
    "orsa-maggiore": {
        nome: "Orsa Maggiore",
        immagine: "img/orsa_maggiore.jpg",
        mitologia: `Nella mitologia greca, l’<strong>Orsa Maggiore</strong> rappresenta <strong>Callisto</strong>, una ninfa della dea Artemide. 
  Zeus si innamorò di lei, e quando Era scoprì il tradimento, trasformò Callisto in un’orsa per punirla. 
  Anni dopo, il figlio di Callisto, <strong>Arcas</strong>, stava per uccidere l’animale ignaro della sua identità, ma Zeus intervenne e pose entrambi nel cielo, 
  dove divennero l’<span class="link-costellazione" onclick="openMiniModal('orsa-minore', event)">Orsa Minore</span> e l’<strong>Orsa Maggiore</strong>. 
  In questo modo madre e figlio rimasero per sempre insieme nel firmamento.`,

        informazioni: `L’<strong>Orsa Maggiore</strong> è una delle costellazioni più riconoscibili del cielo boreale e visibile tutto l’anno alle nostre latitudini. 
  La sua parte più famosa è l’<em>asterismo del Grande Carro</em>, formato dalle sette stelle principali. 
  La seconda stella del manico, <strong>Mizar</strong>, è in realtà un sistema multiplo e, insieme alla vicina <em>Alcor</em>, forma una celebre coppia visibile anche a occhio nudo. 
  La stella più luminosa è <strong>Alioth</strong>, mentre <strong>Dubhe</strong> e <strong>Merak</strong>, le due stelle anteriori del carro, puntano verso la 
  <span class="link-costellazione" onclick="openMiniModal('orsa-minore', event)">Stella Polare</span>.`,

        stelle: [
            "Alioth, la stella più luminosa della costellazione",
            "Dubhe, una gigante arancione che segna la parte anteriore del carro",
            "Merak, che insieme a Dubhe punta verso la Stella Polare",
            "Alkaid, stella blu che forma la punta del manico del carro",
            "Mizar, sistema stellare multiplo con la compagna Alcor, visibile anche a occhio nudo",
            "Phecda e Megrez, che completano la figura del Grande Carro"
        ],

        visibilita: `Tutto l’anno (circumpolare)`,
        mesiVisibili: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],

        trova: `Per trovare l’<strong>Orsa Maggiore</strong>, cerca il caratteristico <em>Grande Carro</em> nel cielo settentrionale. 
  È composto da sette stelle brillanti disposte come un mestolo. 
  Tracciando una linea immaginaria tra <strong>Dubhe</strong> e <strong>Merak</strong>, le due stelle anteriori del carro, si può individuare la 
  <span class="link-costellazione" onclick="openMiniModal('orsa-minore', event)">Stella Polare</span> e quindi il nord celeste.`,
    },

    "cassiopea": {
        nome: "Cassiopea",
        immagine: "img/cassiopea.jpg",
        mitologia: `Nella mitologia greca, <strong>Cassiopea</strong> era la vanitosa regina di Etiopia, moglie di 
  <span class="link-costellazione" onclick="openMiniModal('cefeo', event)">Cefeo</span> e madre di 
  <span class="link-costellazione" onclick="openMiniModal('andromeda', event)">Andromeda</span>. 
  Si vantava di essere più bella delle Nereidi, scatenando la loro ira. Per punirla, Poseidone inviò un mostro marino a devastare il regno. 
  Dopo che Perseo salvò Andromeda, gli dèi posero Cassiopea nel cielo, legata al suo trono, costretta a ruotare eternamente — talvolta a testa in giù — come monito contro la vanità.`,

        informazioni: `La <strong>Cassiopea</strong> è una costellazione circumpolare, visibile tutto l’anno dall’emisfero nord. 
  È facilmente riconoscibile per la sua forma a <strong>'W'</strong> o <strong>'M'</strong> nel cielo settentrionale, opposta alla 
  <span class="link-costellazione" onclick="openMiniModal('orsa_maggiore', event)">Orsa Maggiore</span>. 
  Si trova in una regione ricca della <strong>Via Lattea</strong>, contenente numerosi ammassi stellari aperti, come <em>M52</em> e <em>NGC 457</em> (l’Ammasso Gufo). 
  È una costellazione utile per orientarsi e per individuare la <span class="link-costellazione" onclick="openMiniModal('orsa_minore', event)">Stella Polare</span>.`,

        stelle: [
            "Schedar, gigante arancione e stella più luminosa della costellazione",
            "Caph, stella bianco-gialla che segna l’estremità della figura a W",
            "Gamma Cassiopeiae, variabile blu-violacea al centro della costellazione",
            "Ruchbah, stella azzurra che forma uno dei vertici della W",
            "Segin, stella bianco-azzurra che completa la forma della costellazione"
        ],

        visibilita: `Tutto l’anno (circumpolare)`,
        mesiVisibili: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],

        trova: `Per trovare <strong>Cassiopea</strong>, guarda verso nord-est, nella direzione opposta all’ 
  <span class="link-costellazione" onclick="openMiniModal('orsa_maggiore', event)">Orsa Maggiore</span>. 
  Le sue cinque stelle principali formano una evidente figura a <strong>'W'</strong> (o 'M', a seconda della stagione e dell’ora). 
  La costellazione ruota attorno alla <span class="link-costellazione" onclick="openMiniModal('orsa_minore', event)">Stella Polare</span>, 
  rimanendo visibile tutto l’anno alle nostre latitudini. In autunno e in inverno è alta nel cielo serale.`,
    },

    "orsa-minore": {
        nome: "Orsa Minore",
        immagine: "img/orsa_minore.jpg",
        mitologia: `Secondo la leggenda, l’<strong>Orsa Minore</strong> rappresenta <strong>Arcas</strong>, il figlio di 
  <span class="link-costellazione" onclick="openMiniModal('orsa-maggiore', event)">Callisto</span>. 
  Dopo essere stato salvato da Zeus, Arcas fu posto nel cielo accanto alla madre come una costellazione più piccola. 
  Nell’antichità era anche associata a <em>Cinosura</em>, la ninfa che allevò Zeus da bambino, poi trasformata in stella come ricompensa.`,

        informazioni: `L’<strong>Orsa Minore</strong> è una costellazione di piccole dimensioni ma di grande importanza astronomica, 
  poiché contiene la <strong>Stella Polare</strong> (<em>Polaris</em>), che indica quasi perfettamente il nord. 
  Le sette stelle principali formano l’asterismo del <em>Piccolo Carro</em>, una versione ridotta del Grande Carro. 
  La costellazione è circumpolare e quindi visibile tutto l’anno da gran parte dell’emisfero nord.`,

        stelle: [
            "Polaris (Stella Polare), una supergigante gialla e la più luminosa della costellazione",
            "Kochab, gigante arancione che insieme a Pherkad forma la base del piccolo carro",
            "Pherkad, stella bianco-azzurra che accompagna Kochab",
            "Yildun, stella bianca di magnitudine 4",
            "Zeta Ursae Minoris, stella doppia poco visibile a occhio nudo"
        ],

        visibilita: `Tutto l’anno (circumpolare)`,
        mesiVisibili: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],

        trova: `Per individuare l’<strong>Orsa Minore</strong>, parti dal 
  <span class="link-costellazione" onclick="openMiniModal('orsa-maggiore', event)">Grande Carro</span>: 
  prolunga la linea che unisce <strong>Dubhe</strong> e <strong>Merak</strong> di circa cinque volte verso l’alto. 
  Troverai la brillante <strong>Stella Polare</strong>, posta all’estremità del manico del <em>Piccolo Carro</em>. 
  Da lì puoi riconoscere facilmente le altre stelle della costellazione.`,
    },

    "boote": {
        nome: "Boote",
        immagine: "img/boote.jpg",
        mitologia: `Nella mitologia greca, <strong>Boote</strong> (il Bovaro) era un contadino o pastore celeste che guidava i buoi che trainano il 
  <span class="link-costellazione" onclick="openMiniModal('orsa_maggiore', event)">Grande Carro</span> nel cielo. 
  In altre versioni, è identificato con <strong>Icaro</strong> o con il dio <strong>Arcas</strong>, figlio di Callisto, che imparò a coltivare la terra grazie a Dioniso. 
  Gli dèi lo premiarono ponendolo tra le stelle, dove sorveglia il movimento del carro per l’eternità.`,

        informazioni: `<strong>Boote</strong> è una grande costellazione primaverile facilmente riconoscibile grazie ad 
  <strong>Arturo</strong>, la quarta stella più luminosa del cielo notturno. 
  La costellazione si estende in una regione povera di nebulose ma ricca di stelle doppie e variabili. 
  Boote confina con la <span class="link-costellazione" onclick="openMiniModal('vergine', event)">Vergine</span> e 
  l’<span class="link-costellazione" onclick="openMiniModal('orsa_maggiore', event)">Orsa Maggiore</span>, 
  e ospita la <em>stella doppia Izar</em>, una delle più belle coppie colorate visibili con piccoli telescopi.`,

        stelle: [
            "Arturo, gigante arancione e quarta stella più luminosa del cielo",
            "Izar, sistema doppio composto da una stella arancione e una azzurra",
            "Seginus, stella bianco-azzurra variabile",
            "Nekkar, gigante gialla situata vicino al polo nord celeste",
            "Muphrid, stella bianco-gialla posta sotto Arturo"
        ],

        visibilita: `Da marzo a luglio`,
        mesiVisibili: [3, 4, 5, 6, 7],

        trova: `Per individuare <strong>Boote</strong>, inizia dal 
  <span class="link-costellazione" onclick="openMiniModal('orsa_maggiore', event)">Grande Carro</span>. 
  Segui la curva del manico del carro e prolunga l’arco fino a incontrare una stella arancione brillante: quella è <strong>Arturo</strong>. 
  Boote si estende intorno a essa, formando una figura simile a un aquilone o a una freccia che punta verso l’alto. 
  È facilmente osservabile in primavera e inizio estate, nel cielo meridionale.`,
    },

    "orione": {
        nome: "Orione",
        immagine: "img/orione.jpg",
        mitologia: `Nella mitologia greca, <strong>Orione</strong> era un gigante e abile cacciatore, figlio di Poseidone, 
  tanto grande da poter camminare sul fondo del mare. Si innamorò di <strong>Artemide</strong>, dea della caccia, ma fu ucciso da uno scorpione inviato da Era o, in altre versioni, dalla stessa Artemide ingannata da Apollo. 
  Gli dèi lo posero nel cielo con la sua cintura e la spada, seguito dai suoi cani, rappresentati dalle costellazioni del 
  <span class="link-costellazione" onclick="openMiniModal('cane_maggiore', event)">Cane Maggiore</span> e del 
  <span class="link-costellazione" onclick="openMiniModal('cane_minore', event)">Cane Minore</span>.`,

        informazioni: `<strong>Orione</strong> è una delle costellazioni più spettacolari e riconoscibili del cielo invernale. 
  Domina la volta celeste con la sua <em>Cintura</em> formata da tre stelle perfettamente allineate: 
  <strong>Alnitak</strong>, <strong>Alnilam</strong> e <strong>Mintaka</strong>. 
  Contiene anche la celebre <strong>Nebulosa di Orione (M42)</strong>, una regione di formazione stellare visibile persino a occhio nudo come una macchia diffusa nella “spada” del cacciatore. 
  Le sue due stelle principali, <strong>Betelgeuse</strong> (rossa) e <strong>Rigel</strong> (azzurra), offrono un magnifico contrasto di colori.`,

        stelle: [
            "Betelgeuse, supergigante rossa sulla spalla sinistra del cacciatore",
            "Rigel, stella azzurra molto luminosa sul piede sinistro",
            "Bellatrix, gigante blu sulla spalla destra",
            "Saiph, stella blu nell’angolo inferiore destro della figura",
            "Alnitak, Alnilam e Mintaka, le tre stelle allineate della Cintura di Orione",
            "M42 (Nebulosa di Orione), una delle più spettacolari regioni di formazione stellare"
        ],

        visibilita: `Da novembre a marzo`,
        mesiVisibili: [11, 12, 1, 2, 3],

        trova: `Per trovare <strong>Orione</strong>, guarda verso sud-est nelle serate invernali. 
  Le tre stelle allineate e luminose della sua <em>Cintura</em> sono inconfondibili. 
  Dalla cintura puoi scendere verso la brillante <strong>Rigel</strong> o salire verso la rossa <strong>Betelgeuse</strong>. 
  Seguendo la linea della cintura verso sinistra si incontra 
  <span class="link-costellazione" onclick="openMiniModal('toro', event)">Aldebaran</span> nel <strong>Toro</strong>, mentre verso destra si trova 
  <span class="link-costellazione" onclick="openMiniModal('cane_maggiore', event)">Sirio</span>, la stella più luminosa del cielo.`,
    },

    "toro": {
        nome: "Toro",
        immagine: "img/toro.jpg",
        mitologia: `Nella mitologia greca, il <strong>Toro</strong> rappresenta la forma assunta da <strong>Zeus</strong> per rapire la principessa fenicia <strong>Europa</strong>. 
  Travestito da maestoso toro bianco, la condusse attraverso il mare fino a Creta, dove rivelò la sua identità. 
  Come tributo, la figura del toro fu posta tra le stelle. 
  In altre culture, la costellazione era associata alla fertilità, alla forza e ai cicli agricoli.`,

        informazioni: `Il <strong>Toro</strong> è una costellazione zodiacale ben visibile nel cielo invernale, situata lungo l’eclittica, tra 
  <span class="link-costellazione" onclick="openMiniModal('ariete', event)">Ariete</span> e 
  <span class="link-costellazione" onclick="openMiniModal('gemelli', event)">Gemelli</span>. 
  È ricca di oggetti celesti spettacolari, tra cui l’<em>Ammasso delle Iadi</em>, che forma la testa del toro e include la luminosa <strong>Aldebaran</strong>, 
  e l’<em>Ammasso delle Pleiadi (M45)</em>, un gruppo di giovani stelle azzurre visibili anche a occhio nudo. 
  Il Toro è anche la sede della <em>Nebulosa del Granchio (M1)</em>, resto di una supernova esplosa nel 1054 d.C., visibile con telescopi amatoriali.`,

        stelle: [
            "Aldebaran, gigante arancione e stella più luminosa del Toro",
            "Elnath, stella bianco-azzurra che segna uno dei corni del toro",
            "Alcyone, la più luminosa dell’ammasso delle Pleiadi",
            "Atlas e Pleione, coppia stellare all’interno delle Pleiadi",
            "Theta Tauri, sistema binario che fa parte delle Iadi"
        ],

        visibilita: `Da novembre ad aprile`,
        mesiVisibili: [11, 12, 1, 2, 3, 4],

        trova: `Per individuare il <strong>Toro</strong>, cerca la stella rossa e brillante <strong>Aldebaran</strong> a nord-est di 
  <span class="link-costellazione" onclick="openMiniModal('orione', event)">Orione</span>. 
  Tracciando una linea immaginaria attraverso la <em>Cintura di Orione</em> verso destra, si arriva proprio ad Aldebaran. 
  Le Iadi formano una figura a “V” che rappresenta la testa del toro, mentre più in alto si trovano le splendide 
  Pleiadi, uno dei più celebri ammassi stellari del cielo.`,
    },

    "cigno": {
        nome: "Cigno",
        immagine: "img/cigno.jpg",
        mitologia: `Nella mitologia greca, il Cigno è spesso associato a Zeus, che si trasformò in questo elegante uccello per sedurre Leda, regina di Sparta. Da questa unione nacquero Castore, Polluce, Clitennestra ed Elena di Troia. In altre leggende, rappresenta Orfeo, posto tra le stelle dopo la morte, vicino alla sua arpa, la <span class="link-costellazione" onclick="openMiniModal('lira', event)">Lira</span>. La sua forma a croce luminosa nel cielo estivo le è valso il nome di Croce del Nord.`,

        informazioni: `Il <strong>Cigno</strong> è una delle costellazioni più riconoscibili del cielo boreale, attraversata dalla fascia luminosa della <strong>Via Lattea</strong>. 
  Al suo interno si trovano spettacolari oggetti del profondo cielo, come la <em>Nebulosa Nord America</em> (NGC 7000) e la <em>Nebulosa del Velo</em>, resti di una supernova esplosa migliaia di anni fa. 
  La stella <strong>Deneb</strong> è una delle più luminose e massicce conosciute, distante circa 2.600 anni luce, e costituisce uno dei vertici del <em>Triangolo Estivo</em> insieme a Vega e Altair.`,

        stelle: [
            "Deneb, supergigante bianca e vertice del Triangolo Estivo",
            "Albireo, splendida stella doppia con componenti blu e dorata",
            "Sadr, stella gialla-azzurra al centro della costellazione, immersa in una regione ricca di nebulose",
            "Gienah, stella azzurra che forma una delle ali del cigno",
            "Delta Cygni, stella doppia situata vicino alla coda del Cigno"
        ],

        visibilita: `Da giugno ad ottobre`,
        mesiVisibili: [6, 7, 8, 9, 10],

        trova: `Il <strong>Cigno</strong> è facilmente riconoscibile nel cielo estivo per la sua forma a croce. 
  Per trovarlo, individua <strong>Deneb</strong>, una delle tre stelle del <em>Triangolo Estivo</em> insieme a Vega della 
  <span class="link-costellazione" onclick="openMiniModal('lira', event)">Lira</span> e Altair dell’<span class="link-costellazione" onclick="openMiniModal('aquila', event)">Aquila</span>. 
  Da Deneb segui la sequenza di stelle che forma il corpo del cigno fino ad <strong>Albireo</strong>, all’estremità opposta. 
  È visibile alta nel cielo verso nord-est nelle notti estive, attraversando la Via Lattea.`,
    },

    "aquila": {
        nome: "Aquila",
        immagine: "img/aquila.jpg",
        mitologia: `Nella mitologia greca, l’Aquila rappresenta l’uccello di Zeus, incaricato di portare i suoi fulmini e di servire il re degli dèi. In una celebre leggenda, Zeus inviò la sua aquila per rapire il giovane Ganimede, che divenne poi coppiere dell’Olimpo e diede il nome alla costellazione dell’<span class="link-costellazione" onclick="openMiniModal('acquario', event)">Acquario</span>. L’Aquila venne posta in cielo come simbolo di forza e fedeltà.`,

        informazioni: `L’<strong>Aquila</strong> è una brillante costellazione estiva situata lungo la fascia della <strong>Via Lattea</strong>, facilmente riconoscibile per la stella <strong>Altair</strong>, una delle più luminose del cielo boreale e uno dei vertici del <em>Triangolo Estivo</em> insieme a Deneb del <span class="link-costellazione" onclick="openMiniModal('cigno', event)">Cigno</span> e Vega della <span class="link-costellazione" onclick="openMiniModal('lira', event)">Lira</span>. Nella costellazione si trovano anche diversi ammassi stellari aperti e regioni nebulose, come la Nebulosa Aquila (M16), che ospita i celebri “Pilastri della Creazione”, immortalati dal telescopio Hubble.`,

        stelle: [
            "Altair, stella bianca di tipo A7, una delle più vicine a noi (16,7 anni luce)",
            "Tarazed, gigante arancione situata appena sopra Altair",
            "Alshain, stella giallo-bianca che completa la linea principale del corpo dell’aquila",
            "Eta Aquilae, stella variabile del tipo Cefeide",
            "15 Aquilae, una stella doppia facilmente osservabile con piccoli strumenti"
        ],

        visibilita: `Da giugno a ottobre`,
        mesiVisibili: [6, 7, 8, 9, 10],

        trova: `Per individuare l’<strong>Aquila</strong>, cerca nel cielo estivo il vertice meridionale del <em>Triangolo Estivo</em>. 
  <strong>Altair</strong> è facilmente riconoscibile perché accompagnata da due stelle più deboli, <em>Tarazed</em> e <em>Alshain</em>, che formano una piccola linea. 
  La costellazione si estende lungo la <strong>Via Lattea</strong>, tra il <span class="link-costellazione" onclick="openMiniModal('cigno', event)">Cigno</span> e il <span class="link-costellazione" onclick="openMiniModal('sagittario', event)">Sagittario</span>, alta nel cielo meridionale nelle serate di luglio e agosto.`,
    },

    "lira": {
        nome: "Lira",
        immagine: "img/lira.jpg",
        mitologia: `Nella mitologia greca, la <strong>Lira</strong> rappresenta lo strumento musicale del poeta e musicista <strong>Orfeo</strong>. 
  Si narra che Orfeo incantasse uomini, animali e persino le pietre con la sua musica. Dopo la morte di Euridice, tentò di riportarla in vita scendendo negli Inferi, ma fallì. 
  Gli dèi, commossi dal suo dolore e dalla sua arte, posero la sua lira nel cielo, accanto al <span class="link-costellazione" onclick="openMiniModal('cigno', event)">Cigno</span>, perché la sua musica potesse risuonare per l’eternità.`,

        informazioni: `La <strong>Lira</strong> è una piccola ma brillante costellazione del cielo boreale, visibile durante l’estate. 
  È dominata da <strong>Vega</strong>, la quinta stella più luminosa del cielo notturno e una delle più vicine alla Terra, situata a soli 25 anni luce. 
  La costellazione ospita anche notevoli oggetti celesti, come la <em>Nebulosa Anello</em> (M57), un residuo di stella morente visibile con piccoli telescopi come un anello di gas colorato. 
  La <strong>Lira</strong> è inoltre parte del celebre <em>Triangolo Estivo</em> insieme a Deneb e Altair.`,

        stelle: [
            "Vega, stella bianco-azzurra e quinta più luminosa del cielo notturno",
            "Sheliak, stella binaria a eclisse situata vicino alla Nebulosa Anello",
            "Sulafat, gigante azzurra che forma un vertice del piccolo parallelogramma della costellazione",
            "Delta Lyrae, doppia ottica facilmente osservabile con binocoli",
            "RR Lyrae, stella variabile che ha dato il nome a un’intera classe di variabili pulsanti"
        ],

        visibilita: `Da maggio a settembre`,
        mesiVisibili: [5, 6, 7, 8, 9],

        trova: `Per trovare la <strong>Lira</strong>, guarda verso est nelle serate di primavera o verso sud nelle notti estive. 
  Individua la brillante <strong>Vega</strong>, una delle stelle più luminose e azzurre del cielo, che forma un vertice del <em>Triangolo Estivo</em> insieme a 
  <span class="link-costellazione" onclick="openMiniModal('cigno', event)">Deneb</span> e 
  <span class="link-costellazione" onclick="openMiniModal('aquila', event)">Altair</span>. 
  Attorno a Vega, quattro stelle formano un piccolo parallelogramma che rappresenta la lira di Orfeo.`,
    },

    "gemelli": {
        nome: "Gemelli",
        immagine: "img/gemelli.jpg",
        mitologia: `Nella mitologia greca, i <strong>Gemelli</strong> rappresentano i fratelli <strong>Castore</strong> e <strong>Polluce</strong>, 
  figli di <span class="link-costellazione" onclick="openMiniModal('cigno', event)">Leda</span>. 
  Polluce era figlio di Zeus e quindi immortale, mentre Castore era mortale. Quando Castore morì, Polluce chiese a Zeus di condividere la propria immortalità con il fratello. 
  Commosso, Zeus li pose entrambi nel cielo affinché restassero insieme per sempre come simbolo di fratellanza e lealtà.`,

        informazioni: `La costellazione dei <strong>Gemelli</strong> è una delle dodici dello zodiaco e si trova tra il 
  <span class="link-costellazione" onclick="openMiniModal('toro', event)">Toro</span> e il 
  <span class="link-costellazione" onclick="openMiniModal('cancro', event)">Cancro</span>. 
  È facilmente riconoscibile grazie alle sue due stelle principali, <strong>Castore</strong> e <strong>Polluce</strong>, che rappresentano le teste dei gemelli. 
  La costellazione contiene anche interessanti oggetti del cielo profondo, tra cui l’<em>Ammasso aperto M35</em>, visibile con binocoli, e alcune stelle doppie spettacolari.`,

        stelle: [
            "Polluce, gigante arancione e la stella più luminosa della costellazione",
            "Castore, sistema multiplo formato da almeno sei stelle legate gravitazionalmente",
            "Wasat, stella bianco-gialla situata sul corpo dei gemelli",
            "Mebsuta, gigante gialla visibile vicino a Castore",
            "Alhena, stella bianca che segna uno dei piedi dei gemelli"
        ],

        visibilita: `Da dicembre a maggio`,
        mesiVisibili: [12, 1, 2, 3, 4, 5],

        trova: `Per trovare i <strong>Gemelli</strong>, guarda a nord-est della costellazione di 
  <span class="link-costellazione" onclick="openMiniModal('orione', event)">Orione</span> e a est del 
  <span class="link-costellazione" onclick="openMiniModal('toro', event)">Toro</span>. 
  Le due stelle luminose <strong>Castore</strong> e <strong>Polluce</strong> sono facilmente visibili e allineate quasi orizzontalmente. 
  Le altre stelle della costellazione disegnano due figure parallele che rappresentano i corpi dei fratelli. 
  È ben visibile nelle serate invernali e primaverili.`,
    },

    "ariete": {
        nome: "Ariete",
        immagine: "img/ariete.jpg",
        mitologia: `Nella mitologia greca, l’<strong>Ariete</strong> rappresenta il montone dal vello d’oro che salvò i fratelli <strong>Elle</strong> e <strong>Frixo</strong> 
  dalla matrigna Ino. Durante la fuga, Elle cadde nel mare (che da allora fu chiamato Ellesponto), mentre Frixo giunse in Colchide, dove sacrificò l’ariete a Zeus. 
  Il suo vello d’oro divenne il premio della spedizione degli <em>Argonauti</em> guidati da Giasone. Come ricompensa, Zeus pose l’animale nel cielo.`,

        informazioni: `L’<strong>Ariete</strong> è una costellazione zodiacale di dimensioni moderate situata tra i 
  <span class="link-costellazione" onclick="openMiniModal('pesci', event)">Pesci</span> e il 
  <span class="link-costellazione" onclick="openMiniModal('toro', event)">Toro</span>. 
  Nonostante non contenga stelle particolarmente luminose, è importante per la sua posizione: il punto in cui il Sole attraversa l’equatore celeste all’equinozio di primavera 
  si trova nei pressi di questa costellazione (detto <em>Punto Gamma</em>). 
  L’Ariete contiene anche alcune interessanti stelle doppie e variabili, come Hamal e Sheratan.`,

        stelle: [
            "Hamal, gigante arancione e stella più luminosa della costellazione",
            "Sheratan, stella bianca di magnitudine 2,6 che forma una coppia ottica con Mesartim",
            "Mesartim, doppia visibile con piccoli telescopi, una delle prime mai scoperte",
            "Botein, stella arancione di magnitudine 4, visibile a occhio nudo in cieli limpidi"
        ],

        visibilita: `Da novembre ad aprile`,
        mesiVisibili: [11, 12, 1, 2, 3, 4],

        trova: `Per individuare l’<strong>Ariete</strong>, guarda tra i 
  <span class="link-costellazione" onclick="openMiniModal('pesci', event)">Pesci</span> e il 
  <span class="link-costellazione" onclick="openMiniModal('toro', event)">Toro</span>. 
  Le sue due stelle principali, <strong>Hamal</strong> e <strong>Sheratan</strong>, formano una coppia facilmente visibile a occhio nudo. 
  In cieli limpidi, la costellazione appare come una linea curva di tre o quattro stelle di media luminosità, riconoscibile nel cielo autunnale e invernale.`,
    },

    "cancro": {
        nome: "Cancro",
        immagine: "img/cancro.jpg",
        mitologia: `Nella mitologia greca, il <strong>Cancro</strong> è associato alle fatiche di <strong>Eracle</strong> (Ercole). 
  Durante la lotta contro l’Idra di Lerna, 
  Era inviò un enorme granchio per distrarre l’eroe e aiutarla. Il granchio morse il piede di Eracle, ma fu subito schiacciato. 
  Come ricompensa per la sua lealtà, Era lo pose tra le stelle, anche se in una posizione poco luminosa, in segno di devozione silenziosa.`,

        informazioni: `Il <strong>Cancro</strong> è una costellazione zodiacale di dimensioni medio-piccole, situata tra i 
  <span class="link-costellazione" onclick="openMiniModal('gemelli', event)">Gemelli</span> e il 
  <span class="link-costellazione" onclick="openMiniModal('leone', event)">Leone</span>. 
  Sebbene sia piuttosto debole e difficile da distinguere a occhio nudo, ospita uno degli oggetti più belli del cielo profondo: 
  l’<em>Ammasso Alveare</em> (<strong>M44</strong> o <em>Praesepe</em>), un gruppo di oltre 200 stelle visibili anche con piccoli binocoli. 
  Un altro ammasso aperto notevole è <em>M67</em>, uno dei più antichi conosciuti nella nostra galassia.`,

        stelle: [
            "Altarf, gigante arancione e stella più luminosa del Cancro",
            "Asellus Australis, stella gialla che rappresenta uno degli 'asini' del mito",
            "Asellus Borealis, stella bianca situata a nord di M44",
            "Acubens, sistema binario bianco-azzurro visibile con telescopi amatoriali",
            "Tarf, gigante gialla di magnitudine 3,5 visibile a occhio nudo"
        ],

        visibilita: `Da febbraio a giugno`,
        mesiVisibili: [2, 3, 4, 5, 6],

        trova: `Per individuare il <strong>Cancro</strong>, guarda tra le brillanti costellazioni dei 
  <span class="link-costellazione" onclick="openMiniModal('gemelli', event)">Gemelli</span> (a ovest) e del 
  <span class="link-costellazione" onclick="openMiniModal('leone', event)">Leone</span> (a est). 
  Non contiene stelle particolarmente luminose, ma può essere riconosciuto da una tenue regione a forma di 'Y' o 'V'. 
  Con un binocolo, nel centro della costellazione si nota l’ammasso stellare <strong>Praesepe (M44)</strong>, visibile come una macchia lattiginosa.`,
    },

    "leone": {
        nome: "Leone",
        immagine: "img/leone.jpg",
        mitologia: `Nella mitologia greca, il <strong>Leone</strong> rappresenta il <strong>Leone di Nemea</strong>, 
  una delle dodici fatiche di <strong>Eracle</strong>. 
  La bestia, figlia di Tifone e Echidna, aveva una pelle impenetrabile che nessuna arma poteva ferire. 
  Eracle riuscì a sconfiggerlo strangolandolo con la sola forza delle sue braccia, e poi usò la sua pelle come armatura. 
  Zeus, per celebrare l’impresa, pose il leone tra le stelle come simbolo di coraggio e potenza.`,

        informazioni: `Il <strong>Leone</strong> è una delle costellazioni zodiacali più riconoscibili del cielo primaverile, situata tra il 
  <span class="link-costellazione" onclick="openMiniModal('cancro', event)">Cancro</span> e la 
  <span class="link-costellazione" onclick="openMiniModal('vergine', event)">Vergine</span>. 
  La sua forma ricorda quella di un leone sdraiato, con la caratteristica falce di stelle che delinea la criniera. 
  Contiene numerose stelle brillanti e interessanti galassie del cosiddetto <em>Gruppo del Leone</em>, come M65, M66 e NGC 3628, facilmente osservabili con telescopi amatoriali.`,

        stelle: [
            "Regolo, stella bianco-azzurra e cuore del leone, una delle più luminose del cielo",
            "Denebola, gigante bianca che segna la coda della costellazione",
            "Algieba, stella doppia di colore dorato, visibile con piccoli telescopi",
            "Zosma, stella bianca situata sul dorso del leone",
            "Adhafera, gigante gialla nella parte anteriore della criniera"
        ],

        visibilita: `Da febbraio a luglio`,
        mesiVisibili: [2, 3, 4, 5, 6, 7],

        trova: `Per trovare il <strong>Leone</strong>, cerca la brillante <strong>Regolo</strong> nel cielo primaverile, 
  a est del <span class="link-costellazione" onclick="openMiniModal('cancro', event)">Cancro</span> e a ovest della 
  <span class="link-costellazione" onclick="openMiniModal('vergine', event)">Vergine</span>. 
  Le stelle che formano la criniera disegnano una mezzaluna o una falce, mentre Denebola, all’estremità opposta, segna la coda. 
  È facilmente visibile nelle serate di marzo e aprile, alta nel cielo meridionale.`,
    },

    "vergine": {
        nome: "Vergine",
        immagine: "img/vergine.jpg",
        mitologia: `Nella mitologia, la <strong>Vergine</strong> è spesso identificata con <strong>Astraea</strong>, 
  la dea della giustizia che abbandonò la Terra per rifugiarsi tra le stelle durante l’età del ferro, disgustata dalla corruzione umana. 
  In altre leggende rappresenta <strong>Demetra</strong> o <strong>Persefone</strong>, legate ai cicli agricoli e alla fertilità della terra. 
  È una delle costellazioni zodiacali più antiche e simboliche, associata al raccolto e al ritorno della luce primaverile.`,

        informazioni: `La <strong>Vergine</strong> è la seconda costellazione più estesa del cielo e una delle più ricche di galassie, 
  poiché ospita il <em>Ammasso della Vergine</em>, un vasto gruppo di oltre 2000 galassie, tra cui M87 e M49. 
  È facilmente riconoscibile grazie alla brillante <strong>Spica</strong>, una delle stelle più luminose del firmamento. 
  La costellazione si trova tra il <span class="link-costellazione" onclick="openMiniModal('leone', event)">Leone</span> e la 
  <span class="link-costellazione" onclick="openMiniModal('bilancia', event)">Bilancia</span>, lungo la fascia dello zodiaco.`,

        stelle: [
            "Spica, stella bianco-azzurra e la più luminosa della costellazione",
            "Zavijava, stella gialla situata sul corpo della vergine",
            "Porrima, stella doppia formata da due nane bianche quasi identiche",
            "Vindemiatrix, gigante gialla che segna una mano della figura",
            "Heze, stella bianca che contribuisce alla figura centrale"
        ],

        visibilita: `Da marzo ad agosto`,
        mesiVisibili: [3, 4, 5, 6, 7, 8],

        trova: `Per individuare la <strong>Vergine</strong>, segui l’arco del manico del 
  <span class="link-costellazione" onclick="openMiniModal('orsa-maggiore', event)">Grande Carro</span> fino a raggiungere 
  <strong>Arturo</strong> nel <span class="link-costellazione" onclick="openMiniModal('boote', event)">Boote</span>, 
  e prosegui la curva fino a incontrare la brillante <strong>Spica</strong>. 
  La costellazione si estende intorno a questa stella e appare ampia e diffusa nel cielo primaverile, verso sud.`,
    },

    "bilancia": {
        nome: "Bilancia",
        immagine: "img/bilancia.jpg",
        mitologia: `La <strong>Bilancia</strong> è una delle costellazioni zodiacali più antiche e rappresenta l’equilibrio e la giustizia. 
  In epoca romana era associata alla dea <strong>Astraea</strong>, simbolo della giustizia, spesso legata anche alla 
  <span class="link-costellazione" onclick="openMiniModal('vergine', event)">Vergine</span>. 
  In passato le sue stelle facevano parte dello <span class="link-costellazione" onclick="openMiniModal('scorpione', event)">Scorpione</span>, 
  e venivano chiamate “chele”, finché i Romani non la separarono per rappresentare la bilancia dell’equinozio di autunno, 
  quando la durata del giorno e della notte è in equilibrio.`,

        informazioni: `La <strong>Bilancia</strong> è una costellazione zodiacale di medie dimensioni situata tra la 
  <span class="link-costellazione" onclick="openMiniModal('vergine', event)">Vergine</span> e lo 
  <span class="link-costellazione" onclick="openMiniModal('scorpione', event)">Scorpione</span>. 
  Non contiene stelle particolarmente luminose, ma è facilmente riconoscibile nelle sere di primavera e inizio estate per la sua forma a quadrilatero. 
  È una regione interessante per l’osservazione di stelle doppie e di campi stellari galattici.`,

        stelle: [
            "Zubenelgenubi, stella doppia che rappresenta la bilancia del sud",
            "Zubeneschamali, stella verde-azzurra e la più luminosa della costellazione",
            "Brachium, gigante arancione che segna un braccio della figura",
            "Methuselah, stella subgigante gialla tra le più antiche conosciute nella nostra galassia"
        ],

        visibilita: `Da aprile ad agosto`,
        mesiVisibili: [4, 5, 6, 7, 8],

        trova: `Per trovare la <strong>Bilancia</strong>, cerca la zona di cielo compresa tra la 
  <span class="link-costellazione" onclick="openMiniModal('vergine', event)">Vergine</span> e lo 
  <span class="link-costellazione" onclick="openMiniModal('scorpione', event)">Scorpione</span>. 
  È visibile nelle notti primaverili e inizio estate verso sud. 
  Le sue stelle formano un quadrilatero inclinato, con <strong>Zubeneschamali</strong> e <strong>Zubenelgenubi</strong> che rappresentano i piatti della bilancia.`,
    },

    "scorpione": {
        nome: "Scorpione",
        immagine: "img/scorpione.jpg",
        mitologia: `Nella mitologia greca, lo <strong>Scorpione</strong> fu inviato da <strong>Artemide</strong> o <strong>Era</strong> 
  per punire <span class="link-costellazione" onclick="openMiniModal('orione', event)">Orione</span>, che si vantava di poter uccidere qualunque animale sulla Terra. 
  Lo scorpione punse Orione a morte, e Zeus pose entrambi nel cielo in modo che non si incontrassero mai: 
  quando lo Scorpione sorge, Orione tramonta. Questa disposizione simboleggia il ciclo eterno di vita e morte.`,

        informazioni: `Lo <strong>Scorpione</strong> è una delle costellazioni più suggestive del cielo estivo, facilmente riconoscibile per la sua forma a “S” e per la presenza della brillante 
  <strong>Antares</strong>, una supergigante rossa che rappresenta il cuore dello scorpione. 
  La costellazione si estende lungo la fascia della <strong>Via Lattea</strong>, ricca di nebulose, ammassi e stelle giovani. 
  Tra gli oggetti più spettacolari si trovano M6 e M7 (gli Ammassi della Farfalla e di Tolomeo) e la Nebulosa NGC 6334, detta “Zampa di Gatto”.`,

        stelle: [
            "Antares, supergigante rossa e stella più luminosa della costellazione",
            "Shaula, stella bianco-azzurra che segna il pungiglione dello scorpione",
            "Sargas, gigante gialla situata vicino alla coda",
            "Dschubba, stella blu che rappresenta la fronte dello scorpione",
            "Alniyat, stella arancione situata accanto ad Antares"
        ],

        visibilita: `Da maggio a settembre`,
        mesiVisibili: [5, 6, 7, 8, 9],

        trova: `Per individuare lo <strong>Scorpione</strong>, guarda verso sud nelle notti estive. 
  La rossa <strong>Antares</strong> è il punto di riferimento principale, facilmente visibile anche in città. 
  Le stelle della costellazione si dispongono in una forma sinuosa che ricorda il corpo e la coda di uno scorpione, 
  con <strong>Shaula</strong> e <strong>Sargas</strong> che formano il pungiglione. 
  Si trova a ovest del <span class="link-costellazione" onclick="openMiniModal('sagittario', event)">Sagittario</span> lungo la Via Lattea.`,
    },

    "ofiuco": {
        nome: "Ofiuco",
        immagine: "img/ofiuco.jpg",
        mitologia: `Nella mitologia greca, <strong>Ofiuco</strong> rappresenta <strong>Asclepio</strong>, figlio di Apollo e dio della medicina. 
  Secondo la leggenda, Asclepio imparò l’arte di guarire osservando un serpente che portava erbe miracolose a un suo simile ferito. 
  Diventò così abile da riportare in vita i morti, ma Zeus, temendo che sconvolgesse l’ordine naturale, lo uccise con un fulmine. 
  In seguito, pentito, lo pose tra le stelle con il serpente che lo accompagna, rappresentato dalla costellazione del 
  <span class="link-costellazione" onclick="openMiniModal('serpente', event)">Serpente</span>.`,

        informazioni: `<strong>Ofiuco</strong> è una vasta costellazione che si estende lungo l’eclittica, tra lo 
  <span class="link-costellazione" onclick="openMiniModal('scorpione', event)">Scorpione</span> e il 
  <span class="link-costellazione" onclick="openMiniModal('sagittario', event)">Sagittario</span>. 
  Per questo motivo è talvolta chiamata il “tredicesimo segno zodiacale”. 
  È ricca di ammassi stellari aperti e globulari, come M10, M12 e M14, facilmente osservabili con binocoli o piccoli telescopi. 
  La stella più brillante è <strong>Rasalhague</strong>, una gigante bianca che rappresenta la testa dell’Ofiuco.`,

        stelle: [
            "Rasalhague, gigante bianca e stella più luminosa della costellazione",
            "Cebalrai, gigante arancione situata sul corpo della figura",
            "Sabik, stella doppia bianca di magnitudine 2,4",
            "Yed Prior e Yed Posterior, due stelle gialle che segnano la mano che regge il serpente",
            "Marfik, stella multipla visibile nella parte settentrionale della costellazione"
        ],

        visibilita: `Da maggio a ottobre`,
        mesiVisibili: [5, 6, 7, 8, 9, 10],

        trova: `Per individuare <strong>Ofiuco</strong>, guarda sopra lo 
  <span class="link-costellazione" onclick="openMiniModal('scorpione', event)">Scorpione</span> nelle notti estive. 
  Si riconosce come una grande area di stelle che si estende sopra la brillante <strong>Antares</strong>. 
  <strong>Rasalhague</strong> è la stella principale e si trova nella parte superiore, mentre la figura del serpente (la costellazione del 
  Serpente) sembra avvolgersi intorno a lui.`,
    },

    "sagittario": {
        nome: "Sagittario",
        immagine: "img/sagittario.jpg",
        mitologia: `Nella mitologia greca, il <strong>Sagittario</strong> è spesso identificato con il centauro <strong>Chirone</strong>, 
  un essere saggio e benevolo, maestro di eroi come Achille e Giasone. 
  A differenza degli altri centauri, rozzi e violenti, Chirone era colto e compassionevole. 
  Dopo essere stato accidentalmente ferito da una freccia avvelenata di Eracle, rinunciò alla sua immortalità e fu posto nel cielo da Zeus, 
  con l’arco teso verso lo <span class="link-costellazione" onclick="openMiniModal('scorpione', event)">Scorpione</span>.`,

        informazioni: `Il <strong>Sagittario</strong> è una delle costellazioni più ricche del cielo, situata nel cuore della <strong>Via Lattea</strong>, 
  in direzione del suo centro galattico. È facilmente riconoscibile per la sua forma a “teiera”, formata dalle stelle più luminose. 
  Contiene alcuni degli oggetti più spettacolari del cielo profondo: le nebulose <em>Laguna</em> (M8), <em>Trifida</em> (M20) e <em>Omega</em> (M17), 
  oltre a numerosi ammassi stellari come M22, uno dei più brillanti visibili dalla Terra.`,

        stelle: [
            "Kaus Australis, la stella più luminosa della costellazione",
            "Nunki, stella bianca di magnitudine 2,1 che segna la parte superiore della “teiera”",
            "Kaus Media e Kaus Borealis, che completano la linea dell’arco",
            "Alnasl, stella gialla che rappresenta la punta della freccia dell’arciere",
            "Ascella, stella bianco-azzurra situata nella parte inferiore della figura"
        ],

        visibilita: `Da giugno a settembre`,
        mesiVisibili: [6, 7, 8, 9],

        trova: `Per individuare il <strong>Sagittario</strong>, guarda verso sud durante le notti estive, sotto la coda dello 
  <span class="link-costellazione" onclick="openMiniModal('scorpione', event)">Scorpione</span>. 
  Le stelle più luminose formano una figura simile a una <strong>teiera</strong>, da cui sembra versarsi la Via Lattea. 
  La zona del Sagittario indica la direzione del centro della nostra galassia, una delle regioni più spettacolari da osservare con binocoli o telescopi.`,
    },

    "capricorno": {
        nome: "Capricorno",
        immagine: "img/capricorno.jpg",
        mitologia: `Nella mitologia greca, il <strong>Capricorno</strong> rappresenta il dio <strong>Pan</strong>, 
  il dio dei boschi e dei pascoli. Durante la fuga dal mostro Tifone, Pan cercò di trasformarsi in pesce per salvarsi, 
  ma solo la parte inferiore del corpo si mutò, lasciandolo con la coda di un pesce e il busto di una capra. 
  Zeus, divertito da questa forma, lo immortalò nel cielo come una delle costellazioni dello zodiaco.`,

        informazioni: `Il <strong>Capricorno</strong> è una costellazione zodiacale di modesta luminosità, situata tra il 
  <span class="link-costellazione" onclick="openMiniModal('sagittario', event)">Sagittario</span> e l’
  <span class="link-costellazione" onclick="openMiniModal('acquario', event)">Acquario</span>. 
  Nonostante le sue stelle non siano particolarmente brillanti, è una regione interessante per gli astrofili: 
  ospita l’ammasso globulare <strong>M30</strong> e diversi sistemi stellari doppi. 
  La sua forma a triangolo allungato ricorda vagamente la sagoma di un caprone con coda di pesce.`,

        stelle: [
            "Deneb Algedi, la stella più luminosa, bianco-azzurra e variabile",
            "Dabih, stella doppia giallo-bianca di magnitudine 3",
            "Nashira, gigante bianco-azzurra situata nel corpo del caprone",
            "Algedi, sistema multiplo visibile anche con piccoli telescopi",
            "Omega Capricorni, stella arancione nella parte inferiore della costellazione"
        ],

        visibilita: `Da luglio a ottobre`,
        mesiVisibili: [7, 8, 9, 10],

        trova: `Per individuare il <strong>Capricorno</strong>, guarda verso sud nelle notti di fine estate, 
  tra il <span class="link-costellazione" onclick="openMiniModal('sagittario', event)">Sagittario</span> e l’
  <span class="link-costellazione" onclick="openMiniModal('acquario', event)">Acquario</span>. 
  Sebbene le sue stelle siano piuttosto deboli, Deneb Algedi e Dabih formano un piccolo triangolo facilmente riconoscibile. 
  Un binocolo permette di distinguere meglio la forma e di osservare l’ammasso M30 vicino al bordo meridionale.`,
    },

    "acquario": {
        nome: "Acquario",
        immagine: "img/acquario.jpg",
        mitologia: `Il <strong>Acquario</strong> rappresenta <strong>Ganimede</strong>, un giovane di straordinaria bellezza, figlio del re Troo. 
  Zeus, invaghitosi di lui, lo rapì portandolo sull’Olimpo, dove divenne coppiere degli dèi. 
  Come simbolo della sua nuova funzione, Zeus lo pose tra le stelle con una brocca da cui sgorga l’acqua della vita eterna.`,

        informazioni: `Il <strong>Acquario</strong> è una delle costellazioni più antiche dello zodiaco, situata tra il 
  <span class="link-costellazione" onclick="openMiniModal('capricorno', event)">Capricorno</span> e i 
  <span class="link-costellazione" onclick="openMiniModal('pesci', event)">Pesci</span>. 
  È una regione ricca di oggetti celesti: contiene le nebulose planetarie <strong>NGC 7009</strong> (la “Nebulosa Saturno”) e 
  <strong>NGC 7293</strong> (la famosa “Nebulosa Elica”), oltre a diversi ammassi stellari. 
  Nonostante le stelle siano poco luminose, è una zona molto apprezzata per l’osservazione con telescopi amatoriali.`,

        stelle: [
            "Sadalmelik, la stella più brillante, una supergigante gialla",
            "Sadalsuud, gigante gialla doppia situata vicino al bordo settentrionale",
            "Skat, stella bianco-azzurra di magnitudine 3",
            "Albali, stella multipla che forma parte del braccio del portatore",
            "Ancha, stella arancione visibile nella parte centrale della costellazione"
        ],

        visibilita: `Da agosto a novembre`,
        mesiVisibili: [8, 9, 10, 11],

        trova: `Per individuare l’<strong>Acquario</strong>, guarda verso sud-est nelle sere autunnali. 
  Si trova sopra la costellazione dei <span class="link-costellazione" onclick="openMiniModal('pesci', event)">Pesci</span> 
  e a destra del <span class="link-costellazione" onclick="openMiniModal('capricorno', event)">Capricorno</span>. 
  Le sue stelle sono poco luminose ma, in cieli bui, è possibile distinguere la figura del portatore che versa acqua da una brocca, 
  con la “scia” di stelle che simboleggia il flusso.`,
    },

    "pesci": {
        nome: "Pesci",
        immagine: "img/pesci.jpg",

        mitologia: `Nella mitologia greca, la costellazione dei <strong>Pesci</strong> è associata alla fuga di 
  <strong>Afrodite</strong> e <strong>Eros</strong> dal mostro Tifone. Per scappare, si gettarono in un fiume e 
  si trasformarono in due pesci, legandosi con una corda per non perdersi. 
  Gli dèi, commossi dal loro affetto reciproco, li posero tra le stelle, eternamente uniti dal filo che li collega.`,

        informazioni: `La costellazione dei <strong>Pesci</strong> è ampia ma composta da stelle deboli, difficili da distinguere a occhio nudo. 
  Si trova tra l’<span class="link-costellazione" onclick="openMiniModal('acquario', event)">Acquario</span> e l’
  <span class="link-costellazione" onclick="openMiniModal('ariete', event)">Ariete</span>. 
  In questa regione del cielo si trova anche il <strong>Punto Vernale</strong>, ovvero la posizione in cui il Sole si trova all’equinozio di primavera. 
  La costellazione ospita la galassia a spirale <strong>Messier 74 (M74)</strong>, visibile con telescopi di media potenza e considerata una delle spirali più perfette del cielo.`,

        stelle: [
            "Alrescha (Alpha Piscium), stella binaria che rappresenta il nodo che unisce i due pesci",
            "Fum al Samakah, stella bianca situata nella testa del pesce occidentale",
            "Torcularis Septentrionalis, gigante gialla nella zona del pesce meridionale",
            "Gamma Piscium, stella arancione visibile anche con piccoli telescopi",
            "Kullat Nunu, nome babilonese di una stella che rappresenta il pesce meridionale"
        ],

        visibilita: `Da settembre a gennaio`,
        mesiVisibili: [9, 10, 11, 12, 1],

        trova: `Per individuare i <strong>Pesci</strong>, guarda a est dopo il tramonto tra settembre e novembre. 
  Si trovano tra l’<span class="link-costellazione" onclick="openMiniModal('acquario', event)">Acquario</span> e l’
  <span class="link-costellazione" onclick="openMiniModal('ariete', event)">Ariete</span>, vicino al 
  <span class="link-costellazione" onclick="openMiniModal('pegaso', event)">Quadrato di Pegaso</span>. 
  Le loro stelle formano due lunghe catene, unite da un piccolo nodo luminoso (Alrescha) che rappresenta il filo che li lega.`,
    },

    "cane_minore": {
        nome: "Cane Minore",
        immagine: "img/cane_minore.jpg",

        mitologia: `Il <strong>Cane Minore</strong> rappresenta il secondo cane di 
  <span class="link-costellazione" onclick="openMiniModal('orione', event)">Orione</span>, 
  spesso identificato con il fedele <em>Asceo</em> o <em>Melampo</em>. 
  Sebbene meno luminoso del suo compagno, occupa un posto accanto al cacciatore nel cielo come simbolo di fedeltà. 
  In alcune versioni del mito, Cane Maggiore e Minore inseguono la <span class="link-costellazione" onclick="openMiniModal('lepre', event)">Lepre</span> celeste, 
  che fugge davanti a loro sotto i piedi di Orione.`,

        informazioni: `Il <strong>Cane Minore</strong> è una piccola costellazione del cielo invernale, 
  ma facilmente riconoscibile grazie alla sua stella principale, <strong>Procione</strong>, 
  parte del celebre <em>Triangolo Invernale</em> insieme a <strong>Sirio</strong> (nel Cane Maggiore) e 
  <strong>Betelgeuse</strong> (in <span class="link-costellazione" onclick="openMiniModal('orione', event)">Orione</span>). 
  È una costellazione povera di oggetti celesti, ma ben visibile anche da cieli cittadini.`,

        stelle: [
            "Procione (Alpha Canis Minoris), stella bianco-gialla molto brillante",
            "Gomeisa (Beta Canis Minoris), stella blu situata nella testa del cane"
        ],

        visibilita: `Da dicembre ad aprile`,
        mesiVisibili: [12, 1, 2, 3, 4],

        trova: `Per trovare il <strong>Cane Minore</strong>, segui una linea ideale tra 
  <strong>Betelgeuse</strong> in <span class="link-costellazione" onclick="openMiniModal('orione', event)">Orione</span> 
  e <strong>Sirio</strong> nel <span class="link-costellazione" onclick="openMiniModal('cane_maggiore', event)">Cane Maggiore</span>: 
  a metà strada troverai <strong>Procione</strong>, che indica la posizione del Cane Minore.`,
    },

    "cane_maggiore": {
        nome: "Cane Maggiore",
        immagine: "img/cane_maggiore.jpg",

        mitologia: `Il <strong>Cane Maggiore</strong> rappresenta uno dei cani del cacciatore 
  <span class="link-costellazione" onclick="openMiniModal('orione', event)">Orione</span>, 
  fedele compagno nelle sue battute di caccia celesti. Nella mitologia greca, era noto per la sua velocità straordinaria, 
  tanto da poter raggiungere qualunque preda. Zeus lo pose in cielo come riconoscimento della sua lealtà, 
  accanto al padrone e al suo gemello, il <span class="link-costellazione" onclick="openMiniModal('cane_minore', event)">Cane Minore</span>.`,

        informazioni: `La costellazione del <strong>Cane Maggiore</strong> è una delle più brillanti del cielo invernale, 
  grazie alla presenza di <strong>Sirio</strong>, la stella più luminosa della volta celeste. 
  Oltre a Sirio, ospita altre stelle interessanti come <em>Adhara</em> e <em>Wezen</em>, 
  e diversi oggetti del cielo profondo come l’ammasso aperto <strong>M41</strong>, visibile anche con piccoli binocoli. 
  È situata a sud-est di <span class="link-costellazione" onclick="openMiniModal('orione', event)">Orione</span>, 
  con cui forma una delle regioni più spettacolari del cielo notturno.`,

        stelle: [
            "Sirio (Alpha Canis Majoris), la stella più luminosa del cielo notturno",
            "Adhara, gigante blu di magnitudine 1,5",
            "Wezen, supergigante gialla posta nella parte centrale della costellazione",
            "Aludra, stella azzurra che forma la coda del cane",
            "Muliphein, stella bianco-azzurra nella regione del collo"
        ],

        visibilita: `Da dicembre ad aprile`,
        mesiVisibili: [12, 1, 2, 3, 4],

        trova: `Per individuare il <strong>Cane Maggiore</strong>, segui la linea formata dalle tre stelle della cintura di 
  <span class="link-costellazione" onclick="openMiniModal('orione', event)">Orione</span> verso sud-est: 
  ti condurrà direttamente a <strong>Sirio</strong>, la stella più brillante del cielo. 
  Da lì, le altre stelle principali formano un triangolo allungato che rappresenta il corpo del cane.`,
    },

    "auriga": {
        nome: "Auriga",
        immagine: "img/auriga.jpg",

        mitologia: `Nella mitologia greca, l’<strong>Auriga</strong> rappresenta <strong>Erictone</strong> (o in altre versioni <strong>Mirtilo</strong>), 
  un abile auriga e inventore del carro trainato da cavalli. 
  Secondo il mito, fu allevato dalla dea <em>Atena</em>, che gli insegnò l’arte di domare i cavalli. 
  Per riconoscere il suo talento e la sua intelligenza, gli dèi lo collocarono tra le stelle, 
  dove è spesso raffigurato mentre tiene in braccio una capra e i suoi capretti — che corrispondono alle stelle principali della costellazione.`,

        informazioni: `L’<strong>Auriga</strong> è una brillante costellazione del cielo invernale situata vicino ai 
  <span class="link-costellazione" onclick="openMiniModal('gemelli', event)">Gemelli</span> e al 
  <span class="link-costellazione" onclick="openMiniModal('toro', event)">Toro</span>. 
  La sua stella più luminosa, <strong>Capella</strong>, è una delle più splendenti del cielo e appartiene al gruppo delle stelle giganti gialle. 
  La costellazione ospita inoltre diversi ammassi aperti, tra cui <strong>M36</strong>, <strong>M37</strong> e <strong>M38</strong>, 
  facilmente osservabili con piccoli telescopi e situati lungo il piano della Via Lattea. 
  L’Auriga è quindi una delle regioni più ricche di stelle del cielo invernale.`,

        stelle: [
            "Capella (Alpha Aurigae), stella gialla molto luminosa, tra le più brillanti del cielo",
            "Menkalinan (Beta Aurigae), stella doppia bianco-azzurra",
            "Mahasim (Theta Aurigae), stella bianca situata nella parte inferiore della costellazione",
            "Hassaleh (Iota Aurigae), gigante arancione nella parte nord-orientale",
            "Elnath, condivisa con la costellazione del Toro"
        ],

        visibilita: `Da novembre ad aprile`,
        mesiVisibili: [11, 12, 1, 2, 3, 4],

        trova: `Per individuare l’<strong>Auriga</strong>, guarda verso nord-est nelle sere invernali. 
  La brillante <strong>Capella</strong> è facilmente riconoscibile e forma un vertice del <em>Pentagono Invernale</em>. 
  L’Auriga si trova sopra la costellazione del <span class="link-costellazione" onclick="openMiniModal('toro', event)">Toro</span> 
  e a destra dei <span class="link-costellazione" onclick="openMiniModal('gemelli', event)">Gemelli</span>. 
  Con un binocolo potrai notare tre splendidi ammassi aperti — M36, M37 e M38 — che formano una linea quasi retta all’interno della costellazione.`,
    },

    "andromeda": {
        nome: "Andromeda",
        immagine: "img/andromeda.jpg",

        mitologia: `La costellazione di <strong>Andromeda</strong> rappresenta la principessa etiope, figlia di 
  <span class="link-costellazione" onclick="openMiniModal('cassiopea', event)">Cassiopea</span> 
  e di <span class="link-costellazione" onclick="openMiniModal('cefeo', event)">Cefeo</span>. 
  Secondo il mito, Cassiopea offese le Nereidi vantandosi della propria bellezza, 
  e Poseidone inviò il mostro marino Ceto a devastare le coste del regno. 
  Per placare la collera del dio, Andromeda fu incatenata a una roccia come sacrificio, 
  ma venne salvata dall’eroe <span class="link-costellazione" onclick="openMiniModal('perseo', event)">Perseo</span>, 
  che uccise il mostro e poi la sposò. Gli dèi la posero tra le stelle accanto al suo salvatore.`,

        informazioni: `La costellazione di <strong>Andromeda</strong> è una delle più importanti del cielo boreale, 
  poiché contiene la celebre <strong>Galassia di Andromeda (M31)</strong>, la più vicina alla Via Lattea e visibile anche a occhio nudo come una piccola macchia luminosa. 
  Nella stessa area si trovano anche le galassie satelliti <strong>M32</strong> e <strong>M110</strong>. 
  Situata tra <span class="link-costellazione" onclick="openMiniModal('pegaso', event)">Pegaso</span> e 
  <span class="link-costellazione" onclick="openMiniModal('perseo', event)">Perseo</span>, 
  Andromeda è una costellazione ampia e facilmente riconoscibile nelle notti autunnali e invernali.`,

        stelle: [
            "Alpheratz (Alpha Andromedae), condivisa con il Pegaso, di colore bianco-azzurro",
            "Mirach (Beta Andromedae), gigante rossa, utile per localizzare la galassia M31",
            "Almach (Gamma Andromedae), splendida stella doppia gialla e blu",
            "Delta Andromedae, stella arancione multipla visibile con telescopi",
            "Nu Andromedae, stella bianca situata vicino al bordo della costellazione"
        ],

        visibilita: `Da settembre a febbraio`,
        mesiVisibili: [9, 10, 11, 12, 1, 2],

        trova: `Per trovare <strong>Andromeda</strong>, individua prima il 
  <span class="link-costellazione" onclick="openMiniModal('pegaso', event)">Quadrato di Pegaso</span> 
  e cerca la stella <strong>Alpheratz</strong>, che segna il vertice nord-est del quadrato. 
  Da lì, una catena di stelle deboli si estende verso nord-est formando il corpo della principessa. 
  La <strong>Galassia di Andromeda (M31)</strong> si trova poco sopra la stella <strong>Mirach</strong> ed è visibile anche con un binocolo.`,
    },

    "cefeo": {
        nome: "Cefeo",
        immagine: "img/cefeo.jpg",

        mitologia: `<strong>Cefeo</strong> era il re d’Etiopia, marito di 
  <span class="link-costellazione" onclick="openMiniModal('cassiopea', event)">Cassiopea</span> 
  e padre di <span class="link-costellazione" onclick="openMiniModal('andromeda', event)">Andromeda</span>. 
  Quando sua moglie offese le Nereidi vantandosi della propria bellezza, 
  Poseidone inviò il mostro marino Ceto a distruggere le sue terre. Su consiglio dell’oracolo, Cefeo fu costretto a sacrificare la figlia, 
  che venne poi salvata da <span class="link-costellazione" onclick="openMiniModal('perseo', event)">Perseo</span>. 
  Come ricompensa, anche Cefeo fu posto tra le stelle, accanto alla sua famiglia.`,

        informazioni: `La costellazione di <strong>Cefeo</strong> è circumpolare per gran parte dell’emisfero nord, 
  quindi visibile tutto l’anno. È una regione ricca di oggetti del cielo profondo, 
  tra cui la celebre <strong>Nebulosa dell’Iride (NGC 7023)</strong>, un bellissimo esempio di nebulosa a riflessione. 
  Inoltre, ospita la <strong>stella Delta Cephei</strong>, prototipo delle variabili cefeidi, fondamentali per misurare le distanze cosmiche. 
  La costellazione si trova vicino a 
  <span class="link-costellazione" onclick="openMiniModal('cassiopea', event)">Cassiopea</span> e al 
  <span class="link-costellazione" onclick="openMiniModal('drago', event)">Drago</span>.`,

        stelle: [
            "Alderamin (Alpha Cephei), stella bianco-azzurra, la più luminosa della costellazione",
            "Alfirk (Beta Cephei), stella variabile blu",
            "Gamma Cephei (Errai), che in futuro diventerà la nuova stella polare",
            "Delta Cephei, prototipo delle variabili cefeidi",
            "Zeta Cephei, gigante arancione nella parte meridionale della costellazione"
        ],

        visibilita: `Visibile tutto l’anno (circumpolare)`,
        mesiVisibili: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],

        trova: `Per individuare <strong>Cefeo</strong>, cerca la 
  <span class="link-costellazione" onclick="openMiniModal('cassiopea', event)">Cassiopea</span> 
  e spostati leggermente verso la <span class="link-costellazione" onclick="openMiniModal('stella-polare', event)">Stella Polare</span>. 
  Le sue stelle formano una figura simile a una casa con il tetto a punta. 
  Sebbene non sia molto luminosa, la sua forma geometrica la rende facilmente riconoscibile sotto cieli bui.`,
    },

    "chioma_di_berenice": {
        nome: "Chioma Berenice",
        immagine: "img/chioma_di_berenice.jpg",

        mitologia: `La <strong>Chioma di Berenice</strong> prende il nome dalla regina <strong>Berenice II d’Egitto</strong>, 
  moglie di <em>Tolomeo III Evergete</em>. Secondo la leggenda, la regina promise di offrire la propria splendida chioma 
  alla dea Afrodite in cambio del ritorno vittorioso del marito dalla guerra. 
  Mantenuta la promessa, i capelli furono posti nel tempio, ma scomparvero misteriosamente: 
  l’astronomo di corte spiegò che gli dèi li avevano trasferiti in cielo come segno eterno di devozione coniugale.`,

        informazioni: `La costellazione della <strong>Chioma di Berenice</strong> è piccola ma di grande interesse astronomico. 
  È situata tra il <span class="link-costellazione" onclick="openMiniModal('boote', event)">Boote</span>, la 
  <span class="link-costellazione" onclick="openMiniModal('vergine', event)">Vergine</span> e il 
  <span class="link-costellazione" onclick="openMiniModal('leone', event)">Leone</span>. 
  In questa regione si trova il <strong>Ammasso della Chioma</strong> (Coma Cluster), parte del grande 
  <em>Ammasso della Vergine</em>, una delle più dense concentrazioni di galassie vicine alla nostra. 
  Inoltre, la costellazione contiene la famosa galassia a spirale <strong>M64</strong>, detta “Galassia Occhio Nero”.`,

        stelle: [
            "Diadem (Alpha Comae Berenices), stella binaria gialla che rappresenta la corona di Berenice",
            "Beta Comae, stella simile al nostro Sole, distante 30 anni luce",
            "Gamma Comae, gigante arancione",
            "44 Comae, stella bianca situata nella zona meridionale",
            "Stelle deboli che compongono l’ammasso aperto della Chioma"
        ],

        visibilita: `Da marzo a luglio`,
        mesiVisibili: [3, 4, 5, 6, 7],

        trova: `Per trovare la <strong>Chioma di Berenice</strong>, guarda tra la coda del 
  <span class="link-costellazione" onclick="openMiniModal('leone', event)">Leone</span> e il 
  <span class="link-costellazione" onclick="openMiniModal('boote', event)">Boote</span>. 
  In cieli limpidi, appare come una piccola nuvola di stelle deboli, visibili anche a occhio nudo. 
  Con un binocolo o piccolo telescopio si può osservare un fitto gruppo di stelle, e con strumenti più potenti si scoprono le galassie dell’ammasso della Chioma.`,
    },

    "corona_boreale": {
        nome: "Corona Boreale",
        immagine: "img/corona_boreale.jpg",

        mitologia: `La <strong>Corona Boreale</strong> è associata alla principessa <strong>Arianna</strong>, figlia del re Minosse di Creta. 
  Dopo aver aiutato <em>Teseo</em> a sconfiggere il <span class="link-costellazione" onclick="openMiniModal('toro', event)">Minotauro</span>, 
  Arianna fuggì con lui da Creta, ma venne poi abbandonata sull’isola di Nasso. 
  Il dio <strong>Dioniso</strong> la trovò e la rese sua sposa, donandole una splendida corona d’oro come simbolo del loro amore. 
  Alla sua morte, Dioniso la collocò in cielo, dove brilla come una mezzaluna di stelle.`,

        informazioni: `La <strong>Corona Boreale</strong> è una costellazione piccola ma molto riconoscibile, 
  grazie alla sua caratteristica forma ad arco o “corona” di stelle. 
  Si trova tra il <span class="link-costellazione" onclick="openMiniModal('boote', event)">Boote</span> e 
  <span class="link-costellazione" onclick="openMiniModal('ercole', event)">Ercole</span>. 
  La stella più luminosa, <strong>Gemma</strong> (o Alphecca), è una binaria bianca che rappresenta la gemma centrale della corona. 
  In questa zona si trovano anche alcune galassie deboli e sistemi stellari variabili interessanti.`,

        stelle: [
            "Gemma (Alpha Coronae Borealis), stella binaria bianca, la più luminosa della costellazione",
            "Nusakan (Beta Coronae Borealis), stella binaria di magnitudine 3",
            "Theta CrB, stella arancione nella parte inferiore della corona",
            "Epsilon CrB, gigante gialla",
            "R CrB, stella variabile molto peculiare che cambia luminosità in modo irregolare"
        ],

        visibilita: `Da aprile a settembre`,
        mesiVisibili: [4, 5, 6, 7, 8, 9],

        trova: `Per individuare la <strong>Corona Boreale</strong>, cerca la brillante stella <strong>Arturo</strong> nel 
  <span class="link-costellazione" onclick="openMiniModal('boote', event)">Boote</span> e spostati verso est: 
  troverai un piccolo arco di stelle che forma una mezzaluna perfetta, con <strong>Gemma</strong> al centro. 
  È facilmente riconoscibile anche sotto cieli moderatamente inquinati, grazie alla sua forma caratteristica.`,
    },

    "delfino": {
        nome: "Delfino",
        immagine: "img/delfino.jpg",

        mitologia: `Il <strong>Delfino</strong> è una delle costellazioni più poetiche del cielo. 
  Secondo la leggenda, rappresenta il delfino inviato dal dio <strong>Poseidone</strong> 
  per convincere la ninfa <em>Amfitrite</em> a sposarlo. 
  La ninfa accettò, e per ricompensare la fedeltà e la dolcezza dell’animale, 
  Poseidone lo pose in cielo tra le stelle. 
  In altre versioni, il delfino è quello che salvò il poeta <em>Arione</em>, 
  riportandolo in salvo dopo che era stato gettato in mare dai pirati.`,

        informazioni: `Il <strong>Delfino</strong> è una piccola costellazione situata vicino all’Equatore celeste, 
  tra il <span class="link-costellazione" onclick="openMiniModal('aquila', event)">Aquila</span> e il 
  Volpetta. 
  Nonostante le sue dimensioni ridotte, è molto riconoscibile grazie al suo gruppo di stelle principali 
  che formano una figura simile a un piccolo rombo o a un delfino che salta fuori dall’acqua. 
  All’interno della costellazione si trova la stella variabile <strong>V339 Delphini</strong> e il sistema binario <strong>Gamma Delphini</strong>, 
  uno dei più belli da osservare con piccoli telescopi.`,

        stelle: [
            "Sualocin (Alpha Delphini), stella bianco-azzurra, la più luminosa della costellazione",
            "Rotanev (Beta Delphini), stella doppia di magnitudine 3,6",
            "Gamma Delphini, coppia gialla e blu visibile con piccoli telescopi",
            "Delta Delphini, stella bianca multipla",
            "Epsilon Delphini, gigante azzurra che forma la 'coda' del delfino"
        ],

        visibilita: `Da luglio a ottobre`,
        mesiVisibili: [7, 8, 9, 10],

        trova: `Per trovare il <strong>Delfino</strong>, guarda vicino alla brillante stella <strong>Altair</strong> 
  nella costellazione dell’<span class="link-costellazione" onclick="openMiniModal('aquila', event)">Aquila</span>. 
  Poco sopra, vedrai un piccolo gruppo di quattro stelle disposte a rombo, 
  che formano il corpo del delfino, e una quinta stella che ne rappresenta la coda. 
  È una delle figure più simpatiche e facili da riconoscere nel cielo estivo.`,
    },

    "drago": {
        nome: "Drago",
        immagine: "img/drago.jpg",

        mitologia: `Il <strong>Drago</strong> rappresenta il mostro <strong>Ladone</strong>, 
  il serpente che custodiva i <em>Pomi d’Oro delle Esperidi</em> nel giardino delle dee. 
  Durante le sue fatiche, <span class="link-costellazione" onclick="openMiniModal('ercole', event)">Ercole</span> 
  fu incaricato di rubare i pomi e dovette affrontare e uccidere il drago. 
  Come tributo al suo valore e alla sua vigilanza, gli dèi posero Ladone tra le stelle, 
  dove il suo corpo sinuoso si avvolge intorno alla <span class="link-costellazione" onclick="openMiniModal('orsa-minore', event)">Orsa Minore</span>.`,

        informazioni: `Il <strong>Drago</strong> è una grande costellazione circumpolare, visibile tutto l’anno dall’emisfero nord. 
  Si estende tra le costellazioni dell’<span class="link-costellazione" onclick="openMiniModal('orsa-maggiore', event)">Orsa Maggiore</span> 
  e dell’<span class="link-costellazione" onclick="openMiniModal('orsa-minore', event)">Orsa Minore</span>, 
  avvolgendosi attorno alla Stella Polare. 
  In passato, una delle sue stelle, <strong>Thuban</strong>, fu la <em>stella polare</em> dell’antico Egitto, 
  poiché si trovava in corrispondenza dell’asse terrestre. 
  Il Drago ospita anche oggetti notevoli come la galassia a spirale <strong>NGC 5907</strong> e la nebulosa planetaria <strong>NGC 6543</strong>, detta “Occhio di Gatto”.`,

        stelle: [
            "Eltanin (Gamma Draconis), gigante arancione, la più luminosa del Drago",
            "Rastaban (Beta Draconis), gigante gialla nella 'testa' del Drago",
            "Thuban (Alpha Draconis), antica stella polare, bianco-azzurra",
            "Aldhibah (Zeta Draconis), stella bianca visibile nella parte centrale",
            "Grumium (Xi Draconis), gigante arancione nella 'bocca' del Drago"
        ],

        visibilita: `Visibile tutto l’anno (circumpolare)`,
        mesiVisibili: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],

        trova: `Per individuare il <strong>Drago</strong>, cerca la 
  <span class="link-costellazione" onclick="openMiniModal('orsa-minore', event)">Orsa Minore</span> 
  e la <span class="link-costellazione" onclick="openMiniModal('orsa-maggiore', event)">Orsa Maggiore</span>: 
  la lunga curva di stelle del Drago si snoda tra le due, avvolgendole con il suo corpo. 
  Le stelle <strong>Eltanin</strong> e <strong>Rastaban</strong> formano la sua 'testa', facilmente riconoscibile a nord-est della Lira.`,
    },

    "ercole": {
        nome: "Ercole",
        immagine: "img/ercole.jpg",

        mitologia: `La costellazione di <strong>Ercole</strong> rappresenta l’eroe greco <strong>Eracle</strong> (Ercole per i Romani), 
  figlio di Zeus e di Alcmena. È raffigurato inginocchiato, in segno di forza e coraggio, mentre affronta 
  il <span class="link-costellazione" onclick="openMiniModal('drago', event)">Drago</span> Ladone, 
  custode dei Pomi d’Oro delle Esperidi. 
  Dopo aver completato le sue dodici fatiche, Ercole fu posto tra le stelle come simbolo di eroismo e resistenza.`,

        informazioni: `<strong>Ercole</strong> è una delle più grandi costellazioni del cielo boreale, situata tra 
  <span class="link-costellazione" onclick="openMiniModal('corona_boreale', event)">Corona Boreale</span>, 
  <span class="link-costellazione" onclick="openMiniModal('lira', event)">Lira</span> e 
  <span class="link-costellazione" onclick="openMiniModal('drago', event)">Drago</span>. 
  Pur non avendo stelle particolarmente brillanti, è una delle più ricche di oggetti del cielo profondo: 
  ospita il magnifico ammasso globulare <strong>M13</strong>, visibile anche con un binocolo, e l’ammasso <strong>M92</strong>, 
  un altro spettacolare agglomerato di stelle. 
  È una delle regioni più amate dagli astrofili estivi.`,

        stelle: [
            "Kornephoros (Beta Herculis), gigante gialla, la stella più luminosa della costellazione",
            "Rasalgethi (Alpha Herculis), supergigante rossa doppia situata vicino al piede dell’eroe",
            "Delta Herculis, stella bianco-azzurra nella parte settentrionale",
            "Zeta Herculis, stella binaria visibile con telescopi amatoriali",
            "Mu Herculis, stella gialla simile al nostro Sole"
        ],

        visibilita: `Da maggio a settembre`,
        mesiVisibili: [5, 6, 7, 8, 9],

        trova: `Per individuare <strong>Ercole</strong>, cerca la brillante stella <strong>Vega</strong> 
  nella <span class="link-costellazione" onclick="openMiniModal('lira', event)">Lira</span> e 
  <strong>Arturo</strong> in <span class="link-costellazione" onclick="openMiniModal('boote', event)">Boote</span>. 
  Tra queste due stelle si trova un quadrilatero di stelle deboli noto come <em>“Keystone di Ercole”</em> 
  (la Chiave di Volta), che costituisce il corpo dell’eroe. 
  In quella zona, un telescopio o binocolo rivelerà l’ammasso globulare <strong>M13</strong>.`,
    },

    "freccia": {
        nome: "Freccia",
        immagine: "img/freccia.jpg",

        mitologia: `La <strong>Freccia</strong> (<em>Sagitta</em>) è una delle costellazioni più piccole del cielo, 
  ma la sua simbologia è potente. 
  Secondo la mitologia, rappresenta la freccia scoccata da 
  <span class="link-costellazione" onclick="openMiniModal('ercole', event)">Ercole</span> 
  per colpire l’<span class="link-costellazione" onclick="openMiniModal('aquila', event)">Aquila</span> 
  di Zeus, che dilaniava il fegato di Prometeo incatenato. 
  In altre versioni, è la freccia con cui Apollo vendicò la morte di Asclepio, 
  o quella scoccata da Cupido, simbolo dell’amore divino.`,

        informazioni: `La costellazione della <strong>Freccia</strong> si trova tra 
  <span class="link-costellazione" onclick="openMiniModal('aquila', event)">Aquila</span> e 
  Volpetta. 
  Nonostante le sue piccole dimensioni, è ben visibile nelle notti estive grazie alla sua caratteristica forma di freccia, 
  formata da quattro stelle disposte quasi in linea retta. 
  Contiene l’ammasso aperto <strong>M71</strong>, un bellissimo oggetto osservabile con piccoli telescopi.`,

        stelle: [
            "Gamma Sagittae, stella arancione, la più luminosa della costellazione",
            "Delta Sagittae, gigante rossa doppia",
            "Alpha Sagittae, stella gialla situata nella parte centrale della Freccia",
            "Beta Sagittae, gigante bianca nel 'pennacchio' posteriore",
            "Epsilon Sagittae, stella azzurra che forma la punta della freccia"
        ],

        visibilita: `Da giugno a ottobre`,
        mesiVisibili: [6, 7, 8, 9, 10],

        trova: `Per trovare la <strong>Freccia</strong>, guarda tra la brillante 
  <strong>Altair</strong> nell’<span class="link-costellazione" onclick="openMiniModal('aquila', event)">Aquila</span> 
  e la costellazione della Volpetta. 
  Si riconosce facilmente come una piccola freccia di stelle che punta verso sud. 
  Con un binocolo, prova a cercare l’ammasso <strong>M71</strong>, una piccola nuvola stellare nella “coda” della Freccia.`,
    },

    "lucertola": {
        nome: "Lucertola",
        immagine: "img/lucertola.jpg",

        mitologia: `La costellazione della <strong>Lucertola</strong> (<em>Lacerta</em>) non ha origini mitologiche antiche, 
  poiché fu introdotta solo nel XVII secolo dall’astronomo polacco <strong>Johannes Hevelius</strong>. 
  Scelse questo nome per la sua forma sinuosa e discreta, che ricorda il movimento agile di una lucertola che si arrampica tra le stelle.`,

        informazioni: `La <strong>Lucertola</strong> è una piccola costellazione situata tra 
  <span class="link-costellazione" onclick="openMiniModal('cefeo', event)">Cefeo</span>, 
  <span class="link-costellazione" onclick="openMiniModal('cigno', event)">Cigno</span>, 
  <span class="link-costellazione" onclick="openMiniModal('andromeda', event)">Andromeda</span> e 
  <span class="link-costellazione" onclick="openMiniModal('pegaso', event)">Pegaso</span>. 
  Nonostante le sue stelle siano deboli, la regione è ricca di oggetti celesti, tra cui la bella nebulosa a emissione <strong>Sh2-126</strong> 
  e il sistema stellare multiplo <strong>ADS 16402</strong>, attorno al quale orbita un pianeta extrasolare scoperto nel 2006.`,

        stelle: [
            "Alpha Lacertae, stella bianco-azzurra, la più luminosa della costellazione",
            "Beta Lacertae, gigante gialla di magnitudine 4,4",
            "4 Lacertae, sistema binario azzurro visibile con piccoli telescopi",
            "10 Lacertae, stella blu molto calda e giovane",
            "ADS 16402, sistema multiplo con pianeta extrasolare"
        ],

        visibilita: `Da agosto a dicembre`,
        mesiVisibili: [8, 9, 10, 11, 12],

        trova: `Per individuare la <strong>Lucertola</strong>, guarda tra il 
  <span class="link-costellazione" onclick="openMiniModal('cigno', event)">Cigno</span> e il 
  <span class="link-costellazione" onclick="openMiniModal('pegaso', event)">Pegaso</span>. 
  In cieli limpidi, si distingue come una linea sinuosa di stelle deboli. 
  Nonostante la sua bassa luminosità, è facilmente rintracciabile con un binocolo come una sottile “traccia” luminosa tra le due costellazioni maggiori.`,
    },

    "pegaso": {
        nome: "Pegaso",
        immagine: "img/pegaso.jpg",

        mitologia: `La costellazione di <strong>Pegaso</strong> rappresenta il cavallo alato della mitologia greca. 
  Nacque dal sangue della <strong>Medusa</strong> quando fu decapitata da 
  <span class="link-costellazione" onclick="openMiniModal('perseo', event)">Perseo</span>. 
  Pegaso servì il dio <strong>Zeus</strong>, portando i fulmini e diventando simbolo di ispirazione e libertà. 
  In seguito, aiutò <strong>Bellerofonte</strong> a sconfiggere la Chimera, ma l’eroe, accecato dall’orgoglio, tentò di volare fino all’Olimpo. 
  Zeus lo punì, ma Pegaso fu accolto tra le stelle come premio per la sua lealtà.`,

        informazioni: `<strong>Pegaso</strong> è una grande costellazione autunnale facilmente riconoscibile per il suo 
  <em>Grande Quadrato</em>, formato dalle stelle <strong>Markab</strong>, <strong>Scheat</strong>, <strong>Algenib</strong> 
  e <strong>Alpheratz</strong> (questa ultima condivisa con la 
  <span class="link-costellazione" onclick="openMiniModal('andromeda', event)">Andromeda</span>). 
  In questa regione si trovano interessanti galassie, come la spettacolare ellittica <strong>M15</strong>, 
  un ammasso globulare molto denso visibile anche con piccoli telescopi. 
  È una costellazione ricca di storia, spesso usata come riferimento per l’orientamento nel cielo autunnale.`,

        stelle: [
            "Markab (Alpha Pegasi), gigante blu, una delle stelle del Grande Quadrato",
            "Scheat (Beta Pegasi), gigante rossa variabile",
            "Algenib (Gamma Pegasi), stella bianco-azzurra brillante",
            "Enif (Epsilon Pegasi), supergigante arancione che rappresenta il muso del cavallo",
            "Homam (Zeta Pegasi), stella bianca situata nel collo di Pegaso"
        ],

        visibilita: `Da settembre a gennaio`,
        mesiVisibili: [9, 10, 11, 12, 1],

        trova: `Per trovare <strong>Pegaso</strong>, guarda verso est nelle notti di settembre e ottobre. 
  Il suo tratto più riconoscibile è il <strong>Grande Quadrato di Pegaso</strong>, 
  formato da quattro stelle luminose che rappresentano il corpo del cavallo alato. 
  Da Alpheratz, nell’angolo nord-est, parte la catena stellare della 
  <span class="link-costellazione" onclick="openMiniModal('andromeda', event)">Andromeda</span>. 
  Sotto cieli bui, è possibile osservare anche l’ammasso globulare <strong>M15</strong>, 
  una piccola ma densa sfera di luce vicino alla stella Enif.`,
    },

    "perseo": {
        nome: "Perseo",
        immagine: "img/perseo.jpg",

        mitologia: `La costellazione di <strong>Perseo</strong> rappresenta l’eroe figlio di <strong>Zeus</strong> e di <em>Danae</em>. 
  Con l’aiuto degli dèi, Perseo riuscì a sconfiggere la terribile 
  Medusa, 
  la Gorgone dal cui sguardo pietrificante nacque il cavallo alato 
  <span class="link-costellazione" onclick="openMiniModal('pegaso', event)">Pegaso</span>. 
  Tornando dalle sue imprese, salvò la principessa 
  <span class="link-costellazione" onclick="openMiniModal('andromeda', event)">Andromeda</span>, 
  che stava per essere sacrificata al mostro marino 
  Ceto. 
  Dopo la loro unione, gli dèi collocarono Perseo in cielo accanto alla sua amata e alla sua famiglia reale.`,

        informazioni: `<strong>Perseo</strong> è una costellazione estesa e luminosa del cielo boreale, 
  situata tra la <span class="link-costellazione" onclick="openMiniModal('andromeda', event)">Andromeda</span> 
  e l’<span class="link-costellazione" onclick="openMiniModal('auriga', event)">Auriga</span>. 
  È una regione ricchissima di oggetti celesti, tra cui gli spettacolari ammassi aperti <strong>M34</strong> 
  e il celebre doppio ammasso <strong>h e χ Persei</strong>, visibili anche a occhio nudo come due macchie luminose vicine. 
  Inoltre, da questa costellazione sembrano provenire le <strong>Perseidi</strong>, 
  le famose “lacrime di San Lorenzo”, lo sciame meteorico visibile a metà agosto.`,

        stelle: [
            "Mirfak (Alpha Persei), supergigante bianca, la stella più luminosa della costellazione",
            "Algol (Beta Persei), celebre stella binaria variabile, chiamata 'Stella del Demonio'",
            "Atik (Zeta Persei), stella blu di grande massa",
            "Gamma Persei, sistema binario visibile con telescopi amatoriali",
            "Menkib (Xi Persei), stella caldissima, tra le più luminose della Via Lattea"
        ],

        visibilita: `Da ottobre a febbraio`,
        mesiVisibili: [10, 11, 12, 1, 2],

        trova: `Per individuare <strong>Perseo</strong>, cerca la brillante stella <strong>Capella</strong> 
  dell’<span class="link-costellazione" onclick="openMiniModal('auriga', event)">Auriga</span> 
  e spostati verso sud-est, tra la 
  <span class="link-costellazione" onclick="openMiniModal('andromeda', event)">Andromeda</span> e la 
  <span class="link-costellazione" onclick="openMiniModal('toro', event)">Taurus</span>. 
  Le sue stelle formano una figura allungata, e in cieli limpidi si possono notare a occhio nudo i due ammassi aperti 
  <strong>h e χ Persei</strong>, poco a nord di Mirfak.`,
    },

    "triangolo": {
        nome: "Triangolo",
        immagine: "img/triangolo.jpg",

        mitologia: `La costellazione del <strong>Triangolo</strong> (<em>Triangulum</em>) è una delle più antiche conosciute. 
  Gli antichi Greci la identificavano come il delta maiuscolo (Δ), simbolo della lettera D, 
  in onore della regione della <strong>Tracia</strong> o del <strong>Nilo</strong>. 
  Secondo altre tradizioni, rappresenta l’isola di <strong>Sicilia</strong>, 
  la cui forma triangolare era sacra alla dea <em>Demetra</em>.`,

        informazioni: `Il <strong>Triangolo</strong> è una piccola costellazione situata tra la 
  <span class="link-costellazione" onclick="openMiniModal('andromeda', event)">Andromeda</span> e l’
  <span class="link-costellazione" onclick="openMiniModal('ariete', event)">Ariete</span>. 
  È famosa per ospitare la spettacolare <strong>Galassia del Triangolo (M33)</strong>, 
  la terza galassia più grande del <em>Gruppo Locale</em> dopo la 
  Via Lattea e la Galassia di Andromeda. 
  È una galassia a spirale osservabile anche con piccoli telescopi e, sotto cieli scuri, persino a occhio nudo.`,

        stelle: [
            "Beta Trianguli, gigante bianco-gialla, la più luminosa della costellazione",
            "Alpha Trianguli, stella bianca di magnitudine 3,4",
            "Gamma Trianguli, stella bianco-azzurra situata nel vertice inferiore del triangolo",
            "Delta Trianguli, sistema multiplo visibile con strumenti amatoriali",
            "Iota Trianguli, stella doppia nella regione meridionale"
        ],

        visibilita: `Da ottobre a febbraio`,
        mesiVisibili: [10, 11, 12, 1, 2],

        trova: `Per individuare il <strong>Triangolo</strong>, guarda tra la 
  <span class="link-costellazione" onclick="openMiniModal('andromeda', event)">Andromeda</span> e l’
  <span class="link-costellazione" onclick="openMiniModal('ariete', event)">Ariete</span>. 
  Le sue tre stelle principali formano un piccolo triangolo quasi equilatero facilmente riconoscibile. 
  Con un telescopio o binocolo, cerca la <strong>Galassia del Triangolo (M33)</strong>, 
  una tenue ma splendida spirale di luce distante circa 3 milioni di anni luce.`,
    },

};
