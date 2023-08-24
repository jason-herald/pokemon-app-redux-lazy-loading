import { createAction } from "@reduxjs/toolkit";

export const setPokemonList = createAction("pokemon/setList");
export const fetchPokemonData = createAction("FETCH_POKEMON_DATA");

export const fetchMorePokemonData = createAction("FETCH_MORE_POKEMON_DATA");

export const setIsLoadingMore = createAction("pokemon/setIsLoadingMore");
