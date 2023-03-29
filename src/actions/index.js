export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const deleteHero = (id) => {
    return {
        type: 'DELETE_HERO',
        payload: id
    }
}

export const addHero = (newHero) => {
    return {
        type: 'ADD_HERO',
        payload: newHero
    }
}

export const handleNewHeroForm = (payload) => {
    return {
        type: 'HANDLE_NEW_HERO_FORM',
        payload: payload
    }
}

export const filterHeroess = (payload) => {
    return {
        type: 'FILTER_HEROES',
        payload: payload
    }
}
