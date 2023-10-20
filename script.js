const chapters = {
  debut: {
    titre: "Le réveil",
    description: "vous vous reveillez au bruit d'une tocsin. Vous sortez de la tavern et vois la moitié du village en cendres",
    image: "./assets/image/chambre_tavern.jpg",
    boutons: [{
      titre: "aller vers la droite vers le feu",
      destination: "droite",
    },
    {
      titre: "aller vers la gauche loin du feu",
      destination: "gauche",
    },
    ],
  },
  droite: {
    titre: "le chemin de droite",
    description: "vous partez vers la droite vers le feu. Vous vous retrouvez devant un goblin",
    image: "./assets/image/chemin_droit.jpg",
    boutons: [{
      titre: "attaquer le gobelin",
      destination: "attaque",
    },
    {
      titre: "retourner sur votre chemin précédent",
      destination: "fuite",
    },
    ],
  },
  gauche: {
    titre: "le chemin de gauche",
    description: "vous partez vers la gauche loin du feu. Vous trouvez une écurie ou que vous retrouvez un cheval qui dort et un mulet réveillez",
    image: "./assets/image/chemin_gauche.jpg",
    boutons: [{
      titre: "se diriger vers le cheval dormant",
      destination: "cheval",
    },
    {
      titre: "se diriger vers le mulet",
      destination: "mulet",
    },
    ],
  },
  cheval: {
    titre: "Le cheval",
    description: "vous derangez le gobelin qui mangeais le cheval et vous êtes sa porchaine victime '(vous mourrez)'",
    image: "./assets/image/goblin_cheval.jpg",
    boutons: [{
      titre: "dommage vous êtes mort",
      destination: "debut",
    },],
  },
  mulet: {
    titre: "Le mulet",
    description: "vous prennez le mulet et partez vers l'horizon couchante.",
    image: "./assets/image/mulet.png",
    boutons: [{
      titre: "félicitation vous avez gagné",
      destination: "debut",
    },],
  },
  attaque: {
    titre: "la voie du hero",
    description: "Vous chargez le gobelin en le tacklant, sur l'impact au sol un bruit de craquement se fit entendre, le gobelin est assomé",
    image: "./assets/image/knock_goblin.jpg",
    boutons: [{
      titre: "fouiller le corps du gobelin",
      destination: "pillage",
    },
    {
      titre: "vous continuez votre chemin",
      destination: "chemin",
    },
    ],
  },
  fuite: {
    titre: "la fuite",
    description: "en essayant de repartir vous alertez le gobelin qui vous met une flèche dans la tête '(vous mourrez)'",
    image: "./assets/image/arrow.jpg",
    boutons: [{
      titre: "dommage vous êtes mort",
      destination: "debut",
    },],
  },
  chemin: {
    titre: "Le chemin des goblins",
    description: "vous continuez votre chemin jusqu'à un camp de gobelin où que vous entendez un rugissement",
    image: "./assets/image/camp.jpg",
    boutons: [{
      titre: "se diriger vers le rugissement",
      destination: "rugissement",
    },
    {
      titre: "se diriger vers le camp",
      destination: "camp",
    },
    ],
  },
  pillage: {
    titre: "la clef mysterieuse",
    description: "vous fouillez le gobelin assomer pour y trouver une clef que vous mettez dans votre poche en continuant votre chemin jusqu'à un camp de gobelin où que vous entendez un rugissement",
    image: "./assets/image/camp.jpg",
    boutons: [{
      titre: "se diriger vers le rugissement",
      destination: "rugissement",
    },
    {
      titre: "se diriger vers le camp",
      destination: "camp",
    },
    ],
  },
  camp: {
    titre: "la route du camp",
    description: "vous tomber dans un piege de gobelin, vous vous faite capturé et peu de temps après vous êtes mort",
    image: "./assets/image/trap.jpg",
    boutons: [{
      titre: "dommage vous êtes mort",
      destination: "debut",
    },],
  },
  rugissement: {
    titre: "la route du rugissement",
    description: "vous vous dirigez vers le rugissement, arriver sur place vous voyez un dragon dans une grande cage avec une serrure pour une clef",
    image: "./assets/image/dragon_cage.jpg",
    boutons: [{
      titre: "ne pas ouvrir et se dirigez vers le camp",
      destination: "camp",
    },
    ],
  },
  hero: {
    titre: "le hero du village",
    description: "le dragon ravage le camps gobelin et laisse  vous et le village tranquille, félicition le village est sauvé",
    image: "./assets/image/dragon.webp",
    boutons: [{
      titre: "félicitation vous êtes un vrai hero!",
      destination: "debut",
    },],
  },
};

