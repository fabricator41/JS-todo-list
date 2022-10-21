
// değişken tanımlama

let listDOM = document.querySelector('#list')
let input = document.querySelector('#task')
let liNode = document.querySelectorAll('li')
let closeButton = document.querySelectorAll('li button')
let done = document.querySelectorAll('li')

addEventListenerList(closeButton, 'click', removeNode)
addEventListenerList(done, 'click', doneFunc)

function addEventListenerList(list, event, fn) {
  for (var i = 0; i < list.length; i++) {
    list[i].addEventListener(event, fn, false);
  }
}

// Yeni element ekleme fonksiyonu



function newElement() {
  let newItem = document.createElement('li')
  newItem.innerHTML = input.value + `<button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>`
  listDOM.append(newItem)
  addEventListenerList(newItem.childNodes, 'click', removeNode)
  newItem.addEventListener('click', doneFunc)
}

function removeNode() {
  this.parentElement.remove()
}

function doneFunc() {
  this.classList.add('checked')
}

