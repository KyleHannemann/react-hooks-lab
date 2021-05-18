import {useState, useEffect} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

const PokemonList = () => {

    const [pokemon, setPokemon] = useState([])

    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/').then(res=>{
            setPokemon(res.data.results)
        }
        ).catch(err=>console.log(err))
    }, [])

    return(
        <div id="list">
            <h1>Pokemon List</h1>
            {pokemon.map(el=>{
                return (
                    <Link to={`/pokemon/${el.name}`}>{el.name}</Link>
                )
            })}
        </div>
    )
}
export default PokemonList;