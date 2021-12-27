
const API_URL = "https://ycztxoooifrapzlyymeo.supabase.co/rest/v1/liste"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDE3ODMxNSwiZXhwIjoxOTU1NzU0MzE1fQ.dAk66-lyxFwIwsBDMfGao_wZ59z0yCQL_mxNVkg7sJM"


//----------------------------------------LocalStorage---------------------------------------------------
let addBtn = document.getElementById("submit");
addBtn.addEventListener("click", function(e) {

  let firstname = document.getElementById("firstname");
  let lastname = document.getElementById("lastname");
  let birthday = document.getElementById('birthday')
  let number = document.getElementById('number')
  let city = document.getElementById('city')
  let level = document.getElementById('level')
  let gender = document.getElementById('gender')
  let picture = document.getElementById('picture')
  
    if (firstname.value == "" || lastname.value == "" || birthday.value == "" || number.value == "" || city.value == "" || level.value == "" || gender.value == "" || picture.value == "") {
        return alert("Veuillez remplir tous les champs !!!")
    }

  let Apprenants = localStorage.getItem("Apprenants");
  if (Apprenants == null) {
    AppObj = [];
  } else {
    AppObj = JSON.parse(Apprenants);
  }
  let myObj = {
    Prenom: firstname.value,
    Nom: lastname.value,
    Anniversaire: birthday.value,
    Numéro: number.value,
    Ville: city.value,
    Niveau: level.value,
    Genre: gender.value,
    Bio: picture.value
  }
  AppObj.push(myObj);
  localStorage.setItem("Apprenants", JSON.stringify(AppObj));
  firstname.value = "";
  lastname.value = "";
  birthday.value = "";
  number.value = "";
  city.value = "";
  level.value = "";
  gender.value = "";
  picture.value = "";

//   console.log(notesObj);
  showApp();
});

//-------------------------------------------Afficher les donnees---------------------------------------
function showApp() {
  let Apprenants = localStorage.getItem("Apprenants");
  if (Apprenants == null) {
    AppObj = [];
  } else {
    AppObj = JSON.parse(Apprenants);
  }
  let html = "";
  AppObj.forEach(function(element, index) {
    html += `
      <div class="card" style="width: 18rem; margin: 2rem; background: rgba(128, 128, 128, 0.308); border-radius: 10px; border: none; box-shadow: 14px 6px 15px 0px #000000">
        <div class="card-body">
          <h4 class="card-title" style="text-align: center">${element.Prenom}  ${element.Nom}</h4>
          <hr>
          <div class="row justify-content-center align-items-center">
            <div class="col">
              <h6 class="card-subtitle mb-2 text-muted">Date de naissance : </h6>
            </div>
            <div class="col">
              <h6>${element.Anniversaire}</h6>
            </div>
            <hr>
          </div>
          <div class="row justify-content-center align-items-center">
            <div class="col">
            <h6 class="card-subtitle mb-2 text-muted">Téléphone :  </h6>
            </div>
            <div class="col">
              <h6>${element.Numéro}</h6>
            </div>
            <hr>
          </div>
          <div class="row justify-content-center align-items-center">
            <div class="col">
            <h6 class="card-subtitle mb-2 text-muted">Adresse :  </h6>
            </div>
            <div class="col">
              <h6>${element.Ville}</h6>
            </div>
            <hr>
          </div>
          <div class="row justify-content-center align-items-center">
            <div class="col">
            <h6 class="card-subtitle mb-2 text-muted">Niveau :  </h6>
            </div>
            <div class="col">
              <h6>${element.Niveau}</h6>
            </div>
            <hr>
          </div>
          <div class="row justify-content-center align-items-center">
            <div class="col">
            <h6 class="card-subtitle mb-2 text-muted">Genre :  </h6>
            </div>
            <div class="col">
              <h6>${element.Genre}</h6>
            </div>
            <hr>
          </div>
          <div class="row justify-content-center align-items-center">
            <div class="col">
            <h6 class="card-subtitle mb-2 text-muted">Bio :  </h6>
            </div>
            <div class="col">
              <h6>${element.Bio}</h6>
            </div>
          </div>
          
           
           
           
           
          <hr>
          <div class="row">
          <div class="col">
          <button style="background: none; border: none" id="${index}"onclick="deleteNote(this.id)" class="note-btn"><img src="img/delete.png" height="35rem" width="50rem"></button>
          </div>
           
          <div class="col">
          <button style="background: none; border: none" id="${index}"onclick="editNote(this.id)" class="note-btn edit-btn"><img src="img/bouton-modifier.png" height="35rem" width="50rem"></button>
          </div>
            
            <div class="col">
            <button style="background: none; border: none" id="${index}" onclick="addToAPI(this.id)" class="note-btn add-btn"><img src="img/check.png" height="35rem" width="50rem"></button>
            </div>
            
          </div>
        </div>
      </div>
            `;
  });
  let AppElm = document.getElementById("listes");
  if (AppObj.length != 0) {
    AppElm.innerHTML = html;
  } else {
    AppElm.innerHTML = `Rien n'a été ajouté.`;
  }
}


