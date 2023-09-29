import React from 'react';
import './Home.css';
import Avatar from "../../assets/avatar-1.png";

const Home = () => {
	return (
		<div className="section__home">
			<section className="home d-flex align-items-center light">
				<div className="container">
					<div className="intro">
						<img src={Avatar} alt="Ari avatar" className='avatar mb-4' />
						<h1 className='mb-2 mt-0'>Ari Ferreira</h1>
						<p>
							I'm a
							<span class="typed-text"></span>
							<span class="cursor">&nbsp;</span>
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home;