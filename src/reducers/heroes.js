import { useContext } from "react"
import { useState } from "react"
import { createContext } from "react"

const initialState = {
  heroes: [],
  heroesLoadingStatus: 'idle',
  newHero: {name: '', description: '', element: ''}
}

const heroes = (state = initialState, action) => {
  switch (action.type) {
      case 'HEROES_FETCHING':
          return {
              ...state,
              heroesLoadingStatus: 'loading'
          }
      case 'HEROES_FETCHED':
          return {
              ...state,
              heroes: action.payload,
              heroesLoadingStatus: 'idle'
          }
      case 'HEROES_FETCHING_ERROR':
          return {
              ...state,
              heroesLoadingStatus: 'error'
          }
      case 'DELETE_HERO':
          const newHeroList = state.heroes.filter(item => item.id !== action.payload);
          return {
              ...state,
              heroes: newHeroList,
          }
      case 'ADD_HERO':
          return {
              ...state,
              heroes: [...state.heroes, action.payload],
              newHero: {name: '', description: '', element: ''}
          }
      case 'HANDLE_NEW_HERO_FORM':
          return {
              ...state,
              newHero: { ...state.newHero, ...action.payload }
          }
      default: return state
  }
}

export default heroes;
