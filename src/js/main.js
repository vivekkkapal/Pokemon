import data from './data.json';

// Dom selection
const cardEL = document.querySelector('#row');
const inputEL = document.querySelector('input');

//add event listner
document.addEventListener('keypress', (e) => {
  if (e.key == '/') {
    e.preventDefault();
    inputEL.focus();
  }
});

//show pokemon name 
for (let pokemonobj of data) {
   const div = document.createElement('div');
   div.classList.add('col');
   div.innerHTML = `<div class="card">
            <img
              src="${pokemonobj.image}"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">${pokemonobj.name}</h5>
              <p class="card-text">
              ${pokemonobj.description}
              </p>
            </div>
          </div>`;

    cardEL.appendChild(div);
}

function renderPokemons(list) {}

