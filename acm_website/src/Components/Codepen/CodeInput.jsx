import React from "react";
import {UnControlled as CodeMirror} from "react17-codemirror2";
import codepen from "./codepen.module.css";
require("codemirror/lib/codemirror.css");
require("codemirror/theme/material.css");
require("codemirror/theme/neat.css");
require("codemirror/mode/xml/xml.js");
require("codemirror/mode/css/css.js");
require("codemirror/mode/javascript/javascript.js");

const CodeInput = (props) => {
	return (
		<div className={codepen.codeInput}>
			<CodeMirror
				classname={codepen.CodeMirror}
				value={props.value}
				options={{
					lineWrapping: true,
					lint: true,
					mode: props.language,
					theme: "material",
					lineNumbers: true,
				}}
				onChange={(editor, data, value) => {
					props.save(value);
				}}
			/>
		</div>
	);
};

export default CodeInput;
