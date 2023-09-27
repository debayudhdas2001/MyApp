import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('');
  
  const handleUpClick=()=>{
    console.log("upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to upper case!","success");
  }

  const handleLoClick=()=>{
    console.log("lower case was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lower case!","success");
  }

  const handleClearClick=()=>{
    let newText = ('');
    setText(newText)
    props.showAlert("Text cleared!","success");
  }

  const handleOnChange=(event)=>{
    console.log("On change");
    setText(event.target.value)
    
  }

  const handleCopy=()=>{
    // console.log("Copy");
    // var text = document.getElementById("myBox");
    // text.select();
    // text.setSelectionRange(0, 9999); //to mark a range for selection
    // document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text);    //NAVIGATOR IS ALL WE NEED TO REPLACE THE ABOVE CODE
    props.showAlert("Copied to clipboard!","success");
  }


  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!","success");

  }



  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#323343'}}>
    
        <h1>{props.heading} </h1>

        <div className="mb-3">
          {/* one curly brace for javascript and inside another for object */}
            <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'rgb(184 185 201)':'white',color: props.mode==='dark'?'white':'#323343'}} id="myBox" rows="8"></textarea>
        </div>
        
        <button type="submit" disabled={text.length===0} className="btn btn-outline-primary mx-1 my-1" onClick={handleUpClick} >Convert Upper Case</button>

        <button type="submit" disabled={text.length===0} className="btn btn-outline-primary mx-1 my-1" onClick={handleLoClick} >Convert Lower Case</button>

        <button type="submit" disabled={text.length===0} className="btn btn-outline-primary mx-1 my-1" onClick={handleClearClick} >Clear</button>

        <button type="submit" disabled={text.length===0} className="btn btn-outline-primary mx-1 my-1" onClick={handleCopy} >Copy</button>

        <button type="submit" disabled={text.length===0} className="btn btn-outline-primary mx-1 my-1" onClick={handleExtraSpaces} >Remove Space</button>

    </div>

      <div className='container' style={{color: props.mode==='dark'?'white':'#323343'}}>
        <h2>Text Summary</h2>
        {/* /\s+/ is for regular expression it means "wide space and (+)means new line"   */}
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word(s) and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Miniutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Text To Preview"}</p>
      </div>

    </>
  )
}
