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

let x = ""

const storeID = (num) => {
  x = parseInt (num)
  console.log (num)
}

let fontColor = ""

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( (response) => response.json())
  .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
  console.log(arrayOfTodos)
}

const populateAllTodos = () => {
  populateTodos(arrayOfTodos)
}

const populateTodos = (arr) => {
  let list = document.getElementById("todo-list")

  for (i=0; i < arr.length; i++){
    
  let newLi = document.createElement('LI')
  let newH1 = document.createElement('H1')
  let newH2 = document.createElement('H2')
  let newH3 = document.createElement('H3')
  let newH4 = document.createElement('H4')

  let userId = document.createTextNode(arr[i].userId)
  newH1.appendChild(userId)

  let id = document.createTextNode(arr[i].id)
  newH2.appendChild(id)

  let title = document.createTextNode(arr[i].title)
  newH3.appendChild(title)

  let completed = document.createTextNode(arr[i].completed)
  newH4.appendChild(completed)

  newLi.appendChild(newH1)
  newLi.appendChild(newH2)
  newLi.appendChild(newH3)
  newLi.appendChild(newH4)
  list.appendChild(newLi)

  if(arr[i].completed === true) {
    fontColor = "green"
    } else {
    fontColor = "red"
  }

  newH4.style.color = fontColor
  }
}

const showUserID = () => {
  let arrayOfUserTodos = arrayOfTodos.filter(function(numID) {
    return numID.userId === x
  })
  populateTodos(arrayOfUserTodos)
}

const showCompleted = () => {
  let arrayOfCompletedTodos = arrayOfTodos.filter(function(todo) {
    return todo.completed === true
  })
  populateTodos(arrayOfCompletedTodos)
}

const showUnCompleted = () => {
  let arrayOfUnCompletedTodos = arrayOfTodos.filter(function(todo) {
    return todo.completed === false
  })
  populateTodos(arrayOfUnCompletedTodos)
}

const clearList = () => {
  const arrayOfTodos = document.getElementsByTagName("OL")
  for (i=0; i < arrayOfTodos.length; i++)
    arrayOfTodos[i].innerHTML=null
}



