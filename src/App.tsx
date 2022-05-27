/* Dependencies */
import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FaLongArrowAltRight, FaTwitter } from 'react-icons/fa';

/* Sources */
import background from './sources/bg.gif';

/* Services */
import axios from 'axios';

/* Components */
import SpinnerLoading from './components/SpinnerLoading';
import SocialButtons from './components/SocialButtons';


const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
	}

	body {
		background: #f1f1f1 url(${background}) no-repeat;
		background-size: cover;
		margin: 0;
		min-height: 100vh;
		font-family: "Montserrat", sans-serif;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	};
`;

const Container = styled.div`
	background: rgba(256, 256, 256, 0.85);
	width: auto;
	padding: 20px 30px;
	margin: 1rem;
	border-radius: .5rem;
	box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.2);

	@media (min-width: 800px) {
		max-width: 60%;
		margin: 1rem auto;
	};
`;

const Quote = styled.span`
	font-size: 2.75rem;

	@media only screen and (max-width: 1000px) {
		font-size: 2rem;
	}
`;

const Author = styled.div `
	margin-top: 15px;
	font-size: 2rem;
	font-weight: 400;
	font-style: italic;

	@media only screen and (max-width: 1000px) {
		font-size: 1.5rem;
	}
`;

const ButtonContainer = styled.div`
	margin-top: 1rem;
	display: flex;
	justify-content: space-between;
`;

const Button = styled.button`
	width: 75px;
	cursor: pointer;
	font-size: 1.2rem;
	height: 2.5rem;
	border: none;
	border-radius: 10px;
	color: #fff;
	background: #85b2ff;
	outline: none;
	padding: 0.5rem 1.8rem;
	box-shadow: 0.1rem 0.2rem 0.2rem rgba(121, 121, 121, 0.65);
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		filter: brightness(80%);
	};

	&:active {
		transform: translate(0, 0.3rem);
		box-shadow: 0 0.1rem rgba(255, 255, 255, 0.65);
	};
`;

interface IQuoteModel {
	text: string;
	author: string;
};

const App = (): JSX.Element => {
	const [quoteList, setQuoteList] = useState([]);
	const [quote, setQuote] = useState({'text': '', 'author': ''});

	useEffect((): void => {
		axios
			.get('https://run.mocky.io/v3/c2001ed8-c3c6-443b-920c-de0bc8f3f0e8')
			.then(res => {
				setQuoteList(res.data);
			})
			.catch(err => console.log('ops! ocorreu um erro:\n' + err));
	}, []);

	useEffect((): void => newQuote(), [quoteList]);

	const newQuote = (): void => {
		if (quoteList.length > 0) {
			const changeQuote: IQuoteModel = quoteList[Math.floor(Math.random() * quoteList.length)];
			setQuote(changeQuote);
		}
	};

	const tweetQuote = (): void => {
		const twitterURL = `https://twitter.com/intent/tweet?text=${quote.text}%0d~${quote.author}`;
		window.open(twitterURL, '_blank');
	};

	return (
		<>
			<GlobalStyle />
			<Container>
				{quoteList.length > 0 ? <>
					<Quote>{quote.text}</Quote>
					<Author>{quote.author}</Author>
					<ButtonContainer>
						<Button onClick={tweetQuote}><FaTwitter/></Button>
						<Button onClick={newQuote}><FaLongArrowAltRight/></Button>
					</ButtonContainer>
				</> : <SpinnerLoading />}
			</Container>
			<SocialButtons />
		</>
	);
};

export default App;
