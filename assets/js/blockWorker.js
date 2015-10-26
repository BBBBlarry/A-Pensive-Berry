var period = 2000;

this.onmessage = function(event) {
    postMessage("Web worker connected");
}

setInterval(function() { postMessage(1) }, period);

/*
function sendPeriodicSignal() {
    period = Math.floor(Math.random() * 2000); //less than .2second
    postMessage(1);
    setTimeout("sendPeriodicSignal()", period);
}

sendPeriodicSignal();*/
