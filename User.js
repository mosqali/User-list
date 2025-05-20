'use script';

const createUser = document.getElementById('createUser');
const surname = document.getElementById('surname');
const name = document.getElementById('name');
const age = document.getElementById('age');
const sex = document.getElementById('sex');
const table = document.getElementById('user-table');



// Liste erstellen
const userList = []

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
const AddToTable = function(x, y, z, a) {
  const newRow = document.createElement('tr');
  document.createElement('tr');
  [x, z, y, a].forEach(text => {
    const td = document.createElement('td');
    td.textContent = text;
    newRow.appendChild(td);
  })
  table.appendChild(newRow);
}

createUser.addEventListener('click', function () {
  if (surname.value !== '' && name.value !== '' && age.value !== 'Bitte wählen' && sex.value !== 'Bitte wählen...') {
    // in Liste das objekt hinzufuegen
    userList.push(createUserObj(surname.value, name.value, age.value, sex.value));

    // Tabelle hinzufuegen
    AddToTable(surname.value, name.value, age.value, sex.value);
    DeleteInputFields();
  }
})
