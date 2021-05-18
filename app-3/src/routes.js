import {Switch, Route} from 'react-router-dom';
import PokemonList from './components/PokemonList';
import Pokemon from './components/Pokemon';

export default (
    <Switch>
        <Route exact path='/' component={PokemonList}/>
        <Route path='/pokemon/:name' component={Pokemon}/>
    </Switch>
)