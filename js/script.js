//
// const number = ['1','2','3','4','5','6','7','8','9','0','.'];
// const symbols = ['+','-','*','/','='];
// const symbolsCE = ['CE','<'];
const numbsDiv = document.getElementById('numbers');
const symbolsDiv = document.getElementById('symbols');
const symbolsDelDiv = document.getElementById('symols-del');
let num1 = [];
let num2 = [];
let numznak = [];
const arrBlock = [];

function createButton(arr,key){
    for (let i = 0; i < arr[key].length; i++) {
        const keyElement = arr[key][i];
        // console.log(keyElement)
        const divBtt = document.createElement('div');
        divBtt.addEventListener('click', function (e){
            // console.log(arr[key]);
            // const asdas = arr.number.filter(value => value === divBtt.innerText )
            // console.log(divBtt.innerText);
            if(num1.length === 0){
                console.log(divBtt.innerText);
                num1.push(divBtt.innerText)
            }
            // else if(divBtt.innerText === asdas){
            //
            //     console.log('dsaddsadasdaas');
            // }
        })
        numbsDiv.append(divBtt);
        divBtt.classList.add(`${key}`, 'btt')
        divBtt.innerHTML = `${keyElement}`
        if(key === 'number' ){
            divBtt.id = `n${keyElement}`

        }
switch (key){
    case 'number':
        divBtt.id = `n${i}`
        break;
    case 'symbols':
        divBtt.id = `n${i+12}`
        symbolsDiv.append(divBtt);
        break;
    case 'symbolsCE':
        divBtt.id = `n${i+20}`
        symbolsDelDiv.append(divBtt)
        break;
    default:

}
    }
}


const buttonCreat = (arr, numbsDiv, symbolsDiv, symbolsDelDiv) => {
    for (const key in arr) {
        createButton(arr,key)
    }

}


const symbol = {
    number: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'],
    symbols: ['+', '-', '*', '/', '='],
    symbolsCE: ['CE', 'DEL']
};

buttonCreat(symbol, numbsDiv, symbolsDiv, symbolsDelDiv);


const displeyDiv = document.getElementById('displey')


let a = document.getElementsByClassName('btt');




let b = [];