/*chapters.debut.boutons = [{
    titre: "aller vers la droite vers le feu",
    destination: "droite"
  },
  {
    titre: "aller vers la gauche loin du feu",
    destination: "gauche"
  },
];
chapters.droite.boutons = [{
    titre: "attaquer le gobelin",
    destination: "attaque"
  },
  {
    titre: "retourner sur votre chemin précédent",
    destination: "retour"
  },
];
chapters.gauche.boutons = [{
    titre: "se diriger vers le cheval dormant",
    destination: "cheval"
  },
  {
    titre: "se diriger vers le mulet",
    destination: "mulet"
  },
];
chapters.mulet.boutons = [{
  titre: "félicitation vous avez gagné",
  destination: "debut"
}, ];
chapters.cheval.boutons = [{
  titre: "dommage vous êtes mort",
  destination: "debut"
}, ];
chapters.fuite.boutons = [{
  titre: "dommage vous êtes mort",
  destination: "debut"
}, ];
chapters.attaque.boutons = [{
    titre: "fouiller le corps du gobelin",
    destination: "pillage"
  },
  {
    titre: "vous continuez votre chemin",
    destination: "chemin"
  },
];
chapters.chemin.boutons = [{
    titre: "se diriger vers le rugissement",
    destination: "rugissement"
  },
  {
    titre: "se diriger vers le camp",
    destination: "camp"
  },
];
chapters.pillage.boutons = [{
    titre: "se diriger vers le rugissement",
    destination: "rugissement"
  },
  {
    titre: "se diriger vers le camp",
    destination: "camp"
  },
];
chapters.camp.boutons = [{
  titre: "dommage vous êtes mort",
  destination: "debut"
}, ];
chapters.rugissement.boutons = [{
    titre: "ne pas ouvrir et se dirigez vers le camp",
    destination: "camp"
  },
  {
    titre: "utiliser la clef (besoin d'une clef)",
    destination: "hero"
  },
];
chapters.hero.boutons = [{
  titre: "félicitation vous êtes un vrai hero!",
  destination: "debut"
}, ];*/

let twist = false

function goToChapter(chapitre) {
  if (chapters.hasOwnProperty(chapitre)) {
    const chap = chapters[chapitre];
    console.log("Titre du chapitre:", chap.titre);
    console.log("Description du chapitre:", chap.description);
    const title = document.getElementById("title");
    const texte = document.getElementById("texte");
    const img = document.getElementById("image");
    const boutons = document.getElementById("Bouton");

    title.innerHTML = chap.titre;
    texte.innerHTML = chap.description;
    img.innerHTML = `<img src=${chap.image}>`;

    if (chapters[chapitre] && chapitre === "pillage") {
      twist = true;
      console.log("hi")
    }
    if (chapters[chapitre] && chapitre === "debut") {
      twist = false;
    }
    if (chap.boutons.length > 0) {
      console.log("Options :");
      for (const bouton of chap.boutons) {
        console.log(bouton.titre);
        console.log("Tapez goToChapter('" + bouton.destination + "')");
      }
    } else {
      console.error("Mauvaise clé de chapitre");
    }



    while (boutons.firstChild) {
      boutons.removeChild(boutons.firstChild);
    }
    for (let i = 0; i < chap.boutons.length; i++) {
      const nouveauBtn = document.createElement('button');
      nouveauBtn.textContent = chap.boutons[i].titre;
      nouveauBtn.addEventListener('click', () => {
        goToChapter(chap.boutons[i].destination)
      });
      boutons.appendChild(nouveauBtn);
    };
    if (chapitre === "rugissement" && twist) {
      const nouveauBtn = document.createElement('button');
      nouveauBtn.textContent = "utiliser la clef (besoin d'une clef)";
      nouveauBtn.addEventListener("click", () => {
        goToChapter("hero")
      });
      boutons.appendChild(nouveauBtn)
    }
  }
}
goToChapter("debut");


