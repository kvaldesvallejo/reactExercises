import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const BootstrapCard = props => {
	// 1) replace the hard-coded image, description, link, etc. With their property variable.
	return (
		<div className="card m-5">
			{/* <img className="card-img-top" src={props.image} alt="Card image cap" /> */}
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.cardDescription}</p>
				<a href={props.bUrl} className="btn btn-primary">
					{props.bLabel}
				</a>
			</div>
		</div>
	);
};
BootstrapCard.propTypes = {
	title: PropType.string,
	// 2) add here the new properties into the proptypes object
	//image: PropType.u,
	cardDescription: PropType.string,
	bUrl: PropType.string,
	bLabel: PropType.string
};

// 3) Use ReactDOM to add the component into then DOM element #myDiv
ReactDOM.render(
	<BootstrapCard
		title="Welcome to react"
		cardDescription="React is the most popular rendering library in the world"
		bLabel="Go to the official website"
		bUrl="https://reactjs.org/"
	/>,
	document.querySelector("#myDiv")
);
