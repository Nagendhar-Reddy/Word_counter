import React, { useState } from 'react'


export default function Textform(props) {
    const [text, setText] = useState('Enter text here');

    const handleupclick = ()=>{
        // console.log("Upparcase button clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Converted to Uppercase","success");
    }

    const handlelowclick = ()=>{
        // console.log("Upparcase button clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showalert("Converted to Lowercase","success");
    }

    function clearclick(){
        let newText = "";
        setText(newText);
        props.showalert("Text Cleared","success");
    }

    const handleonchange = (event)=>{
        // console.log("on change");
        setText(event.target.value);
    }

  return (
    <>
    <div className='container' style = {{color : props.mode === 'dark'?'white':'black'}}>
        <h1 className='text-center'>{props.heading}</h1>
        <div className="mb-3">
           <textarea className="form-control" value={text} id="mytext" onChange={handleonchange} style = {{backgroundColor : props.mode === 'dark'?'navyblue':'white' , color : props.mode === 'dark'?'white':'black'}} rows="10"></textarea>
        </div>
        <button className='btn btn-primary mx-1 my-1' disabled={text.length===0} onClick={handleupclick}>Convert into Uppercase</button>
        <button className='btn btn-secondary mx-1 my-1' disabled={text.length===0} onClick={handlelowclick}>Convert into Lowercase</button>
        <button className='btn btn-warning mx-1 my-1' disabled={text.length===0} onClick={clearclick}>Clear text</button>
    </div>
    <div className="container my-4" style = {{color : props.mode === 'dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text : "Enter some text"}</p>
    </div>
    </>
  )
}