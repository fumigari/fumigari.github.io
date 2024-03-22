import React from 'react';
import styled, {keyframes} from 'styled-components';

const ScrollContainer = styled.div`
	position: absolute;
	bottom: 20px;
	left: 0;
	width: 100%;
  z-index: 1;

	@media only screen and (max-width: 768px) {
		bottom: 40px;
	}
`;

const Button = styled.a`
	color: var(--white);
	font-size: 14px;
	display: block;
	max-width: 100px;
	margin: auto;
	text-align: center;
	cursor: pointer;
`;

const ScrollName = styled.span`
	font-size: 14px;
	color: var(--dark-purple);
	font-weight: 400;
`;

const Mouse = styled.span`
	border: 2.5px solid;
	border-color: var(--dark-purple);
  border-radius: 16px;
  display: block;
  margin: 10px auto auto;
  height: 26px;
  position: relative;
  width: 20px;
`;

const AniMouse = keyframes`
	0% {
		top: 29%;
	}

	15% {
		top: 50%;
	}

	50% {
		top: 50%;
	}

	100% {
		top: 29%;
	}
`;


const Wheel = styled.span`
	background: var(--dark-purple);
	border-radius: 100%;
  display: block;
  position: absolute;
	top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0.25rem;
	height: 0.25rem;
  -webkit-animation: ${AniMouse} 1s linear -2s infinite normal none;
  animation: ${AniMouse} 1s linear -2s infinite normal none;
`;


const ScrollDown = () => {
	return (
		<ScrollContainer>
			<Button href="#about">
				<ScrollName>Scroll Down</ScrollName>
				<Mouse>
					<Wheel />
				</Mouse>
			</Button>
		</ScrollContainer>
	)
}

export default ScrollDown;