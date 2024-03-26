const form = document.querySelector('#form')
const nameInput = document.querySelector('#name')
const list = document.querySelector('#list')
const emailInput = document.querySelector('#email')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const li = document.createElement('li')
    li.innerText = `Name: ${nameInput.value}\n  Email: ${emailInput.value}`

    list.append(li)

    nameInput.value = ''
    emailInput.value = ''
})