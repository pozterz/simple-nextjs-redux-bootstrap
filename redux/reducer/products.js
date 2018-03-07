const initialState = {
  data: []
}

export default function(state = initialState, action) {
  switch (action.type) {
      case 'GET_PRODUCT':
          return {
            ...state,
            data: action.payload
          };
      default:
          return state
  }
}