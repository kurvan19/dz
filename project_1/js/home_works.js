//проверка на email
let inputGmail = document.querySelector("#gmail_input")
let buttonGmail = document.querySelector("#gmail_button")
let resultGmail = document.querySelector("#gmail_result")
const regExpGmail = /@gmail.com/
buttonGmail.onclick = () => {
    if (regExpGmail.test(inputGmail.value)) {
        resultGmail.innerHTML = "you are registration successful!"
        resultGmail.style.color = "green"
    } else {
        resultGmail.innerHTML = "you not registration"
        resultGmail.style.color = "red"
    }
}