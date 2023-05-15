import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Button Clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        // console.log("Button Clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    const handleReverse = () => {
        // console.log("On Change");
        let newSentence = text.split('').reverse().join('');
        setText(newSentence);
    }
    
    const [text,setText]=useState("Enter your text here");

  return (
    <div>
        <div className="container" style={{color : props.mode === 'dark' ? 'white' : '#042743'}}>
        <h3 className='my-3' >Enter your Text below</h3>
        <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor : props.mode === 'dark' ? 'grey' : 'white',color : props.mode === 'dark'?'white':'#042743' }} rows="8"></textarea>
        <button className='btn btn-primary mt-3 mx-2' onClick={handleUpClick}>Convert to Uppercase!</button>
        <button className='btn btn-primary mt-3 mx-2' onClick={handleLoClick}>Convert to Lowercase!</button>
        <button className='btn btn-primary mt-3 mx-2' onClick={handleReverse}>Reverse the sentence!</button>
        </div>
        <div className="container mt-3 mx-3" style={{color : props.mode === 'dark' ? 'white' : '042743'}}>
        <h4> Your Text Summary</h4>
        <p> {text.split(" ").length}characters</p>
        <p>{0.008 * text.split(" ").length}</p>
        <h5>Preview</h5>
        <p>{text.lenght>0?text:"Enter something in the text box above to preview it here"}</p>
        </div>
    </div>
  )
}
