let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let operateur = document.querySelector('select');
let result = document.querySelector('h2');

document.querySelector('#egale').addEventListener('click', function(){
    
    if (operateur.value == '+'){
        result.textContent = Number(input1.value) + Number(input2.value)
    }
    if (operateur.value == '-'){
        result.textContent = Number(input1.value) - Number(input2.value)
    }
    if (operateur.value == '/'){
        result.textContent = Number(input1.value) / Number(input2.value)
    }
    if (operateur.value == 'x'){
        result.textContent = Number(input1.value) * Number(input2.value)
    }
    
})