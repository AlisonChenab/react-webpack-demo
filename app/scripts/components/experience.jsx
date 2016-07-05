import React from 'react';
import DataStore from './../store/dataStore';

class Experience extends React.Component {
	constructor(){
		super();
		this.state = {
			experience: DataStore.resumeList['experience'],
		};
	}

	render(){
		let _this = this;
		return (
			<div className="resume-experience">
				<ul>
					{
						_.map(this.state.experience, function(data,index){
							return (
								<li key={index}>
									<p className="exper-duration">{data.duration}</p>
									<p className="exper-company">{data.company}</p>
									<p className="exper-position">{data.position}</p>
									<ol className="exper-duty">
										{
											_.map(data.duty, function(duty,i){
												return <li key={i}>{duty}</li>;
											})
										}
									</ol>
								</li>
							);
						})
					}
				</ul>
			</div>
		);
	}
}

export default Experience;