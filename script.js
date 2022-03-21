const nums = document.querySelectorAll('.num')
let screenThings = document.querySelector('.screen .things')
let things = document.querySelector('.things')

const clear = document.querySelector('.clear')

let division = document.querySelector('.division')
let multiplication = document.querySelector('.multiplication')
let addition = document.querySelector('.addition')
let subtraction = document.querySelector('.subtraction')

let equalTo = document.querySelector('.equals');
// let delete = document.querySelector('.delete');
let action = document.querySelectorAll('.act')

const buttons = document.querySelectorAll('.button')
let remove = document.querySelector('.delete')

nums.forEach(num => {
    num.addEventListener('click', () => {
        things.innerText += num.innerText
        // if (things.innerText = '0') {
        //     things.innerText = ''
        //     things.innerText += num.innerText
        // } else {
        //     things.innerText += num.innerText
        // }
        // things.innerText = ''
        // things.innerText += num.innerText
    })

})


equalTo.addEventListener('click', () => {
    things.innerText = eval(things.innerText)
})

clear.addEventListener('click', () => {
    if (things.innerText) {
        things.innerText = things.innerText.slice(0, -1)
    }
})

division.addEventListener('click', () => {
    things.innerText += '/' 
    // things.innerText = eval(things.innerText)
})

multiplication.addEventListener('click', () => {
    things.innerText += '*'
})

subtraction.addEventListener('click', () => {
    things.innerText += '-'
})

addition.addEventListener('click', () => {
    things.innerText += '+'
})

remove.addEventListener('click', () => {
    things.innerText = ''
})

