import React from 'react';
import styled from 'styled-components';
import Typewriter from "typewriter-effect";
import Shapes from './components/Shapes';
import Avatar from '../../assets/avatar.svg';
import Socials from './components/Socials';
import ScrollDown from './components/ScrollDown';

const HomeSection = styled.section`
	position: relative;
	display: flex;
	align-items: center;
	padding: 0;
  height: 90vh;

	@media only screen and (max-width: 768px) {
		height: 90svh;
	}
`;

const HomeContainer = styled.div`
  text-align: center;
  z-index: 1;
	width: 100%;

`;

const IntroContainer = styled.div`
	margin: auto;
  max-width: 540px;
  text-align: center;
  position: relative;
  z-index: 1;
}
`;

const Image = styled.img`
	height: 7rem;
	width: 100%;
	margin-bottom: 1.5rem
`;

const Name = styled.h1`
	font-size: 2.25rem;
	color: var(--dark-purple);
	margin-top: 0;
	margin-bottom: 1rem;
`;

const Role = styled.div`
	color: var(--dark-purple);
	font-size: 1.125rem;
	font-weight: 300;
	margin-bottom: 0;
  display: flex;
  justify-content: center;
	max-width: 540px;
`;

const ButtonContainer = styled.div`
	margin-top: 1.5rem;
`;

const ButtonDiv = styled.a`
	text-decoration: none;
`;


const Home = () => {
	return (
		<main>
			<HomeSection>
				<HomeContainer>
					<IntroContainer>
						<Image src={Avatar} alt="Profile picture - 
					Girl with curly hair, wearing black hoodie and glasses"/>
						<Name>Ari Ferreira</Name>
						<Role>
							I'm a&nbsp;<Typewriter
								onInit={(typewriter) => {
									typewriter.pauseFor(1000);
								}}

								options={{
									strings: ["Front-end developer", "Back-end developer"],
									autoStart: true,
									loop: true,
								}}
							/>
						</Role>
						<Socials />
					</IntroContainer>

					<ButtonContainer>
						<ButtonDiv href="#contact">
							<button type="button">Hire me</button>
						</ButtonDiv>
					</ButtonContainer>

					<Shapes />

					<ScrollDown />
				</HomeContainer>
			</HomeSection>
		</main>
	);
};

export default Home;