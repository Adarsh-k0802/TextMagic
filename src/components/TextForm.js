import React, {useState} from 'react'

 

export default function TextForm(props) {

    document.title=('TextMagic - Home');

    const handleUpClick= ()=> {

        // console.log('Uppercase clicked'+ text);
        let newText = text.toUpperCase();
        setText(newText);

        props.showAlert("Changed to Uppercase","success");
    }
    const handleLowClick= ()=> {

        // console.log('Uppercase clicked'+ text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Changed to Lowercase","success");
    }
    const handleClearClick= ()=> {

        // console.log('Uppercase clicked'+ text);
        let newText ="";
        setText(newText);
        props.showAlert("Text Cleared","success");
    }
    const handleCopy=()=>{
        let text= document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success");
    }
    const handleExtraSpace=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed","success");
    }

    const handleOnChange= (event)=> {

        setText(event.target.value);
    }

    // Declare a new state variable, which we'll call "text"
 const [text, setText] = useState("");

//  text ='new text';   wrong way to change the state

//  setText('new text');   //right way to change the state



    return (
        <>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        {/* <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div> */}

<div className="mb-3">
    <h1>{props.heading}</h1>
  {/* <label for="exampleFormControlTextarea1" className="form-label">Enter the text here</label> */}
  <textarea className="form-control" id="myBox" value ={text} style={{backgroundColor:props.mode==='dark'?'#2B1B17':'white', color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} rows="10"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}  >Convert to UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>


</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
<h2>Your Text Summary</h2>
<p>{text.split(" ").length} words and {text.length} Characters</p>
<p>{0.08 *text.split(" ").length} Minutes Read</p>

<h2>Preview</h2>
<p>{text.length>0?text:'Write something in above text box to preview'}</p>
</div>

</>
    )
}
