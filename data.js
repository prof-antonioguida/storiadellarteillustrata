/* Storia dell'arte illustrata per la scuola primaria – Angela Notarnicola
   Testi del libro. Per correggere un testo basta modificarlo qui, tra le virgolette.
   _parola_ = corsivo   **parola** = grassetto
   Nei riquadri "look" (Guarda l'opera!) il campo "file" è il nome della foto dell'opera
   nella cartella "img/opere" (senza .jpg). "optional: true" = opera facoltativa. */

window.BOOK = {
  "title": "Storia dell'arte illustrata",
  "subtitle": "per la scuola primaria",
  "author": "Angela Notarnicola",
  "cover": {
    "img": "base_10_copertina",
    "alt": "Un grande libro aperto in un prato al tramonto: dalle sue pagine escono pennelli, colori, statue e monumenti di tutte le epoche."
  },
  "preface": {
    "title": "Prefazione",
    "img": "base_11_prefazione",
    "alt": "La maestra mostra ai bambini i quadri e le statue di un museo.",
    "body": [
      "Ciao! Io sono Leo, un camaleonte che ama l'arte più di ogni altra cosa. Come tutti i camaleonti so cambiare colore: divento verde, giallo, arancione, blu… proprio come la tavolozza di un pittore! Il mio nome viene da un grande artista, Leonardo da Vinci. Lo incontreremo quando arriveremo al Rinascimento.",
      "Ti sei mai accorto di quanta arte c'è intorno a te? C'è nei disegni che fai a scuola, nelle chiese e nelle piazze della tua città, nei quadri dei musei, nei murales e perfino nella forma di una sedia o di un palazzo. Ma l'arte non è sempre stata come quella di oggi. È cambiata tantissimo, insieme alle persone che la creavano e la guardavano.",
      "In questo libro faremo insieme un lungo viaggio nel tempo, in otto tappe. Partiremo da una grotta dipinta tantissimo tempo fa e arriveremo fino ai giorni nostri. Incontreremo costruttori di piramidi, monaci che decorano le pagine dei libri, geni del Rinascimento, pittori che inseguono la luce e artisti che dipingono facendo sgocciolare il colore sulla tela.",
      "Lungo la strada troverai alcuni aiuti:",
      {
        "list": [
          "il pulsante con l'altoparlante: se lo tocchi, una voce ti legge la pagina;",
          "i riquadri **Guarda l'opera!**: la foto di un'opera vera dell'epoca di cui stai leggendo; toccala per vederla più grande;",
          "i riquadri **Lo sapevi?**: piccole curiosità da raccontare agli amici;",
          "le carte d'identità dei grandi artisti, per conoscerli da vicino;",
          "alla fine di ogni capitolo, un gioco per scoprire quanto hai imparato."
        ]
      },
      "Per questo viaggio non serve saper disegnare benissimo. Bastano gli occhi ben aperti e tanta curiosità. Sei pronto? Seguimi, si parte!"
    ]
  },
  "chapters": [
    {
      "n": 1,
      "title": "L'arte delle origini e delle civiltà antiche",
      "subtitle": "Dalle pitture nelle grotte ai templi dei Greci e dei Romani",
      "img": "cap1_00_apertura",
      "alt": "Una famiglia preistorica dipinge animali sulla parete di una grotta, alla luce delle torce.",
      "intro": [
        "Immagina una grotta buia, tantissimo tempo fa. Una ragazza tiene alta una torcia. Alla sua luce, un uomo appoggia la mano sulla roccia e ci soffia sopra una polvere rossa: quando toglie la mano, sulla parete resta la sua impronta. Accanto a lui, qualcuno sta disegnando un grande bisonte con un pezzo di carbone.",
        "In questo capitolo scopriremo come è nata l'arte e che cosa hanno creato i popoli più antichi: gli Egizi, i Greci e i Romani."
      ],
      "leo": "Accendiamo la torcia ed entriamo nella grotta: guarda quanti animali sulle pareti!",
      "sections": [
        {
          "id": "1.1",
          "title": "Le pitture nelle grotte",
          "img": "cap1_01_grotte",
          "alt": "Pittori preistorici, in piedi su un'impalcatura di rami, dipingono cavalli, tori e cervi sulla volta di una grotta.",
          "body": [
            "La preistoria è il lunghissimo periodo in cui le persone non sapevano ancora scrivere. Eppure sapevano già dipingere! In molte grotte d'Europa le pareti sono coperte di animali: cavalli, bisonti, cervi, tori e mammut. Li hanno dipinti uomini e donne vissuti decine di migliaia di anni fa.",
            "I colori si ottenevano dalla natura. Il nero veniva dal carbone di legna; il rosso e il giallo da terre e pietre colorate, macinate fino a diventare polvere. La polvere si mescolava con acqua o con grasso animale e si stendeva con le dita, con pennelli fatti di peli e di rametti, oppure si soffiava sulla parete con un piccolo tubo d'osso.",
            "Gli artisti dipingevano alla luce di torce e di piccole lampade di pietra che bruciavano il grasso. Spesso sfruttavano le forme della roccia: una sporgenza diventava la pancia di un bisonte, una fessura la schiena di un cavallo. Nessuno sa con certezza perché dipingessero: forse per chiedere una buona caccia, forse per raccontare storie o per celebrare riti."
          ],
          "leo": "Nelle grotte ci sono tantissime impronte di mani. Appoggia la tua mano su un foglio e colora tutto intorno: ecco la tua firma preistorica!",
          "look": [
            {
              "title": "La Sala dei Tori di Lascaux",
              "artist": "artisti preistorici",
              "date": "circa 17.000 anni fa",
              "place": "Grotta di Lascaux, Francia",
              "file": "opera_1_1_lascaux",
              "text": "Sulle pareti di questa grotta corrono tori enormi, cavalli e cervi. Alcuni animali sono lunghi più di cinque metri! Guarda come le figure si sovrappongono: forse sono state dipinte da artisti diversi, in tempi diversi. Riesci a trovare un cavallo?"
            }
          ],
          "know": "La grotta di Lascaux fu scoperta nel 1940 da quattro ragazzi. Le sue pitture sono così delicate che oggi la grotta vera è chiusa al pubblico: il respiro dei visitatori le stava rovinando. Si visitano però delle copie perfette, costruite lì vicino."
        },
        {
          "id": "1.2",
          "title": "I primi scultori e i grandi massi",
          "img": "cap1_02_scultori",
          "alt": "Una famiglia preistorica intaglia piccole statuine di pietra e d'avorio; sullo sfondo, un gruppo di persone solleva un grande masso con tronchi e corde.",
          "body": [
            "Gli artisti preistorici non dipingevano soltanto. Con pietre appuntite scolpivano piccole statuine di pietra, di osso o d'avorio di mammut: animali, uccelli e figure di donne. Chi scolpisce si chiama scultore, e l'opera che crea è una scultura.",
            "Le statuine di donna più famose sono chiamate «Veneri». Hanno la pancia e i fianchi molto grandi: forse rappresentavano la mamma che dà la vita, e portavano fortuna. Erano così piccole che si potevano tenere in una mano e portare con sé durante i viaggi.",
            "Molto più tardi, quando le persone smisero di spostarsi e cominciarono a coltivare la terra, nacquero monumenti giganteschi fatti di enormi pietre, chiamati megaliti. La parola viene dal greco e significa proprio «grandi pietre». Alcuni massi sono piantati da soli nel terreno, altri sono disposti in cerchio. Per spostarli servivano tantissime persone, tronchi che rotolavano e lunghe corde."
          ],
          "leo": "Ti piace modellare? Prendi un po' di pasta da modellare e prova a fare un animaletto da tenere in tasca, come gli scultori della preistoria!",
          "look": [
            {
              "title": "La Venere di Willendorf",
              "artist": "artista preistorico",
              "date": "circa 30.000 anni fa",
              "place": "Vienna, Museo di Storia Naturale",
              "file": "opera_1_2_willendorf",
              "text": "È alta appena undici centimetri: sta nel palmo di una mano! È scolpita in una pietra chiamata calcare e un tempo era colorata di rosso. Guarda la testa: al posto del viso ci sono tante piccole file di riccioli, o forse un cappellino intrecciato."
            },
            {
              "title": "Stonehenge",
              "artist": "popoli della preistoria",
              "date": "circa 3000-2000 a.C.",
              "place": "Inghilterra",
              "file": "opera_1_2_stonehenge",
              "optional": true,
              "text": "È un grande cerchio di pietre alte come due persone, alcune pesanti come cinque elefanti. Altre pietre, più piccole, furono portate da montagne lontane più di duecento chilometri! Nel giorno più lungo dell'anno il sole sorge proprio nella direzione indicata dal monumento."
            }
          ],
          "know": "Anche in Puglia ci sono tanti megaliti: i menhir, grandi pietre piantate nel terreno, e i dolmen, che sembrano enormi tavoli di pietra. Uno dei più belli è il dolmen della Chianca, vicino a Bisceglie."
        },
        {
          "id": "1.3",
          "title": "L'arte degli Egizi",
          "img": "cap1_03_egitto",
          "alt": "Lungo il Nilo, gli operai costruiscono una piramide mentre, dentro una tomba, un pittore dipinge figure di profilo sulla parete.",
          "body": [
            "Circa cinquemila anni fa, lungo il fiume Nilo, nacque la civiltà degli antichi Egizi. Il loro re si chiamava faraone ed era considerato quasi un dio. Gli Egizi credevano che dopo la morte ci fosse un'altra vita, e per questo costruivano tombe ricchissime, dove il faraone potesse continuare a vivere per sempre.",
            "Le tombe più famose sono le piramidi. La più grande, la piramide di Cheope, era alta quasi come un grattacielo di quaranta piani ed è fatta con più di due milioni di blocchi di pietra. Per costruirla lavorarono migliaia di operai, per circa vent'anni.",
            "Dentro le tombe, i pittori e gli scultori raccontavano la vita di tutti i giorni: la caccia, la pesca, i banchetti, il lavoro nei campi. Le figure hanno sempre la testa e le gambe di profilo, ma l'occhio e le spalle di fronte. Non era un errore: era una regola, per mostrare ogni parte del corpo nel modo in cui si riconosce meglio. Accanto alle figure scrivevano con i geroglifici, piccoli disegni che erano la scrittura degli Egizi."
          ],
          "leo": "Prova a disegnare un amico come un pittore egizio: testa di profilo, occhio di fronte, spalle di fronte e piedi di profilo. Poi prova a metterti in quella posizione… non è facile!",
          "look": [
            {
              "title": "La maschera d'oro di Tutankhamon",
              "artist": "orafi egizi",
              "date": "circa 1320 a.C.",
              "place": "Egitto",
              "file": "opera_1_3_tutankhamon",
              "text": "Tutankhamon diventò faraone quando era ancora un bambino, a circa nove anni. Questa maschera copriva il viso della sua mummia: è d'oro, decorata con pietre azzurre e vetri colorati, e pesa più di dieci chili. La sua tomba fu scoperta nel 1922 quasi intatta, piena di tesori."
            },
            {
              "title": "Le piramidi di Giza",
              "artist": "architetti egizi",
              "date": "circa 2550-2470 a.C.",
              "place": "Giza, Egitto",
              "file": "opera_1_3_piramidi",
              "optional": true,
              "text": "Sono le tombe di tre faraoni, costruite più di quattromilacinquecento anni fa. Sono l'unica delle sette meraviglie del mondo antico ancora in piedi."
            }
          ],
          "know": "In origine le piramidi erano rivestite di pietra bianca e liscia, che brillava sotto il sole del deserto. Nei secoli quelle pietre sono state portate via per costruire altri edifici."
        },
        {
          "id": "1.4",
          "title": "L'arte dei Greci",
          "img": "cap1_04_grecia",
          "alt": "Sull'acropoli, scultori e operai lavorano a un tempio di marmo con le colonne, mentre un vasaio dipinge un vaso a figure nere.",
          "body": [
            "Gli antichi Greci amavano la bellezza, l'armonia e l'ordine. Per loro una cosa era bella quando tutte le sue parti stavano bene insieme, nelle giuste proporzioni: né troppo grandi, né troppo piccole.",
            "Costruivano templi di marmo per i loro dei, con file di colonne tutto intorno. Il più famoso è il Partenone, sulla collina dell'Acropoli di Atene, dedicato alla dea Atena. Oggi i templi greci ci sembrano tutti bianchi, ma un tempo erano dipinti con colori vivaci: rosso, blu, verde e oro.",
            "Gli scultori greci volevano rappresentare il corpo umano nel modo più reale possibile: atleti, dei ed eroi. Le loro statue sembrano vive, pronte a muoversi. Anche i vasi erano opere d'arte: i pittori li decoravano con storie di dei e di eroi, con figure nere su fondo rosso oppure rosse su fondo nero."
          ],
          "leo": "Le colonne greche hanno tre stili: il dorico, semplice e robusto; lo ionico, con due riccioli in cima; il corinzio, decorato con foglie. Prova a cercarle sugli edifici della tua città!",
          "look": [
            {
              "title": "Il Partenone",
              "artist": "architetti Ictino e Callicrate",
              "date": "447-432 a.C.",
              "place": "Atene, Acropoli",
              "file": "opera_1_4_partenone",
              "text": "È stato costruito circa duemilacinquecento anni fa. Le sue colonne non sono perfettamente dritte: sono leggermente più gonfie al centro e un po' inclinate verso l'interno. Gli architetti lo fecero apposta, perché da lontano l'edificio sembrasse perfettamente dritto ed elegante."
            },
            {
              "title": "Il Discobolo",
              "artist": "Mirone (copia romana)",
              "date": "originale di circa 450 a.C.",
              "place": "Roma, Museo Nazionale Romano",
              "file": "opera_1_4_discobolo",
              "optional": true,
              "text": "Un atleta sta per lanciare il disco: il corpo è piegato e girato, come una molla pronta a scattare. La statua originale era di bronzo ed è andata perduta. La conosciamo grazie alle copie di marmo fatte dai Romani."
            }
          ],
          "know": "Moltissime statue greche erano di bronzo, ma quasi tutte sono state fuse nei secoli per riusare il metallo. Alcune si sono salvate proprio perché erano finite in fondo al mare, come i Bronzi di Riace, ritrovati nel 1972 da un sub in Calabria."
        },
        {
          "id": "1.5",
          "title": "L'arte dei Romani",
          "img": "cap1_05_roma",
          "alt": "Nella Roma antica, gli operai costruiscono un grande arco mentre un artista posa le tessere di un mosaico nel pavimento di una villa; sullo sfondo si vede il Colosseo.",
          "body": [
            "I Romani conquistarono un impero immenso e impararono moltissimo dai Greci. Copiavano le loro statue e i loro templi, ma erano soprattutto bravissimi costruttori. Usavano una specie di cemento molto resistente e costruivano grandi archi: così realizzarono ponti, acquedotti, terme, strade e anfiteatri in tutto l'impero.",
            "Nelle loro case, i Romani più ricchi decoravano le pareti con affreschi, cioè pitture fatte sull'intonaco ancora fresco del muro. I pavimenti erano coperti di mosaici: immagini composte da migliaia di tessere, piccoli pezzetti di pietra e di vetro colorato messi uno accanto all'altro.",
            "I Romani amavano anche i ritratti, e volevano che fossero realistici. Ricordavano i loro antenati così com'erano davvero, anche con le rughe, il naso storto e le orecchie a sventola."
          ],
          "leo": "Anche tu puoi fare un mosaico: ritaglia tanti quadratini di carta colorata e incollali vicini vicini su un foglio, come le tessere dei Romani.",
          "look": [
            {
              "title": "Il Colosseo",
              "artist": "architetti romani",
              "date": "70-80 d.C.",
              "place": "Roma",
              "file": "opera_1_5_colosseo",
              "text": "È il più grande anfiteatro mai costruito. Poteva ospitare circa cinquantamila spettatori, che venivano a vedere i combattimenti dei gladiatori e le cacce agli animali. Aveva perfino un enorme telo, chiamato velario, che si apriva sopra le gradinate per riparare il pubblico dal sole."
            },
            {
              "title": "Il Pantheon",
              "artist": "architetti romani",
              "date": "circa 125 d.C.",
              "place": "Roma",
              "file": "opera_1_5_pantheon",
              "optional": true,
              "text": "È un tempio dedicato a tutti gli dei. Per più di mille anni la sua cupola è stata la più grande del mondo. In cima c'è un grande buco rotondo, l'oculo, da cui entra la luce del sole… e anche la pioggia! Per questo nel pavimento ci sono dei piccoli fori per far scolare l'acqua."
            }
          ],
          "know": "A Pompei, la città sepolta dall'eruzione del Vesuvio nel 79 dopo Cristo, si sono conservati affreschi e mosaici bellissimi. All'ingresso di una casa c'è il mosaico di un cane con la scritta «Cave canem», cioè «Attenti al cane»!"
        }
      ],
      "summary": [
        "L'arte è nata nella preistoria: nelle grotte si dipingevano animali con colori presi dalla natura.",
        "Gli scultori preistorici creavano piccole statuine; più tardi nacquero i megaliti, monumenti di grandi pietre.",
        "Gli Egizi costruirono le piramidi e dipinsero le tombe con figure di profilo e geroglifici.",
        "I Greci cercavano l'armonia: costruirono templi come il Partenone e scolpirono statue che sembrano vive.",
        "I Romani furono grandi costruttori, come mostrano il Colosseo e il Pantheon, e decoravano le case con affreschi e mosaici."
      ],
      "quiz": [
        {
          "q": "Con che cosa facevano il colore nero i pittori preistorici?",
          "a": [
            "con il carbone di legna",
            "con l'inchiostro delle seppie",
            "con le more schiacciate"
          ]
        },
        {
          "q": "Perché gli Egizi costruivano tombe così ricche?",
          "a": [
            "perché credevano in una vita dopo la morte",
            "per farci vivere i loro figli",
            "per conservare il grano"
          ]
        },
        {
          "q": "Che cosa sono i megaliti?",
          "a": [
            "monumenti fatti di grandi pietre",
            "statuine d'avorio",
            "vasi greci dipinti"
          ]
        },
        {
          "q": "A quale dea era dedicato il Partenone?",
          "a": [
            "ad Atena",
            "a Venere",
            "a Iside"
          ]
        },
        {
          "q": "Che cos'è un mosaico?",
          "a": [
            "un'immagine fatta con tante tessere colorate",
            "una statua di bronzo",
            "un quadro dipinto su una tela"
          ]
        }
      ],
      "game": "Gioco della grotta: abbassate le tapparelle, appendete alla parete un grande foglio di carta da pacchi e illuminatelo con una torcia. A turno, disegnate un animale con un pastello marrone o nero, come gli artisti della preistoria. Poi muovete la torcia: come cambiano le figure?",
      "words": [
        [
          "Preistoria",
          "il lunghissimo periodo prima dell'invenzione della scrittura."
        ],
        [
          "Scultura",
          "un'opera d'arte che si può guardare da tutti i lati, scolpita o modellata; chi la crea si chiama scultore."
        ],
        [
          "Megalito",
          "un monumento fatto di grandi pietre."
        ],
        [
          "Geroglifici",
          "la scrittura degli antichi Egizi, fatta di piccoli disegni."
        ],
        [
          "Proporzioni",
          "il rapporto di grandezza tra le parti di una figura o di un edificio."
        ],
        [
          "Affresco",
          "una pittura fatta sull'intonaco ancora fresco del muro."
        ],
        [
          "Mosaico",
          "un'immagine composta da tante tessere di pietra o di vetro colorato."
        ]
      ]
    },
    {
      "n": 2,
      "title": "L'arte del Medioevo",
      "subtitle": "Dai mosaici d'oro alle cattedrali piene di luce",
      "img": "cap2_00_apertura",
      "alt": "In un borgo medievale i muratori costruiscono una cattedrale, mentre nel monastero un monaco dipinge le pagine di un libro.",
      "intro": [
        "Dopo la fine dell'Impero romano comincia un periodo lunghissimo, di circa mille anni: il Medioevo. È l'epoca dei castelli e dei cavalieri, dei monasteri e dei borghi circondati da mura. Quasi nessuno sa leggere, e per questo l'arte ha un compito importante: raccontare con le immagini le storie della Bibbia e la vita dei santi.",
        "In questo capitolo vedremo mosaici che brillano d'oro, libri dipinti a mano, chiese di pietra e grandi cattedrali piene di luce colorata."
      ],
      "leo": "Senti il rumore dei martelli? Stanno costruendo una cattedrale. Andiamo a vedere!",
      "sections": [
        {
          "id": "2.1",
          "title": "I mosaici di Ravenna",
          "img": "cap2_01_ravenna",
          "alt": "Dentro una chiesa, alcuni artisti posano tessere d'oro e di vetro colorato su un grande mosaico, alla luce delle finestre.",
          "body": [
            "Quando l'Impero romano d'Occidente finì, la parte orientale dell'impero continuò a vivere per altri mille anni. La sua capitale era Costantinopoli, l'attuale Istanbul. Gli artisti di questo impero, chiamato bizantino, erano maestri del mosaico.",
            "Una delle città più ricche di mosaici è Ravenna, in Emilia-Romagna, che per un certo tempo fu una capitale. Nelle sue chiese le pareti e le volte sono coperte di tessere di vetro colorato e d'oro, che brillano alla luce delle candele e delle finestre. Le figure sono ferme e solenni, con grandi occhi spalancati, e stanno su uno sfondo d'oro che fa pensare al cielo e al paradiso.",
            "Le tessere non venivano messe tutte dritte: gli artisti le inclinavano un poco, ognuna in modo diverso, perché riflettessero la luce in tante direzioni. Così, camminando nella chiesa, il mosaico sembra scintillare e muoversi."
          ],
          "leo": "Avvicinati a un mosaico e vedrai tantissimi quadratini. Ora allontanati: i quadratini spariscono e appare la figura. È una magia!",
          "look": [
            {
              "title": "Giustiniano e la sua corte",
              "artist": "mosaicisti bizantini",
              "date": "circa 547",
              "place": "Ravenna, Basilica di San Vitale",
              "file": "opera_2_1_giustiniano",
              "text": "Al centro c'è l'imperatore Giustiniano, con la corona in testa e un mantello di porpora. Intorno a lui ci sono soldati, sacerdoti e il vescovo Massimiano. Guarda i piedi: sembrano quasi galleggiare, perché gli artisti non volevano mostrare il mondo di tutti i giorni, ma un mondo speciale e sacro."
            }
          ],
          "know": "Nella chiesa di Sant'Apollinare Nuovo, sempre a Ravenna, c'è una lunghissima fila di sante che camminano in processione, tutte vestite di bianco e d'oro. Sono ventidue!"
        },
        {
          "id": "2.2",
          "title": "I monaci e i libri miniati",
          "img": "cap2_02_miniature",
          "alt": "In un monastero, un monaco copia un libro su pergamena e un altro dipinge una grande lettera decorata con l'oro.",
          "body": [
            "Nel Medioevo non c'era la stampa: ogni libro veniva scritto a mano, lettera per lettera. Lo facevano soprattutto i monaci, in una stanza del monastero chiamata scriptorium. Ci voleva tantissimo tempo: per copiare un libro grande potevano servire mesi o addirittura anni.",
            "I libri erano scritti su pergamena, una pelle di animale, di solito di pecora o di vitello, lavorata fino a diventare sottile e liscia. Per un solo libro servivano le pelli di decine di animali: per questo i libri erano preziosissimi.",
            "Alcuni monaci erano anche pittori. Decoravano le pagine con piccole immagini colorate e con la prima lettera del capitolo grande e piena di intrecci, animali e foglie. Queste pitture si chiamano miniature, dal minio, un colore rosso che si usava molto. A volte si aggiungeva una foglia d'oro sottilissima, che faceva brillare tutta la pagina."
          ],
          "leo": "Scrivi la prima lettera del tuo nome, grande grande, e riempila di intrecci, fiori e animaletti, come una miniatura medievale.",
          "look": [
            {
              "title": "Il Libro di Kells",
              "artist": "monaci irlandesi",
              "date": "circa 800",
              "place": "Dublino, Trinity College",
              "file": "opera_2_2_kells",
              "text": "È un libro dei Vangeli decorato dai monaci tra l'Irlanda e la Scozia. In questa pagina due grandi lettere greche, X e P, le iniziali del nome di Cristo, sono piene di spirali e di intrecci. Guarda bene: nascosti tra le decorazioni ci sono gatti, topolini, angeli e farfalle!"
            }
          ],
          "know": "Per fare i colori i monaci usavano ingredienti incredibili. Il blu più prezioso si otteneva dal lapislazzuli, una pietra che arrivava dall'Afghanistan e che poteva costare più dell'oro!"
        },
        {
          "id": "2.3",
          "title": "Le chiese romaniche",
          "img": "cap2_03_romanico",
          "alt": "Davanti a una solida chiesa di pietra con archi rotondi arrivano i pellegrini con il bastone, mentre uno scultore decora il portale.",
          "body": [
            "Intorno all'anno 1000, in Europa si costruirono tantissime chiese nuove. Il loro stile si chiama romanico, perché ricorda gli edifici degli antichi Romani: muri spessi e robusti, archi rotondi e poche finestre piccole. Dentro, la luce è poca e l'atmosfera è raccolta e silenziosa.",
            "Gli scultori decoravano le facciate e i capitelli, cioè la parte più alta delle colonne, con figure di santi, animali fantastici, mostri e scene della vita di tutti i giorni. Erano come un libro di pietra che tutti potevano «leggere», anche senza saper leggere.",
            "Molte chiese romaniche sorgevano lungo le strade dei pellegrini, che viaggiavano a piedi per settimane o per mesi per arrivare in un luogo santo: Roma, Gerusalemme o Santiago de Compostela, in Spagna."
          ],
          "leo": "Sai che i capitelli romanici sono pieni di mostri? Ce ne sono con due corpi e una testa sola, o con la coda di serpente. Inventane uno anche tu!",
          "look": [
            {
              "title": "La Basilica di San Nicola",
              "artist": "costruttori pugliesi",
              "date": "1087-1197",
              "place": "Bari",
              "file": "opera_2_3_san_nicola",
              "text": "Nel 1087 un gruppo di marinai di Bari portò in città le ossa di san Nicola, il santo da cui è nata la figura di Babbo Natale. Per custodirle si costruì questa grande chiesa di pietra chiara, che è diventata un modello per tante chiese romaniche della Puglia."
            },
            {
              "title": "La Piazza dei Miracoli",
              "artist": "architetti pisani",
              "date": "1063-1372",
              "place": "Pisa",
              "file": "opera_2_3_pisa",
              "optional": true,
              "text": "Accanto alla cattedrale di marmo bianco ci sono il battistero, rotondo, e il campanile: la famosa torre pendente. La torre cominciò a inclinarsi già mentre la costruivano, perché il terreno sotto era troppo morbido."
            }
          ],
          "know": "In molte chiese romaniche c'è un calendario scolpito: dodici piccole scene, una per ogni mese, con i lavori dei contadini. A gennaio ci si scalda davanti al fuoco, d'estate si miete il grano, in autunno si raccoglie l'uva."
        },
        {
          "id": "2.4",
          "title": "Le cattedrali gotiche e le vetrate",
          "img": "cap2_04_gotico",
          "alt": "In una città medievale i muratori costruiscono una cattedrale altissima, con guglie e archi a punta, mentre un maestro vetraio monta una vetrata colorata.",
          "body": [
            "Intorno al 1150, in Francia, nacque un nuovo modo di costruire: lo stile gotico. I costruttori volevano chiese altissime e piene di luce, che dovevano dare l’impressione di salire verso il cielo.",
            "Per riuscirci usarono l'arco a sesto acuto, cioè l'arco a punta, che spinge il peso più verso il basso che verso i lati. All'esterno aggiunsero grandi archi rampanti, che sostengono i muri come stampelle. Così i muri potevano essere più sottili e aprirsi in finestre enormi.",
            "Le finestre erano chiuse da vetrate: immagini fatte con pezzi di vetro colorato tenuti insieme da sottili strisce di piombo. Quando il sole le attraversa, la chiesa si riempie di luce rossa, blu e viola. Sopra il portale c'è spesso il rosone, una grande finestra rotonda a forma di fiore."
          ],
          "leo": "Per fare una vetrata, ritaglia delle forme in un cartoncino nero e incolla dietro della carta velina colorata. Poi appoggiala alla finestra e guarda la luce!",
          "look": [
            {
              "title": "Le vetrate della Sainte-Chapelle",
              "artist": "maestri vetrai francesi",
              "date": "1242-1248",
              "place": "Parigi",
              "file": "opera_2_4_sainte_chapelle",
              "text": "Il re di Francia Luigi IX fece costruire questa cappella per custodire una reliquia preziosa. Le pareti sono quasi tutte di vetro: le vetrate raccontano più di mille scene della Bibbia, che si leggono dal basso verso l'alto. Entrando in una giornata di sole, sembra di stare dentro un gioiello."
            },
            {
              "title": "Il Duomo di Milano",
              "artist": "architetti e scultori di molti secoli",
              "date": "dal 1386",
              "place": "Milano",
              "file": "opera_2_4_duomo_milano",
              "optional": true,
              "text": "Ci sono voluti quasi seicento anni per finirlo! Sul tetto ci sono centotrentacinque guglie e migliaia di statue. Sulla guglia più alta brilla la Madonnina, la statua dorata che è il simbolo di Milano."
            }
          ],
          "know": "In Puglia c'è un castello misterioso, Castel del Monte, fatto costruire dall'imperatore Federico II. Ha la forma di un ottagono, con otto torri che hanno anch'esse otto lati. È così famoso che compare sulle monete italiane da un centesimo!"
        },
        {
          "id": "2.5",
          "title": "Giotto",
          "img": "cap2_05_giotto",
          "alt": "Un ragazzino pastore disegna una pecora su una pietra piatta, mentre un pittore anziano a cavallo si ferma a guardarlo stupito.",
          "body": [
            "Si racconta che un giorno il pittore Cimabue, passando per la campagna vicino a Firenze, vide un ragazzino pastore che disegnava una pecora su una pietra piatta, con un sasso appuntito. Il disegno era così bello che Cimabue lo portò con sé nella sua bottega. Quel ragazzino si chiamava Giotto.",
            "Giotto cambiò la pittura per sempre. Prima di lui le figure erano piatte e rigide, su sfondi d'oro. Giotto invece dipinse persone vere, con un corpo solido e pesante, che provano emozioni: piangono, si abbracciano, si stupiscono. Mise le sue figure in paesaggi con rocce e alberi, e dentro case e palazzi, come se recitassero sul palcoscenico di un teatro.",
            "Le sue opere più famose sono gli affreschi della Cappella degli Scrovegni, a Padova. Molti studiosi pensano che abbia dipinto anche le storie di san Francesco nella Basilica di Assisi."
          ],
          "cards": [
            {
              "img": "giotto",
              "rows": [
                [
                  "Nome",
                  "Giotto di Bondone"
                ],
                [
                  "Nato",
                  "verso il 1267, nel Mugello, vicino a Firenze"
                ],
                [
                  "Morto",
                  "1337, a Firenze"
                ],
                [
                  "Mestiere",
                  "pittore e architetto"
                ],
                [
                  "Famoso per",
                  "gli affreschi della Cappella degli Scrovegni e il campanile del Duomo di Firenze"
                ]
              ]
            }
          ],
          "leo": "Con un compagno, prova a imitare la posa di una figura di Giotto: chi abbraccia, chi piange, chi si stupisce. Gli altri indovinano l'emozione!",
          "look": [
            {
              "title": "La Cappella degli Scrovegni",
              "artist": "Giotto",
              "date": "1303-1305",
              "place": "Padova",
              "file": "opera_2_5_scrovegni",
              "text": "Le pareti di questa piccola cappella sono completamente coperte di affreschi. Scena dopo scena raccontano la vita di Maria e di Gesù, come un grande fumetto. La volta è dipinta di un blu intenso, piena di stelle d'oro, come un cielo di notte."
            },
            {
              "title": "Il Compianto sul Cristo morto",
              "artist": "Giotto",
              "date": "1303-1305",
              "place": "Padova, Cappella degli Scrovegni",
              "file": "opera_2_5_compianto",
              "optional": true,
              "text": "Guarda quanto dolore: Maria abbraccia il figlio, gli amici piangono e perfino gli angeli in cielo si disperano. Nessun pittore prima di Giotto aveva mostrato i sentimenti in modo così forte."
            }
          ],
          "know": "Si racconta che il papa volesse sapere chi fosse il pittore più bravo d'Italia. Giotto, invece di mandargli un disegno, intinse il pennello nel rosso e con un solo gesto tracciò un cerchio perfetto. Da qui viene il modo di dire «essere più tondo dell'O di Giotto»."
        }
      ],
      "summary": [
        "Nel Medioevo l'arte serviva soprattutto a raccontare le storie della Bibbia a chi non sapeva leggere.",
        "Gli artisti bizantini crearono mosaici splendenti d'oro, come quelli di Ravenna.",
        "I monaci copiavano i libri a mano e li decoravano con le miniature.",
        "Le chiese romaniche hanno muri spessi e archi rotondi; le cattedrali gotiche sono altissime, con archi a punta e grandi vetrate.",
        "Giotto dipinse figure vere, solide e piene di sentimenti."
      ],
      "quiz": [
        {
          "q": "Di che colore è quasi sempre lo sfondo dei mosaici bizantini?",
          "a": [
            "d'oro",
            "verde",
            "nero"
          ]
        },
        {
          "q": "Su che cosa scrivevano i monaci del Medioevo?",
          "a": [
            "sulla pergamena, fatta con pelle di animale",
            "su fogli di plastica",
            "su lastre di vetro"
          ]
        },
        {
          "q": "Come sono gli archi delle chiese romaniche?",
          "a": [
            "rotondi",
            "a punta",
            "quadrati"
          ]
        },
        {
          "q": "Che cos'è una vetrata?",
          "a": [
            "un'immagine fatta con pezzi di vetro colorato",
            "una porta di vetro",
            "un mosaico d'oro"
          ]
        },
        {
          "q": "Che cosa disegnava il giovane Giotto quando Cimabue lo vide?",
          "a": [
            "una pecora",
            "un cavallo",
            "un castello"
          ]
        }
      ],
      "game": "Gioco della vetrata: su un foglio disegnate una grande finestra a punta, come quelle gotiche, e dividetela in tante forme con un pennarello nero e spesso. Colorate ogni forma con colori vivaci e appendete le vostre «vetrate» alle finestre della classe.",
      "words": [
        [
          "Medioevo",
          "il periodo di circa mille anni tra la fine dell'Impero romano e la scoperta dell'America."
        ],
        [
          "Bizantino",
          "dell'Impero romano d'Oriente, che aveva come capitale Costantinopoli."
        ],
        [
          "Miniatura",
          "una piccola pittura che decora le pagine di un libro scritto a mano."
        ],
        [
          "Pergamena",
          "pelle di animale lavorata per scriverci sopra."
        ],
        [
          "Romanico",
          "lo stile delle chiese costruite intorno all'anno Mille, con muri spessi e archi rotondi."
        ],
        [
          "Gotico",
          "lo stile delle cattedrali altissime, con archi a punta e grandi vetrate."
        ],
        [
          "Vetrata",
          "una finestra fatta con pezzi di vetro colorato uniti da strisce di piombo."
        ]
      ]
    },
    {
      "n": 3,
      "title": "Il Rinascimento",
      "subtitle": "Botteghe, geni e la scoperta della prospettiva",
      "img": "cap3_00_apertura",
      "alt": "In una bottega di Firenze, i giovani apprendisti macinano i colori, un pittore dipinge su una tavola e uno scultore lavora un blocco di marmo; dalla finestra si vede la cupola del Duomo.",
      "intro": [
        "Siamo in Italia, circa seicento anni fa. In città come Firenze, Roma e Venezia gli artisti riscoprono l'arte degli antichi Greci e Romani e studiano la natura con occhi nuovi. Questo periodo si chiama Rinascimento, cioè «nascere di nuovo».",
        "Gli artisti lavorano nelle botteghe, piccoli laboratori dove i ragazzi imparano il mestiere fin da piccoli: macinano i colori, preparano le tavole di legno, puliscono i pennelli. Alcuni di quei ragazzi diventeranno i più grandi artisti di tutti i tempi."
      ],
      "leo": "Entriamo nella bottega, ma senza fare rumore: il maestro sta dipingendo!",
      "sections": [
        {
          "id": "3.1",
          "title": "Brunelleschi e la prospettiva",
          "img": "cap3_01_brunelleschi",
          "alt": "In cima alla grande cupola di Firenze in costruzione, gli operai lavorano tra argani e impalcature, mentre un architetto controlla un disegno.",
          "body": [
            "Filippo Brunelleschi era un orafo e un architetto di Firenze. La città aveva un grosso problema: la sua cattedrale, Santa Maria del Fiore, era quasi finita, ma mancava la cupola. Lo spazio da coprire era così grande che nessuno sapeva come fare.",
            "Brunelleschi trovò la soluzione: costruì due cupole, una dentro l'altra, e dispose i mattoni a spina di pesce, in modo che si sostenessero da soli mentre la malta si asciugava. Inventò anche nuove macchine per sollevare i materiali fino in cima. La cupola fu chiusa nel 1436 ed è ancora oggi la più grande cupola in muratura del mondo.",
            "Brunelleschi scoprì anche le regole della prospettiva: un modo per disegnare su un foglio piatto oggetti e spazi che sembrano profondi, proprio come li vediamo nella realtà. Le cose lontane si disegnano più piccole, e tutte le linee che vanno in profondità si incontrano in un solo punto, chiamato punto di fuga."
          ],
          "cards": [
            {
              "img": "brunelleschi",
              "rows": [
                [
                  "Nome",
                  "Filippo Brunelleschi"
                ],
                [
                  "Nato",
                  "1377, a Firenze"
                ],
                [
                  "Morto",
                  "1446, a Firenze"
                ],
                [
                  "Mestiere",
                  "orafo, architetto e ingegnere"
                ],
                [
                  "Famoso per",
                  "la cupola del Duomo di Firenze e la scoperta della prospettiva"
                ]
              ]
            }
          ],
          "leo": "Mettiti in fondo a un lungo corridoio della scuola e guarda: i bordi del pavimento e del soffitto si avvicinano sempre di più, fino a incontrarsi in un punto lontano. Ecco il punto di fuga!",
          "look": [
            {
              "title": "La cupola di Santa Maria del Fiore",
              "artist": "Filippo Brunelleschi",
              "date": "1420-1436",
              "place": "Firenze",
              "file": "opera_3_1_cupola",
              "text": "Ha un diametro di circa quarantacinque metri e si vede da quasi ogni punto di Firenze. Ancora oggi si può salire fino in cima, camminando tra le due cupole: sono 463 gradini!"
            },
            {
              "title": "La Trinità",
              "artist": "Masaccio",
              "date": "circa 1427",
              "place": "Firenze, Basilica di Santa Maria Novella",
              "file": "opera_3_1_trinita",
              "optional": true,
              "text": "Il giovane pittore Masaccio, amico di Brunelleschi, fu tra i primi a usare la prospettiva in un grande affresco. Guarda la volta sopra le figure: sembra davvero una cappella scavata nel muro, ma è tutto dipinto su una parete piatta!"
            }
          ],
          "know": "Per non far perdere tempo agli operai, che altrimenti dovevano scendere centinaia di gradini a ogni pausa, Brunelleschi fece portare il pranzo direttamente lassù, in cima alla cupola!"
        },
        {
          "id": "3.2",
          "title": "Botticelli",
          "img": "cap3_02_botticelli",
          "alt": "Un pittore dipinge su una grande tavola un prato fiorito con figure che danzano, mentre un apprendista gli porta un cesto di fiori da copiare.",
          "body": [
            "A Firenze, nel Quattrocento, governava una famiglia ricchissima e potente: i Medici. Lorenzo de' Medici, detto il Magnifico, amava la poesia, la filosofia e l'arte, e chiamava intorno a sé i migliori artisti della città.",
            "Tra questi c'era Sandro Botticelli. I suoi quadri sono pieni di grazia: figure leggere, con lunghi capelli mossi dal vento, che sembrano danzare. Botticelli dipingeva spesso le storie degli antichi dei greci e romani, che gli artisti del Rinascimento avevano riscoperto.",
            "Insieme alla «Primavera», il suo quadro più famoso è «La nascita di Venere»: la dea della bellezza arriva sulla riva del mare in piedi su una grande conchiglia, spinta dal soffio dei venti."
          ],
          "cards": [
            {
              "img": "botticelli",
              "rows": [
                [
                  "Nome",
                  "Sandro Botticelli"
                ],
                [
                  "Nato",
                  "verso il 1445, a Firenze"
                ],
                [
                  "Morto",
                  "1510, a Firenze"
                ],
                [
                  "Mestiere",
                  "pittore"
                ],
                [
                  "Famoso per",
                  "«La Primavera» e «La nascita di Venere»"
                ]
              ]
            }
          ],
          "leo": "Nella «Primavera» c'è Cupido, in alto, con una benda sugli occhi: sta per lanciare una freccia… chissà dove andrà a finire!",
          "look": [
            {
              "title": "La Primavera",
              "artist": "Sandro Botticelli",
              "date": "circa 1480",
              "place": "Firenze, Galleria degli Uffizi",
              "file": "opera_3_2_primavera",
              "text": "In un boschetto di aranci, la dea Venere accoglie la primavera. A destra il vento Zefiro, tutto azzurro, insegue una ninfa, che si trasforma in Flora, la dea dei fiori, con il vestito tutto fiorito. Nel prato gli studiosi hanno riconosciuto quasi duecento tipi di fiori diversi, dipinti con grande precisione!"
            }
          ],
          "know": "Il suo vero nome era Alessandro Filipepi. «Botticelli» era un soprannome: forse veniva dal fratello maggiore, chiamato «Botticello», cioè «piccola botte», perché era piuttosto rotondetto!"
        },
        {
          "id": "3.3",
          "title": "Leonardo da Vinci",
          "img": "cap3_03_leonardo",
          "alt": "In una bottega piena di disegni, macchine volanti e modellini, un artista con la lunga barba osserva il volo degli uccelli e prende appunti su un taccuino.",
          "body": [
            "Leonardo nacque a Vinci, un paesino vicino a Firenze. Fin da bambino era curiosissimo: osservava gli animali, le piante, l'acqua e le nuvole, e disegnava tutto quello che vedeva. Da ragazzo entrò nella bottega del pittore e scultore Verrocchio, dove imparò in fretta il mestiere.",
            "Leonardo non era soltanto un pittore, era anche scienziato, inventore, ingegnere, musicista e studioso del corpo umano. Riempì migliaia di pagine di appunti e di disegni: macchine per volare, ponti, strumenti musicali, studi di cavalli e di piante. Scriveva al contrario, da destra a sinistra, e per leggere i suoi appunti serve uno specchio!",
            "Leonardo dipingeva lentamente e lasciò pochi quadri, ma sono tra i più famosi del mondo. Inventò lo sfumato: i contorni delle figure non sono netti, ma morbidi, come avvolti in una leggera nebbia, proprio come appaiono le cose che vediamo attraverso l'aria."
          ],
          "cards": [
            {
              "img": "leonardo",
              "rows": [
                [
                  "Nome",
                  "Leonardo da Vinci"
                ],
                [
                  "Nato",
                  "1452, a Vinci, vicino a Firenze"
                ],
                [
                  "Morto",
                  "1519, ad Amboise, in Francia"
                ],
                [
                  "Mestiere",
                  "pittore, scienziato, inventore e ingegnere"
                ],
                [
                  "Famoso per",
                  "«La Gioconda», «L'Ultima Cena» e le sue invenzioni"
                ]
              ]
            }
          ],
          "leo": "Il mio nome viene proprio da lui: Leonardo! Ora capisci perché sono così curioso?",
          "look": [
            {
              "title": "La Gioconda",
              "artist": "Leonardo da Vinci",
              "date": "1503-1519",
              "place": "Parigi, Museo del Louvre",
              "file": "opera_3_3_gioconda",
              "text": "È il ritratto di una donna di Firenze, Lisa Gherardini, moglie del mercante Francesco del Giocondo: per questo si chiama Gioconda. Il suo sorriso è misterioso: se guardi gli occhi, sembra sorridere; se guardi la bocca, il sorriso sembra quasi sparire."
            },
            {
              "title": "L'Ultima Cena",
              "artist": "Leonardo da Vinci",
              "date": "1494-1498",
              "place": "Milano, Santa Maria delle Grazie",
              "file": "opera_3_3_ultima_cena",
              "optional": true,
              "text": "Gesù ha appena detto: «Uno di voi mi tradirà». Guarda gli apostoli: si agitano, si alzano, si chiedono l'un l'altro chi sarà. Leonardo dipinse questa scena sulla parete della sala da pranzo dei frati."
            }
          ],
          "know": "Nel 1911 la Gioconda fu rubata dal Museo del Louvre. Per più di due anni nessuno seppe dove fosse: il ladro, un operaio italiano, la teneva nascosta nella sua stanza, a Parigi. Fu ritrovata a Firenze nel 1913."
        },
        {
          "id": "3.4",
          "title": "Michelangelo",
          "img": "cap3_04_michelangelo",
          "alt": "In piedi su un'altissima impalcatura, con la testa piegata all'indietro, un pittore dipinge il soffitto di una grande cappella, mentre in basso un aiutante prepara i colori.",
          "body": [
            "Michelangelo Buonarroti si sentiva soprattutto uno scultore. Diceva che la statua è già nascosta dentro il blocco di marmo, e che lo scultore deve soltanto togliere il marmo in più per liberarla.",
            "A soli ventisei anni ricevette un blocco di marmo enorme e un po' rovinato, che altri scultori avevano lasciato a metà. Da quel blocco tirò fuori il David, il giovane pastore della Bibbia che sconfisse il gigante Golia. La statua è alta più di quattro metri e diventò il simbolo di Firenze.",
            "Poi il papa gli chiese di dipingere la volta della Cappella Sistina, a Roma. Michelangelo non voleva: lui era uno scultore! Alla fine accettò e lavorò per quattro anni, in piedi su un'impalcatura altissima, con la testa piegata all'indietro e il colore che gli gocciolava sul viso. Dipinse più di trecento figure."
          ],
          "cards": [
            {
              "img": "michelangelo",
              "rows": [
                [
                  "Nome",
                  "Michelangelo Buonarroti"
                ],
                [
                  "Nato",
                  "1475, a Caprese, in Toscana"
                ],
                [
                  "Morto",
                  "1564, a Roma"
                ],
                [
                  "Mestiere",
                  "scultore, pittore, architetto e poeta"
                ],
                [
                  "Famoso per",
                  "il David, la volta della Cappella Sistina e la cupola di San Pietro"
                ]
              ]
            }
          ],
          "leo": "Attacca un foglio sotto il banco e prova a disegnarci sopra con la testa all'indietro. Stancante, vero? Immagina di farlo per quattro anni!",
          "look": [
            {
              "title": "Il David",
              "artist": "Michelangelo Buonarroti",
              "date": "1501-1504",
              "place": "Firenze, Galleria dell'Accademia",
              "file": "opera_3_4_david",
              "text": "Guarda lo sguardo concentrato e la fronte aggrottata: David non ha ancora combattuto. Sta studiando il gigante prima di lanciargli la pietra. Sulla spalla sinistra si vede la fionda."
            },
            {
              "title": "La creazione di Adamo",
              "artist": "Michelangelo Buonarroti",
              "date": "circa 1511",
              "place": "Città del Vaticano, Cappella Sistina",
              "file": "opera_3_4_adamo",
              "optional": true,
              "text": "Dio, circondato dagli angeli, allunga il dito verso Adamo per dargli la vita. Le due dita quasi si toccano, ma non del tutto: in quel piccolo spazio c'è tutta l'attesa del momento."
            }
          ],
          "know": "Michelangelo era anche un poeta. In una poesia scrisse, scherzando, che a forza di dipingere la volta gli era venuta la barba rivolta verso il cielo e la pancia attaccata al mento!"
        },
        {
          "id": "3.5",
          "title": "Raffaello e Tiziano",
          "img": "cap3_05_raffaello",
          "alt": "In una grande sala del Vaticano, un giovane pittore elegante dipinge un affresco con filosofi che discutono sotto grandi archi, aiutato dai suoi allievi.",
          "body": [
            "Raffaello Sanzio nacque a Urbino ed era figlio di un pittore. Era gentile, elegante e simpatico a tutti, e imparò presto da artisti importanti, come Leonardo e Michelangelo. I suoi quadri sono pieni di equilibrio e di armonia: ogni cosa sembra essere al posto giusto.",
            "Dipinse moltissime Madonne con il Bambino, dolcissime, e decorò le stanze del papa in Vaticano con grandi affreschi. Aveva una bottega con tanti allievi che lo aiutavano. Morì giovanissimo, a soli trentasette anni, e fu sepolto nel Pantheon, a Roma.",
            "Intanto a Venezia lavorava Tiziano. I pittori veneziani amavano soprattutto il colore e la luce: invece di disegnare prima i contorni, costruivano le figure direttamente con il colore, pennellata dopo pennellata. Tiziano visse a lungo e ritrasse re, imperatori e papi."
          ],
          "cards": [
            {
              "img": "raffaello",
              "rows": [
                [
                  "Nome",
                  "Raffaello Sanzio"
                ],
                [
                  "Nato",
                  "1483, a Urbino"
                ],
                [
                  "Morto",
                  "1520, a Roma"
                ],
                [
                  "Mestiere",
                  "pittore e architetto"
                ],
                [
                  "Famoso per",
                  "le dolcissime Madonne e gli affreschi delle Stanze in Vaticano"
                ]
              ]
            }
          ],
          "leo": "Raffaello disegnava tantissime volte la stessa figura, finché non gli sembrava perfetta. Prova anche tu a disegnare più volte lo stesso oggetto: vedrai che ogni volta migliora!",
          "look": [
            {
              "title": "La Scuola di Atene",
              "artist": "Raffaello Sanzio",
              "date": "1509-1511",
              "place": "Città del Vaticano, Stanze di Raffaello",
              "file": "opera_3_5_scuola_atene",
              "text": "Sotto grandi archi, i filosofi dell'antica Grecia discutono, leggono, scrivono e insegnano. Al centro ci sono Platone e Aristotele. Raffaello diede ad alcuni di loro il volto di artisti del suo tempo: si dice che Platone abbia la barba lunga di Leonardo. E a destra, quasi sul bordo, c'è Raffaello stesso, che guarda verso di noi!"
            },
            {
              "title": "L'Assunta",
              "artist": "Tiziano Vecellio",
              "date": "1516-1518",
              "place": "Venezia, Basilica dei Frari",
              "file": "opera_3_5_assunta",
              "optional": true,
              "text": "Maria sale verso il cielo su una nuvola, circondata da angioletti, mentre in basso gli apostoli la guardano a bocca aperta. Guarda che rossi accesi: il colore era il punto di forza dei pittori veneziani."
            }
          ],
          "know": "Due angioletti di Raffaello sono diventati famosissimi. Stanno in fondo al quadro «Madonna Sistina», appoggiati sui gomiti, con un'aria un po' annoiata. Oggi si trovano su cartoline, tazze e magliette di tutto il mondo!"
        }
      ],
      "summary": [
        "Nel Rinascimento gli artisti riscoprono l'arte antica e studiano la natura; lavorano nelle botteghe insieme ai loro allievi.",
        "Brunelleschi costruì la cupola di Firenze e scoprì le regole della prospettiva.",
        "Botticelli dipinse figure leggere e piene di grazia, come nella «Primavera».",
        "Leonardo da Vinci fu pittore, scienziato e inventore: inventò lo sfumato e dipinse la Gioconda.",
        "Michelangelo scolpì il David e dipinse la Cappella Sistina; Raffaello cercò l'armonia, Tiziano il colore."
      ],
      "quiz": [
        {
          "q": "Che cosa vuol dire «Rinascimento»?",
          "a": [
            "nascere di nuovo",
            "grande pittura",
            "il tempo dei re"
          ]
        },
        {
          "q": "Che cosa permette di fare la prospettiva?",
          "a": [
            "disegnare spazi che sembrano profondi",
            "mescolare i colori",
            "scolpire il marmo"
          ]
        },
        {
          "q": "Come scriveva Leonardo nei suoi quaderni?",
          "a": [
            "al contrario, da destra a sinistra",
            "solo in greco",
            "con un codice di numeri"
          ]
        },
        {
          "q": "Chi è il personaggio della Bibbia scolpito da Michelangelo a Firenze?",
          "a": [
            "David",
            "Golia",
            "Noè"
          ]
        },
        {
          "q": "Che cosa amavano soprattutto i pittori veneziani come Tiziano?",
          "a": [
            "il colore e la luce",
            "l'oro dei mosaici",
            "le figure di profilo"
          ]
        }
      ],
      "game": "Gioco della prospettiva: disegnate una strada dritta che va verso l'orizzonte. Segnate un puntino al centro dell'orizzonte: è il punto di fuga. Tirate i bordi della strada e i lati delle case fino al puntino, e disegnate gli alberi sempre più piccoli man mano che si allontanano.",
      "words": [
        [
          "Rinascimento",
          "il periodo del Quattrocento e del Cinquecento in cui gli artisti riscoprono l'arte antica e studiano la natura."
        ],
        [
          "Bottega",
          "il laboratorio dove il maestro lavorava insieme ai suoi aiutanti e allievi."
        ],
        [
          "Cupola",
          "un tetto a forma di mezza sfera che copre un grande spazio."
        ],
        [
          "Prospettiva",
          "il modo di disegnare le cose in modo che sembrino vicine o lontane, come nella realtà."
        ],
        [
          "Punto di fuga",
          "il punto in cui, in un disegno in prospettiva, si incontrano le linee che vanno in profondità."
        ],
        [
          "Sfumato",
          "la tecnica di Leonardo: contorni morbidi, come avvolti nella nebbia."
        ],
        [
          "Ritratto",
          "un'opera che rappresenta una persona precisa."
        ]
      ]
    },
    {
      "n": 4,
      "title": "Il Seicento e il Settecento",
      "subtitle": "Luci, ombre e meraviglie barocche",
      "img": "cap4_00_apertura",
      "alt": "Una grande piazza di Roma con fontane, statue e una chiesa dalla facciata curva; la gente passeggia, mentre in un angolo un pittore dipinge la scena.",
      "intro": [
        "Siamo nel Seicento, circa quattrocento anni fa. Gli artisti vogliono stupire chi guarda: usano luci e ombre fortissime, linee curve, statue che sembrano muoversi, chiese e fontane piene di meraviglia. Questo stile si chiama Barocco.",
        "In questo capitolo incontreremo un pittore che dipingeva con la luce, una grande pittrice, uno scultore che faceva sembrare il marmo morbido come la pelle, i pittori dell'Olanda e un artista che dipingeva Venezia come una fotografia."
      ],
      "leo": "Benvenuti nel Barocco! Qui niente è semplice: ogni cosa vuole lasciarti a bocca aperta.",
      "sections": [
        {
          "id": "4.1",
          "title": "Caravaggio",
          "img": "cap4_01_caravaggio",
          "alt": "In una stanza buia, un pittore dipinge alla luce di una sola finestra in alto, mentre alcuni modelli posano con gli abiti della gente del popolo.",
          "body": [
            "Michelangelo Merisi nacque a Milano, ma è conosciuto con il nome del paese della sua famiglia: Caravaggio, vicino a Bergamo. Da giovane andò a Roma, dove in pochi anni diventò il pittore più famoso e più discusso della città.",
            "Caravaggio dipingeva le storie dei santi usando come modelli le persone che incontrava per strada: lavoratori, giocatori di carte, ragazzi del popolo, con i vestiti consumati e i piedi sporchi. Molti rimasero scandalizzati, ma altri capirono che quei quadri erano più veri di tutti gli altri.",
            "Il suo più grande talento fu la luce che metteva nei dipinti. Nei suoi quadri lo sfondo è quasi tutto buio, e un fascio di luce, come un riflettore a teatro, illumina all'improvviso i personaggi e i gesti più importanti. Questo forte contrasto tra luce e ombra si chiama chiaroscuro."
          ],
          "cards": [
            {
              "img": "caravaggio",
              "rows": [
                [
                  "Nome",
                  "Michelangelo Merisi, detto Caravaggio"
                ],
                [
                  "Nato",
                  "1571, a Milano"
                ],
                [
                  "Morto",
                  "1610, a Porto Ercole, in Toscana"
                ],
                [
                  "Mestiere",
                  "pittore"
                ],
                [
                  "Famoso per",
                  "la luce che esce dal buio e i personaggi presi dalla vita di tutti i giorni"
                ]
              ]
            }
          ],
          "leo": "Prendi una torcia e, in una stanza buia, illumina un oggetto da un lato solo: ecco il chiaroscuro di Caravaggio!",
          "look": [
            {
              "title": "La vocazione di san Matteo",
              "artist": "Caravaggio",
              "date": "1599-1600",
              "place": "Roma, Chiesa di San Luigi dei Francesi",
              "file": "opera_4_1_vocazione",
              "text": "Matteo, un esattore delle tasse, sta contando le monete seduto a un tavolo con altri uomini. Da destra entra Gesù e lo indica. La luce entra insieme a lui, nella stessa direzione del suo gesto. Matteo indica sé stesso, come per dire: «Proprio io?»"
            },
            {
              "title": "Canestra di frutta",
              "artist": "Caravaggio",
              "date": "circa 1599",
              "place": "Milano, Pinacoteca Ambrosiana",
              "file": "opera_4_1_canestra",
              "optional": true,
              "text": "È una delle prime nature morte della storia: soltanto un cesto di frutta, senza persone. Guarda bene: la mela ha il buchino di un verme e alcune foglie sono secche. Caravaggio dipingeva le cose come sono davvero, anche quando non sono perfette."
            }
          ],
          "know": "Caravaggio aveva un carattere difficile e si cacciava spesso nei guai. Per questo passò gli ultimi anni della sua vita spostandosi da una città all'altra: Napoli, Malta, la Sicilia. Ma dovunque andasse, continuava a dipingere capolavori."
        },
        {
          "id": "4.2",
          "title": "Artemisia Gentileschi",
          "img": "cap4_02_artemisia",
          "alt": "Nella bottega del padre, una giovane donna dipinge un grande quadro davanti al cavalletto, con la tavolozza in mano, mentre il padre la osserva soddisfatto.",
          "body": [
            "Nel Seicento era quasi impossibile per una donna diventare pittrice. Le ragazze non potevano frequentare le botteghe né studiare nelle accademie. Artemisia Gentileschi, però, era figlia di un pittore, Orazio, che le insegnò il mestiere fin da bambina.",
            "Artemisia diventò bravissima, più brava di tanti pittori uomini. Usava la luce forte e le ombre profonde come Caravaggio, e dipingeva soprattutto donne coraggiose della Bibbia e della storia, protagoniste delle loro avventure.",
            "Fu la prima donna a essere accolta nell'Accademia delle Arti del Disegno di Firenze. Lavorò a Roma, a Firenze, a Venezia, a Napoli e perfino a Londra, alla corte del re d'Inghilterra."
          ],
          "cards": [
            {
              "img": "artemisia",
              "rows": [
                [
                  "Nome",
                  "Artemisia Gentileschi"
                ],
                [
                  "Nata",
                  "1593, a Roma"
                ],
                [
                  "Morta",
                  "dopo il 1654, a Napoli"
                ],
                [
                  "Mestiere",
                  "pittrice"
                ],
                [
                  "Famosa per",
                  "essere stata una delle prime grandi pittrici della storia"
                ]
              ]
            }
          ],
          "leo": "Per secoli quasi nessuno ricordava il nome di Artemisia. Oggi le sue opere sono esposte nei musei più importanti del mondo!",
          "look": [
            {
              "title": "Autoritratto come allegoria della Pittura",
              "artist": "Artemisia Gentileschi",
              "date": "circa 1638-1639",
              "place": "Londra, Royal Collection",
              "file": "opera_4_2_artemisia",
              "text": "Artemisia si è dipinta mentre lavora, con il pennello in una mano e la tavolozza nell'altra, i capelli un po' in disordine e le maniche rimboccate. Non è in posa: è una pittrice al lavoro. E si rappresenta come la Pittura in persona!"
            }
          ],
          "know": "Artemisia scriveva ai suoi clienti con grande sicurezza. In una lettera promise: «Le farò vedere quello che sa fare una donna»."
        },
        {
          "id": "4.3",
          "title": "Bernini e la Roma barocca",
          "img": "cap4_03_bernini",
          "alt": "In una piazza di Roma, operai e scultori montano una grande fontana con statue di giganti, animali e un obelisco, mentre i bambini guardano incantati.",
          "body": [
            "Gian Lorenzo Bernini fu lo scultore e l'architetto che cambiò il volto di Roma. Era un ragazzo prodigio: da giovanissimo creò statue che lasciarono tutti a bocca aperta.",
            "Nelle sue sculture il marmo, che è durissimo, sembra diventare morbido: le dita affondano nella pelle, i capelli si muovono al vento, le foglie spuntano dalle mani. Le sue statue non stanno ferme: sono colte nel momento più emozionante dell'azione.",
            "Bernini progettò anche il grande colonnato di piazza San Pietro, che accoglie i visitatori come due braccia aperte, e tante fontane spettacolari, che fanno di Roma una città piena d'acqua e di meraviglia."
          ],
          "cards": [
            {
              "img": "bernini",
              "rows": [
                [
                  "Nome",
                  "Gian Lorenzo Bernini"
                ],
                [
                  "Nato",
                  "1598, a Napoli"
                ],
                [
                  "Morto",
                  "1680, a Roma"
                ],
                [
                  "Mestiere",
                  "scultore e architetto"
                ],
                [
                  "Famoso per",
                  "le statue che sembrano vive, il colonnato di San Pietro e le fontane di Roma"
                ]
              ]
            }
          ],
          "leo": "Le statue di Bernini vanno guardate girandoci intorno: da ogni lato si scopre qualcosa di diverso, come in un film!",
          "look": [
            {
              "title": "La Fontana dei Quattro Fiumi",
              "artist": "Gian Lorenzo Bernini",
              "date": "1648-1651",
              "place": "Roma, Piazza Navona",
              "file": "opera_4_3_quattro_fiumi",
              "text": "Quattro giganti rappresentano quattro grandi fiumi di quattro continenti: il Danubio, il Nilo, il Gange e il Rio della Plata. Tra le rocce si nascondono animali: un leone, un cavallo, un serpente, un delfino e perfino un armadillo. Al centro si alza un antico obelisco."
            },
            {
              "title": "Apollo e Dafne",
              "artist": "Gian Lorenzo Bernini",
              "date": "1622-1625",
              "place": "Roma, Galleria Borghese",
              "file": "opera_4_3_apollo_dafne",
              "optional": true,
              "text": "Il dio Apollo insegue la ninfa Dafne, ma proprio mentre la raggiunge lei si trasforma in un albero di alloro: dalle dita spuntano foglie e i piedi diventano radici. Sembra impossibile che sia tutto di marmo!"
            }
          ],
          "know": "Il gigante del Nilo, nella Fontana dei Quattro Fiumi, ha la testa coperta da un velo. Ai tempi di Bernini nessuno sapeva ancora dove nascesse quel fiume: la sua sorgente era un mistero."
        },
        {
          "id": "4.4",
          "title": "Rembrandt e Vermeer",
          "img": "cap4_04_olanda",
          "alt": "In una casa olandese, una ragazza versa il latte vicino a una finestra luminosa, mentre un pittore la ritrae davanti al cavalletto; fuori si vedono un canale e le barche.",
          "body": [
            "Nel Seicento l'Olanda era un paese ricco di mercanti, di navi e di commerci. Qui i quadri non li compravano soltanto i re e le chiese: anche le famiglie e i commercianti volevano un quadro per la propria casa. I pittori dipingevano allora i soggetti più amati dalla gente: ritratti, paesaggi, nature morte e scene di vita quotidiana.",
            "Rembrandt fu il più grande di loro. Era un maestro della luce e dell'ombra, come Caravaggio, e fece quasi cento autoritratti, tra quadri, disegni e incisioni: da giovane, da adulto e da vecchio, senza nascondere le rughe e la stanchezza. Sono come un diario della sua vita, fatto di immagini.",
            "Johannes Vermeer, invece, dipinse pochissimi quadri, meno di quaranta, ma tutti preziosi: stanze tranquille, illuminate da una finestra, dove una ragazza legge una lettera, suona uno strumento o versa il latte. Sembrano momenti di silenzio fermati per sempre."
          ],
          "cards": [
            {
              "img": "rembrandt",
              "rows": [
                [
                  "Nome",
                  "Rembrandt van Rijn"
                ],
                [
                  "Nato",
                  "1606, a Leida, in Olanda"
                ],
                [
                  "Morto",
                  "1669, ad Amsterdam"
                ],
                [
                  "Mestiere",
                  "pittore e incisore"
                ],
                [
                  "Famoso per",
                  "la luce dorata dei suoi quadri e i tantissimi autoritratti"
                ]
              ]
            }
          ],
          "leo": "Rembrandt si guardava allo specchio per dipingersi. Prova anche tu: disegna il tuo viso allo specchio facendo una faccia arrabbiata, poi una sorpresa, poi una felice!",
          "look": [
            {
              "title": "La ronda di notte",
              "artist": "Rembrandt",
              "date": "1642",
              "place": "Amsterdam, Rijksmuseum",
              "file": "opera_4_4_ronda",
              "text": "È un quadro gigantesco, largo più di quattro metri. Rappresenta una compagnia di soldati della città che si prepara a partire, tra lance, tamburi, bandiere e un cane che abbaia. In mezzo a loro, una bambina tutta illuminata porta appesa alla cintura una gallina!"
            },
            {
              "title": "La ragazza con l'orecchino di perla",
              "artist": "Johannes Vermeer",
              "date": "circa 1665",
              "place": "L'Aia, Mauritshuis",
              "file": "opera_4_4_perla",
              "optional": true,
              "text": "Una ragazza si volta verso di noi, come se l'avessimo appena chiamata. Ha un turbante blu e giallo e una grande perla all'orecchio, fatta soltanto con un paio di pennellate di bianco."
            }
          ],
          "know": "In realtà «La ronda di notte» non si svolge di notte! Con il tempo la vernice si era scurita e faceva sembrare buia tutta la scena: per questo il quadro ha preso questo nome."
        },
        {
          "id": "4.5",
          "title": "Canaletto e le vedute di Venezia",
          "img": "cap4_05_canaletto",
          "alt": "Sulla riva di un canale di Venezia, un pittore guarda dentro una scatola di legno con una lente e disegna, mentre le gondole passano davanti a palazzi colorati.",
          "body": [
            "Nel Settecento molti giovani nobili inglesi, francesi e tedeschi facevano un lungo viaggio in Italia per completare la loro educazione: lo chiamavano «Grand Tour». Visitavano Roma, Firenze, Napoli e soprattutto Venezia. E come oggi si comprano le cartoline o si scattano fotografie, allora si compravano quadri della città da portare a casa come ricordo.",
            "Il pittore più famoso di queste vedute era il veneziano Giovanni Antonio Canal, detto Canaletto. Dipingeva Venezia con una precisione incredibile: ogni palazzo, ogni finestra, ogni gondola, ogni riflesso nell'acqua.",
            "Per riuscirci, forse si aiutava con la camera ottica: una scatola con una lente che proiettava l'immagine della città su un foglio, in modo da poterne ricalcare i contorni. È un antenato della macchina fotografica!"
          ],
          "cards": [
            {
              "img": "canaletto",
              "rows": [
                [
                  "Nome",
                  "Giovanni Antonio Canal, detto Canaletto"
                ],
                [
                  "Nato",
                  "1697, a Venezia"
                ],
                [
                  "Morto",
                  "1768, a Venezia"
                ],
                [
                  "Mestiere",
                  "pittore"
                ],
                [
                  "Famoso per",
                  "le vedute di Venezia, precise come fotografie"
                ]
              ]
            }
          ],
          "leo": "Guarda fuori dalla finestra della tua classe e prova a disegnare tutto quello che vedi, con la massima precisione: case, alberi, lampioni. Ecco la tua veduta!",
          "look": [
            {
              "title": "Il ritorno del Bucintoro al Molo nel giorno dell'Ascensione",
              "artist": "Canaletto",
              "date": "circa 1728",
              "place": "Mosca, Museo Puškin",
              "file": "opera_4_5_bucintoro",
              "text": "Ogni anno, nel giorno dell'Ascensione, il doge di Venezia usciva in mare sul Bucintoro, una splendida nave tutta d'oro, e gettava un anello nell'acqua: era lo «sposalizio del mare». Canaletto dipinse la festa, con centinaia di barche e la folla sulla riva."
            }
          ],
          "know": "Canaletto ebbe così tanto successo con i turisti inglesi che si trasferì per alcuni anni a Londra, dove dipinse il fiume Tamigi e i palazzi della città."
        }
      ],
      "summary": [
        "Nel Seicento nasce il Barocco: un'arte che vuole stupire, con luci forti, linee curve e movimento.",
        "Caravaggio dipinse persone del popolo, illuminate da una luce che esce dal buio.",
        "Artemisia Gentileschi fu una delle prime grandi pittrici della storia.",
        "Bernini diede al marmo un effetto di morbidezza viva e riempì Roma di fontane e di piazze.",
        "In Olanda Rembrandt e Vermeer dipinsero ritratti e scene di vita quotidiana; nel Settecento Canaletto dipinse vedute di Venezia precise come fotografie."
      ],
      "quiz": [
        {
          "q": "Che cosa c'è di speciale nella luce dei quadri di Caravaggio?",
          "a": [
            "illumina i personaggi in mezzo al buio",
            "è sempre azzurra",
            "viene dalla luna"
          ]
        },
        {
          "q": "Chi insegnò a dipingere ad Artemisia Gentileschi?",
          "a": [
            "suo padre, il pittore Orazio",
            "Caravaggio",
            "un monaco"
          ]
        },
        {
          "q": "Quale materiale Bernini faceva sembrare morbido come la pelle?",
          "a": [
            "il marmo",
            "il legno",
            "il vetro"
          ]
        },
        {
          "q": "Che cosa ha fatto Rembrandt tantissime volte?",
          "a": [
            "il suo autoritratto",
            "le piramidi",
            "i mosaici"
          ]
        },
        {
          "q": "Che cosa sono le «vedute» di Canaletto?",
          "a": [
            "quadri molto precisi di una città",
            "ritratti di re",
            "statue di marmo"
          ]
        }
      ],
      "game": "Gioco del chiaroscuro: oscurate la classe e illuminate con una torcia un compagno in posa, da un lato solo. Gli altri disegnano con una matita soltanto le ombre, lasciando bianco il foglio dove arriva la luce.",
      "words": [
        [
          "Barocco",
          "lo stile del Seicento, pieno di movimento, di curve e di effetti che stupiscono."
        ],
        [
          "Chiaroscuro",
          "il contrasto tra le parti illuminate e quelle in ombra di un'opera."
        ],
        [
          "Natura morta",
          "un quadro che rappresenta oggetti, fiori, frutta o cibi."
        ],
        [
          "Autoritratto",
          "il ritratto che un artista fa di sé stesso."
        ],
        [
          "Colonnato",
          "una lunga fila di colonne, come quella di piazza San Pietro."
        ],
        [
          "Veduta",
          "un quadro che rappresenta con precisione una città o un paesaggio."
        ],
        [
          "Camera ottica",
          "una scatola con una lente che proietta l'immagine di un paesaggio su un foglio."
        ]
      ]
    },
    {
      "n": 5,
      "title": "Dal Neoclassicismo al Romanticismo",
      "subtitle": "Statue perfette, tempeste, sentimenti e la nascita della fotografia",
      "img": "cap5_00_apertura",
      "alt": "In uno studio pieno di statue bianche, uno scultore leviga il marmo; dalla finestra si vede un paesaggio di montagne sotto un cielo in tempesta.",
      "intro": [
        "Siamo alla fine del Settecento, circa duecentocinquanta anni fa. In Campania, sotto la cenere del Vesuvio, si stanno scoprendo le antiche città romane di Ercolano e di Pompei. Tutti si innamorano di nuovo dell'arte antica: nasce il Neoclassicismo.",
        "Poco dopo, nell'Ottocento, arriva il Romanticismo: gli artisti vogliono esprimere i sentimenti, l'amore per la natura selvaggia e per la patria. E nello stesso secolo nasce un'invenzione che cambierà tutto: la fotografia."
      ],
      "leo": "Shh… siamo nello studio di uno scultore. Non toccare le statue: sono appena state lucidate!",
      "sections": [
        {
          "id": "5.1",
          "title": "Canova e il Neoclassicismo",
          "img": "cap5_01_canova",
          "alt": "Nel suo studio, alla luce di una candela, uno scultore lucida una statua bianca di marmo, mentre gli aiutanti sbozzano altri blocchi.",
          "body": [
            "Il Neoclassicismo è l'arte che si ispira all'arte classica, cioè a quella degli antichi Greci e Romani. Gli artisti cercano la calma, l'equilibrio e la bellezza ideale: forme pure, linee eleganti, niente esagerazioni.",
            "Il più grande scultore neoclassico fu Antonio Canova, nato a Possagno, un paesino del Veneto. Suo nonno era uno scalpellino, cioè un lavoratore della pietra, e Antonio imparò da lui a usare lo scalpello fin da bambino.",
            "Le statue di Canova sono di un marmo bianchissimo e liscio, che sembra di velluto. Per ottenerlo, dopo averle scolpite, le lucidava a lungo con pietre speciali e alla fine le ricopriva con una cera leggera. A volte mostrava le sue opere di sera, alla luce delle candele, per farne risaltare le forme."
          ],
          "cards": [
            {
              "img": "canova",
              "rows": [
                [
                  "Nome",
                  "Antonio Canova"
                ],
                [
                  "Nato",
                  "1757, a Possagno, in Veneto"
                ],
                [
                  "Morto",
                  "1822, a Venezia"
                ],
                [
                  "Mestiere",
                  "scultore"
                ],
                [
                  "Famoso per",
                  "le statue di marmo bianchissimo, calme ed eleganti"
                ]
              ]
            }
          ],
          "leo": "Le statue di Canova sono così lisce che viene voglia di accarezzarle. Ma nei musei, mi raccomando, si guarda con gli occhi e non con le mani!",
          "look": [
            {
              "title": "Amore e Psiche",
              "artist": "Antonio Canova",
              "date": "1787-1793",
              "place": "Parigi, Museo del Louvre",
              "file": "opera_5_1_amore_psiche",
              "text": "Racconta una favola antica: Psiche è caduta in un sonno profondissimo e Amore, il dio con le ali, scende dal cielo per svegliarla. I due si abbracciano in un intreccio di braccia e di ali: guarda bene, le loro forme disegnano una grande X."
            }
          ],
          "know": "Napoleone chiese a Canova di scolpire una sua statua. Canova lo rappresentò come un dio antico, alto più di tre metri. A Napoleone, però, la statua non piacque, e oggi si trova a Londra, proprio nella casa del duca che lo sconfisse nella battaglia di Waterloo!"
        },
        {
          "id": "5.2",
          "title": "Friedrich e Turner: la natura e le tempeste",
          "img": "cap5_02_romanticismo",
          "alt": "Un pittore, seduto su una roccia in montagna con un taccuino, disegna le nuvole e la nebbia, mentre in lontananza il cielo si oscura per un temporale sul mare.",
          "body": [
            "Il Romanticismo nasce in Germania e in Inghilterra. Gli artisti romantici non cercano più la calma e l'equilibrio, ma le emozioni forti: la meraviglia, la paura, la nostalgia, la solitudine. E la natura diventa la grande protagonista: montagne altissime, mari in tempesta, nebbie, tramonti infuocati.",
            "Il tedesco Caspar David Friedrich dipingeva piccole figure umane, spesso viste di spalle, davanti a paesaggi immensi. Così chi guarda il quadro si mette al loro posto e prova la stessa emozione: sentirsi piccoli davanti alla grandezza della natura.",
            "L'inglese William Turner, invece, amava la luce, il fuoco, il vento e la pioggia. Nei suoi quadri le forme si sciolgono nel colore, come in un vortice. Si racconta che una volta si fece legare all'albero di una nave durante una tempesta, per osservarla da vicino."
          ],
          "cards": [
            {
              "img": "friedrich",
              "rows": [
                [
                  "Nome",
                  "Caspar David Friedrich"
                ],
                [
                  "Nato",
                  "1774, a Greifswald, in Germania"
                ],
                [
                  "Morto",
                  "1840, a Dresda, in Germania"
                ],
                [
                  "Mestiere",
                  "pittore"
                ],
                [
                  "Famoso per",
                  "i paesaggi silenziosi con piccole figure viste di spalle"
                ]
              ]
            }
          ],
          "leo": "La prossima volta che c'è un temporale, guarda il cielo dalla finestra: quanti colori diversi riesci a contare nelle nuvole?",
          "look": [
            {
              "title": "Viandante sul mare di nebbia",
              "artist": "Caspar David Friedrich",
              "date": "circa 1818",
              "place": "Amburgo, Kunsthalle",
              "file": "opera_5_2_viandante",
              "text": "Un uomo, in cima a una roccia, guarda un mare di nebbia da cui spuntano le cime dei monti. Non vediamo il suo viso: guardiamo il paesaggio insieme a lui, come se fossimo lì anche noi."
            },
            {
              "title": "Pioggia, vapore e velocità",
              "artist": "William Turner",
              "date": "1844",
              "place": "Londra, National Gallery",
              "file": "opera_5_2_pioggia_vapore",
              "optional": true,
              "text": "Un treno a vapore corre su un ponte sotto la pioggia, proprio verso di noi. Allora i treni erano una novità incredibile! Cerca bene: davanti alla locomotiva c'è una piccola lepre che scappa."
            }
          ],
          "know": "Turner lasciò tutte le sue opere alla sua nazione. Oggi il suo volto è stampato sulla banconota inglese da venti sterline."
        },
        {
          "id": "5.3",
          "title": "Hayez e il Romanticismo italiano",
          "img": "cap5_03_hayez",
          "alt": "Nell'aula di un'accademia di Milano, un pittore dipinge un grande quadro di storia, mentre gli studenti lo osservano; dalla finestra si vedono sventolare bandiere tricolori.",
          "body": [
            "In Italia, nell'Ottocento, il Romanticismo si unisce a un grande sogno: fare dell'Italia un solo paese. Allora l'Italia era divisa in tanti Stati, e in parte era governata da sovrani stranieri. Il periodo delle lotte per l'unità si chiama Risorgimento.",
            "Il pittore più famoso del Romanticismo italiano fu Francesco Hayez, nato a Venezia e vissuto a Milano, dove insegnò all'Accademia di Brera. Dipingeva grandi quadri di storia, con episodi del Medioevo pieni di significati che tutti, allora, capivano bene: parlando del passato, Hayez parlava in realtà dell'Italia del suo tempo.",
            "Fu anche un bravissimo ritrattista: dipinse i volti di molti personaggi importanti della sua epoca, come lo scrittore Alessandro Manzoni e il politico Camillo Benso, conte di Cavour."
          ],
          "cards": [
            {
              "img": "hayez",
              "rows": [
                [
                  "Nome",
                  "Francesco Hayez"
                ],
                [
                  "Nato",
                  "1791, a Venezia"
                ],
                [
                  "Morto",
                  "1882, a Milano"
                ],
                [
                  "Mestiere",
                  "pittore"
                ],
                [
                  "Famoso per",
                  "i quadri di storia, i ritratti e «Il bacio»"
                ]
              ]
            }
          ],
          "leo": "Guarda bene «Il bacio»: a sinistra, sul muro, si vede un'ombra. Qualcuno sta forse spiando i due innamorati?",
          "look": [
            {
              "title": "Il bacio",
              "artist": "Francesco Hayez",
              "date": "1859",
              "place": "Milano, Pinacoteca di Brera",
              "file": "opera_5_3_bacio",
              "text": "Due giovani si salutano con un bacio sulla scala di un castello medievale. Lui ha già un piede sul gradino: sta per partire, forse per andare a combattere. Il quadro fu dipinto nel 1859, l'anno in cui l'Italia combatteva per la sua indipendenza, e i colori dei vestiti fanno pensare alle bandiere dell'Italia e della Francia, sua alleata."
            }
          ],
          "know": "Hayez dipinse «Il bacio» in più versioni. In una di queste il vestito della ragazza è bianco, e insieme al rosso e al verde dei vestiti di lui forma proprio il tricolore italiano!"
        },
        {
          "id": "5.4",
          "title": "L'invenzione della fotografia",
          "img": "cap5_04_fotografia",
          "alt": "In uno studio dell'Ottocento, una famiglia sta seduta immobile davanti a una grande macchina fotografica di legno coperta da un panno nero, mentre il fotografo conta i secondi.",
          "body": [
            "Per migliaia di anni, per avere l'immagine di una persona o di un luogo bisognava disegnarla o dipingerla. Poi, all'inizio dell'Ottocento, alcuni inventori trovarono il modo di fissare la luce su una lastra: era nata la fotografia, una parola greca che significa «scrittura con la luce».",
            "La fotografia più antica arrivata fino a noi la scattò il francese Nicéphore Niépce, nel 1826 o nel 1827, dalla finestra della sua casa di campagna. Per catturare l'immagine servirono molte ore, forse addirittura giorni.",
            "Nel 1839 Louis Daguerre presentò un metodo più rapido, il dagherrotipo. Le persone, però, dovevano restare immobili per parecchi minuti: anche per questo nelle vecchie fotografie quasi nessuno sorride! Davanti alla fotografia molti pittori si chiesero: «A che cosa serve dipingere, se una macchina può copiare la realtà?». E cominciarono a cercare strade nuove."
          ],
          "leo": "Prova a stare immobile, senza muovere nemmeno un dito, per un minuto intero. Ce la fai? I primi clienti dei fotografi dovevano fare proprio così!",
          "look": [
            {
              "title": "Vista dalla finestra a Le Gras",
              "artist": "Nicéphore Niépce",
              "date": "1826-1827",
              "place": "Austin (Stati Uniti), Harry Ransom Center",
              "file": "opera_5_4_niepce",
              "text": "È la fotografia più antica che si conosca. Si riconoscono a fatica i tetti, un cortile e un albero. Durante le lunghe ore necessarie per scattarla, il sole si spostò nel cielo e illuminò prima un lato e poi l'altro degli edifici."
            },
            {
              "title": "Boulevard du Temple",
              "artist": "Louis Daguerre",
              "date": "1838",
              "place": "Monaco di Baviera, Museo nazionale bavarese",
              "file": "opera_5_4_daguerre",
              "optional": true,
              "text": "Questa via di Parigi era sempre piena di carrozze e di gente, ma nella foto sembra deserta: tutto ciò che si muoveva non è rimasto impresso. Solo un signore, in basso a sinistra, che si era fermato a farsi lucidare le scarpe, è rimasto immobile abbastanza a lungo: è la prima persona mai fotografata!"
            }
          ],
          "know": "Per aiutare i clienti a non muoversi, i fotografi usavano dei sostegni di metallo nascosti dietro la schiena, che tenevano ferma la testa."
        },
        {
          "id": "5.5",
          "title": "I Macchiaioli",
          "img": "cap5_05_macchiaioli",
          "alt": "In una campagna toscana assolata alcuni pittori dipingono all'aperto con i cavalletti, mentre in lontananza delle signore con l'ombrellino passeggiano in riva al mare.",
          "body": [
            "A Firenze, verso il 1855, un gruppo di giovani pittori si ritrovava in un caffè, il Caffè Michelangiolo, per discutere d'arte. Erano stanchi dei quadri di storia, lucidi e perfetti, dipinti chiusi nello studio. Volevano dipingere la realtà di tutti i giorni, così come appare agli occhi.",
            "Avevano notato una cosa: alla luce forte del sole, le cose non si vedono con contorni precisi, ma come macchie di colore chiaro e di colore scuro, una accanto all'altra. Così dipingevano «a macchie», e un giornalista, per prenderli in giro, li chiamò «Macchiaioli». A loro il nome piacque, e lo tennero.",
            "Il più famoso dei Macchiaioli fu Giovanni Fattori, nato a Livorno. Dipinse soldati, cavalli, contadini, buoi al lavoro nei campi e il mare della sua Toscana. Spesso i Macchiaioli dipingevano all'aperto, direttamente davanti al paesaggio."
          ],
          "cards": [
            {
              "img": "fattori",
              "rows": [
                [
                  "Nome",
                  "Giovanni Fattori"
                ],
                [
                  "Nato",
                  "1825, a Livorno"
                ],
                [
                  "Morto",
                  "1908, a Firenze"
                ],
                [
                  "Mestiere",
                  "pittore e incisore"
                ],
                [
                  "Famoso per",
                  "i quadri di soldati, cavalli e campagne toscane"
                ]
              ]
            }
          ],
          "leo": "Socchiudi gli occhi e guarda fuori dalla finestra: non vedi più i dettagli, ma solo macchie di luce e di ombra. Ecco come guardavano il mondo i Macchiaioli!",
          "look": [
            {
              "title": "La rotonda di Palmieri",
              "artist": "Giovanni Fattori",
              "date": "1866",
              "place": "Firenze, Galleria d'arte moderna di Palazzo Pitti",
              "file": "opera_5_5_rotonda",
              "text": "Sotto una tenda, in uno stabilimento balneare di Livorno, alcune signore chiacchierano guardando il mare. Il quadro è piccolissimo, lungo appena trentacinque centimetri, ma pieno di luce: guarda le macchie chiare e scure dei vestiti, della tenda e dell'ombra."
            }
          ],
          "know": "Negli stessi anni, in Francia, altri pittori stavano facendo una scoperta simile: anche loro dipingevano all'aperto, inseguendo la luce. Li incontreremo nel prossimo capitolo!"
        }
      ],
      "summary": [
        "Il Neoclassicismo si ispira all'arte antica e cerca calma e bellezza ideale: il suo grande scultore è Canova.",
        "Il Romanticismo esprime i sentimenti e la forza della natura, con pittori come Friedrich e Turner.",
        "In Italia Hayez unì il Romanticismo al sogno dell'unità d'Italia.",
        "Nell'Ottocento nasce la fotografia, che significa «scrittura con la luce».",
        "I Macchiaioli, come Fattori, dipingevano la realtà a macchie di luce e d'ombra."
      ],
      "quiz": [
        {
          "q": "A che cosa si ispira il Neoclassicismo?",
          "a": [
            "all'arte degli antichi Greci e Romani",
            "all'arte del Medioevo",
            "all'arte della preistoria"
          ]
        },
        {
          "q": "Che cosa amavano dipingere i pittori romantici?",
          "a": [
            "la natura con le sue tempeste e le sue nebbie",
            "le piramidi",
            "i mosaici d'oro"
          ]
        },
        {
          "q": "Che cosa significa la parola «fotografia»?",
          "a": [
            "scrittura con la luce",
            "disegno veloce",
            "immagine di carta"
          ]
        },
        {
          "q": "Perché nelle prime fotografie le persone non sorridono quasi mai?",
          "a": [
            "perché dovevano restare ferme a lungo",
            "perché era vietato",
            "perché erano sempre tristi"
          ]
        },
        {
          "q": "Perché i Macchiaioli si chiamano così?",
          "a": [
            "perché dipingevano a macchie di colore",
            "perché macchiavano sempre i vestiti",
            "perché vivevano in un bosco"
          ]
        }
      ],
      "game": "Gioco del fotografo: un compagno fa la «macchina fotografica» e conta lentamente fino a dieci. Gli altri si mettono in posa e devono restare perfettamente immobili, senza ridere. Chi si muove esce dalla foto!",
      "words": [
        [
          "Neoclassicismo",
          "l'arte di fine Settecento che si ispira all'arte antica, calma ed equilibrata."
        ],
        [
          "Romanticismo",
          "l'arte dell'Ottocento che esprime i sentimenti e la forza della natura."
        ],
        [
          "Paesaggio",
          "un'opera che rappresenta la natura: montagne, campagne, mari e cieli."
        ],
        [
          "Risorgimento",
          "il periodo dell'Ottocento in cui gli italiani lottarono per l'unità d'Italia."
        ],
        [
          "Fotografia",
          "l'immagine ottenuta fissando la luce su una lastra, su una pellicola o, oggi, su un sensore digitale."
        ],
        [
          "Dagherrotipo",
          "uno dei primi tipi di fotografia, inventato da Louis Daguerre."
        ],
        [
          "Macchiaioli",
          "i pittori toscani dell'Ottocento che dipingevano a macchie di luce e d'ombra."
        ]
      ]
    },
    {
      "n": 6,
      "title": "La luce e il colore",
      "subtitle": "Impressionisti, puntini e pennellate a vortice",
      "img": "cap6_00_apertura",
      "alt": "Sulla riva di un fiume, in Francia, alcuni pittori con i cavalletti dipingono all'aperto le barche, i riflessi e una famiglia che fa un picnic sotto gli alberi.",
      "intro": [
        "Siamo in Francia, circa centocinquant'anni fa. Grazie a un'invenzione semplicissima, i tubetti di colore, i pittori possono finalmente portare i colori fuori dallo studio e dipingere all'aperto: nei prati, sulle rive dei fiumi, in riva al mare.",
        "In questo capitolo incontreremo i pittori che inseguivano la luce, gli Impressionisti, e quelli che vennero subito dopo e inventarono modi nuovissimi di usare il colore."
      ],
      "leo": "Prendi il cappello e il cavalletto: oggi si dipinge all'aperto!",
      "sections": [
        {
          "id": "6.1",
          "title": "Monet e gli Impressionisti",
          "img": "cap6_01_monet",
          "alt": "In un giardino pieno di fiori, un pittore con la barba bianca e il cappello di paglia dipinge su una grande tela uno stagno con le ninfee e un ponticello verde.",
          "body": [
            "Claude Monet voleva dipingere quello che l'occhio vede in un istante: la luce che cambia, i riflessi sull'acqua, il vento tra le foglie. Per farlo usava pennellate veloci e colori puri, senza linee di contorno, e dipingeva direttamente all'aperto.",
            "Nel 1874 Monet e i suoi amici organizzarono a Parigi una mostra tutta loro, perché i giudici delle mostre ufficiali rifiutavano i loro quadri. Un critico, davanti a un quadro di Monet intitolato «Impressione, levar del sole», li prese in giro chiamandoli «Impressionisti». Proprio come era successo ai Macchiaioli, quel nome diventò il loro nome per sempre.",
            "Monet amava dipingere lo stesso soggetto molte volte, in ore e stagioni diverse: un covone di fieno, una cattedrale, un ponte. Così mostrava come la luce cambia i colori di ogni cosa. Da anziano, nel suo giardino di Giverny, dipinse per anni le ninfee del suo stagno."
          ],
          "cards": [
            {
              "img": "monet",
              "rows": [
                [
                  "Nome",
                  "Claude Monet"
                ],
                [
                  "Nato",
                  "1840, a Parigi"
                ],
                [
                  "Morto",
                  "1926, a Giverny, in Francia"
                ],
                [
                  "Mestiere",
                  "pittore"
                ],
                [
                  "Famoso per",
                  "essere il padre dell'Impressionismo e le sue ninfee"
                ]
              ]
            }
          ],
          "leo": "Scegli un albero vicino a casa e disegnalo al mattino, a mezzogiorno e al tramonto. Vedrai che i suoi colori cambiano, come nei quadri di Monet!",
          "look": [
            {
              "title": "Impressione, levar del sole",
              "artist": "Claude Monet",
              "date": "1872",
              "place": "Parigi, Museo Marmottan Monet",
              "file": "opera_6_1_impressione",
              "text": "È il porto di Le Havre all'alba, avvolto nella nebbia. Le barche sono solo macchie scure, e il sole è un piccolo disco arancione che si riflette nell'acqua con poche pennellate. Da questo quadro nasce il nome «Impressionismo»."
            },
            {
              "title": "Le ninfee",
              "artist": "Claude Monet",
              "date": "1914-1926",
              "place": "Parigi, Museo dell'Orangerie",
              "file": "opera_6_1_ninfee",
              "optional": true,
              "text": "Sono tele enormi, sistemate in due sale ovali che ti circondano tutto intorno: sembra di stare in mezzo allo stagno di Monet, tra fiori, acqua e riflessi di nuvole."
            }
          ],
          "know": "Monet si fece costruire una barca con una piccola cabina, per dipingere direttamente in mezzo al fiume. La chiamava il suo «studio galleggiante»."
        },
        {
          "id": "6.2",
          "title": "Degas e le ballerine",
          "img": "cap6_02_degas",
          "alt": "Dietro le quinte di un teatro, le piccole ballerine provano i passi e si allacciano le scarpette, mentre un pittore, seduto in un angolo, le disegna con i pastelli.",
          "body": [
            "Edgar Degas esponeva insieme agli Impressionisti, ma era diverso da loro: preferiva lavorare in studio e amava il disegno, preciso e sicuro. Il suo grande amore erano le persone in movimento: i cavalli alle corse, le cantanti, le lavandaie e soprattutto le ballerine.",
            "Degas passava ore all'Opéra di Parigi a guardare le lezioni di danza e le prove dietro le quinte. Non dipingeva soltanto gli spettacoli, ma anche i momenti in cui le ballerine si riposano, si stiracchiano, si grattano la schiena o si allacciano le scarpette.",
            "Le sue inquadrature sono originali: a volte le figure sono tagliate dal bordo del quadro, come in una fotografia scattata al volo. Degas usava molto anche il pastello, che gli permetteva di disegnare e colorare insieme, con colori morbidi e luminosi."
          ],
          "cards": [
            {
              "img": "degas",
              "rows": [
                [
                  "Nome",
                  "Edgar Degas"
                ],
                [
                  "Nato",
                  "1834, a Parigi"
                ],
                [
                  "Morto",
                  "1917, a Parigi"
                ],
                [
                  "Mestiere",
                  "pittore e scultore"
                ],
                [
                  "Famoso per",
                  "i quadri e i pastelli con le ballerine"
                ]
              ]
            }
          ],
          "leo": "Mettiti in posa come una ballerina, su un piede solo. Quanto riesci a resistere senza cadere?",
          "look": [
            {
              "title": "La lezione di danza",
              "artist": "Edgar Degas",
              "date": "1873-1876",
              "place": "Parigi, Museo d'Orsay",
              "file": "opera_6_2_lezione_danza",
              "text": "Il vecchio maestro di ballo, appoggiato al suo bastone, guida la lezione, mentre le ballerine aspettano il loro turno. Guarda la ragazza seduta sul pianoforte, a sinistra: si sta grattando la schiena! E vicino ai suoi piedi c'è un cagnolino."
            },
            {
              "title": "La piccola danzatrice di quattordici anni",
              "artist": "Edgar Degas",
              "date": "1881",
              "place": "Washington, National Gallery of Art",
              "file": "opera_6_2_danzatrice",
              "optional": true,
              "text": "È la statua di una ballerina vera, Marie, con un tutù di stoffa vera e un nastro di raso tra i capelli. Quando Degas la mostrò, la gente rimase sconcertata: nessuno aveva mai messo vestiti veri su una scultura!"
            }
          ],
          "know": "Da anziano Degas cominciò a vederci sempre meno. Allora si dedicò di più alla scultura: con le mani poteva sentire le forme, anche quando gli occhi non lo aiutavano più."
        },
        {
          "id": "6.3",
          "title": "Renoir e Berthe Morisot",
          "img": "cap6_03_renoir",
          "alt": "In un giardino di Parigi, sotto gli alberi illuminati dal sole, la gente balla e chiacchiera all'aperto; in un angolo una pittrice ritrae una mamma che guarda il suo bambino nella culla.",
          "body": [
            "Pierre-Auguste Renoir cominciò a lavorare a tredici anni, dipingendo fiori e decorazioni sui piatti di porcellana. Poi diventò uno dei pittori impressionisti più amati. Diceva che un quadro deve essere qualcosa di piacevole, allegro e grazioso: e infatti i suoi quadri sono pieni di feste, di balli, di bambini e di fiori.",
            "Renoir amava soprattutto la luce del sole che passa tra le foglie e fa danzare macchie chiare sui visi e sui vestiti.",
            "Tra gli Impressionisti c'era anche una donna: Berthe Morisot. Partecipò alla loro prima mostra, nel 1874, e a quasi tutte le altre. Con pennellate leggere e veloci dipingeva soprattutto la vita delle donne e dei bambini: la mamma che veglia il figlio, la ragazza che si pettina, i giochi in giardino."
          ],
          "cards": [
            {
              "img": "renoir",
              "rows": [
                [
                  "Nome",
                  "Pierre-Auguste Renoir"
                ],
                [
                  "Nato",
                  "1841, a Limoges, in Francia"
                ],
                [
                  "Morto",
                  "1919, a Cagnes-sur-Mer, in Francia"
                ],
                [
                  "Mestiere",
                  "pittore"
                ],
                [
                  "Famoso per",
                  "i quadri di feste, balli e bambini pieni di luce"
                ]
              ]
            },
            {
              "img": "morisot",
              "rows": [
                [
                  "Nome",
                  "Berthe Morisot"
                ],
                [
                  "Nata",
                  "1841, a Bourges, in Francia"
                ],
                [
                  "Morta",
                  "1895, a Parigi"
                ],
                [
                  "Mestiere",
                  "pittrice"
                ],
                [
                  "Famosa per",
                  "essere stata una delle prime pittrici impressioniste"
                ]
              ]
            }
          ],
          "leo": "Disegna una scena di festa con i tuoi amici: un compleanno, una gita, una partita. Quali colori useresti per far sentire l'allegria?",
          "look": [
            {
              "title": "Ballo al Moulin de la Galette",
              "artist": "Pierre-Auguste Renoir",
              "date": "1876",
              "place": "Parigi, Museo d'Orsay",
              "file": "opera_6_3_moulin",
              "text": "La domenica, sulla collina di Montmartre, la gente di Parigi andava a ballare all'aperto, sotto gli alberi. Renoir dipinse i suoi amici mentre ballano, chiacchierano e ridono. Guarda le macchie di sole sui vestiti e sui capelli: sembrano muoversi davvero!"
            },
            {
              "title": "La culla",
              "artist": "Berthe Morisot",
              "date": "1872",
              "place": "Parigi, Museo d'Orsay",
              "file": "opera_6_3_culla",
              "optional": true,
              "text": "La sorella della pittrice, Edma, guarda la sua bambina che dorme nella culla, dietro un velo leggero. Il velo trasparente è dipinto con pochissime pennellate di bianco."
            }
          ],
          "know": "Da anziano Renoir soffriva di una malattia che gli rendeva le mani rigide e doloranti. Ma non smise mai di dipingere: si faceva sistemare il pennello tra le dita e continuava a lavorare."
        },
        {
          "id": "6.4",
          "title": "Seurat e i puntini",
          "img": "cap6_04_seurat",
          "alt": "In uno studio, un pittore dipinge con pazienza una grande tela fatta di migliaia di puntini colorati, mentre un bambino la guarda da vicino e poi da lontano.",
          "body": [
            "Georges Seurat era un pittore molto paziente e appassionato di scienza. Aveva letto i libri degli studiosi dei colori e aveva scoperto una cosa curiosa: se metti tanti puntini di colori puri uno accanto all'altro, da lontano il nostro occhio li mescola da solo.",
            "Così, invece di mescolare i colori sulla tavolozza, Seurat li metteva sulla tela a piccoli punti, uno vicino all'altro. Da vicino si vedono solo puntini; allontanandosi, appaiono figure, prati, alberi e acqua pieni di luce.",
            "Questa tecnica si chiama puntinismo. Seurat lavorava lentamente, puntino dopo puntino: per il suo quadro più famoso impiegò circa due anni."
          ],
          "cards": [
            {
              "img": "seurat",
              "rows": [
                [
                  "Nome",
                  "Georges Seurat"
                ],
                [
                  "Nato",
                  "1859, a Parigi"
                ],
                [
                  "Morto",
                  "1891, a Parigi"
                ],
                [
                  "Mestiere",
                  "pittore"
                ],
                [
                  "Famoso per",
                  "il puntinismo, la pittura a puntini"
                ]
              ]
            }
          ],
          "leo": "Gioca anche tu con i puntini: intingi la punta di un bastoncino cotonato nella tempera e crea un disegno fatto solo di puntini!",
          "look": [
            {
              "title": "Una domenica pomeriggio all'isola della Grande-Jatte",
              "artist": "Georges Seurat",
              "date": "1884-1886",
              "place": "Chicago, Art Institute",
              "file": "opera_6_4_grande_jatte",
              "text": "Su un'isoletta in mezzo al fiume Senna i parigini passano la domenica: chi passeggia, chi pesca, chi legge, chi porta a spasso il cane… e c'è perfino una scimmietta al guinzaglio! È tutto fatto di piccolissimi puntini di colore: tocca l'immagine per ingrandirla e guardali da vicino."
            }
          ],
          "know": "Qualche anno dopo averlo finito, Seurat aggiunse intorno al quadro una cornice dipinta, anch'essa fatta di puntini, perché anche il bordo partecipasse al gioco dei colori."
        },
        {
          "id": "6.5",
          "title": "Van Gogh",
          "img": "cap6_05_vangogh",
          "alt": "Un pittore con il cappello di paglia dipinge un campo di girasoli sotto un sole giallissimo, vicino a un piccolo paese con una casa gialla.",
          "body": [
            "Vincent van Gogh era olandese. Prima di diventare pittore fece tanti mestieri: lavorò in una galleria d'arte, fu insegnante e predicatore tra i minatori. Cominciò a dipingere sul serio soltanto a ventisette anni, ma in circa dieci anni realizzò più di ottocento quadri e più di mille disegni!",
            "A Parigi conobbe gli Impressionisti e i loro colori chiari. Poi si trasferì nel sud della Francia, ad Arles, dove il sole era fortissimo. Lì i suoi colori diventarono accesi e brillanti: gialli intensi, blu profondi, verdi e arancioni. Le sue pennellate sono dense e spesse, e si muovono come onde, fiamme e vortici.",
            "Vincent ebbe una vita difficile: era spesso malato e solo, e in vita vendette pochissimi quadri. Gli stava sempre vicino il fratello Theo, a cui scrisse centinaia di lettere. Oggi i suoi quadri sono tra i più amati del mondo."
          ],
          "cards": [
            {
              "img": "vangogh",
              "rows": [
                [
                  "Nome",
                  "Vincent van Gogh"
                ],
                [
                  "Nato",
                  "1853, a Zundert, in Olanda"
                ],
                [
                  "Morto",
                  "1890, ad Auvers-sur-Oise, in Francia"
                ],
                [
                  "Mestiere",
                  "pittore"
                ],
                [
                  "Famoso per",
                  "i colori accesi e le pennellate a vortice, come nella «Notte stellata»"
                ]
              ]
            }
          ],
          "leo": "Prova a dipingere un cielo stellato come Vincent: usa pennellate a spirale, tanti blu diversi e stelle gialle grandi e luminose!",
          "look": [
            {
              "title": "Notte stellata",
              "artist": "Vincent van Gogh",
              "date": "1889",
              "place": "New York, Museum of Modern Art",
              "file": "opera_6_5_notte_stellata",
              "text": "Sopra un piccolo paese addormentato, il cielo è tutto in movimento: le stelle sono grandi e luminose, il vento disegna enormi vortici e la luna brilla come un sole. A sinistra un cipresso scuro sale verso il cielo come una fiamma."
            },
            {
              "title": "I girasoli",
              "artist": "Vincent van Gogh",
              "date": "1888",
              "place": "Londra, National Gallery",
              "file": "opera_6_5_girasoli",
              "optional": true,
              "text": "Van Gogh dipinse questi girasoli per decorare la camera di un amico pittore, Paul Gauguin, che stava per venirlo a trovare. Nel quadro ci sono quasi soltanto gialli: decine di gialli diversi!"
            }
          ],
          "know": "Di Van Gogh ci sono rimaste più di ottocento lettere, scritte soprattutto al fratello Theo. Spesso dentro c'erano piccoli disegni dei quadri a cui stava lavorando."
        },
        {
          "id": "6.6",
          "title": "Cézanne e Gauguin",
          "img": "cap6_06_cezanne_gauguin",
          "alt": "Da una parte un pittore dipinge mele e arance su un tavolo con una tovaglia bianca; dall'altra, su un'isola tropicale, un pittore ritrae due donne con abiti colorati tra palme e fiori.",
          "body": [
            "Paul Cézanne voleva dare più solidità alla pittura degli Impressionisti. Diceva che tutte le forme della natura si possono costruire con figure semplici: il cilindro, la sfera e il cono. I suoi paesaggi e le sue nature morte sembrano costruiti con blocchi di colore.",
            "Cézanne dipingeva lo stesso soggetto tantissime volte: la montagna Sainte-Victoire, vicino alla sua città, e le mele. Lavorava così lentamente che la frutta rischiava di marcire e i fiori di appassire: per questo a volte usava fiori finti.",
            "Paul Gauguin, invece, voleva scappare dalla città e dalla vita moderna. Partì per i mari del Sud, fino all'isola di Tahiti, e dipinse la gente del posto con colori piatti e intensissimi: rosa, viola, arancione, verde smeraldo. Non gli interessava copiare i colori veri: usava i colori per esprimere le emozioni e i sogni."
          ],
          "cards": [
            {
              "img": "cezanne",
              "rows": [
                [
                  "Nome",
                  "Paul Cézanne"
                ],
                [
                  "Nato",
                  "1839, ad Aix-en-Provence, in Francia"
                ],
                [
                  "Morto",
                  "1906, ad Aix-en-Provence"
                ],
                [
                  "Mestiere",
                  "pittore"
                ],
                [
                  "Famoso per",
                  "le nature morte con le mele e la montagna Sainte-Victoire"
                ]
              ]
            },
            {
              "img": "gauguin",
              "rows": [
                [
                  "Nome",
                  "Paul Gauguin"
                ],
                [
                  "Nato",
                  "1848, a Parigi"
                ],
                [
                  "Morto",
                  "1903, nelle isole Marchesi, nell'oceano Pacifico"
                ],
                [
                  "Mestiere",
                  "pittore e scultore"
                ],
                [
                  "Famoso per",
                  "i quadri di Tahiti, con colori intensi e piatti"
                ]
              ]
            }
          ],
          "leo": "Prova a disegnare una mela partendo da una sfera e una bottiglia partendo da un cilindro, come suggeriva Cézanne!",
          "look": [
            {
              "title": "Natura morta con mele e arance",
              "artist": "Paul Cézanne",
              "date": "circa 1899",
              "place": "Parigi, Museo d'Orsay",
              "file": "opera_6_6_mele_arance",
              "text": "Mele e arance sono appoggiate su una tovaglia bianca piena di pieghe, che sembrano montagne. Guarda bene: il piatto e la fruttiera sono un po' storti, come se li vedessimo da punti diversi nello stesso momento. Cézanne lo faceva apposta!"
            },
            {
              "title": "Arearea",
              "artist": "Paul Gauguin",
              "date": "1892",
              "place": "Parigi, Museo d'Orsay",
              "file": "opera_6_6_arearea",
              "optional": true,
              "text": "In tahitiano il titolo significa «divertimento». Due donne sono sedute sotto un albero e una suona il flauto. In primo piano c'è un cane… rosso! Gauguin sceglieva i colori con la fantasia, non copiandoli dalla realtà."
            }
          ],
          "know": "Gauguin e Van Gogh vissero insieme per circa due mesi ad Arles, nella «Casa gialla». Sognavano di fondare una comunità di pittori, ma litigavano continuamente!"
        }
      ],
      "summary": [
        "Grazie ai tubetti di colore, i pittori potevano dipingere all'aperto.",
        "Gli Impressionisti, come Monet, Renoir e Berthe Morisot, inseguivano la luce che cambia, con pennellate veloci e colori chiari.",
        "Degas dipinse le ballerine e le persone in movimento, con inquadrature nuove.",
        "Seurat inventò il puntinismo: tanti puntini di colore che l'occhio mescola da lontano.",
        "Van Gogh, Cézanne e Gauguin aprirono strade nuove: colori accesi, forme solide e colori della fantasia."
      ],
      "quiz": [
        {
          "q": "Quale invenzione permise ai pittori di dipingere più facilmente all'aperto?",
          "a": [
            "i tubetti di colore",
            "la lampadina",
            "la bicicletta"
          ]
        },
        {
          "q": "Da quale quadro nasce il nome «Impressionismo»?",
          "a": [
            "«Impressione, levar del sole» di Monet",
            "«La Gioconda» di Leonardo",
            "«Il bacio» di Hayez"
          ]
        },
        {
          "q": "Che cosa dipingeva spesso Degas?",
          "a": [
            "le ballerine",
            "le piramidi",
            "le cattedrali gotiche"
          ]
        },
        {
          "q": "Con che cosa sono fatti i quadri di Seurat?",
          "a": [
            "con tanti piccoli puntini di colore",
            "con tessere di vetro",
            "con la sabbia"
          ]
        },
        {
          "q": "In quale isola andò a dipingere Gauguin?",
          "a": [
            "a Tahiti",
            "in Sicilia",
            "in Islanda"
          ]
        }
      ],
      "game": "Gioco della luce: mettete un oggetto, per esempio una mela o una bottiglia, vicino alla finestra. Disegnatelo con i pastelli al mattino e poi di nuovo nel pomeriggio. Confrontate i disegni: le ombre e i colori sono cambiati?",
      "words": [
        [
          "Impressionismo",
          "il movimento di pittori francesi dell'Ottocento che dipingevano all'aperto la luce che cambia."
        ],
        [
          "Pennellata",
          "il segno lasciato dal pennello sulla tela."
        ],
        [
          "Pastello",
          "un bastoncino di colore in polvere pressata, per disegnare e colorare insieme."
        ],
        [
          "Inquadratura",
          "la parte della scena che l'artista sceglie di mostrare, come in una fotografia."
        ],
        [
          "Puntinismo",
          "la tecnica di dipingere con tanti piccoli puntini di colori puri."
        ],
        [
          "Tavolozza",
          "la tavoletta su cui il pittore mescola i colori."
        ],
        [
          "Colori primari",
          "il giallo, il rosso e il blu: mescolandoli si possono ottenere quasi tutti gli altri colori."
        ]
      ]
    },
    {
      "n": 7,
      "title": "Il Novecento e le avanguardie",
      "subtitle": "Colori selvaggi, forme spezzate e quadri come sogni",
      "img": "cap7_00_apertura",
      "alt": "In una città dei primi del Novecento, con le prime automobili e i tram, alcuni artisti espongono in piazza quadri colorati e stranissimi, mentre la gente li guarda incuriosita.",
      "intro": [
        "All'inizio del Novecento, poco più di cent'anni fa, il mondo cambia velocissimo: arrivano l'elettricità, il telefono, le automobili, gli aerei e il cinema. Anche gli artisti vogliono qualcosa di completamente nuovo.",
        "Nascono così le avanguardie. La parola viene dal linguaggio dei soldati: l'avanguardia è il gruppo che marcia davanti a tutti, verso territori sconosciuti. Ogni gruppo di artisti inventa un modo diverso di fare arte: colori selvaggi, forme spezzate, velocità, quadri senza figure, quadri che sembrano sogni."
      ],
      "leo": "Allacciati le cinture: in questo capitolo l'arte va a tutta velocità!",
      "sections": [
        {
          "id": "7.1",
          "title": "Gaudí, l'architetto della natura",
          "img": "cap7_01_gaudi",
          "alt": "A Barcellona gli operai costruiscono un'enorme chiesa con torri a forma di pannocchia, mentre in un parco i bambini giocano su panchine ondulate coperte di mosaici colorati, vicino a una grande lucertola di ceramica.",
          "body": [
            "Antoni Gaudí era un architetto di Barcellona, in Spagna. Amava la natura più di ogni altra cosa e osservava che in natura non esistono linee perfettamente dritte. Così i suoi edifici hanno forme curve e ondulate, che ricordano alberi, onde, conchiglie e animali.",
            "Per decorare le sue costruzioni usava il trencadís: pezzi di piastrelle, di piatti e di vetri rotti, ricomposti a mosaico in mille colori. Nel Parco Güell, a Barcellona, c'è una lunghissima panchina ondulata tutta coperta di questi frammenti colorati.",
            "La sua opera più grande è la Sagrada Família, una chiesa enorme che dentro sembra una foresta di pietra: le colonne si dividono in rami, come alberi altissimi. Gaudí ci lavorò per più di quarant'anni, e quando morì era ancora lontana dalla fine. I lavori sono continuati fino ai giorni nostri!"
          ],
          "cards": [
            {
              "img": "gaudi",
              "rows": [
                [
                  "Nome",
                  "Antoni Gaudí"
                ],
                [
                  "Nato",
                  "1852, a Reus, in Spagna"
                ],
                [
                  "Morto",
                  "1926, a Barcellona"
                ],
                [
                  "Mestiere",
                  "architetto"
                ],
                [
                  "Famoso per",
                  "la Sagrada Família e gli edifici ispirati alla natura"
                ]
              ]
            }
          ],
          "leo": "Nel Parco Güell c'è una lucertola gigante tutta colorata: è quasi una mia cugina!",
          "look": [
            {
              "title": "La Sagrada Família",
              "artist": "Antoni Gaudí",
              "date": "dal 1882",
              "place": "Barcellona, Spagna",
              "file": "opera_7_1_sagrada",
              "text": "Le sue torri sembrano pannocchie, o castelli di sabbia fatti facendo colare dalle dita la sabbia bagnata. Il progetto prevede una torre centrale alta più di centosettanta metri: la chiesa più alta del mondo."
            },
            {
              "title": "Il Parco Güell",
              "artist": "Antoni Gaudí",
              "date": "1900-1914",
              "place": "Barcellona, Spagna",
              "file": "opera_7_1_guell",
              "optional": true,
              "text": "Doveva essere un quartiere di case in mezzo al verde, ma è diventato un parco pubblico pieno di fantasia: casette che sembrano di marzapane, colonne inclinate come tronchi d'albero e una grande lucertola, o forse un drago, coperta di mosaici colorati."
            }
          ],
          "know": "Negli ultimi anni della sua vita Gaudí pensava soltanto alla Sagrada Família: si trasferì perfino a vivere nel laboratorio del cantiere."
        },
        {
          "id": "7.2",
          "title": "Matisse e i colori selvaggi",
          "img": "cap7_02_matisse",
          "alt": "In uno studio luminoso, un pittore anziano seduto su una sedia a rotelle ritaglia grandi forme di carta colorata, mentre un'aiutante le appunta alla parete.",
          "body": [
            "Nel 1905, a una mostra di Parigi, alcuni giovani pittori esposero quadri con colori così accesi e così poco realistici che un critico li chiamò «fauves», cioè «belve», animali selvaggi. Il loro capo era Henri Matisse.",
            "Matisse poteva dipingere un viso con una riga verde sul naso, un cielo rosa, un albero rosso. Per lui il colore non doveva copiare la realtà, ma esprimere la gioia e le emozioni. Le sue figure sono semplici, fatte di linee morbide e di grandi zone di colore.",
            "Da anziano, quando fu costretto a stare a letto o sulla sedia a rotelle, Matisse inventò un nuovo modo di fare arte: «disegnare con le forbici». Ritagliava fogli dipinti con colori vivaci e componeva grandi immagini di alghe, stelle, pesci e figure che danzano."
          ],
          "cards": [
            {
              "img": "matisse",
              "rows": [
                [
                  "Nome",
                  "Henri Matisse"
                ],
                [
                  "Nato",
                  "1869, a Le Cateau-Cambrésis, in Francia"
                ],
                [
                  "Morto",
                  "1954, a Nizza, in Francia"
                ],
                [
                  "Mestiere",
                  "pittore e scultore"
                ],
                [
                  "Famoso per",
                  "i colori accesi e i grandi ritagli di carta colorata"
                ]
              ]
            }
          ],
          "leo": "Prendi dei fogli colorati e un paio di forbici con le punte arrotondate: ritaglia stelle, foglie e pesci e incollali su un grande foglio, come Matisse!",
          "look": [
            {
              "title": "La danza",
              "artist": "Henri Matisse",
              "date": "1910",
              "place": "San Pietroburgo, Museo dell'Ermitage",
              "file": "opera_7_2_danza",
              "text": "Cinque figure rosse danzano in cerchio, tenendosi per mano, su un prato verde sotto un cielo blu. Bastano tre colori e poche linee per farci sentire il ritmo e l'energia del ballo. Guarda le due mani in primo piano: quasi non si toccano!"
            }
          ],
          "know": "Matisse lavorò fino all'ultimo. Per disegnare sulle pareti e sul soffitto restando seduto, usava un lunghissimo bastone con un carboncino legato in cima!"
        },
        {
          "id": "7.3",
          "title": "Picasso e il Cubismo",
          "img": "cap7_03_picasso",
          "alt": "In uno studio disordinato pieno di tele, chitarre e maschere africane, un pittore dipinge un ritratto in cui il viso si vede contemporaneamente di fronte e di profilo.",
          "body": [
            "Pablo Picasso nacque in Spagna, a Málaga. Suo padre era un insegnante di disegno, e Pablo da ragazzo dipingeva già come un pittore esperto. Si racconta che la sua prima parola, da piccolissimo, sia stata «piz», da «lápiz», che in spagnolo vuol dire «matita»!",
            "Nel 1907, a Parigi, Picasso e il suo amico Georges Braque cominciarono a inventare un modo nuovissimo di dipingere: il Cubismo. Invece di mostrare un oggetto da un solo punto di vista, come in una fotografia, lo scomponevano in tante facce, come quelle di un cubo, e lo mostravano da più punti di vista nello stesso momento: di fronte, di lato, da sopra.",
            "Picasso visse più di novant'anni e non smise mai di inventare: dipinse, disegnò, scolpì, fece ceramiche e collage, incollando sulle tele pezzi di giornale, di carta da parati e perfino di corda. Realizzò decine di migliaia di opere!"
          ],
          "cards": [
            {
              "img": "picasso",
              "rows": [
                [
                  "Nome",
                  "Pablo Picasso"
                ],
                [
                  "Nato",
                  "1881, a Málaga, in Spagna"
                ],
                [
                  "Morto",
                  "1973, a Mougins, in Francia"
                ],
                [
                  "Mestiere",
                  "pittore, scultore e ceramista"
                ],
                [
                  "Famoso per",
                  "il Cubismo e il grande quadro «Guernica»"
                ]
              ]
            }
          ],
          "leo": "Prova a disegnare il viso di un compagno con il naso di profilo e gli occhi di fronte: ecco un ritratto cubista!",
          "look": [
            {
              "title": "Ritratto di Dora Maar",
              "artist": "Pablo Picasso",
              "date": "1937",
              "place": "Parigi, Museo Picasso",
              "file": "opera_7_3_picasso_dora_maar",
              "text": "Guarda bene il viso di questa donna: il naso è di profilo, ma gli occhi ci guardano di fronte. Picasso ci mostra due punti di vista insieme, come se potessimo girare intorno alla persona in un istante."
            },
            {
              "title": "Guernica",
              "artist": "Pablo Picasso",
              "date": "1937",
              "place": "Madrid, Museo Reina Sofía",
              "file": "opera_7_3_guernica",
              "optional": true,
              "text": "Nel 1937, durante la guerra in Spagna, la cittadina di Guernica fu bombardata dagli aerei. Picasso, pieno di dolore e di rabbia, dipinse questo quadro enorme, tutto in bianco, nero e grigio, come le foto dei giornali. Ci sono un cavallo che grida, un toro, una mamma che piange: è un grido contro tutte le guerre."
            }
          ],
          "know": "Si racconta che, durante la Seconda guerra mondiale, un ufficiale nemico vide nello studio di Picasso una foto di «Guernica» e gli chiese: «L'ha fatto lei?». Picasso rispose: «No, l'avete fatto voi»."
        },
        {
          "id": "7.4",
          "title": "Il Futurismo",
          "img": "cap7_04_futurismo",
          "alt": "In una città moderna, un ciclista, un tram e un'automobile sfrecciano lasciando dietro di sé scie di colore, mentre un pittore e uno scultore cercano di catturarne il movimento.",
          "body": [
            "Nel 1909 il poeta italiano Filippo Tommaso Marinetti pubblicò un manifesto, cioè uno scritto che annunciava un nuovo movimento: il Futurismo. I futuristi amavano tutto ciò che era moderno: le macchine, le fabbriche, i treni, gli aerei, la città e soprattutto la velocità. Marinetti scrisse perfino che un'automobile da corsa era più bella di una famosa statua antica!",
            "I pittori futuristi volevano dipingere il movimento. Per farlo ripetevano le forme più volte, come nelle fotografie scattate una dopo l'altra, e usavano linee di forza, scie e colori brillanti. Così nei loro quadri le cose sembrano vibrare e correre.",
            "Il più grande dei futuristi fu Umberto Boccioni, pittore e scultore. Un altro, Giacomo Balla, dipinse un cagnolino al guinzaglio con tantissime zampette, per mostrare quanto in fretta trotterellava accanto alla sua padrona."
          ],
          "cards": [
            {
              "img": "boccioni",
              "rows": [
                [
                  "Nome",
                  "Umberto Boccioni"
                ],
                [
                  "Nato",
                  "1882, a Reggio Calabria"
                ],
                [
                  "Morto",
                  "1916, vicino a Verona"
                ],
                [
                  "Mestiere",
                  "pittore e scultore"
                ],
                [
                  "Famoso per",
                  "le opere futuriste che rappresentano il movimento"
                ]
              ]
            }
          ],
          "leo": "Corri in giardino e guarda le tue gambe muoversi veloci: come le disegneresti per far vedere la velocità?",
          "look": [
            {
              "title": "Forme uniche della continuità nello spazio",
              "artist": "Umberto Boccioni",
              "date": "1913",
              "place": "New York, Metropolitan Museum of Art (una delle copie in bronzo)",
              "file": "opera_7_4_boccioni",
              "text": "È un uomo che cammina a grandi passi, così veloce che il suo corpo sembra trascinato dal vento: le forme si allungano come fiamme. Non è un uomo preciso, è il movimento stesso diventato scultura."
            },
            {
              "title": "Dinamismo di un cane al guinzaglio",
              "artist": "Giacomo Balla",
              "date": "1912",
              "place": "Buffalo (Stati Uniti), Buffalo AKG Art Museum",
              "file": "opera_7_4_balla_cane",
              "optional": true,
              "text": "Un bassotto trotterella accanto alla sua padrona: le zampette, la coda, il guinzaglio e i piedi della signora si moltiplicano, come in una foto mossa. Riesci a contare quante zampe ha il cagnolino?"
            }
          ],
          "know": "La scultura di Boccioni è sulle monete italiane da venti centesimi di euro. Controlla nel portamonete!"
        },
        {
          "id": "7.5",
          "title": "Kandinskij, Klee e Mondrian: l'arte astratta",
          "img": "cap7_05_astratto",
          "alt": "In uno studio, un pittore ascolta la musica di un grammofono e dipinge cerchi, linee e triangoli colorati che sembrano danzare; alla parete ci sono quadri fatti solo di linee nere e rettangoli rossi, gialli e blu.",
          "body": [
            "Fino ad allora i quadri avevano sempre rappresentato qualcosa: una persona, un paesaggio, una storia. Il russo Vasilij Kandinskij si chiese: e se un quadro potesse essere come la musica, che ci emoziona senza raccontare niente di preciso? Nacque così l'arte astratta: quadri fatti soltanto di forme, linee e colori.",
            "Per Kandinskij ogni colore aveva un suono e un carattere: il giallo era squillante come una tromba, il blu profondo come un violoncello, il rosso caldo e forte. Mentre dipingeva, gli sembrava di comporre una sinfonia.",
            "Altri artisti seguirono questa strada. Paul Klee, nato in Svizzera, dipingeva piccoli quadri magici fatti di quadratini, frecce, lune e pesci, come i disegni di un bambino molto saggio. L'olandese Piet Mondrian, invece, usava soltanto linee nere dritte e i tre colori primari, rosso, giallo e blu, insieme al bianco: cercava un equilibrio perfetto."
          ],
          "cards": [
            {
              "img": "kandinskij",
              "rows": [
                [
                  "Nome",
                  "Vasilij Kandinskij"
                ],
                [
                  "Nato",
                  "1866, a Mosca, in Russia"
                ],
                [
                  "Morto",
                  "1944, a Neuilly-sur-Seine, in Francia"
                ],
                [
                  "Mestiere",
                  "pittore e insegnante"
                ],
                [
                  "Famoso per",
                  "essere stato uno dei primi pittori astratti"
                ]
              ]
            }
          ],
          "leo": "Ascolta una musica allegra e intanto disegna linee e forme seguendo il ritmo. Poi ascolta una musica lenta e fai lo stesso. Come cambia il tuo disegno?",
          "look": [
            {
              "title": "Composizione VIII",
              "artist": "Vasilij Kandinskij",
              "date": "1923",
              "place": "New York, Museo Guggenheim",
              "file": "opera_7_5_kandinskij",
              "text": "Cerchi, triangoli, scacchiere, linee dritte e curve si incontrano e si inseguono su un fondo chiaro. Non rappresenta niente di preciso: è come un concerto per gli occhi. Quale forma ti sembra più «rumorosa»?"
            },
            {
              "title": "Composizione con rosso, blu e giallo",
              "artist": "Piet Mondrian",
              "date": "1930",
              "place": "Zurigo, Kunsthaus",
              "file": "opera_7_5_mondrian",
              "optional": true,
              "text": "Linee nere, un grande quadrato rosso, un piccolo quadrato blu e un pezzetto di giallo: con pochissimo, Mondrian crea un perfetto equilibrio. Prova a coprire con la mano il quadrato rosso: il quadro cambia completamente!"
            }
          ],
          "know": "Kandinskij raccontava che l'idea di un quadro senza figure gli venne una sera, quando vide nel suo studio un quadro bellissimo e misterioso che non riconosceva. Era un suo quadro, appoggiato su un fianco!"
        },
        {
          "id": "7.6",
          "title": "De Chirico e il Surrealismo: quadri come sogni",
          "img": "cap7_06_surrealismo",
          "alt": "Un pittore dorme appoggiato alla scrivania e sopra di lui, come in una nuvola di sogno, appaiono una piazza deserta con lunghe ombre, una scala che sale nel cielo e un pesce che vola tra le nuvole.",
          "body": [
            "Giorgio de Chirico nacque in Grecia da genitori italiani. Verso il 1910 cominciò a dipingere piazze silenziose e deserte, con portici, statue, ombre lunghissime, treni lontani e orologi fermi. Sono luoghi che sembrano veri, ma mettono addosso un senso di mistero e di attesa, come in un sogno. Chiamò questa pittura «metafisica», cioè «al di là della realtà».",
            "Qualche anno dopo, a Parigi, nacque il Surrealismo. I surrealisti volevano dipingere il mondo dei sogni e dell'immaginazione, dove tutto può succedere: un treno può uscire da un camino, una mela può nascondere il viso di un uomo, gli orologi possono sciogliersi come formaggio al sole.",
            "I surrealisti più famosi furono lo spagnolo Salvador Dalí, con i suoi baffi all'insù, e il belga René Magritte, che dipingeva oggetti normalissimi in situazioni impossibili, per farci riflettere su quello che vediamo."
          ],
          "cards": [
            {
              "img": "dechirico",
              "rows": [
                [
                  "Nome",
                  "Giorgio de Chirico"
                ],
                [
                  "Nato",
                  "1888, a Volos, in Grecia"
                ],
                [
                  "Morto",
                  "1978, a Roma"
                ],
                [
                  "Mestiere",
                  "pittore"
                ],
                [
                  "Famoso per",
                  "le piazze misteriose della pittura metafisica"
                ]
              ]
            },
            {
              "img": "dali",
              "rows": [
                [
                  "Nome",
                  "Salvador Dalí"
                ],
                [
                  "Nato",
                  "1904, a Figueres, in Spagna"
                ],
                [
                  "Morto",
                  "1989, a Figueres"
                ],
                [
                  "Mestiere",
                  "pittore"
                ],
                [
                  "Famoso per",
                  "i quadri surrealisti con gli orologi molli e i suoi baffi all'insù"
                ]
              ]
            }
          ],
          "leo": "Domattina, appena ti svegli, prova a ricordare il tuo sogno e disegnalo subito. Sarà un'opera surrealista!",
          "look": [
            {
              "title": "Le Muse inquietanti",
              "artist": "Giorgio de Chirico",
              "date": "1917",
              "place": "collezione privata",
              "file": "opera_7_6_dechirico_muse",
              "text": "In una piazza di Ferrara, davanti al castello rosso, ci sono strani personaggi: statue con la testa liscia come quella dei manichini da sarto, senza occhi né bocca. Le ombre sono lunghe e la piazza è deserta. Che cosa staranno aspettando?"
            },
            {
              "title": "La persistenza della memoria",
              "artist": "Salvador Dalí",
              "date": "1931",
              "place": "New York, Museum of Modern Art",
              "file": "opera_7_6_dali_orologi",
              "text": "In un paesaggio deserto, vicino al mare, alcuni orologi si sciolgono come se fossero di formaggio. Dalí raccontò che l'idea gli venne guardando un formaggio molle che si scioglieva al caldo. Il quadro è piccolo: più o meno come un foglio del tuo quaderno."
            }
          ],
          "know": "Magritte dipinse una pipa e sotto scrisse: «Questa non è una pipa». Aveva ragione: non la puoi prendere in mano, perché è soltanto il dipinto di una pipa!"
        }
      ],
      "summary": [
        "All'inizio del Novecento nascono le avanguardie: gruppi di artisti che inventano modi nuovissimi di fare arte.",
        "Gaudí costruì edifici ispirati alla natura; Matisse usò colori accesi per esprimere la gioia.",
        "Picasso e Braque inventarono il Cubismo: gli oggetti visti da più punti di vista insieme.",
        "I futuristi, come Boccioni e Balla, rappresentarono la velocità e il movimento.",
        "Kandinskij, Klee e Mondrian crearono l'arte astratta; De Chirico e i surrealisti dipinsero quadri misteriosi come sogni."
      ],
      "quiz": [
        {
          "q": "Che cosa vuol dire «fauves», il nome del gruppo di Matisse?",
          "a": [
            "belve, animali selvaggi",
            "fiori",
            "fantasmi"
          ]
        },
        {
          "q": "Che cosa mostravano i pittori cubisti?",
          "a": [
            "gli oggetti da più punti di vista nello stesso momento",
            "soltanto cubi colorati",
            "le città di notte"
          ]
        },
        {
          "q": "Che cosa amavano soprattutto i futuristi?",
          "a": [
            "la velocità e le macchine moderne",
            "le chiese gotiche",
            "i paesaggi di montagna"
          ]
        },
        {
          "q": "Che cosa rappresenta un quadro astratto?",
          "a": [
            "soltanto forme, linee e colori",
            "sempre una persona",
            "una fotografia"
          ]
        },
        {
          "q": "Quale opera di Boccioni si trova sulle monete da venti centesimi?",
          "a": [
            "«Forme uniche della continuità nello spazio»",
            "il David",
            "la Venere di Willendorf"
          ]
        }
      ],
      "game": "Gioco dei sogni: ognuno ritaglia da vecchie riviste figure diverse: un animale, un oggetto, un paesaggio. Poi mescolatele e incollatele insieme nel modo più strano possibile: un elefante su una tazza, una bicicletta tra le nuvole. Avete creato un collage surrealista!",
      "words": [
        [
          "Avanguardia",
          "un gruppo di artisti che sperimenta modi completamente nuovi di fare arte."
        ],
        [
          "Cubismo",
          "il movimento di Picasso e Braque, che mostra gli oggetti da più punti di vista insieme."
        ],
        [
          "Collage",
          "un'opera fatta incollando pezzi di carta, stoffa o altri materiali su un foglio o su una tela."
        ],
        [
          "Manifesto",
          "uno scritto che annuncia le idee di un nuovo movimento artistico."
        ],
        [
          "Futurismo",
          "il movimento italiano che esaltava la velocità, le macchine e la vita moderna."
        ],
        [
          "Arte astratta",
          "un'arte che non rappresenta cose riconoscibili, ma soltanto forme, linee e colori."
        ],
        [
          "Surrealismo",
          "il movimento che dipinge il mondo dei sogni e dell'immaginazione."
        ]
      ]
    },
    {
      "n": 8,
      "title": "L'arte di oggi",
      "subtitle": "Colori sgocciolati, barattoli famosi, tele tagliate e murales",
      "img": "cap8_00_apertura",
      "alt": "In un grande museo moderno, bambini e famiglie guardano opere di ogni tipo: una tela piena di colori sgocciolati, una grande installazione appesa al soffitto e una scultura colorata; fuori dalla vetrata, un artista dipinge un murale.",
      "intro": [
        "Dalla metà del Novecento fino ai giorni nostri l'arte diventa libera come non era mai stata. Gli artisti usano tutti i materiali possibili: la tela e il colore, ma anche la plastica, la juta, il legno bruciato, la luce, gli oggetti di tutti i giorni e perfino la natura intera.",
        "In questo capitolo incontreremo una pittrice coraggiosa, un artista che dipingeva muovendosi intorno alla tela, i barattoli della Pop Art, i tagli di Fontana, opere grandi come un lago e i disegni sui muri delle città."
      ],
      "leo": "Siamo arrivati ai giorni nostri. Preparati: qui l'arte può essere davvero qualsiasi cosa!",
      "sections": [
        {
          "id": "8.1",
          "title": "Frida Kahlo",
          "img": "cap8_01_frida",
          "alt": "Nel cortile di una casa blu del Messico, pieno di piante e di pappagalli, una pittrice con i fiori tra i capelli dipinge un autoritratto davanti a uno specchio, accanto a una scimmietta e a un cane.",
          "body": [
            "Frida Kahlo nacque in Messico, in una casa dipinta di blu, la «Casa Azul», vicino a Città del Messico. A diciotto anni ebbe un terribile incidente: l'autobus su cui viaggiava si scontrò con un tram. Rimase ferita gravemente e dovette restare a letto per mesi.",
            "Per passare il tempo cominciò a dipingere. Sua madre fece montare uno specchio sopra il letto, e così Frida dipinse sé stessa. Disse poi: «Dipingo me stessa perché sono spesso sola e perché sono il soggetto che conosco meglio».",
            "Frida amava i colori e le tradizioni del suo paese: indossava abiti messicani colorati, con fiori tra i capelli, e dipingeva intorno a sé piante, frutti, scimmiette, pappagalli e cani. I suoi autoritratti raccontano la sua vita, il suo dolore e la sua grande forza."
          ],
          "cards": [
            {
              "img": "kahlo",
              "rows": [
                [
                  "Nome",
                  "Frida Kahlo"
                ],
                [
                  "Nata",
                  "1907, a Coyoacán, in Messico"
                ],
                [
                  "Morta",
                  "1954, a Coyoacán"
                ],
                [
                  "Mestiere",
                  "pittrice"
                ],
                [
                  "Famosa per",
                  "i suoi autoritratti pieni di colori e di simboli del Messico"
                ]
              ]
            }
          ],
          "leo": "Frida dipingeva le cose che amava intorno a sé. Fai anche tu un autoritratto e disegna intorno le cose e gli animali a cui vuoi più bene!",
          "look": [
            {
              "title": "Autoritratto con scimmia",
              "artist": "Frida Kahlo",
              "date": "1938",
              "place": "Buffalo (Stati Uniti), Buffalo AKG Art Museum",
              "file": "opera_8_1_kahlo",
              "text": "Frida ci guarda seria e decisa, con le sopracciglia folte che si uniscono al centro. Dietro di lei c'è una scimmietta che le appoggia un braccio sulla spalla, come un'amica. Frida aveva in casa diverse scimmie, che considerava parte della famiglia."
            }
          ],
          "know": "Uno degli ultimi quadri di Frida rappresenta delle fette di anguria rosse e verdi. Su una fetta lei scrisse: «Viva la vida», cioè «Viva la vita»."
        },
        {
          "id": "8.2",
          "title": "Pollock e la pittura d'azione",
          "img": "cap8_02_pollock",
          "alt": "In un fienile trasformato in studio, un pittore cammina intorno a una grande tela stesa sul pavimento e fa sgocciolare il colore da un bastoncino, con movimenti che sembrano una danza.",
          "body": [
            "Jackson Pollock era un pittore americano. Un giorno ebbe un'idea rivoluzionaria: invece di appoggiare la tela sul cavalletto, la stese sul pavimento del suo studio, un vecchio fienile. Poi ci camminò intorno, facendo sgocciolare e schizzare il colore da bastoncini, pennelli induriti e barattoli bucati.",
            "I suoi movimenti erano come una danza: il braccio, il polso, tutto il corpo partecipavano al quadro. Per questo la sua arte è chiamata «pittura d'azione». Il colore si intreccia in fili, gocce e macchie, come una rete gigantesca.",
            "Pollock diceva che, quando era dentro il quadro, non si rendeva bene conto di quello che stava facendo: lo capiva solo dopo. Ma nessuna goccia era messa a caso: ogni gesto era guidato dalla sua esperienza e dal suo istinto."
          ],
          "cards": [
            {
              "img": "pollock",
              "rows": [
                [
                  "Nome",
                  "Jackson Pollock"
                ],
                [
                  "Nato",
                  "1912, a Cody, negli Stati Uniti"
                ],
                [
                  "Morto",
                  "1956, a Springs, negli Stati Uniti"
                ],
                [
                  "Mestiere",
                  "pittore"
                ],
                [
                  "Famoso per",
                  "la pittura d'azione, fatta sgocciolando il colore sulla tela"
                ]
              ]
            }
          ],
          "leo": "Con l'aiuto di un adulto, stendete un grande foglio in giardino e fate gocciolare la tempera da un pennello o da un bastoncino. Prima indossate abiti vecchi, mi raccomando!",
          "look": [
            {
              "title": "Numero 1, 1950 (Nebbia lavanda)",
              "artist": "Jackson Pollock",
              "date": "1950",
              "place": "Washington, National Gallery of Art",
              "file": "opera_8_2_pollock",
              "text": "Da lontano sembra una nebbia color lavanda; da vicino è un groviglio di fili neri, bianchi, rosa e grigi. In alto, Pollock lasciò anche le impronte delle sue mani!"
            }
          ],
          "know": "Pollock dava ai suoi quadri dei numeri invece dei titoli. Così chi li guardava non cercava un soggetto preciso, ma si lasciava trasportare dai colori e dai segni."
        },
        {
          "id": "8.3",
          "title": "La Pop Art",
          "img": "cap8_03_popart",
          "alt": "In uno studio-fabbrica pieno di luci, un artista con i capelli bianchi stampa tante volte la stessa immagine colorata di un barattolo, mentre gli aiutanti appendono le stampe ad asciugare.",
          "body": [
            "Tra gli anni Cinquanta e Sessanta, in Inghilterra e in America, alcuni artisti si accorsero che la città era piena di immagini: pubblicità, fumetti, cartelloni, scatole dei supermercati, fotografie di attori famosi. Decisero di portarle nelle loro opere. Nacque la Pop Art, cioè «arte popolare»: un'arte che parla delle cose che tutti conoscono.",
            "Il più famoso artista pop fu Andy Warhol. Rappresentava i prodotti del supermercato, come le scatole di zuppa e le bottiglie di bibite, e i volti delle persone famose. Spesso usava la serigrafia, una tecnica di stampa che permette di ripetere la stessa immagine tante volte, cambiando i colori, come in una fabbrica. Infatti il suo studio si chiamava «The Factory», «la fabbrica».",
            "Un altro artista, Roy Lichtenstein, dipingeva quadri enormi che sembrano vignette dei fumetti ingrandite, con i puntini della stampa ben visibili e le nuvolette con le parole."
          ],
          "cards": [
            {
              "img": "warhol",
              "rows": [
                [
                  "Nome",
                  "Andy Warhol"
                ],
                [
                  "Nato",
                  "1928, a Pittsburgh, negli Stati Uniti"
                ],
                [
                  "Morto",
                  "1987, a New York"
                ],
                [
                  "Mestiere",
                  "artista, pittore e regista"
                ],
                [
                  "Famoso per",
                  "le immagini ripetute di prodotti del supermercato e di persone famose"
                ]
              ]
            }
          ],
          "leo": "Disegna il tuo cibo preferito e poi ripetilo quattro volte sullo stesso foglio, ogni volta con colori diversi, come Warhol!",
          "look": [
            {
              "title": "Barattoli di zuppa Campbell",
              "artist": "Andy Warhol",
              "date": "1962",
              "place": "New York, Museum of Modern Art",
              "file": "opera_8_3_warhol",
              "text": "Sono trentadue quadri, uno per ogni gusto di zuppa che si vendeva allora: pomodoro, fagioli, funghi, pollo con le stelline… Warhol raccontava di aver mangiato quella zuppa a pranzo, quasi ogni giorno, per vent'anni!"
            }
          ],
          "know": "Warhol disse che in futuro ognuno sarebbe stato famoso per quindici minuti. Pensa: lo disse quando non esistevano ancora internet e i social!"
        },
        {
          "id": "8.4",
          "title": "Fontana, Burri e i nuovi materiali",
          "img": "cap8_04_fontana_burri",
          "alt": "In uno studio, un artista fa un taglio deciso in una tela di un solo colore, mentre accanto un altro artista cuce pezzi di vecchi sacchi di juta su un telaio.",
          "body": [
            "In Italia, dopo la Seconda guerra mondiale, alcuni artisti cercarono modi nuovissimi di fare arte. Lucio Fontana, nato in Argentina da una famiglia italiana, si chiese: perché un quadro deve essere soltanto una superficie piatta su cui dipingere?",
            "Così bucò e tagliò le sue tele con una lama: tagli netti, dritti o leggermente curvi, su tele di un solo colore. Dietro il taglio si apre il buio, lo spazio. Fontana chiamò queste opere «Concetti spaziali»: voleva far capire che oltre la tela c'è un mondo infinito, proprio negli anni in cui l'uomo cominciava a esplorare lo spazio.",
            "Alberto Burri, invece, era un medico. Durante la guerra, prigioniero in un campo in America, cominciò a dipingere. Tornato in Italia, al posto dei colori usò materiali poveri e rovinati: vecchi sacchi di juta rattoppati, legno bruciato, plastica sciolta dal fuoco, ferro. Con questi materiali creò opere che fanno pensare alle ferite e alla fatica della vita."
          ],
          "cards": [
            {
              "img": "fontana",
              "rows": [
                [
                  "Nome",
                  "Lucio Fontana"
                ],
                [
                  "Nato",
                  "1899, a Rosario, in Argentina"
                ],
                [
                  "Morto",
                  "1968, a Comabbio, in Lombardia"
                ],
                [
                  "Mestiere",
                  "pittore e scultore"
                ],
                [
                  "Famoso per",
                  "i tagli e i buchi nelle tele, i «Concetti spaziali»"
                ]
              ]
            },
            {
              "img": "burri",
              "rows": [
                [
                  "Nome",
                  "Alberto Burri"
                ],
                [
                  "Nato",
                  "1915, a Città di Castello, in Umbria"
                ],
                [
                  "Morto",
                  "1995, a Nizza, in Francia"
                ],
                [
                  "Mestiere",
                  "medico e poi artista"
                ],
                [
                  "Famoso per",
                  "le opere fatte con sacchi, legno bruciato e plastica, e il Grande Cretto"
                ]
              ]
            }
          ],
          "leo": "Fontana e Burri ci insegnano che si può fare arte con qualunque materiale. Tu che cosa useresti? Tappi, foglie, stoffe, cartone…?",
          "look": [
            {
              "title": "Concetto spaziale. Attese",
              "artist": "Lucio Fontana",
              "date": "anni Sessanta",
              "place": "",
              "file": "opera_8_4_fontana_tagli",
              "text": "Su una tela di un solo colore ci sono soltanto alcuni tagli, precisi come colpi di spada. Fontana preparava la tela con cura e poi, con un gesto sicuro, la tagliava. Il titolo, «Attese», fa pensare al momento in cui si aspetta che succeda qualcosa."
            },
            {
              "title": "Il Grande Cretto",
              "artist": "Alberto Burri",
              "date": "1984-1989 e 2015",
              "place": "Gibellina, Sicilia",
              "file": "opera_8_4_burri_cretto",
              "optional": true,
              "text": "Nel 1968 un terremoto distrusse la cittadina di Gibellina, in Sicilia. Burri coprì le sue rovine con un'enorme colata di cemento bianco, seguendo il disegno delle vecchie strade. Si può camminare dentro le sue fessure, come in un labirinto della memoria. È una delle opere d'arte più grandi del mondo."
            }
          ],
          "know": "Si racconta che Burri, nel campo di prigionia in Texas, non avesse le tele per dipingere. Così usò i sacchi di juta del campo: da lì nacque il suo amore per quel materiale."
        },
        {
          "id": "8.5",
          "title": "La Land Art e le installazioni",
          "img": "cap8_05_landart",
          "alt": "Su un prato vicino alla spiaggia, alcuni bambini e un artista creano un grande cerchio di sassi, foglie e rametti, mentre poco più in là altri artisti avvolgono un albero con un telo colorato.",
          "body": [
            "Intorno al 1970 alcuni artisti decisero di uscire dai musei e di lavorare direttamente nella natura, con la terra, i sassi, l'acqua e gli alberi. Questa arte si chiama Land Art, cioè «arte della terra». Spesso le opere sono enormi e si vedono bene soltanto dall'alto, oppure durano poco, perché il vento, la pioggia e il tempo le cambiano.",
            "Un'altra novità sono le installazioni: opere che non si guardano soltanto da fuori, ma in cui si può entrare, camminare, ascoltare e talvolta perfino toccare. Un'installazione può occupare una stanza intera, un edificio, una piazza o un paesaggio.",
            "Gli artisti Christo e Jeanne-Claude erano marito e moglie, ed erano nati lo stesso giorno dello stesso anno. Per tutta la vita realizzarono progetti giganteschi: impacchettarono con teli colorati palazzi e ponti, circondarono isole con stoffa rosa, piantarono migliaia di grandi ombrelloni. Le loro opere duravano soltanto pochi giorni, e per questo restavano nel cuore di chi le aveva viste."
          ],
          "cards": [
            {
              "img": "christo",
              "rows": [
                [
                  "Nomi",
                  "Christo e Jeanne-Claude"
                ],
                [
                  "Nati",
                  "entrambi il 13 giugno 1935: lui in Bulgaria, lei in Marocco"
                ],
                [
                  "Morti",
                  "lei nel 2009, lui nel 2020, a New York"
                ],
                [
                  "Mestiere",
                  "artisti"
                ],
                [
                  "Famosi per",
                  "le opere gigantesche che durano soltanto pochi giorni"
                ]
              ]
            }
          ],
          "leo": "Durante una passeggiata al parco o al mare, raccogli sassi, foglie e conchiglie e crea una spirale o un cerchio sul terreno. Poi fotografala: il vento la cambierà!",
          "look": [
            {
              "title": "The Floating Piers",
              "artist": "Christo e Jeanne-Claude",
              "date": "2016",
              "place": "Lago d'Iseo, Lombardia",
              "file": "opera_8_5_floating_piers",
              "text": "Per sedici giorni, nel 2016, sul lago d'Iseo si poteva camminare sull'acqua! Una passerella galleggiante lunga circa tre chilometri, coperta di stoffa giallo-arancione, collegava la riva a due isole. Più di un milione di persone la percorsero, sentendo sotto i piedi il movimento delle onde."
            },
            {
              "title": "Spiral Jetty",
              "artist": "Robert Smithson",
              "date": "1970",
              "place": "Grande Lago Salato, Utah (Stati Uniti)",
              "file": "opera_8_5_spiral_jetty",
              "optional": true,
              "text": "È una lunghissima spirale di rocce e di terra che entra nell'acqua rosata di un lago salato. A volte il livello del lago sale e la copre del tutto; altre volte l'acqua si ritira, e la spirale riappare tutta bianca di sale."
            }
          ],
          "know": "Christo e Jeanne-Claude pagavano le loro opere da soli, vendendo i disegni e i bozzetti dei loro progetti. Per questo potevano realizzarle in totale libertà."
        },
        {
          "id": "8.6",
          "title": "La Street Art",
          "img": "cap8_06_streetart",
          "alt": "Su un grande muro di città, un artista su un cestello sollevato dipinge un murale coloratissimo con figure che si tengono per mano, mentre i bambini del quartiere aiutano a dipingere la parte bassa.",
          "body": [
            "Le città sono piene di muri grigi. Alcuni artisti hanno pensato di trasformarli in grandi quadri all'aperto, che tutti possono vedere gratis, passeggiando per strada. Questa arte si chiama Street Art, cioè «arte di strada».",
            "La Street Art è nata a New York, tra gli anni Settanta e Ottanta, con i graffiti dipinti con le bombolette spray sui muri e sui treni della metropolitana. Uno degli artisti più amati fu Keith Haring: con il gesso disegnava sui pannelli neri vuoti delle stazioni della metropolitana omini stilizzati, cuori, cani che abbaiano e bambini che gattonano, con linee semplici e allegre.",
            "Oggi i murales colorano le città di tutto il mondo, anche in Italia, e spesso vengono dipinti insieme agli abitanti del quartiere. Ma attenzione: dipingere sui muri senza permesso è vietato! Gli artisti di strada chiedono l'autorizzazione ai proprietari e al Comune."
          ],
          "cards": [
            {
              "img": "haring",
              "rows": [
                [
                  "Nome",
                  "Keith Haring"
                ],
                [
                  "Nato",
                  "1958, a Reading, negli Stati Uniti"
                ],
                [
                  "Morto",
                  "1990, a New York"
                ],
                [
                  "Mestiere",
                  "artista"
                ],
                [
                  "Famoso per",
                  "gli omini colorati, i cuori e i murales in tutto il mondo"
                ]
              ]
            }
          ],
          "leo": "Se poteste dipingere un muro della vostra scuola, che cosa ci mettereste? Progettatelo insieme su un lungo rotolo di carta!",
          "look": [
            {
              "title": "Tuttomondo",
              "artist": "Keith Haring",
              "date": "1989",
              "place": "Pisa, muro della chiesa di Sant'Antonio Abate",
              "file": "opera_8_6_tuttomondo",
              "text": "È uno degli ultimi murales di Haring e uno dei più grandi che abbia dipinto in Europa. Trenta figure coloratissime si incastrano come i pezzi di un puzzle per raccontare la pace e l'armonia nel mondo. Haring lo dipinse in circa una settimana, aiutato da studenti e artigiani di Pisa."
            }
          ],
          "know": "Haring pensava che l'arte dovesse essere per tutti. Per questo aprì a New York un negozio, il «Pop Shop», dove vendeva magliette, spille e giocattoli con i suoi disegni, a prezzi che tutti potevano permettersi."
        }
      ],
      "summary": [
        "Frida Kahlo raccontò la sua vita e la cultura del Messico nei suoi autoritratti.",
        "Pollock dipingeva facendo sgocciolare il colore su grandi tele stese a terra: è la pittura d'azione.",
        "La Pop Art, con Andy Warhol, portò nell'arte le immagini della pubblicità, dei fumetti e del supermercato.",
        "Fontana tagliò le tele e Burri usò sacchi, legno e plastica: l'arte può usare qualsiasi materiale.",
        "Con la Land Art, le installazioni e la Street Art l'arte esce dai musei e va nella natura e nelle strade."
      ],
      "quiz": [
        {
          "q": "Perché Frida Kahlo cominciò a dipingere autoritratti?",
          "a": [
            "perché doveva stare a letto e aveva uno specchio sopra di sé",
            "perché non sapeva disegnare altro",
            "perché glielo chiese un re"
          ]
        },
        {
          "q": "Dove stendeva la tela Jackson Pollock?",
          "a": [
            "sul pavimento",
            "sul soffitto",
            "sul tetto di casa"
          ]
        },
        {
          "q": "Che cosa rappresentò Andy Warhol, ripetendolo tante volte?",
          "a": [
            "barattoli di zuppa",
            "cattedrali gotiche",
            "ninfee"
          ]
        },
        {
          "q": "Che cosa faceva Lucio Fontana alle sue tele?",
          "a": [
            "le tagliava",
            "le bruciava",
            "le cuciva insieme"
          ]
        },
        {
          "q": "Dove si trova il murale «Tuttomondo» di Keith Haring?",
          "a": [
            "a Pisa",
            "a New York",
            "a Parigi"
          ]
        }
      ],
      "game": "Gioco della Land Art: in giardino o al parco, dividetevi in squadre. Ogni squadra crea un'opera con quello che trova a terra: foglie, rametti, sassi, petali. Poi fotografate tutte le opere, date a ciascuna un titolo e lasciate che il vento faccia il resto!",
      "words": [
        [
          "Pittura d'azione",
          "un modo di dipingere in cui conta il movimento di tutto il corpo, come faceva Pollock."
        ],
        [
          "Pop Art",
          "l'arte che usa le immagini della pubblicità, dei fumetti e dei prodotti di tutti i giorni."
        ],
        [
          "Serigrafia",
          "una tecnica di stampa che permette di ripetere la stessa immagine molte volte."
        ],
        [
          "Installazione",
          "un'opera in cui si può entrare, che occupa uno spazio intero."
        ],
        [
          "Land Art",
          "l'arte creata nella natura, con terra, sassi, acqua e piante."
        ],
        [
          "Murale",
          "un grande dipinto fatto su un muro."
        ],
        [
          "Street Art",
          "l'arte di strada, fatta sui muri delle città."
        ]
      ]
    }
  ],
  "finale": {
    "title": "Tocca a te!",
    "img": "base_12_finale",
    "alt": "In un cortile, bambini di oggi dipingono insieme un grande murale, chi con i pennelli, chi con i gessetti, chi con le mani; sopra di loro volano opere e monumenti di tutte le epoche.",
    "body": [
      "Che viaggio! Siamo partiti da una grotta, alla luce di una torcia, con le mani sporche di colore. Abbiamo visto i mosaici d'oro di Ravenna, siamo saliti sulla cupola di Brunelleschi, abbiamo cercato il sorriso della Gioconda, inseguito la luce con gli Impressionisti e siamo arrivati fino ai murales delle nostre città.",
      "In tutto questo tempo l'arte è cambiata moltissimo. Ma una cosa è rimasta uguale: le persone hanno sempre avuto bisogno di creare immagini, per raccontare storie, per ricordare, per pregare, per esprimere quello che provano e per rendere più bello il mondo intorno a loro.",
      "Adesso la storia dell'arte continua con te. Disegna, colora, modella, ritaglia, costruisci. E guarda il mondo con gli occhi ben aperti: l'arte è dappertutto. Chissà, forse un giorno in un libro come questo ci sarà anche una tua opera!"
    ],
    "leo": "Grazie per avermi accompagnato in questo viaggio. Ci vediamo alla prossima pennellata!"
  }
};

