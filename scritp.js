// DOM

const input = document.querySelector("#input-list")
const form = document.querySelector("form")
const button = document.querySelector("#btn-add")
const inputList = document.querySelector("#markAsRead")
const listBox = document.querySelector("main")

// Build Structure

const list = document.createElement("div")
list.classList.add("card")

const checkBox = document.createElement("input")
checkBox.setAttribute("type", "checkbox")
checkBox.setAttribute("name", "markAsRead")

const paragraph = document.createElement("p")

const removeIcon = document.createElement("img")
removeIcon.setAttribute("src", "assets/icons/trash.svg")

// Build Structure End

  // list.appendChild(checkBox)
  // list.appendChild(paragraph)
  // list.appendChild(removeIcon)

form.onsubmit = (e) => {
  e.preventDefault();

  button.addEventListener("click", () => {

    listBox.append(buildList(list))
    paragraph.innerText = input.value
  })
}

// functions

/**
 * 
 * @param listBuilder Build a HTML code the structure comes like 
 * <div class="card">
 *  <input type="checkbox" name="markAsRead" />
 *  <p> Inner are rescue by what user typed </p>
 *  <img src= source from local file, icon to delete item from list></img>
 * </div> 
 * @returns the listBuilder
 */
function buildList(listBuilder){

  list.appendChild(checkBox)
  list.appendChild(paragraph)
  list.appendChild(removeIcon)


  return listBuilder
}