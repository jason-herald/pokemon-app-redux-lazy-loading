import { BASE_URL } from "../constants/constants";

// export async function fetchPokemonList() {
//   const response = await fetch(`${BASE_URL}/pokemon`);
//   const data = await response.json();
//   return data.results;
// }

export async function fetchPokemonDetails(pokemonName) {
  const response = await fetch(`${BASE_URL}/pokemon/${pokemonName}`);
  const data = await response.json();
  return data;
}

export async function fetchPokemonList(offset = 0, limit = 20) {
  try {
    const response = await fetch(
      `${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw error;
  }
}
