import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
	0% { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
	margin: 0 auto;
	border: 0.5rem solid #f3f3f3;
	border-top: 0.5rem solid #85b2ff;
	border-radius: 50%;
	width: 5rem;
	height: 5rem;
	animation: ${rotate} 1s linear infinite;
`;

const SpinnerLoading = (): JSX.Element => {
	return (
		<Spinner />
	);
};

export default SpinnerLoading;
