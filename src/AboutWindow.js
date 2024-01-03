import React from "react";

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
        <h1>About</h1>
        <p>PomoKitty is a <a href = "https://en.wikipedia.org/wiki/Pomodoro_Technique">Pomodoro Technique </a>
         website , inspired by <a href = "https://www.imissmylibrary.com/">imissmylibrary</a> , for all the people who want a cozy , relaxing and productive work/study/code environment.</p>
        <p>If you have any Suggestions / Feedback , Contact me on <a href = "https://twitter.com/yossevo">twitter</a></p>
        <p>I wanna Thank my fiancée for the incredible support 🤎</p>
        <p><a href = "https://www.buymeacoffee.com/yossevo">Buy me a ☕?</a></p>
    </div>
</div>
);
}


export default AboutWindow;