const message = document.querySelector(".error-message")
const icon = document.querySelector(".error-icon")
const input = document.querySelector("input")
const btn = document.querySelector(".submit-btn")
const inputText = document.querySelector("input")

btn.addEventListener("click", () => {
    console.log(inputText.value)
    const mailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/
    if (inputText.value.match(mailFormat)) {
        console.log("successful")
    }
    else {
        message.classList.add("active")
        icon.classList.add("active")
        input.classList.add("active")
    }
})
