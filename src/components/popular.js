import React, { Component } from 'react';
var PropTypes = require('prop-types');
class SelectLanguage extends Component {
	render(){
		let languages = ['all','Javascript','Ruby','Java']

		return(
		<ul className="languages">
				<p> selected Languague : {this.props.selectedLang}</p>
				{languages.map((lang) =>{
					return (
					<li
						style={lang === this.props.selectedLang ? { color:'red'}: null}
						onClick={this.props.onSelect.bind(null,lang)} 
						key={lang}> 
						{lang}
					</li>
					)
				})}
		</ul>
		)
	}
}

SelectLanguage.PropTypes = {
	selectedLang: PropTypes.bool.isRequired,
	onSelect: PropTypes.func.isRequired,
}

class Popular extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			selectedLang: 'All'
		};

		this.updateLang = this.updateLang.bind(this);
	}
	updateLang(lang){
		this.setState( function (){
			return {
				selectedLang : lang
			}
		})
	}

	render(){
		return (
			<div>
				<SelectLanguage 
				selectedLang={this.state.selectedLang}
				onSelect={this.updateLang}
				/>
			</div>
			)
	}
}

export default Popular;
