import React from 'react';
import DataStore from './../store/dataStore';

class WorkList extends React.Component {
	constructor(props){
		super();
		this.state = {
			worksList: DataStore.worksList[props.params.workId]
		};
	}

	render(){
		return (
			<div className="works-list-page">
				<div className="works-side-list fl pr">
					<span className="arrow-up"></span>
					<ul className="pa">
						{
							_.map(DataStore.worksList, function(data,key){
								return <li key={key}><img src={data.icon} /></li>
							})
						}
					</ul>
					<span className="arrow-down"></span>
				</div>
				<div className="works-desc-show fl pr">
					<div className="works-text pa">
						<a href={this.state.worksList.url} className="works-url">{this.state.worksList.url}</a>
						<p className="works-title">{this.state.worksList.title}</p>
						<p className="works-desc">{this.state.worksList.desc}</p>
						<p className="works-duty">{this.state.worksList.duty}</p>
						<p className="works-duration">{this.state.worksList.duration}</p>
					</div>
				</div>
				<div className="works-images-show fl pr">
					<ul className="images-show pa">
						{
							_.map(this.state.worksList.images, function(data,index){
								return <li key={index}><img src={data} /></li>
							})
						}
					</ul>
					<ul className="dot-progress pa">
						{
							_.map(this.state.worksList.images, function(data,index){
								return <li key={index} className={index==0? 'active':''}></li>
							})
						}
					</ul>
				</div>
			</div>
		);
	}
}

export default WorkList;