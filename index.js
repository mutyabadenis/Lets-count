let inc = document.getElementById('inc');
let res = document.getElementById('res');
let dec = document.getElementById('dec');
let para = document.getElementById('demo');


function increment(){
  let i = document.getElementById('demo').innerHTML;
  i++;
  document.getElementById('demo').innerHTML = i;
  document.getElementById('demo').style.color = 'green';
}

function decrement(){
  let i = document.getElementById('demo').innerHTML;
  i--;
  document.getElementById('demo').innerHTML = i;
  document.getElementById('demo').style.color = 'red';
}

function reset(){
  document.getElementById('demo').innerHTML = 0;
  document.getElementById('demo').style.color = 'black';
}



