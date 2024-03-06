import React from "react";
import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Card } from "./Card.jsx";
import { Footer } from "./Footer.jsx"


//create your first component
const Home = () => {
	return (
		<div className="container-fluid p-0">
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="container d-flex">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
				
			</div>
			<Footer />			
		</div>
	);
};

export default Home;
