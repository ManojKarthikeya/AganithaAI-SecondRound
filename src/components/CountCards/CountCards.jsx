import React from "react";
import "./CountCards-styles.css";

function CountCards() {
	return (
		<div className="count-card-container">
			<div className="count-card">
				<div className="count-card-text">Population</div>
				<div className="count-card-value" style={{ color: "#EA3D2F" }}>
					6,809,970
				</div>
			</div>
			<div className="count-card">
				<div className="count-card-text">GDP (USD)</div>
				<div className="count-card-value" style={{ color: "#367BF5" }}>
					$50.1B
				</div>
			</div>
			<div className="count-card">
				<div className="count-card-text">Males</div>
				<div className="count-card-value" style={{ color: "#0AB74F" }}>
					3,500,802
				</div>
			</div>
			<div className="count-card">
				<div className="count-card-text">Females</div>
				<div className="count-card-value" style={{ color: "#DCBC11" }}>
					3,309,168
				</div>
			</div>
		</div>
	);
}

export default CountCards;
