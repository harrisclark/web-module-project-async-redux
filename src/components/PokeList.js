import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getPokemon, fetchFail } from '../actions/index'

const PokeList = (props) => {
  console.log('are these the props youre looking for',props)
  useEffect(() => {
    props.getPokemon()
  }, [])

  if (props.error) {
    return <h2>An ERROR has occured: {props.error}</h2>;
  }

  if (props.isFetching) {
    return <h2>Gettin List of Pokemon...</h2>;
  }

  return(
    <div className='poke-list'>
      {props.pokeList.map(poke => <p key={poke.name}>{poke.name}</p>)}
    </div>
  )
}

const mapToProps = state => {
  return {
    pokeList: state.pokeList,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapToProps, { getPokemon, fetchFail })(PokeList);