import React, { useState } from "react";

export default function Textform(props) {

  const handleupclick = () => {
    console.log("uppercase was clicke" + text);
    let newText = text.toUpperCase();
    setText(newText);
    // props.showalert("converted to upper case", "success")
  }

  const handleloclick = () => {
    console.log("uppercase was clicke" + text);
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleclearclick = () => {
    console.log("uppercase was clicke" + text);
    let newText = "";
    setText(newText);
  }
  const copyclick = () => {
    var text = document.getElementById("mybox");
    text.select();  
    navigator.clipboard.writeText(text.value)
  }


  const handleOnChangbe = (event) => {
    console.log("hope youre doing well");
    setText(event.target.value);

  };
  const [text, setText] = useState("enter your details");
  //   setText("ghslksd");
  return (
    <>
      <div className="container"      style={{color :props.mode === 'dark' ? "white" : "#042743" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="mybox" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChangbe}
            id="mybox"
            rows="5"
            style={{backgroundColor:props.mode === 'dark' ? "grey" : "white",
            color:  props.mode === 'dark' ? "white" : "#042743" 
           }}
          ></textarea>
          <br />
          <button className="btn btn-primary mx-1 btn-sm" onClick={handleupclick} > convert to uppercase</button>
          <button className="btn btn-primary mx-1 btn-sm" onClick={handleloclick} > convert to Lowercase</button>
          <button className="btn btn-primary mx-1 btn-sm" onClick={handleclearclick} > clear Text</button>
          <button className="btn btn-primary mx-1 btn-sm" onClick={copyclick} > copy Text</button>
        </div>
      </div>
      <div className="conatainer" style={{color :props.mode === 'dark' ? "white" : "#042743" }}>
        <h2> your text summary</h2>
        <p>{text.split(" ").length} words, {text.length} letters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>preview</h2>
        <p>{text}</p>

      </div>
    </>
  );
}
