import {useState, useEffect} from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';


const TeamRoster = (props) => {

    const [players, setPlayers] = useState([]);
    const [message, setMessage] = useState('..loading')
    useEffect(()=>{
        axios.get(`http://lookup-service-prod.mlb.com/json/named.roster_40.bam?team_id=${props.match.params.teamId}`)
        .then(res=>{
            console.log(res.data)
            if (!res.data.roster_40.queryResults.row){
                setMessage('no data for this team')
            }
            else{
            setPlayers(res.data.roster_40.queryResults.row)
            }
        }).catch(err=>console.log(err))
    }, [props.match.params.teamId])

    return(
        <div id='teamRoster'>
            {players.length === 0 ? <div>
                {message}
            </div>: 
            players.map(player=>{
                return <div>
                    <h3>{player.name_display_first_last}  #{player.jersey_number}<Link to={`/player/${player.player_id}`}> stats</Link></h3>
                    
                </div>
            })
            
            }
        </div>
    )

}
export default TeamRoster;