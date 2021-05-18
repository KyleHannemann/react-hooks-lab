import {useState, useEffect} from 'react'
import axios from 'axios'

const Player = (props) => {
    const [stats, setStats] = useState(null);
    useEffect(()=>{
        axios.get(`http://lookup-service-prod.mlb.com/json/named.player_info.bam?sport_code='mlb'&player_id=${props.match.params.playerId}`)
        .then(res=>{
            console.log(res)
            setStats(res.data.player_info.queryResults.row)
        }).catch(err=>{
            console.log(err)
        })
    },[props.match.params.playerId])

    return(
        <div>
            {stats === null? <div>...loading</div>:
            <div>
                <h1>{stats.name_display_first_last}</h1>
                <ul>
                    <li>bats: {stats.bats}</li>
                    <li>throws: {stats.throws}</li>
                    <li>college: {stats.college}</li>
                    <li>height: {stats.height_feet}' {stats.height_inches}"</li>
                    <li>weight: {stats.weight}</li>
                </ul>
                </div>}
        </div>
    )

}
export default Player;