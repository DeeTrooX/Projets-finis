let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let operateur = document.querySelector('select');
let result = document.querySelector('h2');

document.querySelector('#egale').addEventListener('click', function(){
    
    if (operateur.value == '+'){
        addition(input1,input2)
    }
    if (operateur.value == '-'){
        substraction (input1,input2)
    }
    if (operateur.value == '/'){
        division(input1,input2)
    }
    if (operateur.value == 'x'){
        multiplication(input1,input2)
    }
    
})


function addition (input1,input2) {
    result.textContent = Number(input1.value) + Number(input2.value)
}

function substraction (input1,input2) {
    result.textContent = Number(input1.value) - Number(input2.value)
}

function multiplication (input1,input2) {
    result.textContent = Number(input1.value) * Number(input2.value)
}

function division (input1,input2) {
    result.textContent = Number(input1.value) / Number(input2.value)
}