import { createReducer } from "@reduxjs/toolkit";
import { setPokemonList, setIsLoadingMore } from "./pokemonActions";

const initialState = {
  pokemonList: [],
  isLoadingMore: false,
};

const pokemonReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setPokemonList, (state, action) => {
      if (state.isLoadingMore) {
        state.pokemonList.push(...action.payload);
        state.isLoadingMore = false;
      } else {
        state.pokemonList = action.payload;
      }
    })
    .addCase(setIsLoadingMore, (state, action) => {
      state.isLoadingMore = action.payload;
    });
});

export default pokemonReducer;
