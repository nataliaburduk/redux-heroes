// const initialState = {
//     heroes: [],
//     heroesLoadingStatus: 'idle',
//     newHero: {name: '', description: '', element: ''},
//     filters: [],
//     activeFilter: 'all',
//     filtersLoadingStatus: 'idle'
// }

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'HEROES_FETCHING':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'loading'
//             }
//         case 'HEROES_FETCHED':
//             return {
//                 ...state,
//                 heroes: action.payload,
//                 heroesLoadingStatus: 'idle'
//             }
//         case 'HEROES_FETCHING_ERROR':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'error'
//             }
//         case 'DELETE_HERO':
//             const newHeroList = state.heroes.filter(item => item.id !== action.payload);
//             return {
//                 ...state,
//                 heroes: newHeroList,
//             }
//         case 'ADD_HERO':
//             return {
//                 ...state,
//                 heroes: [...state.heroes, action.payload],
//                 newHero: {name: '', description: '', element: ''}
//             }
//         case 'HANDLE_NEW_HERO_FORM':
//             return {
//                 ...state,
//                 newHero: { ...state.newHero, ...action.payload }
//             }
//         case 'FILTER_HEROES':
//             return {
//                 ...state,
//                 filters: state.filters.filter(item => item.all)
//             }
//             case 'FILTERS_FETCHING':
//                 return {
//                     ...state,
//                     filtersLoadingStatus: 'loading'
//                 }
//             case 'FILTERS_FETCHED':
//                 return {
//                     ...state,
//                     filters: action.payload,
//                     filtersLoadingStatus: 'idle'
//                 }
//             case 'FILTERS_FETCHING_ERROR':
//                 return {
//                     ...state,
//                     filtersLoadingStatus: 'error'
//                 }    
//             case 'ACTIVE_FILTER_CHANGED':
//                 return {
//                     ...state,
//                     activeFilter: action.payload,
//                 }
//         default: return state
//     }
// }

// export default reducer;