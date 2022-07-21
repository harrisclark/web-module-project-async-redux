
import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from "../actions";
const initialState = {
  pokeList: [
    {
      name: 'fatPoke'
    }
  ],
  isFetching: false,
  error: ''
};

//FETCH_START, FETCH_FAIL, FETCH_SUCCESS

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        pokeList: [], 
        isFetching: true,
        error: '' 
      }
    case FETCH_FAIL:
      return {
        ...state,
        pokeList: [],
        isFetching: false,
        error: action.payload
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        pokeList: action.payload,
        isFetching: false,
        error: ''
      }
    default:
      return state;
  }
};