import React from "react";
import Image from "./../../assets/buddha.png";
import "./panels-styles.css";
import CountCard from "../CountCard/CountCard";

function Panels() {
	return (
		<div className="Panel">
			<div className="count-card-container">
				<CountCard
					title="Population"
					value="6,809,970"
					color="#EA3D2F"
				/>
				<CountCard title="GDP (USD)" value="$50.1B" color="#367BF5" />
				<CountCard title="Males" value="3,500,802" color="#0AB74F" />
				<CountCard title="Females" value="3,309,168" color="#DCBC11" />
			</div>
			<img
				src={Image}
				alt="broken"
				className="Panel-image"
			/>
		</div>
	);
}

export default Panels;
