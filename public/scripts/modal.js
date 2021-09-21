export default class Modal {
  constructor() {
    this.modalWrapper = document.querySelector('.modal-wrapper')
  }

  open() {
    this.modalWrapper.classList.add('active')
  }
  close() {
    this.modalWrapper.classList.remove('active')
  }
}
