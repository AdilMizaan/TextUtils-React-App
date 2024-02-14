// import React, {useState} from 'react'

export default function About(props) {
//    // state for dark or light mode enable
//    const [myStyle, setMyStyle] =useState({
//     color: 'black',
//     backgroundColor: 'white',
//    });

//    //state for change button name
//    const [buttonName, setButtonName]= useState('Enable Dark Mode');

//    const toggleStyle = () => {
//     if (myStyle.color === "white") {
//         setMyStyle ({ color: 'black', backgroundColor: 'white'})
//         setButtonName("Enable Dark Mode");
//     } else {
//         setMyStyle ({ color: 'white', backgroundColor: 'black' })
//         setButtonName("Disable Dark Mode");
//     }
//    }



    // //css style variable
    // let myStyle = {
    //     color: 'white',
    //     backgroundColor: 'black',
    // }
  return (
    < >
    <div className='pt-4' >
    <div className='container my-4' style={{backgroundColor: props.mode === 'dark' ? '#04334a' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>About TextUtils</h2>
        <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button text-dark bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Welcome to TextUtils
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse show">
                    <div className="accordion-body" style={{backgroundColor: props.mode === 'dark' ? '#04334a' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}>
                        At TextUtils, we believe in the power of words and the impact they can have on communication. Our mission is to provide a set of versatile and user-friendly text utilities that empower individuals, writers, and businesses to enhance and optimize their textual content effortlessly.
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className='container my-4' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>What We Offer:</h2>
        <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button text-dark bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    <strong>1. Text Transformation Tools:</strong>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                    <div className="accordion-body" style={{backgroundColor: props.mode === 'dark' ? '#04334a' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}>
                    Explore a range of text transformation options, from basic case conversions (uppercase and lowercase) to more advanced operations like text reversal and character counting. Easily adapt your text to suit your specific needs.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed text-dark bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        <strong>2. Word Processing Solutions:</strong>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                    <div className="accordion-body" style={{backgroundColor: props.mode === 'dark' ? '#04334a' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}>
                    Need to clean up or format your document? Our word processing tools offer functionalities such as removing duplicates, sorting lines, and converting text to various formats, ensuring your content is polished and professional.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed text-dark bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        <strong>Our Commitment:</strong>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                    <div className="accordion-body" style={{backgroundColor: props.mode === 'dark' ? '#04334a' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}>
                    At TextUtils, we are committed to delivering a seamless and reliable user experience. We understand the importance of efficient text handling, and our tools are designed with simplicity and functionality in mind. Your feedback is invaluable to us, and we continuously strive to enhance our offerings based on your needs.
                    </div>
                </div>
            </div>
        </div>
        {/* <button onClick={toggleStyle} type="button" className="btn btn-primary btn-sm my-3">{buttonName}</button> */}
    </div>
    </div>
    </>
  )
}
