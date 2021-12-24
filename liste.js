const API_URL = "https://ycztxoooifrapzlyymeo.supabase.co/rest/v1/liste"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDE3ODMxNSwiZXhwIjoxOTU1NzU0MzE1fQ.dAk66-lyxFwIwsBDMfGao_wZ59z0yCQL_mxNVkg7sJM"

const cartes = document.getElementById('cartes')
// AFFICHAGE DE LA DES IDEES
window.addEventListener("DOMContentLoaded", (event) => {
    //RECUPERATION DES DONNEES VIA API
    fetch(API_URL, {
      headers: {
        apikey: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((liste) => {
        liste.forEach((App) => {
            creerUneCarte(App)
        })
    })
})

function creerUneCarte(idee){
    divCard = document.createElement('div')
    cartes.appendChild(divCard)
    divCard.setAttribute('class', 'card justify-content-center align-items-center')
    divCard.style.width = "18rem"
    divCard.style.margin = "2rem"
    img = document.createElement('img')
    divCard.appendChild(img)
    img.setAttribute('class', 'card-img-top')
    if (idee.genre == "Homme") {
        img.src = "https://img.myloview.fr/stickers/humain-homme-personne-avatar-profil-utilisateur-vector-icon-illustration-700-80389264.jpg"
    }else{
        img.src = "https://img.myloview.fr/stickers/humain-femme-personne-avatar-profil-utilisateur-vector-icon-illustration-700-80949476.jpg"
    }
    img.style.height = "10rem"
    img.style.width = "10rem"
    divCardBody = document.createElement('div')
    divCard.appendChild(divCardBody)
    divCardBody.setAttribute('class', 'card-body')
    divCardBody.style.textAlign = "center"
    h5 = document.createElement('h5')
    divCardBody.appendChild(h5)
    h5.setAttribute('class', 'card-title')
    h5.innerHTML = idee.prenom +" "+ idee.nom
    p = document.createElement('p')
    divCardBody.appendChild(p)
    p.setAttribute('class', 'card-text')
    p.innerHTML = idee.niveau
    divBtn = document.createElement('div')
    divCard.appendChild(divBtn)
    divBtn.setAttribute('class', 'row justify-content-center align-items-center')
    btnAjout = document.createElement('button')
    divBtn.appendChild(btnAjout)
    btnAjout.setAttribute('class', 'col')
    btnAjout.innerHTML = "Compétences"
    btnAjout.style.margin = "1rem"
    btnAjout.style.border = "none"
    btnAjout.style.background = "#ce0033"
    btnAjout.style.padding = "10px"
    btnAjout.style.borderRadius = "10px"
    btnAjout.style.color = "white"
}

