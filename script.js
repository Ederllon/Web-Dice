const respost = document.getElementById('respost');
const btn = document.getElementById('btn');

btn.addEventListener('click', Action)

function Action(){
    
    const max = parseInt(document.getElementById('max').value);
    const min = parseInt(document.getElementById('min').value);
    
    if(isNaN(max) || isNaN(min)){
        respost.innerHTML = "Algum valor acima não foi dado!";
    }
    else{
    respost.innerHTML = 'valor do dado: ' + Math.floor(Math.random() * (max - min + 1)+min);
    }
}
