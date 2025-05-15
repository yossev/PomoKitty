import React from "react";
import awakeCat from "./awake.png" ;   

const AboutWindow = ({onClose}) => {

return(

<div className="about-window">
    <div className  = "about-header">
        <button className="close-button" onClick={onClose} style={{textAlign: 'right'}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </button>
    </div>
    <div className="about-content">
        <img src={awakeCat} alt="awake cat" style={{width: '40px', height: 'auto', margin: 'auto', display: 'block'}}/> 
        <h1>About</h1>
        <p>PomoKitty is a <a href = "https://en.wikipedia.org/wiki/Pomodoro_Technique">Pomodoro Technique </a>
         website , inspired by <a href = "https://www.imissmylibrary.com/">imissmylibrary</a> , for all the people who want a cozy , relaxing and productive work/study/code environment.</p>
        <p>This is an Open Source Project , You can Contribute on <a href ="https://github.com/yossev/PomoKitty">Github</a></p>
        <p><a href = "https://www.buymeacoffee.com/yossevo">Buy me a ☕?</a></p>
    </div>
</div>
);
}


export default AboutWindow;
