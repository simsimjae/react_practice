import React from 'react';
import qs from 'query-string';

const About = ({ location, match }) => {
	const query = qs.parse(location.search);
	console.log(query);
	return (
		<div>
			<h3 style={{ color: query.color }}>소개</h3>
			안녕하세요 저는 {match.params.name}입니다.
		</div>
	);
};

export default About;
