import React, { useContext } from 'react';
import "./Sidebar.css";
import Logo from "../../assets/logo.svg";
import { ShowSidebarContext } from '../../hooks/ShowSidebar';

const Sidebar = () => {
	const { openSidebar, showSidebar } = useContext(ShowSidebarContext);

	return (
		// <div className='dale'>
		<>
		<header className={`mobile__header ` +  openSidebar}>
			<div className="container">
				<div className="menu__icon d-inline-flex mr-4">
					<button onClick={showSidebar}>
						<span></span>
					</button>
				</div>
				{/* <div className="site__logo">
					<a href="#home" className="logo">
						<img src={Logo} alt="Logo" />
					</a>
				</div> */}
			</div>
		</header>

		<header className={`desktop__header d-flex align-items-start flex-column ` + openSidebar}>
			<div className="site__logo">
				<a href="#home" className="logo">
					<img src={Logo} alt="Logo" />
				</a>
			</div>

			<nav className="nav">
				<ul className="nav__menu scrollspy">
					<li className="nav__item">
						<a href="#home" className="nav__link">
							<i className="icon-home"></i>
						</a>
					</li>

					<li className="nav__item">
						<a href="#about" className="nav__link">
							<i className="icon-user-following"></i>
						</a>
					</li>

					<li className="nav__item">
						<a href="#services" className="nav__link">
							<i className="icon-briefcase"></i>
						</a>
					</li>

					<li className="nav__item">
						<a href="#resume" className="nav__link">
							<i className="icon-graduation"></i>
						</a>
					</li>

					<li className="nav__item">
						<a href="#portfolio" className="nav__link">
							<i className="icon-layers"></i>
						</a>
					</li>

					<li className="nav__item">
						<a href="#contact" className="nav__link">
							<i className="icon-bubbles"></i>
						</a>
					</li>

				</ul>
			</nav>

			<div className="footer">
				<span className="copyright">&copy; 2023 Bolby</span>
			</div>
		</header>
		</>
		// </div>
	)
}

export default Sidebar;