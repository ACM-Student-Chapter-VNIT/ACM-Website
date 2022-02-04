import React from "react";
import codepen from "./codepen.module.css";

const Output = (props) => {

  return (
    <div className={codepen.output}>
      <iframe title="Output" className="iframe" srcDoc={props.code} width="100%" height="100%" sandbox="allow-scripts"
        frameBorder="0"></iframe>
    </div>
  );
}

export default Output;