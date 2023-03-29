import { act } from "@testing-library/react"

const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    newHeroForm: {name: '', description: '', element: ''}
}

const reducer = (state = initialState, action) => {
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
            return {
                ...state,
                heroes: state.heroes.filter(hero => hero.id !== action.payload)
            }
        case 'ADD_HERO':
            return {
                ...state,
                heroes: [...state.heroes, action.payload],
                newHeroForm: {name: '', description: '', element: ''}
            }
        case 'HANDLE_NEW_HERO_FORM':
            return {
                ...state,
                newHeroForm: { ...state.newHeroForm, ...action.payload }
            }
        case 'FILTER_HEROES':
            return {
                ...state,
                filters: state.filters.filter(item => item.all)
            }
            
        default: return state
    }
}

export default reducer;