// DOM

const form = document.querySelector("form")
const button = document.querySelector("#btn-add")
const listContainer = document.querySelector("main")


// Build Structure

form.onsubmit = (e) => {
  e.preventDefault();

  button.addEventListener("click", () => {
    console.log(BuildHTML())
    listContainer.appendChild(BuildHTML())

  })
}


function BuildHTML(){
const input = document.querySelector("#input-list")

const item = document.createElement("div")

const checkBox = document.createElement("input")

const paragraph = document.createElement("p")
paragraph.innerText = input.value

const removeIcon = document.createElement("img")

// Attributes
item.classList.add("card")
checkBox.setAttribute("type", "checkbox")
removeIcon.setAttribute("src", "assets/icons/trash.svg")

item.appendChild(checkBox)
item.appendChild(paragraph)
item.appendChild(removeIcon)

return item

}