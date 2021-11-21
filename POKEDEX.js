const pokemonContainer = document.getElementById('pokemonContainer')

function fetchPokemon() {
    let id = document.getElementById("searchid").value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json())
    .then((data) => {createPokemon(data)
    })
}

function createPokemon(pokemon){
    const card = document.createElement('div')
    card.classList.add('pokemonBlock');
   
    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default

    spriteContainer.appendChild(sprite);

    const number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3,0)}`;

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name;
   

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);
  console.log(name)
    pokemonContainer.appendChild(card);
    
}
