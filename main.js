const message = document.querySelector(".error-message")
const icon = document.querySelector(".error-icon")
const input = document.querySelector("input")
const btn = document.querySelector(".submit-btn")
const inputText = document.querySelector("input").value

btn.addEventListener("click", () => {
    const mailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/
    if (inputText.match(mailFormat)) {
        console.log("successful")
    }
    else {
        message.classList.add("active")
        icon.classList.add("active")
        input.classList.add("active")
    }
})

console.log(inputText)