/* Come la voce deve pronunciare alcuni nomi stranieri (si può correggere qui). */
window.PRONUNCIA = {
  "Lascaux": "Lascò",
  "Montignac": "Montignàc",
  "Willendorf": "Vìllendorf",
  "Stonehenge": "Stòunhenge",
  "Kells": "Chels",
  "Trinity College": "Trìniti Còlleg",
  "Sainte-Chapelle": "Sent Sciapèl",
  "Santiago de Compostela": "Santiàgo de Compostèla",
  "Amboise": "Ambuàs",
  "Louvre": "Lùvr",
  "Gherardini": "Gherardìni",
  "Rembrandt van Rijn": "Rèmbrant van Ràin",
  "Rembrandt": "Rèmbrant",
  "Rijksmuseum": "Ràiksmuseum",
  "Johannes Vermeer": "Ioànnes Vermèr",
  "Vermeer": "Vermèr",
  "Mauritshuis": "Màuritshaus",
  "L'Aia": "L'Àia",
  "Grand Tour": "Gran Tur",
  "Royal Collection": "Ròial Collèction",
  "Possagno": "Possàgno",
  "Caspar David Friedrich": "Càspar Dàvid Frìdric",
  "Friedrich": "Frìdric",
  "Greifswald": "Gràifsvald",
  "Kunsthalle": "Kùnsthalle",
  "William Turner": "Uìliam Tèrner",
  "Turner": "Tèrner",
  "Hayez": "Àiez",
  "Nicéphore Niépce": "Nisefòr Nièps",
  "Niépce": "Nièps",
  "Le Gras": "Le Grà",
  "Harry Ransom Center": "Hèrri Rènsom Sènter",
  "Louis Daguerre": "Luì Daghèr",
  "Daguerre": "Daghèr",
  "Boulevard du Temple": "Bulvàr dü Tàmpl",
  "Michelangiolo": "Michelàngiolo",
  "Claude Monet": "Clod Monè",
  "Marmottan Monet": "Marmottàn Monè",
  "Monet": "Monè",
  "Le Havre": "Le Àvr",
  "Giverny": "Givernì",
  "Orangerie": "Oransgerì",
  "Edgar Degas": "Èdgar Degà",
  "Degas": "Degà",
  "Opéra": "Operà",
  "Orsay": "Orsè",
  "Pierre-Auguste Renoir": "Piér Ogùst Renuàr",
  "Renoir": "Renuàr",
  "Moulin de la Galette": "Mulèn de la Galèt",
  "Montmartre": "Monmàrtr",
  "Limoges": "Limòsg",
  "Cagnes-sur-Mer": "Càgn sür Mer",
  "Berthe Morisot": "Bert Morisò",
  "Morisot": "Morisò",
  "Bourges": "Bursg",
  "Georges Seurat": "Giòrg Sörà",
  "Seurat": "Sörà",
  "Grande-Jatte": "Grand Giàt",
  "Vincent van Gogh": "Vìnsent van Gog",
  "Van Gogh": "Van Gog",
  "van Gogh": "van Gog",
  "Zundert": "Zùndert",
  "Auvers-sur-Oise": "Ovèr sür Uàs",
  "Arles": "Arl",
  "Theo": "Tèo",
  "Paul Cézanne": "Pol Sezàn",
  "Cézanne": "Sezàn",
  "Aix-en-Provence": "Ecs an Provàns",
  "Sainte-Victoire": "Sent Victuàr",
  "Paul Gauguin": "Pol Goghèn",
  "Gauguin": "Goghèn",
  "Arearea": "Arèa arèa",
  "Antoni Gaudí": "Antòni Gaudì",
  "Gaudí": "Gaudì",
  "Sagrada Família": "Sagràda Famìlia",
  "Güell": "Guèl",
  "trencadís": "trencadìs",
  "Reus": "Rèus",
  "Henri Matisse": "Anrì Matìs",
  "Matisse": "Matìs",
  "fauves": "fov",
  "Le Cateau-Cambrésis": "Le Catò Cambresì",
  "Ermitage": "Ermitàsg",
  "Málaga": "Màlaga",
  "lápiz": "làpis",
  "Georges Braque": "Giòrg Brac",
  "Braque": "Brac",
  "Guernica": "Ghèrnica",
  "Dora Maar": "Dòra Mar",
  "Reina Sofía": "Rèina Sofìa",
  "Mougins": "Mugèn",
  "Vasilij Kandinskij": "Vasìli Kandìnschi",
  "Kandinskij": "Kandìnschi",
  "Paul Klee": "Pol Clè",
  "Klee": "Clè",
  "Piet Mondrian": "Pit Mòndrian",
  "Mondrian": "Mòndrian",
  "Neuilly-sur-Seine": "Nöii sür Sen",
  "Guggenheim": "Gùgghenaim",
  "Kunsthaus": "Kùnsthaus",
  "Metropolitan Museum of Art": "Metropòlitan Miusìam of Art",
  "Museum of Modern Art": "Miusìam of Mòdern Art",
  "Buffalo AKG Art Museum": "Bàffalo A Ca Gi Art Miusìam",
  "Buffalo": "Bàffalo",
  "de Chirico": "de Chìrico",
  "Volos": "Vòlos",
  "Salvador Dalí": "Salvadòr Dalì",
  "Dalí": "Dalì",
  "Figueres": "Fighèras",
  "René Magritte": "Renè Magrìt",
  "Magritte": "Magrìt",
  "Frida Kahlo": "Frìda Càlo",
  "Kahlo": "Càlo",
  "Coyoacán": "Coioacàn",
  "Casa Azul": "Casa Asùl",
  "Viva la vida": "Viva la vida",
  "Jackson Pollock": "Gèckson Pòllok",
  "Pollock": "Pòllok",
  "Cody": "Còdi",
  "Springs": "Springs",
  "Andy Warhol": "Èndi Uòrol",
  "Warhol": "Uòrol",
  "Campbell": "Chèmbel",
  "Pittsburgh": "Pìtsburg",
  "The Factory": "De Fèctori",
  "Roy Lichtenstein": "Ròi Lìctenstain",
  "Lichtenstein": "Lìctenstain",
  "Pop Art": "Pop Art",
  "Pop Shop": "Pop Sciop",
  "Street Art": "Strìt Art",
  "Land Art": "Lend Art",
  "Jeanne-Claude": "Gian Clod",
  "The Floating Piers": "De Flòuting Pìrs",
  "Robert Smithson": "Ròbert Smìtson",
  "Smithson": "Smìtson",
  "Spiral Jetty": "Spàiral Gètti",
  "Utah": "Iùta",
  "Keith Haring": "Chit Hèring",
  "Haring": "Hèring",
  "Reading": "Rèding",
  "New York": "Niu Iorc",
  "Washington": "Uòscington",
  "National Gallery of Art": "Nèscional Gàlleri of Art",
  "National Gallery": "Nèscional Gàlleri",
  "Art Institute": "Art Ìnstitiut",
  "Austin": "Òstin",
  "Puškin": "Pùskin"
};
