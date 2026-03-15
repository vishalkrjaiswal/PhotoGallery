import { useReducer, useEffect } from 'react'


function favouritesReducer(state, action) {
  if (action.type === 'TOGGLE') {
    if (state.includes(action.id)) {
      return state.filter((id) => id !== action.id)
    }
    return [...state, action.id]
  }

  if (action.type === 'LOAD_FROM_STORAGE') {
    return action.payload
  }

  return state
}

function useFavourites() {
  const [favourites, dispatch] = useReducer(favouritesReducer, [])

  useEffect(() => {
    const saved = localStorage.getItem('favourites')
    if (saved) {
      dispatch({ type: 'LOAD_FROM_STORAGE', payload: JSON.parse(saved) })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites))
  }, [favourites])

  function toggleFavourite(id) {
    dispatch({ type: 'TOGGLE', id })
  }

  function isFavourite(id) {
    return favourites.includes(id)
  }

  return { favourites, toggleFavourite, isFavourite }
}

export default useFavourites