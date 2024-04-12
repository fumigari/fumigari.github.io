import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Links from './components/Links';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const LineDiv = styled.div`
	height: 0.094rem;
	width: 100%;
	background-color: var(--dark-purple);
	opacity: 15%;
`;

//t | r | b | l
const HeaderContainer = styled.header`
	max-width: 60rem;
	margin: 0 auto;
	padding: 1.125rem 1rem;

	@media only screen and (min-width: 769px) and (max-width: 1200px){
		padding: 1.5rem 2rem;
	}

	@media only screen and (min-width: 576px) and (max-width: 768px) {
		padding: 1rem 2rem;
	}

	@media only screen and (max-width: 576px) {
		padding: 1rem 0;
	}	
`;

const HeaderDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;


	@media only screen and (min-width: 769px) and (max-width: 1200px){
		
	}

	@media only screen and (min-width: 576px) and (max-width: 768px) {
		
	}

	@media only screen and (max-width: 576px) {
		justify-content: space-around;
		flex-direction: row;
	}	
`;

const LogoDiv = styled.div`
	display: flex;
	flex-direction: column;
	text-decoration: none;
`;

const LogoImage = styled(Logo)`
	height: 4vh;	
	
	@media only screen and (max-width: 1200px){
		height: 3vh;	
	}
`;

const LinkStyed = styled(Link)`
	height: 4vh;	
	
	@media only screen and (max-width: 1200px){
		height: 3vh;	
	}
`;

const Header = () => {
	return (
		<>
			<HeaderContainer>
				<HeaderDiv>
					<LogoDiv>
						<LinkStyed to="/" href="/">
							<LogoImage/>
						</LinkStyed>
					</LogoDiv>
					<Links/>
				</HeaderDiv>
			</HeaderContainer>
			<LineDiv/>
		</>
	);
}

export default Header;