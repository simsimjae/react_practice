import React from 'react';
import './index.scss';
import AsyncSplitMe from './ssr/AsyncSplitMe';

function App() {
	return (
		<div className='App'>
			<header className='App-header'></header>
			<AsyncSplitMe></AsyncSplitMe>
		</div>
	);
}

export default App;
