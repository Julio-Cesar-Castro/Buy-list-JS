// DOM

const form = document.querySelector("form")
const button = document.querySelector("#btn-add")
const listContainer = document.querySelector("main")


// Build Structure

form.onsubmit = (e) => {
  e.preventDefault();

  listContainer.appendChild(BuildHTML())
}


function BuildHTML(){
const input = document.querySelector("#input-list")

if (input.value === ""){
  alert('Digite um item para adicionar a lista de compras')
  return
}

const item = document.createElement("div")

const checkBox = document.createElement("input")

checkBox.addEventListener('click', (e) => {
  let isMarked = e.target.checked

  if (isMarked) {
    paragraph.style.textDecoration = 'line-through'
  } else {
    paragraph.style.textDecoration = 'initial';
  }
})

const paragraph = document.createElement("p")
paragraph.innerText = input.value

const removeIcon = document.createElement("img")

removeIcon.addEventListener('click', () => {
  const message = document.querySelector("#alert")

  message.addEventListener('click', () => {
    message.remove(message)
  })

  item.remove(item)

  message.classList.remove("hidden")
})

// Attributes
item.classList.add("card")
checkBox.setAttribute("type", "checkbox")
removeIcon.setAttribute("src", "assets/icons/trash.svg")

item.appendChild(checkBox)
item.appendChild(paragraph)
item.appendChild(removeIcon)


return item

}