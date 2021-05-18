import {Switch, Route} from 'react-router-dom';
import search from './components/search';
import teamRoster from './components/teamRoster';
import player from './components/player';

export default(
    <Switch>
    <Route exact path='/' component={search}/>
    <Route path='/roster/:teamId' component={teamRoster}/>
    <Route path='/player/:playerId' component={player}/>
    </Switch>

)