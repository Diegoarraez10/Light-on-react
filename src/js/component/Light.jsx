import React, { useState } from "react";

const Light = () => {
	const [color, setColor] = useState("");

	return (
		<div className="semaforo">
			<div
				className={`red light ${color === "red" && "on"}`}
				onClick={() => {
					setColor("red");
				}}></div>
			<div
				className={`yellow light ${
					color === "yellow" && "on"
				}`}
				onClick={() => {
					setColor("yellow");
				}}></div>
			<div
				className={`green light ${color === "green" && "on"}`}
				onClick={() => {
					setColor("green");
				}}></div>
		</div>
	);
};

export default Light;
