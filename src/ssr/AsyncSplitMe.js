import React, { useState } from 'react';

const AsyncSplitMe = () => {
	const [SplitMe, setSplitMe] = useState(null);
	const loadSplitMe = () => {
		import('./SplitMe').then(({ default: SplitMe }) => {
			setSplitMe(SplitMe);
		});
	};
	return (
		<div>
			비동기로 불러오기
			{SplitMe ? (
				SplitMe
			) : (
				<button type='button' onClick={loadSplitMe}>
					비동기 청크 불러오기
				</button>
			)}
		</div>
	);
};

export default AsyncSplitMe;
