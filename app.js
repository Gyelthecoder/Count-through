let count = 0;
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-element')


function increment(){
    count++
    countEl.innerHTML = count;
  
    
}

function save(){
    let countStr = count + " - "
    saveEl.innerHTML += countStr
    countEl.innerHTML = 0;
    count = 0;
}