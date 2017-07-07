import React from 'react'
import{ Route, Link } from 'react-router-dom'

function History(props){
	return (
		<div>
			<hr/>
			<p>The Clippers used to be a San Diego Team</p>
			<p>They got their name from the ships in Mission Bay</p>
			<p>There aren't any boats in LA</p>
		</div>
	)
}

function Team(props){
	return(
		<div>
			<hr/>
			<p>The Clippers share a stadium with the Lakers</p>
			<p>The Clippers are pretty great</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>
				Aperiam harum libero odit placeat quae? A alias blanditiis <br/>
				consequuntur enim exercitationem inventore ipsam labore omnis, <br/>
				optio porro! Ex facilis odit qui.
			</p>
		</div>
	)
}

export default function AboutTeam(props) {
	return(
		<div>
			<h1>About Page</h1>
			<div>
				<Link to="/about/history">History</Link>
			</div>
			<div>
				<Link to="/about/team">Team</Link>
			</div>
			<Route path="/about/history" component={History}/>
			<Route path="/about/team" component={Team}/>
		</div>
	)
}