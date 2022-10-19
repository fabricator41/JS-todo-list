
// değişken tanımlama

let listDOM = document.querySelector('#list')
let input = document.querySelector('#task')


// Yeni element ekleme fonksiyonu


function newElement() {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = input.value + `<button type="button" class="close" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>`
    listDOM.append(liDOM)
}

function removeElement() {
    document.removeElement('li:last-child')
}