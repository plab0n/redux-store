export const initialState = {
    loading : false,
    loaded : false,
    data : []

}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      const todo = action.payload;
      const data = [...state.data, todo];
      console.log("Data : ", data);
      return {
        ...state, data, loading: true
      }
    default:
        return state;
  }
}
