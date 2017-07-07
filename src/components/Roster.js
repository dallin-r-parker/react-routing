import React from 'react'
import {Link} from 'react-router-dom'
import {getRoster, getPlayer} from '../services/rosterService'

export function Player(props){
	const player = getPlayer(props.match.params.player_id)
	console.log(player)
	return(
		<div>
			<img src={player.image}
			     style={{height: '25vh'}}
			     alt="Player Img"/>
			<h1>{player.name}</h1>
		</div>
	)
}


function Squad(props) {
	const players = getRoster().map((p, i) => (
		<div key={i}>
			<Link to={`/roster/${p.id}`}>
				{p.name}
			</Link>
		</div>
	))
	return(
	<div>
		{players}
	</div>
	)
}

export default function (props) {
	return (
		<div>
			<h1>Team Roster</h1>
			<Squad/>
		</div>
	)
}



