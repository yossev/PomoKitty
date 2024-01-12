import React, { useState, useEffect } from "react";

const TimeWidget = () => {
    const [currentTime, setCurrentTime] = useState(new Date()); // Current time

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const timeOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    };

    const time = currentTime.toLocaleTimeString([], timeOptions); // Current time without seconds

    return (
        <div className="time-widget">
            <h1>{time}</h1>
        </div>
    );
};

export default TimeWidget;
