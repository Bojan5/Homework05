
let arrOfDogs = [
    {
      name: 'Aron',
      breed: 'Golden Retriever',
      hair: 'Medium',
      size: 'Large',
      age: 1,
      color: 'Golden'
    },
    {
      name: 'Jack',
      breed: 'Fox terrier',
      hair: 'Short',
      size: 'Medium',
      age: 10,
      color: 'White-brown'
    },
    {
      name: 'Hector',
      breed: 'Dogo Argentino',
      hair: 'Short',
      size: 'Extra large',
      age: 1,
      color: 'White'
    },
    {
      name: 'Alfa',
      breed: 'Great Dane',
      hair: 'Short',
      size: 'Extra large',
      age: 5,
      color: 'Gray'
    },
    {
      name: 'Bono',
      breed: 'French bulldog',
      hair: 'Short',
      size: 'Small',
      age: 6,
      color: 'Black'
    }
  ];
let button = document.getElementById('register');
let table = document.getElementById("table")

function addDog() {
    for(i = 0; i < arrOfDogs.length; i++) {
        let dogAge = arrOfDogs[i].age;
        let puppy = dogAge <= 1 ? 'puppy' : dogAge;
        table.innerHTML += `<tr>
        <td>${arrOfDogs[i].name}</td>
        <td>${arrOfDogs[i].breed}</td>
        <td>${arrOfDogs[i].hair}</td>
        <td>${arrOfDogs[i].size}</td>
        <td>${puppy}</td>
        <td>${arrOfDogs[i].color}</td>
        </tr>`
    }
};

button.addEventListener('click', function() {
    fetch('https://api.myjson.com/bins/x3jsq')
    .then(response => {
        return response.json();
    }).then(arrOfDogs => {
        table.innerHTML = '';
        addDog(arrOfDogs);
    })
})