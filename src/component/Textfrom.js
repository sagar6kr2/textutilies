import React, { useState } from "react";
// import { useState } from "react";

const TextFrom = (prop) => {
  // setText("enter corret text");
  const clickHandlerLower = () => {
    let newText = text.toLowerCase();
    if(newText.length<3){
      alert("Too Short length")
    }

    else{
      alert("Good Job")
    }
    setText(newText);
  };

  const clickHandlerUpper = () => {
    console.log("clickHandler work", setText);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleUpClick = (event) => {
    setText(event.target.value);
    console.log(setText);
  };
  const [text, setText] = useState(" ");

  
  return (
    
    <div>
      <h1>{prop.heading}</h1>
      <div className="mb-3">
        <label for="MyBox" class="form-label">
          {prop.line}
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          onChange={handleUpClick}
          value={text}
        ></textarea>
        <button className="btn btn-primary my-2  mx-2" onClick={clickHandlerUpper}>
          UpperCase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={clickHandlerLower}>
          LowerCase
        </button> 
        
      </div>
      <div className="container my-3">
         <h1>Your text summary</h1>
         <p>{text.split(" ").length} words and {text.length} characters</p>
       <h2>Preview</h2>
       <p>{text}</p>
      </div>
    </div>
    
  );
};

export default TextFrom;
