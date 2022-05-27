/* Dependencies */
import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaInstagram } from 'react-icons/fa';

const ContainerButtons = styled.div`
    height: 3.4rem;
    display: flex;
    justify-content: center;
`;

const Button = styled.a`
    text-decoration: none;
    color: black;
    background: rgba(256, 256, 256, 0.95);
    padding: 10px;
    margin: 0 .5rem;
    font-size: 2rem;
    display: flex;
    border: 1px solid transparent;
    border-radius: 10px;
`;

const SocialButtons = () => {
	return (
		<ContainerButtons>
			<Button href='https://www.instagram.com/daviuee' target='_blank'><FaInstagram /></Button>
			<Button href='https://github.com/daviue' target='_blank'><FaGithub /></Button>
		</ContainerButtons>
	);
};

export default SocialButtons;
