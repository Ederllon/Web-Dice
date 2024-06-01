const respost = document.getElementById('respost');
const btn = document.getElementById('btn');

btn.addEventListener('click', Action)

function Action(){
    var max = parseInt(document.getElementById('max').value);
    var min = parseInt(document.getElementById('min').value);
    
    respost.innerHTML = 'valor do dado: ' + Math.floor(Math.random() * (max - min + 1)+min);
}
