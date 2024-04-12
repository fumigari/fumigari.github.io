import React from 'react';
import styled from 'styled-components';
import Socials from './Socials';

//t | r | b | l

const LineDiv = styled.div`
	height: 0.094rem;
	width: 100%;
	background-color: var(--dark-purple);
	opacity: 15%;
`;

const FooterContainer = styled.div`
	max-width: 60rem;
	margin-left: auto;
	margin-right: auto;
	padding: 1.5rem 1rem;
`;

const FooterDiv = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1rem;
	align-items: center;
	justify-content: space-between;
`;

const FooterTitle = styled.p`
	font-weight: 300;
`;

const SocialDiv = styled.div`
	display: flex;
  flex-direction: row;
  align-items: center; 
`;


const Footer = () => {
	return (
		<>
			<LineDiv />
			<FooterContainer>
				<FooterDiv>
          <FooterTitle>&copy; Ari Ferreira | Bolby Template</FooterTitle>
						<SocialDiv>
							<Socials/>
					</SocialDiv>
				</FooterDiv>
			</FooterContainer>
		</>
		
	)
}

export default Footer