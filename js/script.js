const symbol = {
    number: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'],
    symbols: ['+', '-', '*', '/', '='],
    symbolsCE: ['CE', 'DEL']
};
const numbsDiv = document.getElementById('numbers');
const symbolsDiv = document.getElementById('symbols');
const symbolsDelDiv = document.getElementById('symols-del');
const displeyDiv = document.getElementById('displey');
displeyDiv.setAttribute('dir', 'rtl')
let num1 = [];
let num2 = [];
let sign = [];
const arrBlock = [num1, sign, num2];

function res(arr) {
    const a = arr[0].join('').split();
    const b = arr[2].join('').split();
    const znak = arr[1].join('');
    let res = 0;
    switch (znak) {
        case ('+'):
            res = (+a) + (+b);
            break
        case ('-'):
            res = (+a) - (+b);
            break
        case ('*'):
            res = (+a) * (+b);
            break
        case ('/'):
            res = (+a) / (+b);
            break
        default:
    }
    if (res <= 999999999) {
        displeyDiv.innerText = Math.trunc(res * 100) / 100;
    } else {
        displeyDiv.innerText = 'NaN'
    }
    sign.length = 0;
    num2.length = 0;
    num1.length = 0;
    num1.push(res);
}

function createButton(arr, key) {
    for (let i = 0; i < arr[key].length; i++) {
        displeyDiv.innerText = `0`
        const keyElement = arr[key][i];
        const divBtt = document.createElement('div');
        const even = (element) => (element === divBtt.innerText)
        divBtt.addEventListener('click', function (e) {
            if (num1.length <= 9 && !arr.symbols.some(even) && sign.length === 0 && !arr.symbolsCE.some(even)) {
                num1.push(divBtt.innerText)
                displeyDiv.innerText = `${num1.join('')}`
            } else if (arr.symbols.some(even) && divBtt.innerText !== '=' && num1.length >= 1) {
                if (sign.length === 0) {
                    displeyDiv.innerText = `${divBtt.innerText}`;
                    sign.push(divBtt.innerText)
                } else {
                    sign.length = 0;
                    displeyDiv.innerText = `${divBtt.innerText}`;
                    sign.push(divBtt.innerText)
                }
            } else if (num2.length <= 9 && divBtt.innerText !== '=' && !arr.symbolsCE.some(even) && !arr.symbols.some(even)) {
                num2.push(divBtt.innerText)
                displeyDiv.innerText = `${num2.join('')}`
            } else if (divBtt.innerText === 'CE') {
                num1.length = 0;
                num2.length = 0;
                sign.length = 0;
                displeyDiv.innerText = '0';
            } else if (divBtt.innerText === '=') {
                res(arrBlock)
            } else if (divBtt.innerText === 'DEL') {
                if (sign.length === 0) {
                    num1.pop();
                    displeyDiv.innerText = `${num1.join('')}`
                    return
                }
                num2.pop();
                displeyDiv.innerText = `${num2.join('')}`
            }
        })
        numbsDiv.append(divBtt);
        divBtt.classList.add(`${key}`, 'btt')
        divBtt.innerHTML = `${keyElement}`
        if (key === 'number') {
            divBtt.id = `n${keyElement}`
        }
        switch (key) {
            case 'number':
                divBtt.id = `n${i}`
                break;
            case 'symbols':
                divBtt.id = `n${i + 12}`
                symbolsDiv.append(divBtt);
                break;
            case 'symbolsCE':
                divBtt.id = `n${i + 20}`
                symbolsDelDiv.append(divBtt)
                break;
            default:

        }
    }
}

const buttonCreat = (arr) => {
    for (const key in arr) {
        createButton(arr, key)
    }
}
buttonCreat(symbol, numbsDiv, symbolsDiv, symbolsDelDiv);
