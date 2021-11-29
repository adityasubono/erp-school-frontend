import {useState} from "react";

export function Clock () {
    // For digital clock
    let time = new Date().toLocaleTimeString();
    let [ctime, setCTime] = useState();
    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCTime(time);
    }
    setInterval(updateTime, 1000);

    return ctime;
}
