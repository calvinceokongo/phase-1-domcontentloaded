// Your code goes here

document.addEventListener('DOMContentLoaded',init)

function init() {
    const pText = document.querySelector('p')
    pText.textContent = 'This is really cool!'
    return pText

}
init(pText)