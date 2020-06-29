let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false          
  },
  {
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
  }
]

let arrayOfUserTodos = []
let arrayOfCompletedTodos = []
let arrayOfInCompletedTodos = []
let x = ""
let fontColor = ""
let list = document.getElementById("todo-list")

const storeID = (ballerina) => {
  x = parseInt(ballerina)
  console.log (ballerina)
}
 
const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( (response) => response.json())
  .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
  console.log(arrayOfTodos)
}

// is called when "Populate Todos" is clicked
const populateAllTodos = () => {
  populateTodos(arrayOfTodos)
}

// takes an array and loops over it to insert its data in the document
const populateTodos = (arr) => {
  // let list = document.getElementById("todo-list")

  for (let i = 0; i < arr.length; i++){
  
    // creates a new list item
    let newLi = document.createElement('LI')

    // creates new elements to display the data
    let newH1 = document.createElement('H1')
    let newH2 = document.createElement('H2')
    let newH3 = document.createElement('H3')
    let newH4 = document.createElement('H4')

    // creates and attaches a textNode using the data from the todo
    let userId = document.createTextNode(arr[i].userId)
    newH1.appendChild(userId)

    // creates and attaches a textNode using the data from the todo
    let id = document.createTextNode(arr[i].id)
    newH2.appendChild(id)

    // creates and attaches a textNode using the data from the todo
    let title = document.createTextNode(arr[i].title)
    newH3.appendChild(title)

    // creates and attaches a textNode using the data from the todo
    let completed = document.createTextNode(arr[i].completed)
    newH4.appendChild(completed)

    // appends the newly created elements to the list item
    newLi.appendChild(newH1)
    newLi.appendChild(newH2)
    newLi.appendChild(newH3)
    newLi.appendChild(newH4)

    // appends the new list item to the entire list
    list.appendChild(newLi)

    // changes the color of the text by comparing the completed property to true or false
    if(arr[i].completed === true) {
      fontColor = "green"
      } else {
      fontColor = "red"
    }

    // changes the color property of the h4 displaying completed or not
    newH4.style.color = fontColor
  }
}

const showUserID = () => {
  arrayOfUserTodos = arrayOfTodos.filter(function(todo) {
    return todo.userId === x
  })
  // TODO
  clearList()
  populateTodos(arrayOfUserTodos)
}

const showCompleted = (arr) => {
  arrayOfCompletedTodos = arrayOfUserTodos.filter(function(todo) {
    return todo.completed === true
  })
  // TODO
  // Has a parameter so that it can show you only one user's completed or all users' completed
  clearList()
  populateTodos(arrayOfCompletedTodos)
}

const showInCompleted = () => {
  arrayOfInCompletedTodos = arrayOfUserTodos.filter(function(todo) {
    return todo.completed === false
  })
  // TODO
  // Has a parameter so that it can show you only one user's incompleted or all users' incompleted
  clearList()
  populateTodos(arrayOfInCompletedTodos)
}

const clearList = () => {
  // const arrayOfTodos = document.getElementsByTagName("OL")
  
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  // for (let i = 0; i < arrayOfTodos.length; i++)
  //   arrayOfTodos[i].innerHTML = null
}

// https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild





