import Modal from './modal.js';

// MODAL
const modal = Modal()


// PEGAR TODOS OS BOTOÕES QUE EXISTE COM A CLASSE CHECK
const checkButtons = document.querySelectorAll(".actions a.check")
const deleteButtons = document.querySelectorAll(".actions a.delete")

// Alteração para modal
const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')


function handleClick(event, check = true) {
    event.preventDefault()

    const text = check ? "Marcar como lida" : "Excluir";
    const slug = check? "check" : "delete"

    const roomId = document.querySelector('#room-id').dataset.id

    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} esta pergunta?`
    modalDescription.innerHTML =  `Tem certeza que deseja ${text.toLowerCase()} esta pergunta`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    check? modalButton.classList.remove("red") : modalButton.classList.add("red")

    modal.open()
}

// PEGAR QUANDO O MARCAR COMO LIDO QUANdO CLICADO
checkButtons.forEach(button => {
    //add eventlistner
    button.addEventListener("click", handleClick)
})

deleteButtons.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})