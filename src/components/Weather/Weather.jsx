import React, { useEffect, useState } from "react";
import "./weather-styles.css";

function Weather() {
	const [temp, setTemp] = useState(null);
	useEffect(() => {
		fetch(
			"https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&units=metric&appid=2c59ee1d17909a2d4d12edde63867f17"
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setTemp(Math.round(data.main.temp));
			});
	}, []);
	if (!temp) {
		return <div>is Loading</div>;
	} else if (temp > 30) {
		return (
			<div className="weather-box">
				<div className="temp-widget" style={{ color: "#a81414" }}>
					<div className="current-temp-text">
						Current Temperature is
					</div>
					<div className="temperature">{temp}&#176;C</div>
				</div>
				<div className="temp-widget-text">
					Hey, it’s too hot! Spend the day indoors.
				</div>
			</div>
		);
	} else if (temp >= 20 && temp <= 30) {
		return (
			<div className="weather-box">
				<div className="temp-widget" style={{ color: "#1aa851" }}>
					<div className="current-temp-text">
						Current Temperature is
					</div>
					<div className="temperature">{temp}&#176;C</div>
				</div>
				<div className="temp-widget-text">
				The Weather is nice. Try playing outside!
				</div>
			</div>
		);
	} else {
		return (
			<div className="weather-box">
				<div className="temp-widget" style={{ color: "#0b5cd6" }}>
					<div className="current-temp-text">
						Current Temperature is
					</div>
					<div className="temperature">{temp}&#176;C</div>
				</div>
				<div className="temp-widget-text">
				It's cold out! Time to bundle up.
				</div>
			</div>
		);
	}
}

export default Weather;
