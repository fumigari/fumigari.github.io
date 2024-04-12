import React from 'react';
import styled from 'styled-components';
import { ReactComponent as s1 } from '../../../assets/shapes/s1.svg';
import { ReactComponent as s2 } from '../../../assets/shapes/s2.svg';
import { ReactComponent as s3 } from '../../../assets/shapes/s3.svg';
import { ReactComponent as s4 } from '../../../assets/shapes/s4.svg';
import { ReactComponent as s5 } from '../../../assets/shapes/s5.svg';
import { ReactComponent as s6 } from '../../../assets/shapes/s6.svg';
import { ReactComponent as s7 } from '../../../assets/shapes/s7.svg';
import { ReactComponent as s8 } from '../../../assets/shapes/s8.svg';
import { ReactComponent as s9 } from '../../../assets/shapes/s9.svg';
import { ReactComponent as s10 } from '../../../assets/shapes/s10.svg';
import { ReactComponent as s11 } from '../../../assets/shapes/s11.svg';

const ShapesContainer = styled.div`
	left: 0;
	top: 0;
	height: 90vh;
	width: 100%;
	position: absolute;
`;

const S1 = styled(s1)`
	left: 10%;
	top: 10%;
	transform: translate(-29.2741px, -12.6519px);
	position: absolute;
`;

const S2 = styled(s2)`
	left: 25%;
	top: 30%;
	transform: translate(-5.40555px, 5.86111px);
	position: absolute;
`;

const S3 = styled(s3)`
	left: 15%;
	bottom: 30%;
	transform: translate(4.59111px, 9.19111px);
	position: absolute;
`;

const S4 = styled(s4)`
	left: 10%;
	bottom: 10%;
	transform: translate(-11.0222px, 4.07778px);
	position: absolute;
`;

const S5 = styled(s5)`
	left: 45%;
	top: 10%;
	transform: translate(-13.7778px, 5.09723px);
	position: absolute;
`;

const S6 = styled(s6)`
	left: 40%;
	bottom: 10%;
	transform: translate(-6.12346px, 2.26543px);
	position: absolute;
`;

const S7 = styled(s7)`
	top: 20%;
	right: 30%;
	transform: translate(-5.0101px, 1.85354px);
	position: absolute;
`;

const S8 = styled(s8)`
	right: 30%;
	bottom: 20%;
	transform: translate(8.11852px, 19.3185px);
	position: absolute;
`;

const S9 = styled(s9)`
	right: 10%;
	top: 10%;
	transform: translate(12.1778px, 28.9778px);
	position: absolute;
`;

const S10 = styled(s10)`
	right: 20%;
	top: 45%;
	transform: translate(5.29469px, 12.599px);
	position: absolute;
`;

const S11 = styled(s11)`
	bottom: 10%;
	right: 10%;
	transform: translate(-6.95679px, -1.62346px);
	position: absolute;
`;

const Shapes = () => {
	return (
		<ShapesContainer>
			<S1/>
			<S2/>
			<S3/>
			<S4/>
			<S5/>
			<S6/>
			<S7/>
			<S8/>
			<S9/>
			<S10/>
			<S11/>
		</ShapesContainer>
	)
}

export default Shapes;