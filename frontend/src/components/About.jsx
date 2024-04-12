import React from 'react';
import styled from 'styled-components';
import userData from '../constants/data';
import Avatar from '../assets/avatar2.svg';
import js from '../assets/tech/js.svg';
import ts from '../assets/tech/ts.svg';
import html from '../assets/tech/html.svg';
import css from '../assets/tech/css.svg';
import react from '../assets/tech/react.svg';
import java from '../assets/tech/java.svg';
import git from '../assets/tech/git.svg';
import github from '../assets/tech/github.svg';
import jest from '../assets/tech/jest.svg';
import csharp from '../assets/tech/csharp.svg';

const AboutSection = styled.section`
	position: relative;
	display: flex;
	align-items: center;
	padding: 2rem 0;

	@media only screen and (min-width: 769px) and (max-width: 1200px){
		padding: 3rem 0 0 0;
		align-items: flex-start;
	}
	
	@media only screen and (min-width: 576px) and (max-width: 768px) {
		padding: 0 0 3rem 0;
	}

	@media only screen and (max-width: 576px) {
		padding: 1rem 0 2rem 0;
		height: auto;
	}	
`;

const AboutImage = styled.img`
	height: 10rem;
`;

const AboutDiv = styled.div`
	max-width: 60rem;
  margin-left: auto;
  margin-right: auto;

	@media only screen and (min-width: 769px) and (max-width: 1200px){
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	@media only screen and (min-width: 576px) and (max-width: 768px) {
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 90%;
	}

	@media only screen and (max-width: 576px) {
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 90%;
		padding: 3rem 0;
	}	
`;

const AboutTitle = styled.h1`
	font-size: 2.25rem;
	padding: 2rem 0;
	line-height: 1;
	text-align: left;
	margin: 0;
`;

const AboutDivColor = styled.div`
	border-radius: 20px;
	padding: 2rem 2rem;
	box-shadow: 0 5px 20px 0 rgba(69,67,96,.1);
	background: var(--white);

	@media only screen and (min-width: 769px) and (max-width: 1200px){
		width: 90%;
		padding: 2rem 1.25rem;
	}

	@media only screen and (min-width: 576px) and (max-width: 768px) {
		width: 90%;
		padding: 2rem 1.25rem;
	}

	@media only screen and (max-width: 576px) {
		width: 80%;
		padding: 2rem 1.25rem;
	}	
`;

const Triangule = styled.div`
		border-top: 10px solid transparent;
    border-bottom: 15px solid var(--white);
    border-right: 10px solid transparent;
    z-index: 1;
    border-left: 10px solid transparent;
`;

const AboutText = styled.p`
  line-height: 2rem; 
  font-size: 1rem;
  font-weight: 400; 
  margin-left: 1rem;
  margin-right: 1rem; 

	@media only screen and (min-width: 769px) and (max-width: 1200px){
		
	}

	@media only screen and (min-width: 576px) and (max-width: 768px) {
		margin-left: 0;
		margin-right: 0;
		margin-bottom: 2.5rem;
	}

	@media only screen and (max-width: 576px) {
		margin-left: 0.5rem;
		margin-right: 0.5rem;
		margin-top: 0;
		margin-bottom: 2rem;
	}	
`;

const JobContainer = styled.div`
	width: 50%;	
	@media only screen and (min-width: 769px) and (max-width: 1200px){

	}

	@media only screen and (min-width: 576px) and (max-width: 768px) {

	}

	@media only screen and (max-width: 576px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding-bottom: 2rem;
	}	
`;

const JobText = styled.p`
	line-height: 2rem; 
	font-size: 1rem;
	font-weight: 400; 
	margin: 1rem 0 0 0;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 1rem;
`;

const ButtonDiv = styled.a`
	text-decoration: none;
`;

const AboutContentContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const AboutContentDiv = styled.div`
	display: flex;
	margin-left: 1rem;
	margin-right: 1rem;
	flex-direction: row;
	gap: 10rem;
	justify-content: flex-start;

	@media only screen and (min-width: 769px) and (max-width: 1200px){
		flex-direction: row;
		gap: 2rem;
	}

	@media only screen and (min-width: 576px) and (max-width: 768px) {
		flex-direction: row;
		gap: 2rem;
		margin-left: 0;
		margin-right: 0;
	}

	@media only screen and (max-width: 576px) {
		flex-direction: column;
		gap: 0;
		margin-left: 0.5rem;
		margin-right: 0.5rem;
	}	
`;

const TechContainer = styled.div`
	width: 50%;	

	@media only screen and (max-width: 576px) {
		width: 100%;
	}	
`;

const TechTitle = styled.p`
	margin: 0 0 0.5rem 0;

	@media only screen and (min-width: 769px) and (max-width: 1200px){
		margin: 0 0 1rem 0;
	}

	@media only screen and (min-width: 576px) and (max-width: 768px) {
		margin: 0;
	}

	@media only screen and (max-width: 576px) {
	}	

`;

const TechDiv = styled.div`
	margin: 0;

	@media only screen and (min-width: 769px) and (max-width: 1200px){
		display: flex;
    justify-content: space-between;
	}

	@media only screen and (min-width: 576px) and (max-width: 768px) {
		display: flex;
    justify-content: space-between;
		padding-top: 1rem;
	}

	@media only screen and (max-width: 576px) {
		display: flex;
		justify-content: space-between;
	}	

`;

const TechImg = styled.img`
	height: 4.25rem;

	@media only screen and (min-width: 769px) and (max-width: 1200px){

	}

	@media only screen and (min-width: 576px) and (max-width: 768px) {
		height: 3.5rem;
	}

	@media only screen and (max-width: 576px) {
		height: 3.25rem;
	}	
`;

const About = () => {
	return (
		<AboutSection>
			<AboutDiv>
				<AboutTitle>
					About Me
				</AboutTitle>
				<AboutContentContainer>
					<AboutImage src={Avatar} alt="" />
					<Triangule />
					<AboutDivColor>
						<AboutText>
							{userData.about.title}
						</AboutText>
						<AboutContentDiv>
							<JobContainer>Job Opportunities
								<JobText>{userData.about.job}</JobText>
								<ButtonContainer>
									<ButtonDiv href={userData.about.linkCV} target="_blank" rel="noreferrer noopener">
										<button type="button">Download CV</button>
									</ButtonDiv>
								</ButtonContainer>
							</JobContainer>
							<TechContainer>
								<TechTitle>Tech Stack</TechTitle>
								<TechDiv>
									<TechImg src={js} alt="" />
									<TechImg src={ts} alt="" />
									<TechImg src={html} alt="" />
									<TechImg src={css} alt="" />
									<TechImg src={react} alt="" />
								</TechDiv>
								<TechDiv>
									<TechImg src={jest} alt="" />
									<TechImg src={git} alt="" />
									<TechImg src={github} alt="" />
									<TechImg src={csharp} alt="" />
									<TechImg src={java} alt="" />
								</TechDiv>
							</TechContainer>
						</AboutContentDiv>
					</AboutDivColor>
				</AboutContentContainer>
			</AboutDiv>
		</AboutSection>
	);
};

export default About;