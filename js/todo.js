
// değişken tanımlama

let listDOM = document.querySelector('#list')
let input = document.querySelector('#task')
let liNode = document.querySelectorAll('li')
let closeButton = document.querySelectorAll('li button')
let done = document.querySelectorAll('li')





// event atama

addEventListenerList(closeButton, 'click', removeNode)
addEventListenerList(done, 'click', doneFunc)

// her bir node'a event ekleyen fonksiyon

function addEventListenerList(list, event, fn) {
  for (var i = 0; i < list.length; i++) {
    list[i].addEventListener(event, fn, false);
  }
}

// Yeni element ekleme fonksiyonu

function newElement() {
  if (input.value !== "") {
    let newItem = document.createElement('li')
    newItem.innerHTML = input.value + `<button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>`
    listDOM.append(newItem)
    addEventListenerList(newItem.childNodes, 'click', removeNode)
    newItem.addEventListener('click', doneFunc)
    document.querySelector('#liveToastSuccess').classList.replace('hide', 'show')
    setTimeout(closeToast, 3000)
  }
  else {
    document.querySelector('#liveToastError').classList.replace('hide', 'show')
    setTimeout(closeToast, 3000)
  }
}

// element silme fonksiyonu

function removeNode() {
  this.parentElement.remove()
}

// yapıldı fonksiyonu

function doneFunc() {
  this.classList.toggle('checked')
}


// toast otomatik kapanma fonksiyonu
function closeToast() {
  document.querySelector('#liveToastSuccess').classList.replace('show', 'hide'),
    document.querySelector('#liveToastError').classList.replace('show', 'hide')
}
