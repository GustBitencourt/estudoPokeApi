const elSelect = document.getElementById('select-options');

//colocará na tela as propriedade de pokemon
function setValues(pokemon) {
    const elPokemonName = document.getElementById('pokemon-name');
    const elPokemonHeight = document.getElementById('pokemon-height');
    const elPokemonBaseExperience = document.getElementById('pokemon-experience');
    const elPokemonAbilities = document.getElementById('pokemon-abilities');
    const elPokemonImage = document.getElementById('pokemon-image');

    elPokemonName.innerHTML = pokemon ? pokemon.name : '-';
    elPokemonHeight.innerHTML = pokemon ? pokemon.height : '-';
    elPokemonBaseExperience.innerHTML = pokemon ? pokemon.baseExperience : '-';
    elPokemonAbilities.innerHTML = pokemon ? pokemon.abilities : '-';
    elPokemonImage.setAttribute('src', pokemon ? pokemon.image : 'https://via.placeholder.com/150x150');

}


function getValues(value) {
    const service = new PokemonService();
    
    service.getPokemon(value)
        .then(function (response){
            //requisitando dados pra api pokemon
            const { name, abilities, height, base_experience, sprites } = response;

            //criando novo pokemon
            const pokemon = new Pokemon(
                    { name, abilities, height, baseExperience: base_experience, sprites }
                )

            setValues(pokemon)
        })
}

elSelect.addEventListener('change', function (event) {
    const value = event.target.value;

    // se não for selecionado valor 
    value ? getValues(value) : setValues();
})

