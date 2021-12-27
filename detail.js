const API_URL1 = "https://ycztxoooifrapzlyymeo.supabase.co/rest/v1/liste"
const API_URL2 = "https://ycztxoooifrapzlyymeo.supabase.co/rest/v1/competences"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDE3ODMxNSwiZXhwIjoxOTU1NzU0MzE1fQ.dAk66-lyxFwIwsBDMfGao_wZ59z0yCQL_mxNVkg7sJM"

const detail = document.getElementById('detail')
const valider = document.getElementById('valider')
const value1 = document.getElementById('value1')
const value2 = document.getElementById('value2')
const value3 = document.getElementById('value3')
const value4 = document.getElementById('value4')
const value5 = document.getElementById('value5')
const value6 = document.getElementById('value6')
const value7 = document.getElementById('value7')
const value8 = document.getElementById('value8')
window.addEventListener("DOMContentLoaded", (event) => {
    //RECUPERATION DES DONNEES VIA API
    fetch(API_URL1, {
      headers: {
        apikey: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((liste) => {
        liste.forEach((App) => {
            let getId = localStorage.getItem("MonId");
            if(App.id == getId){
                afficherDetail(App)
            }
                    
        })
    })
})


function afficherDetail(idee){
    detail.insertAdjacentHTML(
        "beforeend",
        `
        <div class="row">
                    <a href="liste.html">Retour</a>
        </div>
        <div class="col-5 mt-4" style = "height: 19rem; " >
            <div class="row">
                <div class="col-10">
                    <img src="" alt="" id="img" style="box-shadow: 10px 12px 29px -6px #000000;border-radius: 10px">
                </div>

            </div>
        
        </div>
        <div class="col-7 mt-4" style=" height: 19rem; box-shadow: 10px 12px 29px -6px #000000; border-radius: 10px">
            <div class="row">
                <h1 id="prenom">${idee.prenom +" "+ idee.nom}</h1>
            </div>
            <div class="row">
                <p id="niveau">Niveau : ${idee.niveau}</p>
            </div>
            <div class="row">
                <p id="date">Date de naissance : ${idee.date}</p>
            </div>
            <div class="row">
                <p id="numero">Numéro de téléphone : ${idee.numero}</p>
            </div>
            <div class="row">
                <p>Adresse : ${idee.adresse}</p>
            </div>
            <div class="row">
                <p>Bio: ${idee.bio}</p>
            </div>
        </div>
      `
    )
    let img = document.getElementById('img')
    if (idee.genre == "Homme") {
        img.src = "https://img.myloview.fr/stickers/humain-homme-personne-avatar-profil-utilisateur-vector-icon-illustration-700-80389264.jpg"
    }else{
        img.src = "https://img.myloview.fr/stickers/humain-femme-personne-avatar-profil-utilisateur-vector-icon-illustration-700-80949476.jpg"
    }
    img.style.width = "100%"
    img.style.height = "19rem"
}

valider.addEventListener('click', function(e){
    e.preventDefault()
    let value9 = localStorage.getItem("MonId");
    alert(value9)
const compet = {
    maquetter : value1.value,
    realiser : value2.value,
    developper : value3.value,
    interface : value4.value,
    bdd : value5.value,
    composants : value6.value,
    backend : value7.value,
    elaborer : value8.value,
    id_app: value9
  
  }
  alert(compet.maquetter)
  //ENVOYER LES DONNEES VERS SUPABASE
  fetch(API_URL2, {
    method: "POST",
    headers: {
      apikey: API_KEY,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(compet),
   
  })
  console.log(compet)
})

const maq = document.getElementById('maq')
const real = document.getElementById('real')
const dev = document.getElementById('dev')
const reali = document.getElementById('reali')
const bd = document.getElementById('bd')
const compo = document.getElementById('compo')
const backa = document.getElementById('backa')
const el = document.getElementById('el')
let pourcentage1 = 0
let pourcentage2 = 0
let pourcentage3 = 0
let pourcentage4 = 0
let pourcentage5 = 0
let pourcentage6 = 0
let pourcentage7 = 0
let pourcentage8 = 0


//recuperer les donnees
window.addEventListener("DOMContentLoaded", (event) => {
    //RECUPERATION DES DONNEES VIA API
    fetch(API_URL2, {
      headers: {
        apikey: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((competences) => {
        competences.forEach((competence) => {
            let getId = localStorage.getItem("MonId");
            if(competence.id_app == getId){
                pourcentage1 = (competence.maquetter * 100) / 30
                maq.style.width = pourcentage1 + "%"
                maq.style.backgroundColor = "red"

                pourcentage2 = (competence.realiser * 100) / 30
                real.style.width = pourcentage2 + "%"
                real.style.backgroundColor = "green"

                pourcentage3 = (competence.developper * 100) / 30
                dev.style.width = pourcentage3 + "%"
                dev.style.backgroundColor = "yellow"

                pourcentage4 = (competence.interface * 100) / 30
                reali.style.width = pourcentage4 + "%"
                reali.style.backgroundColor = "orange"

                pourcentage5 = (competence.bdd * 100) / 30
                bd.style.width = pourcentage5 + "%"
                bd.style.backgroundColor = "blue"

                pourcentage6 = (competence.composants * 100) / 30
                compo.style.width = pourcentage6 + "%"
                compo.style.backgroundColor = "pink"

                pourcentage7 = (competence.backend * 100) / 30
                backa.style.width = pourcentage7 + "%"
                backa.style.backgroundColor = "purple"

                pourcentage8 = (competence.elaborer * 100) / 30
                el.style.width = pourcentage8 + "%"
                el.style.backgroundColor = "brown"
            }
                    
        })
    })
})









