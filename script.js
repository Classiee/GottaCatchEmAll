let pikachu = {
    name: "Pikachu",
    health: 45,
    image: "pikachu.png",
    level: 8,
  };
  
  let bulbasaur = {
    name: "Bulbasaur",
    health: 70,
    image: "bulbasaur.png",
    level: 12,
  };
  
  let oranguru = {
    name: "Oranguru",
    health: 170,
    image: "oranguru.png",
    level: 45,
  };
  
  let drowzee = {
    name: "Drowzee",
    health: 90,
    image: "drowzee.png",
    level: 33,
  };
  
  let possiblePokemon = [pikachu, bulbasaur, oranguru, drowzee];
  let randomPokemon;
  
  let playerInfo = {
    name: "Artsy",
    image: "pokemonTrainerIdle.png",
    pokemon: [],
  }
  

  
  let app = document.getElementById("app");
  
  updateView();
  
  function updateView() {
    getRandomPokemon();
    app.innerHTML = /*HTML*/ `
    <div class="container">
      <div class="opposingPokemon">
          <div>${randomPokemon.name} </div>
          <div>lvl: ${randomPokemon.level}</div>
          <img src="${randomPokemon.image}">
      </div>
      
      <div class="bottomScreen">
          <div class="player">
              <img src="${playerInfo.image}">
              <div>${playerInfo.name}</div>
          </div>
  
          <div class="buttonContainer">
              <button onclick="catchPokemon()">Fang</button>    
              <button onclick="updateView()">Finn en annen</button>
              <button onclick="showPokemon()">Vis dine pokemon</button>       
          </div>
  
      </div>
    </div>
    `;
  }
  
  function caughtPokemonView() {
    app.innerHTML = /*HTML*/ `
    <div class="caughtContainer">
      <h1>Du fanget ${playerInfo.pokemon[playerInfo.pokemon.length - 1].name}</h1>
      <div class="buttonContainer">
                <button onclick="updateView()">Finn en annen</button>
                <button onclick="showPokemon()">Vis dine pokemon</button>       
            </div>
    </div>
    `;
  }
  
  function catchPokemon() {
    playerInfo.pokemon.push(randomPokemon);
    caughtPokemonView();
  }
  
  function showPokemon() {
    let pokemonHTML = '';
    for (let i = 0; i < playerInfo.pokemon.length; i++) {
        let pokemon = playerInfo.pokemon[i];
        pokemonHTML += /*HTML*/ `
          <div class="ownedPokemon">
            <div>${pokemon.name}</div>
            <div>lvl: ${pokemon.level}</div>
            <img src="${pokemon.image}">
          </div>
        `;
    }

    app.innerHTML = /*HTML*/ `
      <div class="container">
        <h1>${playerInfo.name} har til nå i baggen din:</h1>
        <div class="ownedContainer">
          ${pokemonHTML}
        </div>
      </div>
    `;
}
  
  function getRandomPokemon() {
    let randomNum = Math.floor(Math.random() * possiblePokemon.length);
    randomPokemon = possiblePokemon[randomNum];
  }