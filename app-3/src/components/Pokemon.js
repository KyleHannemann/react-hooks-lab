import {useState, useEffect} from 'react';
import axios from 'axios'

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.match.params.name}`)
        .then(res=>{
            setPokemon(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }, []);

    return(
        <div id="pokemon">
            {pokemon === null? <div>
                ...loading
            </div>:
            <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.back_shiny}/>
            </div>}
        </div>
    )
}
export default Pokemon;