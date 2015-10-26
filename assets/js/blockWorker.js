var randomTime;



function periodicSignal() {
    randomTime = Math.floor(Math.random() * 200); //less than .2second
    postMessage(1);
    setTimeout("timedCount()",randomTime);
}

periodicSignal();
