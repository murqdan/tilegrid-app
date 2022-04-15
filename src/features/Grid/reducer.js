const initialState = []

function reducer (state = initialState, action) {
  switch (action.type) {
    case 'ADD_TILE': {
      const nextId = state.length + 1
      const newTile = { id: nextId, color: action.color }
      return [...state, newTile]
    }
    default:
      return state
  }
}
