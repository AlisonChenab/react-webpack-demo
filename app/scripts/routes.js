import React from 'react';
import {Router,Route,IndexRoute} from 'react-router';
import createHistory from 'history/lib/createHashHistory'

import App from './pages/app.jsx';
import Home from './pages/home.jsx';
import Resume from './pages/resume.jsx';
import Experience from './components/experience.jsx';
import Skills from './components/skills.jsx';

import Works from './pages/works.jsx';
import WorkList from './pages/worklist.jsx';
import Blog from './pages/blog.jsx';
import NotFound from './pages/notFound.jsx';

const historyOptions = {
	queryKey : false
}

const routes = (
	<Router history={createHistory(historyOptions)}>
		<Route path='/' component={App}>
			<IndexRoute component={Home} />
			<Route path='home' component={Home} />
			<Route path='resume' component={Resume}>
				<Route path='experience' component={Experience} />
				<Route path='skills' component={Skills} />
			</Route>
			<Route path='works' component={Works} />
			<Route path='/work/:workId' component={WorkList} />
			<Route path='blog' component={Blog} />
			<Route path='*' component={NotFound} />
		</Route>
	</Router>
);

export default routes;