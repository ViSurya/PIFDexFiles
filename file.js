import { fusions } from './lib/loadPokemon.js';

let index = 1
for (const pokemon of fusions) {
  index += 1
  console.log(pokemon.id, pokemon.primary_type, pokemon.secondary_type)
  if (index === 100) break;
}