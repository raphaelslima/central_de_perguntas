import Modal from './modal.js'

const modal = new Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')
const modalPag = document.querySelector('.modal')

////////////////// MARCAR COMO LIDA /////////////////////
document.querySelectorAll('.check').forEach(e => {
  e.addEventListener('click', () => {
    modalTitle.innerText = 'Marcar como lida?'
    modalDescription.innerText = 'Tem certeza que deseja marcar como lida?'

    modalButton.innerText = 'Sim'
    modalButton.classList.remove('red')

    modal.open()
    let check = e

    let questionsWrapper = e.parentElement.parentElement

    modalPag.addEventListener('click', e => {
      const el = e.target
      if (el.classList.contains('confirm')) {
        questionsWrapper.classList.add('read')
        check.innerHTML = ''
        modal.close()
      }
      if (el.classList.contains('cancel')) {
        questionsWrapper = null
        modal.close()
      }
    })
  })
})

///////////////////// EXCLUIR ///////////////////////

document.querySelectorAll('.delete').forEach(e => {
  e.addEventListener('click', () => {
    modalTitle.innerText = 'Excluir a pergunta?'
    modalDescription.innerText = 'Tem certeza que deseja excluir a pergunta?'

    modalButton.innerText = 'Sim,excluir'
    modalButton.classList.add('red')

    modal.open()

    let questionsWrapper = e.parentElement.parentElement

    modalPag.addEventListener('click', e => {
      const el = e.target
      if (el.classList.contains('confirm')) {
        questionsWrapper.remove()
        modal.close()
      }
      if (el.classList.contains('cancel')) {
        questionsWrapper = null
        modal.close()
      }
    })
  })
})
