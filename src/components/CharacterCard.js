import React from 'react'
// import styled from 'styled-components'




const CharacterCard = (props) => {
    return(
        <div>
            <h2>{props.name}</h2>
            <img src = {props.photo} alt = 'character img' />
            <h3>Last Known Location: {props.location.name}</h3>
            <h3>Status: {props.status}</h3>
            <h3>Gender: {props.gender}</h3>
            <h3>Species: {props.species}</h3>
        </div>
    );
}

export default CharacterCard;