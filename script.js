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
    let list = document.getElementById("todo-list")

    for (i=0; 1 < arrayOfTodos.length; i++){
    let newLi = document.createElement('LI')
    let newH1 = document.createElement('H1')
    let newH2 = document.createElement('H2')
    let newH3 = document.createElement('H3')
    let newH4 = document.createElement('H4')

    let userId = document.createTextNode(arrayOfTodos[i].userId)
    newH1.appendChild(userId)

    let id = document.createTextNode(arrayOfTodos[i].id)
    newH2.appendChild(id)

    let title = document.createTextNode(arrayOfTodos[i].title)
    newH3.appendChild(title)

    let completed = document.createTextNode(arrayOfTodos[i].completed)
    newH4.appendChild(completed)
    newLi.appendChild(newH1)
    newLi.appendChild(newH2)
    newLi.appendChild(newH3)
    newLi.appendChild(newH4)
    list.appendChild(newLi)

    }
  }

  //make it red like bloodshed because i'm dying 
//   let elementColor = "red"
//   completed.style.color = elementColor