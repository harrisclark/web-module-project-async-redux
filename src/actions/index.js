import axios from 'axios';

export const FETCH_START = "FETCH_START"
export const FETCH_FAIL = "FETCH_FAIL"
export const FETCH_SUCCESS = "FETCH_SUCCESS"

export const fetchStart = () => {
    return({ type: FETCH_START});
}

export const fetchSuccess = (pokeList) => {
    return({ type: FETCH_SUCCESS, payload: pokeList })
}

export const fetchFail = (errorMessage) => {
    return( {type: FETCH_FAIL, payload: errorMessage})
}

export const getPokemon = () => {
    return (dispatch) => {
        dispatch(fetchStart())
        axios.get("https://pokeapi.co/api/v2/pokemon")
            .then(res => {
                console.log("api response:", res.data)
                dispatch(fetchSuccess(res.data.results))
            })
            .catch(err => {
                dispatch(fetchFail(err))
            })
    }
}