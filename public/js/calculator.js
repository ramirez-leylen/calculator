const result = document.getElementById('result')
const operations = ['-', '+', '/', '*']

function display(value) {
    if (result.innerText == '0' && value != '.') {
        result.innerText = ''
    }
    else if (operations.includes(value) && operations.includes(result.innerText[result.innerText.length-1])) {
        result.innerText = result.innerText.slice(0, -1)
    }
    if (!(value == '.' && result.innerText.indexOf('.') > -1)) {
        result.innerText += value
    }
    
}

function clr(){
    result.innerText = "0"
}

function back(){
    if (result.innerText.length == 1){
        result.innerText = '0'
    } else {
        result.innerText = result.innerText.slice(0, -1)
    }
    
}

function solve(){
    let x = result.innerText
    let y = eval(x)
    result.innerText = y
}