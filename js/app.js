//Obtener elementos de fecha

const dateNumber = document.getElementById("dateNumber")
const dateMonth = document.getElementById("dateMonth")
const dateYear = document.getElementById("dateYear")
const dateText = document.getElementById("dateText")

//elementos para el contenedor de tareas
const taskContainer = document.getElementById('taskContainer')

const setDate = () =>{
    const date = new Date()
    dateNumber.textContent= date.toLocaleDateString('es', {day: 'numeric'})
    dateMonth.textContent= date.toLocaleDateString('es', {month: 'short'})
    dateYear.textContent= date.toLocaleDateString('es', {year: 'numeric'})
    dateText.textContent= date.toLocaleDateString('es', {weekday: 'long'})
}

const addNewTask = (event) =>{
    event.preventDefault()
    const {value} = event.target.taskText
    if(value === '') return
    const task = document.createElement('div')
    task.classList.add('task', 'roundBorder')
    task.textContent = value
    task.addEventListener('click', changeTaskState)
    taskContainer.prepend(task)
    event.target.reset()
}

const changeTaskState = (event) =>{
    event.target.classList.toggle('done')
}

const order = () =>{
    const done = []
    const todo = []

    taskContainer.childNodes.forEach((task) =>{
        task.classList.contains('done') ? done.push
        (task) : todo.push(task)
    })

    return [...todo, ...done]
}

const reorderTasks = () =>{
    order().forEach((task) => {
        taskContainer.appendChild(task)
    })
}
setDate()