//---------------------------------------Supprimer----------------------------------------
function deleteNote(index) {
  //   console.log("I am deleting", index);
      let confirmDel = confirm("Voulez-vous vraiment supprimer ?");
      if (confirmDel == true) {
          let Apprenants = localStorage.getItem("Apprenants");
          if (Apprenants == null) {
              AppObj = [];
          } else {
              AppObj = JSON.parse(Apprenants);
          }
  
          AppObj.splice(index, 1);
          localStorage.setItem("Apprenants", JSON.stringify(AppObj));
          showNotes();
      }
    
}


//-----------------------------------------Modifier---------------------------------------
function editNote(index) {
  let Apprenants = localStorage.getItem("Apprenants");
  let firstname = document.getElementById("firstname");
  let lastname = document.getElementById("lastname");
  let birthday = document.getElementById('birthday')
  let number = document.getElementById('number')
  let city = document.getElementById('city')
  let level = document.getElementById('level')
  let gender = document.getElementById('gender')
  let picture = document.getElementById('picture')



  if (Apprenants == null) {
    AppObj = [];
  } else {
    AppObj = JSON.parse(Apprenants);
  }
  console.log(AppObj);

  AppObj.findIndex((element, index) => {
    firstname.value = element.Prenom
    lastname.value = element.Nom
    birthday.value = element.Anniversaire
    number.value = element.Numéro
    city.value = element.Ville
    level.value = element.Niveau
    gender.value = element.Genre
    picture.value = element.Bio
  })
  AppObj.splice(index, 1);
      localStorage.setItem("Apprenants", JSON.stringify(AppObj));
      showApp();
}



//-----------------------------------API------------------------------------------------
function addToAPI(index){
  confirmAdd = window.confirm('Voulez vous vraiment enregistrer cet apprenant ?')
  if (confirmAdd == true) {
    let Apprenants = localStorage.getItem("Apprenants");
  if (Apprenants == null) {
    AppObj = [];
  } else {
    AppObj = JSON.parse(Apprenants);
  }
  const newApp = {
    prenom : AppObj[index].Prenom,
    nom : AppObj[index].Nom,
    date : AppObj[index].Anniversaire,
    numero : AppObj[index].Numéro,
    adresse : AppObj[index].Ville,
    niveau : AppObj[index].Niveau,
    genre : AppObj[index].Genre,
    bio : AppObj[index].Bio
  
  }
  //ENVOYER LES DONNEES VERS SUPABASE
  fetch(API_URL, {
    method: "POST",
    headers: {
      apikey: API_KEY,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(newApp),
  })
  }else{
    alert('ok')
  }
  

  AppObj.splice(index, 1);
  localStorage.setItem("Apprenants", JSON.stringify(AppObj));
  showApp();
  
}



showApp();











  





  
