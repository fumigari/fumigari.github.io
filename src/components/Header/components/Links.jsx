import React from 'react';
import { Link, useLocation } from "react-router-dom";
import styled from 'styled-components';

const ItemsDiv = styled.div`
	display: flex;
	gap: 2rem;
	justify-content: center;
	
	@media only screen and (max-width: 1023px) {	
		gap: 1rem;
		justify-content: space-between;
	}

	@media only screen and (max-width: 767px) {	
		gap: 1rem;
		padding-top: 0;
		justify-content: space-between;
	}
`;

const StyledLink = styled(Link)`
	font-size: 1rem;
	line-height: 1.5rem; 
	text-decoration: none;

	&:hover {
    color: var(--yellow);
  }
	
  color: ${(props) => props.active ? `var(--yellow)}` : `var(--black-purple)`};

	@media only screen and (max-width: 767px) {	
		font-size: 0.813rem;
		font-weight: 300;
	}
`;

const Links = () => {
	let location = useLocation();
	
	return (
		<ItemsDiv>
			<StyledLink
				to="/about"
				href="/about"
				active={location.pathname === "/about"}
			>
				About
			</StyledLink>

			<StyledLink
				to="/experience"
				href="/experience"
				active={location.pathname === "/experience"}
			>
				Experience
			</StyledLink>

			<StyledLink
				to="/projects"
				href="/projects"
				active={location.pathname === "/projects"}
			>
				Projects
			</StyledLink>

			<StyledLink
				to="/contact"
				href="/contact"
				active={location.pathname === "/contact"}
			>
				Contact
			</StyledLink>
		</ItemsDiv>
	);
};

export default Links;