import React from 'react';
import {Link} from 'react-router';
import DataStore from './../store/dataStore';

class Resume extends React.Component {
	constructor(){
		super();
		this.state = {
			currentHash: window.location.hash.split('/')[2],
			experience: DataStore.resumeList['experience'],
			skills: DataStore.resumeList['skills'],
			education: DataStore.resumeList['education'],
			project: DataStore.resumeList['project'],
			contact: DataStore.resumeList['contact'],
		}
	}

	setClassName(key){
		return key===this.state.currentHash ? "active" : "";
	}

	render(){
		let _this = this;
		return (
			<div className="resume-page">
				<div className="resume-cont fl">
					{this.props.children}
				</div>
				<div className="resume-side fl">
					<ul className="resume-side-list">
						<li>
							<h3 className={_this.setClassName('experience')} onClick={() => {_this.setState({currentHash: 'experience'}) }}><Link to="resume/experience">Experience</Link></h3>
							<ul>
								{
									_.map(this.state.experience,function(data,key){
										return <li key={key} className="resume-item">{data.company} / {data.duration}<br/><em>{data.position}</em></li>;
									})
								}
							</ul>
						</li>
						<li>
							<h3 className={_this.setClassName('project')} onClick={() => {_this.setState({currentHash: 'experience'}) }}><Link to="resume/project">Project</Link></h3>
							<ul>
								{
									_.map(this.state.project,function(data,key){
										return <li key={key} className="resume-item">{data.name} <a href={data.url}>{data.url}</a><br/><em>{data.position}</em></li>;
									})
								}
							</ul>
						</li>
						<li>
							<h3 className={_this.setClassName('skills')} onClick={() => {_this.setState({currentHash: 'skills'}) }}><Link to="resume/skills">Skills</Link></h3>
							<ul>
								{
									_.map(this.state.skills,function(data,key){
										return <li key={key} className="resume-item">{data.name}</li>;
									})
								}
							</ul>
						</li>
						<li>
							<h3 className={_this.setClassName('education')} onClick={() => {_this.setState({currentHash: 'education'}) }}><Link to="resume/education">Education</Link></h3>
							<ul>
								{
									_.map(this.state.education,function(data,key){
										return <li key={key} className="resume-item">{data.school} / {data.major} / {data.duration}</li>;
									})
								}
							</ul>
						</li>
						<li>
							<h3 className={_this.setClassName('contact')} onClick={() => {_this.setState({currentHash: 'contact'}) }}><Link to="resume/contact">Contact</Link></h3>
							<ul>
								{
									_.map(this.state.contact,function(data,key){
										return <li key={key} className="resume-item">{key}: {data}</li>;
									})
								}
							</ul>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Resume;