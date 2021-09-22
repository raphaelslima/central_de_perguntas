import Modal from './modal.js'

const modal = new Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

const checkButtons = document.querySelectorAll('.actions a.check')
const cancelButtons = document.querySelector('.modal .cancel')

checkButtons.forEach(button => {
  button.addEventListener('click', handleclick)
})

const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
  button.addEventListener('click', e => handleclick(e, false))
})

function handleclick(e, check = true) {
  let text = check ? 'Marcar como lida ' : 'Excluir'
  modalTitle.innerHTML = `${text} essa pergunta?`
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} essa pergunta?`
  modalButton.innerHTML = `Sim, ${text}`
  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')
  modal.open()
}

cancelButtons.addEventListener('click', () => {
  modal.close()
})
