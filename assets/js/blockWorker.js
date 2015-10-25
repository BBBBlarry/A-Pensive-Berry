var randomTime;

while(true){
  randomTime = Math.floor(Math.random() * 2000); //less than 2s
  setTimeout(flip, randomTime);
  postMessage(1); //send signal to flip
}

