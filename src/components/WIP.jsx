import React from 'react';
import hamster from "../assets/wip.png";
import styled from 'styled-components';

const Div = styled.div`
	display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const WIP = () => {
	return (
		<Div>
			<h1>Work in progress, sorry.</h1>
			<img src={hamster} alt="crying hamster meme" />
		</Div>
	)
}

export default WIP;