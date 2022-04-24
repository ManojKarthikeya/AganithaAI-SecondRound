import React, { useEffect, useState } from "react";
import "./InteractiveGraph.css";
import {
	LineChart,
	Legend,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	ResponsiveContainer,
} from "recharts";
import Switch from "@mui/material/Switch";
const temperatureData = [];

function InteractiveGraph() {
	const [isLoadedGangtok, setIsLoadedGangtok] = useState(false);
	const [isLoadedChennai, setIsLoadedChennai] = useState(false);
	const [compareCity, setCompareCity] = useState("Chennai");

	useEffect(() => {
		fetchData(setIsLoadedChennai);
	}, []);
	if (isLoadedChennai)
		return (
			<div className="chart-container">
				<div className="switch"><span style={{color: compareCity === "Chennai" ? "#c53037": "grey"}}>Chennai</span>
					<Switch
						color="info"
						onChange={() => {
							switchHandler(
								isLoadedGangtok,
								setIsLoadedGangtok,
								compareCity,
								setCompareCity
							);
						}}
					/><span style={{color: compareCity === "Gangtok" ? "#21a721": "grey"}}>Gangtok</span>
				</div>
				<ResponsiveContainer
					className="chart"
					width={"70%"}
					height={400}
					minHeight={"50%"}
				>
					<LineChart
						data={temperatureData}
						margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
					>
						<Line
							name="Hyderabad"
							type="monotone"
							dataKey="Hyderabad"
							stroke="#8884d8"
							dot={false}
							legendType="line"
						/>
						<Line
							name={compareCity}
							type="monotone"
							dataKey={compareCity}
							stroke={
								compareCity === "Chennai"
									? "#c53037"
									: "#21a721"
							}
							dot={false}
							legendType="line"
						/>
						<CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
						<XAxis
							ticks={[2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]}
							unit={"H"}
						/>
						<Legend iconType={"diamond"} />
						<YAxis
							ticks={[10, 20, 30, 40, 50]}
							unit={"\u00B0C"}
							domain={[10, 50]}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		);
}

export default InteractiveGraph;

const fetchData = async (setIsLoaded) => {
	await fetch(
		"https://api.openweathermap.org/data/2.5/onecall?lat=17.3850&lon=78.4867&exclude=minutely,daily,alerts&units=metric&appid=2c59ee1d17909a2d4d12edde63867f17"
	)
		.then((response) => {
			return response.json();
		})
		.then((hyderabadData) => {
			let hourlyTempsHyderabad = hyderabadData.hourly.splice(23);
			for (let i = 0; i < hourlyTempsHyderabad.length; i++) {
				temperatureData.push({
					Hyderabad: hourlyTempsHyderabad[i].temp,
				});
			}
		});
	await fetch(
		"https://api.openweathermap.org/data/2.5/onecall?lat=13.0827&lon=80.2707&exclude=minutely,daily,alerts&units=metric&appid=2c59ee1d17909a2d4d12edde63867f17"
	)
		.then((response) => {
			return response.json();
		})
		.then((chennaiData) => {
			let hourlyTempsChennai = chennaiData.hourly.splice(23);
			for (let i = 0; i < hourlyTempsChennai.length; i++) {
				temperatureData[i].Chennai = hourlyTempsChennai[i].temp;
			}
		});
	setIsLoaded(true);
};

const switchHandler = async (
	isLoadedGangtok,
	setIsLoadedGangtok,
	compareCity,
	setCompareCity
) => {
	if (!isLoadedGangtok) {
		await fetch(
			"https://api.openweathermap.org/data/2.5/onecall?lat=27.3314&lon=88.6138&exclude=minutely,daily,alerts&units=metric&appid=2c59ee1d17909a2d4d12edde63867f17"
		)
			.then((response) => {
				return response.json();
			})
			.then((GangTokData) => {
				let hourlyTempsGangTok = GangTokData.hourly.splice(23);
				for (let i = 0; i < hourlyTempsGangTok.length; i++) {
					temperatureData[i].Gangtok = hourlyTempsGangTok[i].temp;
				}
			});
		setIsLoadedGangtok(true);
	}
	compareCity === "Chennai"
		? setCompareCity("Gangtok")
		: setCompareCity("Chennai");
};
