import React from 'react';
import hamster from "../assets/wip.png";
import styled from 'styled-components';

const Div = styled.div`
	display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
	padding: 1rem 3rem;
`;

const Image = styled.img`
	width: 400px;
`;

const WIP = () => {
	return (
		<Div>
			<h1>Work in progress, sorry.</h1>
			<Image src={hamster} alt="crying hamster meme" />
		</Div>
	)
}

export default WIP;