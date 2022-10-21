
// değişken tanımlama

let listDOM = document.querySelector('#list')
let input = document.querySelector('#task')
let liNode = document.querySelectorAll('li button')
// console.log(liNode)
liNode[0].addEventListener('click', removeElement)
// addEventListenerList(liNode, 'click', removeElement)


// Yeni element ekleme fonksiyonu


function newElement() {
  let newItem = document.createElement('li')
  newItem.innerHTML = input.value + `<button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>`
  listDOM.append(newItem)
}

function removeElement() {
  let nodeId = docuemnt.querySelector(liNode[this.id])
  console.log(nodeId)
  // listDOM.remove(nodeId)
}

/* function addEventListenerList(list, event, fn) {
  for (var i = 0; i < list.length; i++) {
    list[i].addEventListener(event, fn, false);
  }
} */
