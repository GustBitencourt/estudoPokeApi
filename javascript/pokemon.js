class Pokemon {
    constructor({ name, abilities, height, baseExperience, sprites }) {
        this._name = name;
        this._abilities = abilities;
        this._height = height;
        this._baseExperience = baseExperience;
        this._sprites = sprites;
    }

    //MÉTODOS GET E SET
    get name() { 
        return this._capitalize(this._name)
    }

    get abilities() { 
        return this._abilitiesFormat(this._abilities)
    }

    get height() { 
        return `${this._height / 10} m`
    }

    get baseExperience() { 
        return `${this._baseExperience}`
    }

    get image() { 
        return this._sprites.front_default
    }

    //Primeira letra maiuscula no nome
    _capitalize(name) {
        return `${name.charAt(0).toUpperCase()}${name.slice(1)}`
    }

    _abilitiesFormat(abilities) {
        return abilities.map(item => `${this._capitalize(item.ability.name)}`)
    }
}