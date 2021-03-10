const selected = document.querySelector(".input")
const input = document.querySelector(".inputBox")
const optionsContainer = document.querySelector(".optionsContainer")
const options = document.querySelectorAll(".option")
const searchBox = document.querySelector(".searchBox input")
const employee = selected.innerHTML
let chosenPerson

selected.addEventListener("click", e => {
  optionsContainer.classList.toggle("active")

  searchBox.value = ""
  searchBox.focus()
})

const filterList = (searchTerm) => {
  searchTerm = searchTerm.toLowerCase()

  options.forEach(option => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase()

    label.indexOf(searchTerm) != -1 ?
      option.classList.remove("hidden") : 
      option.classList.add("hidden")
  })
}

searchBox.addEventListener("keyup", e => {
  filterList(e.target.value)
})

const didChosenPerson = () => {
  options.forEach(option => {
    option.querySelector(".name").innerHTML == chosenPerson ?
      option.classList.add("chosen") :
      option.classList.remove("chosen")
  })
}

options.forEach(option => {
  option.addEventListener("click", () => {
    chosenPerson = option.querySelector(".name").innerHTML
    selected.innerHTML = `<span id="employeeInput" class="name">${chosenPerson}</span>`
    input.classList.add("showLabel")
    didChosenPeron()
  })

  window.addEventListener('mouseup', e => {
    if(
      !e.target.classList.contains("input_wrapper") ||
      e.target !== selected
    ){
      optionsContainer.classList.remove("active")
    }
  })
})