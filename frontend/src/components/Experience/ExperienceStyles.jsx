import styled from 'styled-components';

export const ExperienceSection = styled.section`
	position: relative;
	display: flex;
	align-items: center;
	padding: 2rem 0;

	@media only screen and (min-width: 769px) and (max-width: 1200px){
		padding: 3rem 0 0 0;
	}
	
	@media only screen and (min-width: 576px) and (max-width: 768px) {
		padding: 0 0 3rem 0;
	}

	@media only screen and (max-width: 576px) {
		padding: 1rem 0 2rem 0;
		height: auto;
	}
`;

export const ExperienceDiv = styled.div`
	max-width: 60rem;
	margin-left: auto;
	margin-right: auto;

	@media only screen and (min-width: 769px) and (max-width: 1200px){
		width: 90%;
		display: flex;
    justify-content: center;
    flex-direction: column;
	}
	
	@media only screen and (min-width: 576px) and (max-width: 768px) {
		width: 90%;
		display: flex;
    justify-content: center;
    flex-direction: column;
	}

	@media only screen and (max-width: 576px) {
		width: 90%;
		display: flex;
    justify-content: center;
    flex-direction: column;
	}	
`;
//t | r | b | l
export const ExperienceTitle = styled.h1`
	font-size: 2.25rem;
	padding: 2rem 0;
	line-height: 1;
	text-align: left;
	margin: 0;

	@media only screen and (min-width: 769px) and (max-width: 1200px){
		text-align: center;
		padding: 0.5rem 0 2rem 0;
	}
	
	@media only screen and (min-width: 576px) and (max-width: 768px) {
		text-align: center;
		padding: 0.5rem 0 2rem 0;
	}

	@media only screen and (max-width: 576px) {
		text-align: center;
		padding: 0.5rem 0 2rem 0;
	}	
`

export const TimelineContainer = styled.div`
	display: flex;

	@media only screen and (min-width: 769px) and (max-width: 1200px){
		flex-direction: column;
	}
	
	@media only screen and (min-width: 576px) and (max-width: 768px) {
		flex-direction: column;
	}

	@media only screen and (max-width: 576px) {
		flex-direction: column;
	}	
`;

export const TimelineDiv = styled.div`
	position: relative;
	width: 100vw;
	padding-right: 2rem;
	flex: 0 0 50%;

	@media only screen and (min-width: 769px) and (max-width: 1200px){
		width: auto;
		padding-right: 0;
		padding-bottom: 2rem;
	}
	
	@media only screen and (min-width: 576px) and (max-width: 768px) {
		width: auto;
		padding-right: 0;
		padding-bottom: 2rem;
	}

	@media only screen and (max-width: 576px) {
		width: auto;
		padding-right: 0;
		padding-bottom: 2rem;
	}	
`;

export const TimelineContentDiv = styled.div`
	padding: 1.875rem;
	box-shadow: 0 5px 20px 0 rgba(69,67,96,.1);
	background: var(--white);
	border-radius: 20px;
	position: relative;
	overflow: hidden;
`;

export const TimelineContent = styled.div`
  padding-left: 3.125rem;
  margin-bottom: 0.5rem;
  position: relative;
  background-color: inherit;
`;

export const IconAfter = styled.div`
	background: transparent;
	font-family: 'Simple-Line-Icons';
	font-size: 24px;
	color: #ff4c60;
	position: absolute;
	left: -7px;
	top: 0;
	z-index: 1;
`;

export const ExperienceContent = styled.div`
position: relative;
`;

export const Span = styled.span`
	color: #8b88b1;
  font-size: 14px;
	font-weight: 400;
`;

export const Role = styled.h3`
	font-size: 20px;
	margin: 10px 0;
`;

export const Text = styled.p`
	margin: 0;
	font-weight: 400;
	padding-bottom: 0.5rem;
`;

export const TextLink = styled.a`
	text-decoration: none;
`;

export const SpanLine = styled.span`
	position: absolute;
	width: 1px;
	background-color: #ff4c60;
	top: 30px;
	bottom: 30px;
	left: 34px;
`;