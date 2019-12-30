import React, { useEffect, useState } from "react";

const HistorySample = ({ history }) => {
	const handleGoBack = () => {
		history.goBack();
	};

	const handleGoHome = () => {
		history.push("/");
	};

	// component did mount, component did update
	// history값이 업데이트 될때만 아래 부분이 실행된다.
	// 어떤 일이 일어난 직후 호출되는 훅스
	useEffect(() => {
		const unblock = history.block("정말 떠나실 건가요?"); // 블락을 해제시키는 함수가 리턴된다.

		return () => unblock();
	}, []);

	return (
		<div>
			<h3>History API 연습하기</h3>
			<ul>
				<li onClick={handleGoHome}>홈으로 이동</li>
				<li onClick={handleGoBack}>뒤로가기</li>
			</ul>
		</div>
	);
};

export default HistorySample;
