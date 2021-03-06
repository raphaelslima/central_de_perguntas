import Modal from './modal.js'

const modal = new Modal()

// DATA INITIAL
const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

const checkButtons = document.querySelectorAll('.actions a.check')
const cancelButtons = document.querySelector('.modal .cancel')

const copyButton = document.querySelector('.buttons div.button')

const deleteButton = document.querySelectorAll('.actions a.delete')

//EVNTS
copyButton.addEventListener('click', copy)

cancelButtons.addEventListener('click', () => {
  modal.close()
})

checkButtons.forEach(button => {
  button.addEventListener('click', handleclick)
})

deleteButton.forEach(button => {
  button.addEventListener('click', e => handleclick(e, false))
})

//FUNCTIONS

function handleclick(e, check = true) {
  e.preventDefault()
  const text = check ? 'Marcar como lida ' : 'Excluir'

  const slug = check ? 'check' : 'delete'
  const roomId = document.querySelector('#id-room').dataset.id
  const questionId = e.target.dataset.id

  const form = document.querySelector('.modal form')
  form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

  modalTitle.innerHTML = `${text} essa pergunta?`
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} essa pergunta?`
  modalButton.innerHTML = `Sim, ${text}`
  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')
  modal.open()
}

async function copy() {
  const idAcess = document.querySelector('.buttons div.button ').innerText
  console.log(idAcess)
  await navigator.clipboard.writeText(idAcess)
}
