// Seleziono gli elementi del form
const nameField = document.getElementById('name-field');
const kmField = document.getElementById('km-field');
const offerField = document.getElementById('offer-field');
const form = document.querySelector('form');
const cancel =document.getElementById('cancel')

// seleziono gli elementi target
const name = document.getElementById('full-name');
const category = document.getElementById('category');
const seat = document.getElementById('n-train');
const price = document.getElementById('price');






//Aggiungo gli Eventi dei bottoni

form.addEventListener('submit', (event) => {
  // inibisco l'invio del form
  event.preventDefault();
  
  name.innerText = nameField.value.trim();
  category.innerText = titleField.value;
  seat.innerText = roleField.value.trim();
  email.innerText = emailField.value.trim();
  price.innerText = phoneField.value.trim();
  
})

cancel.addEventListener('click', () => {
  // inibisco l'invio del form
  
  nameField.value = '';
  kmField.value = '';
  offerField.value = '';
  
})

