'use script';

const createUser = document.getElementById('createUser');
const surname = document.getElementById('surname');
const name = document.getElementById('name');
const age = document.getElementById('age');
const sex = document.getElementById('sex');
const table = document.getElementById('user-table');


// Objekt Benutzer
class User{
  constructor(surname, name, age, sex){
    this.surname = surname;
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
}


// Benutzer anlegen
const createUserObj = function(surname, name, age, sex) {
  // Objekt wird erstellt
  const newUser = new User(surname, name, age, sex);
  return newUser;
}

// Textfelder loeschen
const DeleteInputFields = function() {
  [surname, name].forEach(id => id.value = ''); 
  [age, sex].forEach(id => id.selectedIndex = 0);
}

// Tabelle hinzufuegen
const AddToTable = function(surname, name, age, sex) {
  const newRow = document.createElement('tr');
  [surname, name, age, sex].forEach(text => {
    const td = document.createElement('td');
    td.textContent = text;
    newRow.appendChild(td);
  })
  table.appendChild(newRow);
}

// Tabelle updaten
const UpdateTable = function() {
      // Daten Abrufen
      let savedData = localStorage.getItem('userData');
      let oUser = JSON.parse(savedData);
}

const LocalstorageData = function() {
      // Objekt in localstorage speichern
      let data = JSON.parse(localStorage.getItem('userData'));

      if(Array.isArray(data)) {
        data.push(createUserObj(surname.value, name.value, age.value, sex.value));
        localStorage.setItem('userData', JSON.stringify(data));
      }
      else {
        localStorage.setItem('userData', JSON.stringify([createUserObj(surname.value, name.value, age.value, sex.value)])); // setItem('key', string)
      }
      return data;
}

createUser.addEventListener('click', function () {
  if (surname.value !== '' && name.value !== '' && age.value !== 'Bitte wählen' && sex.value !== 'Bitte wählen...') {

    // Objekt in localstorage speichern
    LocalstorageData();
    console.log(LocalstorageData())

    // Zur Tabelle hinzufuegen
    const userList = JSON.parse(localStorage.getItem('userData'))
    userList.foreach(user => {
      let line = document.createElement('')
    })

    //Deleting
    DeleteInputFields();
  }
})

window.onload = function() {
  UpdateTable();
}
