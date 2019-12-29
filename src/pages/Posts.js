import React from 'react';
import Post from './Post';
import { Link, Route } from 'react-router-dom';

const Posts = ({ match }) => {
	return (
		<div>
			<ul>
				<li>
					<Link to={`${match.url}/1`}>포스트 #1</Link>
				</li>
				<li>
					<Link to={`${match.url}/2`}>포스트 #2</Link>
				</li>
				<li>
					<Link to={`${match.url}/3`}>포스트 #3</Link>
				</li>
			</ul>
			<Route path={`${match.url}`} render={() => <div>포스트를 선택하세요</div>}></Route>
			<Route path={`${match.url}/:id`} component={Post}></Route>
		</div>
	);
};

export default Posts;
