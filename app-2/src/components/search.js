import {useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

const Search = () => {
    const [teams, setTeams] = useState([]);
    useEffect(()=>{
        axios.get(`http://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code='mlb'&sort_order=name_asc&season='2017'`)
        .then(res=>{
            console.log(res)
            setTeams(res.data.team_all_season.queryResults.row);
        }).catch(err=>console.log(err))

    }, [])
    return(
        <div id="teams">
            <h3>Look up MLB team roster</h3>
            
            {teams.map(team=>{
                return (
                    <Link to={`/roster/${team.team_id}`}value={team.team_id}>{team.name}</Link>
                )
            })}
            
        </div>
    )

}
export default Search