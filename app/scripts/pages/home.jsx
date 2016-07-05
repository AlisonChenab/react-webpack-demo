import React from 'react';

class Home extends React.Component {
	constructor(){
		super();
		this.state = {
			nameList : ['A','l','i','s','o','n','C','h','e','n']
		};
	}

	render(){
		return (
			<div className="index-page">
				<div className="index-cont">
					<img className="index-icon" src="./app/images/a.png" alt="aimouren" />
					<h1 className="animated flip">艾某人</h1>
					<h1>AlisonChen</h1>
					<p className="animated flip delay1">前端开发 / 2014年7月至今</p>
					<p>Front-end development engineer / Since July 2014</p>
					<p className="animated flip delay2">东北师范大学-软件工程专业 / 2013届毕业生</p>
					<p>Northeast Normal University Software Engineering / Graduated in 2013</p>
					<p></p>
				</div>
			</div>
		);
	}
}

export default Home;