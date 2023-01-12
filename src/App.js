import React, { useState } from "react";
import "./App.css";


function App() {
const [style, setStyle] = useState("black");

const changeStyleRed = () => {
	setStyle("red");
};
const changeStyleBlue = () => {
	setStyle("blue");
};
const changeStyleOrange = () => {
	setStyle("orange");
};

return (
	<>
	<div className={style}>
		<button className="button" onClick={changeStyleRed}>Red</button>
    <button className="button" onClick={changeStyleBlue}>Blue</button>
		<button className="button" onClick={changeStyleOrange}>Orange</button>
	</div>
	</>
);
};
export default App;

