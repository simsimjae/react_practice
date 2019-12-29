import React from 'react';
import './index.scss';
import AsyncSplitMe from './ssr/AsyncSplitMe';
import { Route } from 'react-router-dom';
import { Home, About } from './pages';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>리액트 라우터를 배워봅시다.</header>
			<AsyncSplitMe></AsyncSplitMe>
			<Route exact path='/' component={Home}></Route>
			<Route path='/about/:name?' component={About}></Route>
		</div>
	);
}

export default App;
