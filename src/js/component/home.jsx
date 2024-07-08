import React from "react";

//include images into your bundle
import {SecondsCounter} from "./SecondsCounter";
import { Timer } from "./Timer";
//create your first component
const Home = () => {
	return (
		<div>
			<Timer/>
		</div>
	);
};

export default Home;
