import { act } from "@testing-library/react"

const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    newHeroForm: {name: '', description: '', element: ''},
    filters: [],
    activeFilter: 'all',
    filtersLoadingStatus: 'idle',
    filteredHeroes: []
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
                filteredHeroes: state.activeFilter === 'all' ?
                                action.payload :
                                action.payload.filter(item => item.element === state.activeFilter),
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
                heroes: state.heroes.filter(hero => hero.id !== action.payload),
                filteredHeroes: state.heroes.filter(hero => hero.id !== action.payload)
            }
        case 'ADD_HERO':
            return {
                ...state,
                heroes: [...state.heroes, action.payload],
                filteredHeroes: [...state.heroes, action.payload],
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
            case 'FILTERS_FETCHING':
                return {
                    ...state,
                    filtersLoadingStatus: 'loading'
                }
            case 'FILTERS_FETCHED':
                return {
                    ...state,
                    filters: action.payload,
                    filtersLoadingStatus: 'idle'
                }
            case 'FILTERS_FETCHING_ERROR':
                return {
                    ...state,
                    filtersLoadingStatus: 'error'
                }    
            case 'ACTIVE_FILTER_CHANGED':
                return {
                    ...state,
                    activeFilter: action.payload,
                    filteredHeroes: action.payload === 'all' ? 
                                    state.heroes :
                                    state.heroes.filter(item => item.element === action.payload)
                }
        default: return state
    }
}

export default reducer;