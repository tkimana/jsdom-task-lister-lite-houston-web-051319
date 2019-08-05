document.addEventListener("DOMContentLoaded", () => {
let form = document.querySelector('#create-task-form')
form.addEventListener('submit', function(e){
  e.preventDefault()
  console.log('Hello World!!')
let input = document.querySelector('#new-task-description')
let ul= document.querySelector('#tasks')
let li = document.createElement('li')
let button = document.createElement('button')
// Delete function needs to be passed  back here
// createEventListener(button)
ul.append(li)
li.innerText = input.value
li.append(button)
button.innerText="Delete"
button.style = "color: blue"
//Create an EventListener to the delete button
// function createEventListener(button){
  button.addEventListener('click', function(e){
     e.preventDefault()
     button.parentElement.remove()
    
  })

  // li.sort=(a,b)=> {
  //   a - b
  // }
  // }
input.value=""
})

})



