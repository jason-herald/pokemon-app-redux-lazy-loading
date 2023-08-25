import { takeEvery } from "redux-saga/effects";

import fetchPokemonDataSaga from "./fetchPokemonDataSaga";
import fetchMorePokemonDataSaga from "./fetchMorePokemonDataSaga";

export function* apiSaga() {
  yield takeEvery("FETCH_POKEMON_DATA", fetchPokemonDataSaga);
  yield takeEvery("FETCH_MORE_POKEMON_DATA", fetchMorePokemonDataSaga);
}
