import React, { Component } from 'react';

var NavLink = require('react-router-dom').NavLink;


function Nav(){
	return (
		<ul className ='nav'>
			<li>
				<NavLink exact activeClassName = 'active-nav' to ='/'> HOME </NavLink>
			</li>
			<li>
				<NavLink activeClassName = 'active-nav' to ='/battle'> BATTLE </NavLink>
			</li>
			<li>
				<NavLink activeClassName = 'active-nav' to ='/popular'> POPULAR </NavLink>
			</li>

		</ul>
		)
}

module.exports = Nav;