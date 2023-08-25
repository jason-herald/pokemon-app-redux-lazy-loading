import { all, call, put } from "redux-saga/effects";

import { fetchPokemonList, fetchPokemonDetails } from "../helpers/api";
import { setPokemonList } from "../store/pokemonActions";

function* fetchPokemonDataSaga() {
  try {
    const data = yield call(fetchPokemonList);
    const pokemonWithDetails = yield all(
      data.map(function* (pokemon) {
        const details = yield call(fetchPokemonDetails, pokemon.name);
        return { ...pokemon, details };
      })
    );

    yield put(setPokemonList(pokemonWithDetails));
  } catch (error) {
    console.log("error", error);
  }
}

export default fetchPokemonDataSaga;
