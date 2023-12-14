const chapters = {
  debut: {
    titre: "Le réveil",
    description: "vous vous reveillez au bruit d'une tocsin. Vous sortez de la tavern et vois la moitié du village en cendres",
    image: "./assets/image/chambre_tavern.jpg",
    sons: "./assets/sons/alarm.mp3",
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
    image: "./assets/image/chemin_droite.jpg",
    video:"./assets/video/village_feu.mp4",
    sons: "./assets/sons/alarm.mp3",
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
    sons: "./assets/sons/alarm.mp3",
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
    sons: "./assets/sons/alarm.mp3",
    boutons: [{
      titre: "dommage vous êtes mort",
      destination: "debut",
    },],
  },
  mulet: {
    titre: "Le mulet",
    description: "vous prennez le mulet et partez vers l'horizon couchante.",
    image: "./assets/image/mulet.png",
    sons: "./assets/sons/alarm.mp3",
    boutons: [{
      titre: "félicitation vous avez gagné",
      destination: "debut",
    },],
  },
  attaque: {
    titre: "la voie du hero",
    description: "Vous chargez le gobelin en le tacklant, sur l'impact au sol un bruit de craquement se fit entendre, le gobelin est assomé",
    image: "./assets/image/knock_goblin.jpg",
    sons: "./assets/sons/alarm.mp3",
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
    sons: "./assets/sons/alarm.mp3",
    boutons: [{
      titre: "dommage vous êtes mort",
      destination: "debut",
    },],
  },
  chemin: {
    titre: "Le chemin des goblins",
    description: "vous continuez votre chemin jusqu'à un camp de gobelin où que vous entendez un rugissement",
    image: "./assets/image/camp.jpg",
    sons: "./assets/sons/alarm.mp3",
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
    sons: "./assets/sons/alarm.mp3",
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
    sons: "./assets/sons/trap.mp3",
    boutons: [{
      titre: "dommage vous êtes mort",
      destination: "debut",
    },],
  },
  rugissement: {
    titre: "la route du rugissement",
    description: "vous vous dirigez vers le rugissement, arriver sur place vous voyez un dragon dans une grande cage avec une serrure pour une clef",
    image: "./assets/image/dragon_cage.jpg",
    sons: "./assets/sons/alarm.mp3",
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
    video:"./assets/video/dragon.mp4",
    sons: "./assets/sons/alarm.mp3",
    boutons: [{
      titre: "félicitation vous êtes un vrai hero!",
      destination: "debut",
    },],
  },
};

let twist = false
let Muted = false

function saveProgress(chapitre) {
  localStorage.setItem('currentChapter', chapitre);
  localStorage.setItem('twistActivated', twist);
}

function loadProgress() {
  const savedChapter = localStorage.getItem('currentChapter');
  const savedTwist = localStorage.getItem('twistActivated');
  if (savedChapter) {
    goToChapter(savedChapter);
  } else {
    goToChapter('debut');
  }
  twist = savedTwist === 'true';
}

function resetGame() {
  localStorage.clear();
  goToChapter('debut');
}

function saveMuteStatus() {
  localStorage.setItem('isMuted', Muted);
}

function loadMuteStatus() {
    const savedMuteStatus = localStorage.getItem('isMuted');
    if (savedMuteStatus) {
      Muted = savedMuteStatus === 'true';
      document.getElementById("muteCheckbox").checked = Muted;
    }
  }

function goToChapter(chapitre) {
  if (chapters.hasOwnProperty(chapitre)) {
    const chap = chapters[chapitre];
    console.log("Titre du chapitre:", chap.titre);
    console.log("Description du chapitre:", chap.description);
    const title = document.getElementById("title");
    const texte = document.getElementById("texte");
    const img = document.getElementById("image");
    const boutons = document.getElementById("Bouton");
    const son = document.getElementById("audio");
    const retourBtn = document.getElementById("btn-retour");

    const video = document.createElement("video");
    const sons = document.createElement("audio");
    const image = document.createElement("img");
    

    title.innerHTML = chap.titre;
    texte.innerHTML = chap.description;
    
    saveProgress(chapitre);
    
    retourBtn.addEventListener('click', () => {
      goToChapter("debut");
      resetGame();
    });
  

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

  const muteCheckbox = document.getElementById("muteCheckbox");
  Muted = muteCheckbox.checked;

  muteCheckbox.addEventListener('change', () => {
  Muted = muteCheckbox.checked;
  saveMuteStatus();
  });

  
  // sons
  if (chap.sons && !Muted) {
    son.innerHTML = '';
    sons.src = chap.sons;
    sons.autoplay = true;
    son.appendChild(sons);
  }

  

    //video 
  if (chap.video) {
    img.innerHTML = ''
    video.src = chap.video;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    img.appendChild(video);
  } else {
   img.innerHTML = ''
    //img.innerHTML = `<img src=${chap.image}>`;
    //hasVideo = false;
    image.src = chap.image;
   img.appendChild(image)
  }
  }
  
loadMuteStatus();
}
loadProgress()



