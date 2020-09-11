import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard'

const Character = () =>{

    const [character, setCharacter] = useState ([]) //set to empty array

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character/')

        .then(res =>{
            console.log(res.data.results)
            setCharacter(res.data.results)
        })

        .catch(err => {
            console.log(err)
        })
    }, []) //run once


    //loop through data and set props for card
    return (
        <div> 
            {character.map(charInfo => {
                return <CharacterCard
                name={charInfo.name}
                location={charInfo.location}
                status={charInfo.status}
                gender={charInfo.gender}
                species={charInfo.species}
                photo={charInfo.image}
                />
            })}
        </div>
    )

}

export default Character;