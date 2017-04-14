import React, { Component } from 'react';


class Popular extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			selectedlLang: 'All'
		};

		this.updateLang = this.updateLang.bind(this);
	}
	updateLang(lang){
		this.setState( function (){
			return {
				selectedlLang : lang
			}
		})
	}

	render(){
		let languages = ['all','Javascript','Ruby','Java']
		return (
				<ul className = "languages">
				<p> selected Languague : {this.state.selectedlLang}</p>
				{languages.map((lang) =>{
					return (
					<li
						style={lang === this.state.selectedlLang ? { color:'red'}: null}
						onClick={this.updateLang.bind(null,lang)} 
						key={lang}> 
						{lang}
					</li>
					)
				})}
				</ul>
			)
	}
}

export default Popular;
