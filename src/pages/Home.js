import React from 'react';

const Home = ({ history }) => {
	return (
		<div>
			이곳은 홈입니다.
			<button
				type='button'
				onClick={() => {
					history.push('/about/javascript');
				}}>
				자바스크립트로 이동하기
			</button>
		</div>
	);
};

export default Home;
