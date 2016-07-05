import React from 'react';
import {Link} from 'react-router';
import DataStore from './../store/dataStore';

class Works extends React.Component {
	constructor(){
		super();
		this.state = {};
	}

	render(){
		return (
			<div className="works-page">
				<ul className="works-list">
					{
						_.map(DataStore.worksList, function(data,key){
							return (
								<li key={key}>
									<dl>
										<dt>
											{data.name}
											<Link to={`/work/${key}`}>MORE</Link>
										</dt>
										<dd>
											<img src={data.images[0]} />
											<div className="project-desc">
												<p><a href={data.url}>{data.url}</a></p>
												<p>项目介绍：...</p>
											</div>
										</dd>
									</dl>
								</li>
							);
						})
					}
				</ul>
			</div>
		);
	}
}

export default Works;