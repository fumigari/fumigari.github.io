import React from 'react';
import styled from 'styled-components';
import userData from '../constants/data';

const SocialsContainer = styled.div`
	display: flex;
	column-gap: 1rem;
	justify-content: center;
`;
const Link = styled.a`
	color: var(--dark-purple);
`;

const Socials = () => {
	return (
		<SocialsContainer>
			<Link href={userData.socialLinks.linkedin} target="_blank" rel="noreferrer noopener">
				<i className="fa-brands fa-linkedin fa-xl"></i>
			</Link>

			<Link href={userData.socialLinks.github} target="_blank" rel="noreferrer noopener">
				<i className="fa-brands fa-github fa-xl"></i>
			</Link>

			<Link href={userData.socialLinks.instagram} target="_blank" rel="noreferrer noopener">
				<i className="fa-brands fa-instagram fa-xl"></i>
			</Link>	
		</SocialsContainer>
	);
};

export default Socials;