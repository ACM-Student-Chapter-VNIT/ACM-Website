import React from "react";
import Typewriter from "typewriter-effect";

const Test = () => {
	return (
		<>
			<h1>hello</h1>
			<div className="">
				<Typewriter
					options={{
						strings: ['Hello', 'World'],
						autoStart: true,
						loop: true,
					}}
				/>
			</div>
		</>
	);
};

export default Test;