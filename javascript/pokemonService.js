class PokemonService {
    constructor() {
        this._baseUrl = 'https://pokeapi.co/api/v2'
    }

    getPokemon(name) {
        //requisição
        return fetch(`${this._baseUrl}/pokemon/${name}`)
            //retorna o corpo da requisição
            .then(response => response.json())
            .then(data => data)
    }
}