"usse strict";
let reset = document.getElementById('reset');
let sUser = document.getElementById('s-User');
let sIa =document.getElementById('s-Ia');
let btnUser = [...document.getElementsByClassName('btn-user')];
let btnIaP = document.getElementById('Iapierre');
let btnIaF = document.getElementById('Iafeuille');
let btnIaC = document.getElementById('Iaciseaux');
let m = document.getElementById('message');
let next = document.getElementById('next');

//parametre  joueur
const MancheUser = (e) =>{
    let choix = e.target.closest('.btn-user');
btnUser.forEach((btn)=>{
    btn.classList.add('desactivated');
    btn.removeEventListener("click",MancheUser);
});
choix.classList.remove('desactivated');
choix.classList.add("active");
let choixUser = choix.id;
let choixIa = choixIAa();
Gagnant(choixUser, choixIa);
next.style.visibility = "visible";
}

const P = "pierre";
const F = "feuille";
const C = "ciseaux";
//parametre Ia
const choixIAa = () =>{
    let nbralea = Math.floor(Math.random()*3);
    switch(nbralea){
        case 0:
            btnIaP.classList.add("active");
            return P;
        case 1:
            btnIaF.classList.add("active");
            return F;
        case 2:
            btnIaC.classList.add('active');
            return C;
    };
};

 //resultat
const Gagnant = (choixUser, choixIa)=>{
    if (choixUser == choixIa) {
        m.textContent = "Egalité !";
        return;
    }
    if (choixUser == P) {
        if (choixIa == F) {
            return victoireIa();
        } else if (choixIa == C) {
            return victoireUser();
        }
    }
    if (choixUser == F) {
        if (choixIa == C) {
            return victoireIa();
        } else if (choixIa == P) {
            return victoireUser();
        }
    }
    if (choixUser == C) {
        if (choixIa == P) {
            return victoireIa();
        } else if (choixIa == F) {
            return victoireUser();
        }
    }
}
const victoireIa = ()=>{
    m.textContent = "L'Ia gagne :(";
    sIa.textContent++;
}
const victoireUser = ()=>{
    m.textContent = "Vous gagnez :)";
    sUser.textContent++;
}

//Mise à jour pour une nouvelle manche
const newManche = () =>{
    btnUser.forEach((btn) => {
        btn.classList.remove("desactivated");
        btn.classList.remove("active");
        btn.addEventListener("click", MancheUser);
    });

    next.style.visibility = "hidden";

    btnIaP.classList.remove("active");
    btnIaF.classList.remove("active");
    btnIaC.classList.remove("active");

    m.textContent = "A vous de jouer !";
};
//remise à 0
reset.addEventListener("click", ()=>{
    sUser.textContent = 0;
    sIa.textContent = 0 ;
});

next.addEventListener("click", newManche);
btnUser.forEach((btn)=> btn.addEventListener("click",MancheUser));