export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE"

export const toggleFavorite = (pokemon) => ({
    type: TOGGLE_FAVORITE,
    payload: pokemon
})