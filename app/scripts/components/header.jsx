import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component {
	constructor(){
		super();
		this.state = {
			currentKey : window.location.hash.split('/')[1],
			navList : {
				home: {link:'home',name:'HOME'},
				resume: {link:'resume/experience',name:'RESUME'},
				works: {link:'works',name:'WORKS'},
				blog: {link:'blog',name:'BLOG'},
			},	
		};
	}

	toggleNavClassName(key){
		this.setState({currentKey: key})
	}

	setNavClassName(key){
		return key===this.state.currentKey ? "active" : "";
	}

	render(){
		let _this = this;
		return (
			<header>
				<div className="logo"></div>
				<nav>
					<ul>
						{
							_.map(this.state.navList,function(data){
								return <li key={data.link} className={_this.setNavClassName(data.link)} onClick={() => {_this.setState({currentKey: data.link}) }}><Link to={data.link}>{data.name}</Link></li>
							})
						}
					</ul>
				</nav>
			</header>
		);
	}
}

export default Header;