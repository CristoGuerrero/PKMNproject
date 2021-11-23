const card = document.createElement('div')

    const spriteContainer = document.createElement('div');

    const sprite = document.createElement('img');

    const number = document.createElement('p');

    const name = document.createElement('p');
const pokemonContainer = document.getElementById('pokemonContainer')

function fetchPokemon() {
    let id = document.getElementById("searchid").value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json())
    .then((data) => {createPokemon(data)
    })
}

function createPokemon(pokemon){
    
    card.classList.add('pokemonBlock');
   
    spriteContainer.classList.add('img-container');

    sprite.src = pokemon.sprites.front_default

    spriteContainer.appendChild(sprite);

    number.textContent = `#${pokemon.id.toString().padStart(3,0)}`;

    name.classList.add('name');
    name.textContent = pokemon.name;
   

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);
 
    pokemonContainer.appendChild(card);
    
}
