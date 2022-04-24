import React, { useEffect, useState } from "react";
import "./graph-styles.css";
import { LineChart,Legend, Line, CartesianGrid, XAxis, YAxis } from "recharts";

function Graph() {
	const [graphData, setGraphData] = useState(null);
	useEffect(() => {
		fetch(
			"https://api.openweathermap.org/data/2.5/onecall?lat=17.3850&lon=78.4867&exclude=minutely,daily,alerts&units=metric&appid=2c59ee1d17909a2d4d12edde63867f17"
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setGraphData(data.hourly.splice(23));
			});
	}, []);
	if (!graphData) {
		return <div>Still loading...</div>;
	} else {
		return (
			<LineChart width={1400} height={350} data={graphData}>
				<Line name="Hyderabad" type="monotone" dataKey="temp" stroke="#8884d8" />
				<CartesianGrid stroke="#ccc" />
				<XAxis />
				<Legend/>
				<YAxis domain={[10, 50]} />
			</LineChart>
		);
	}
}

export default Graph;
