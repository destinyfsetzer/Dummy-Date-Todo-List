// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

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
  }]

//  console.log(arrayOfTodos[0].userId) // => 14
//  console.log(arrayOfTodos[1].userId) // => 20

  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

  const logTodos = () => {
    console.log(arrayOfTodos)
  }

  const populateTodos = () => {
    let helpme = document.getElementById("todo-list")

    let poop = document.createElement('li')

    let fork = document.createTextNode(arrayOfTodos[0].title)

    poop.appendChild(fork)

    helpme.appendChild(poop)
  }
