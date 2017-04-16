import React, { Component } from 'react';
var PropTypes = require('prop-types');
var api = require('../utils/api')


function SelectLanguage (props) {
		let languages = ['all','Javascript','Ruby','Java']
		return(
		<ul className="languages">
				<p> selected Languague : {props.selectedLang}</p>
				{languages.map((lang) =>{
					return (
					<li
						style={lang === props.selectedLang ? { color:'red'}: null}
						onClick={props.onSelect.bind(null,lang)} 
						key={lang}> 
						{lang}
					</li>
					)
				})}
		</ul>
		)
}

function RepoGrid (props){
return (
	<ul className = 'popular-list'>
		{props.repos.map(function(repo, index){
			return(
				<li key={repo.name} className='poular-item'>
				 <div className='pop-rank'> # {index + 1}</div>
				 <ul className= 'space-list-items'> 
				 	<li> <img 
				 		className='avartar'
				 		src={repo.owner.avatar_url}
				 		alt={'avartar of' + repo.owner.login}
				 		/>
				 	</li>
				 </ul>
				</li>
			 )	
		})}
	</ul>		
	)
}

function Game (props){
	return(
		<p>{props.gameData}</p>
		)
}

RepoGrid.PropTypes = {
	repos : PropTypes.array.isRequired,
}

SelectLanguage.PropTypes = {
	selectedLang: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired,
}

class Popular extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			selectedLang: 'All',
			repos: null,
			gameData: null,
		};

		this.updateLang = this.updateLang.bind(this);
	}

	componentDidMount() {
		//AJAX GOES HERE :)
		this.updateLang(this.selectedLang);
		api.fetchTodaysGames(100).then( function(gameData){
			console.log(gameData);
		})
	}



	updateLang(lang){
		this.setState( function (){
			return {
				selectedLang: lang,
				repos: null,
			}
		});

		api.fetchPopularRepos(lang)
			.then(function(repos){
				this.setState(function () {
					return {
						repos: repos
					}
				})
			}.bind(this));
	}


	render(){
		return (
			<div>
				<SelectLanguage 
				selectedLang={this.state.selectedLang}
				onSelect={this.updateLang}
				/>
				{!this.state.repos
					? <p> LOADING MUTHA FUK**A </p>
					: 
				<RepoGrid repos={ this.state.repos} />
				}
				<Game gameData={ this.state.gameData} />
				
			</div>
			)
	}
}

export default Popular;
