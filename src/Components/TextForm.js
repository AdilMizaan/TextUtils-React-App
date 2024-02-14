import React, {useState} from 'react' // rfc - React Function Component

export default function TextForm(props) {

    //toUpperCase
    const handleUpClick = () => {
        console.log("UpperCase was clicked");
        setText(text.toLocaleUpperCase());
        props.showAlert("Converted to upperCase", "success")
    };

    //toLowerCase
    const handleLowClick = () => {
        setText(text.toLocaleLowerCase())
        props.showAlert("Converted to lowerCase", "success")
    };

    const handleFirstUpClick = () => {
        setText(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
        props.showAlert("First character converted to upperCase", "success")
    }; 

    const handleFirstAllUpClick = () => {
        setText(text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase()).join(' '));
        props.showAlert("First character of all words converted to upperCase", "success")
    };

    const handleClearClick = () => {
        setText('');
    };

    //remove extra spaces
    const handleExtraSpaces = () => {
        setText(text.split(/[ ]+/).join(' '));
        props.showAlert("Removed extra spaces", "success")
    }

    const [text, setText] = useState(''); // text is the current value

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    };

  return (
    < >
    <div className="container my-4">
        <div className="container d-flex justify-content-between " style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <button type="button" className="btn-close align-self-end my-1 btn-light bg-light" onClick={handleClearClick} aria-label="Close"></button>
        </div>
        <div className="container" >       
                <div className="mb-3" >
                    <textarea className={`form-control border border-${props.mode === 'light' ? 'dark' : 'light'}`} style={{backgroundColor: props.mode === 'dark' ? '#04334a' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} placeholder='Enter text here...' value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button type="button" className="btn btn-primary btn-sm my-1" onClick={handleUpClick}>CONVER TO UPPER CASE</button>
                <button type="button" className="btn btn-primary btn-sm my-1 mx-4" onClick={handleLowClick}>convert to lowercase</button>
                <button type="button" className="btn btn-primary btn-sm my-1" onClick={handleFirstUpClick}>First char convert to uppercase</button>
                <button type="button" className="btn btn-primary btn-sm my-1 mx-4" onClick={handleFirstAllUpClick}>First Char Of Each Word Convert To UpperCase</button>
                <button type="button" className="btn btn-primary btn-sm my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
        </div>
    </div>
       
        <hr/>
    <div className="container">
        <div className="container my-2" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>TEXT SUMMARY</h1>
                <p>{text.length === 0 ? 0 : text.split(" ").length }  words </p>
                <p>{text.length} characters</p>
                <p>{1/125*text.length} minutes are spend to read it.</p>
        </div>

        <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h2>Preview</h2>
            <p className= {`border border-${props.mode === 'light' ? 'dark' : 'light'} p-2`}>
                {text.length=== 0 ? 'Enter something in the above text box to preview it here...' : text}
            </p>
        </div>
    </div>
   </>
  );
} 
