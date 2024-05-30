const respost = document.getElementById('respost');
const maxbeta = document.getElementById('max');
const minbeta = document.getElementById('min');
var max = maxbeta.value;
var min = minbeta.value;
const btn = document.getElementById('btn');


btn.addEventListener('click', Action)

function Action(){
    let dice = (Math.random() * max) + min;
    respost.innerHTML = 'valor do dado: ' + dice;


}


