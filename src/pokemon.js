class Pokemon {
  // Private fields
  #health = 100;

  #level = 1;

  static allPokemon = [];

  constructor(name, type) {
    this.name = name;
    this.type = type;

    // Track every Pokémon created
    Pokemon.allPokemon.push(this);
  }

  get health() {
    return this.#health;
  }

  get level() {
    return this.#level;
  }

  getHealth() {
    return this.#health;
  }

  getLevel() {
    return this.#level;
  }

  // Instance methods

  levelUp() {
    this.#level += 1;
    this.#health += 10;
    console.log(`${this.name} leveled up to level ${this.#level}!`);
  }

  isFainted() {
    return this.#health <= 0;
  }

  attack(targetPokemon) {
    const damage = this.#level * 10;
    targetPokemon.#health -= damage;
    console.log(`${this.name} attacked ${targetPokemon.name}!`);
  }

  // Static methods

  static getTotalPokemon() {
    return Pokemon.allPokemon.length;
  }

  static findByName(name) {
    return Pokemon.allPokemon.find((p) => p.name === name);
  }
}

// TEST YOUR CODE HERE

// DO NOT REMOVE
module.exports = { Pokemon };
