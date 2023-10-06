import React from 'react';
import Typewriter from "typewriter-effect";
import './Home.css';
import Avatar from "../../assets/avatar-1.png";
import HeaderSocials from './components/HeaderSocials';
import ScrollDown from './components/ScrollDown';
import Shapes from './components/Shapes';
import InProgress from '../../assets/in-progress.png';


const Home = () => {
	return (
		<div className="section__home">
			<div className='img__div'>
				<img src={InProgress} alt='work in progress sign' className='in-progress' />
			</div>
			<section className="home d-flex align-items-center light">
				<div className="container">
					<div className="intro">
						<img src={Avatar} alt="Ari avatar" className='avatar mb-4' />
						<h1 className='mb-2 mt-0'>Ari Ferreira</h1>
						<div className='role'>
							I'm a&nbsp;<Typewriter
 								onInit={(typewriter) => {
									typewriter.pauseFor(1000);
                }}
								
								options={{
									strings: ["Front-End Developer", "Back-End Developer"],
									autoStart: true,
									loop: true,
								}}
            />
						</div>

						<HeaderSocials />

						<div className='mt-4'>
							<a href="#contact" className="btn btn-default">Hire Me</a>
						</div>
					</div>
					<ScrollDown />
					
					<Shapes />
				</div>
			</section>
		</div>
	);
};

export default Home;