import React from "react";
import "./countcard-styles.css";

export default function CountCard(props) {
	return (
		<div className="count-card">
			<div className="count-card-text">{props.title}</div>
			<div
				className="count-card-value"
				style={{ color: props.color}}
			>
				{props.value}
			</div>
		</div>
	);
}
