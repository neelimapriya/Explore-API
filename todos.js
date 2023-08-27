function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodos(data))
}

function displayTodos(todos){
    const todoContainer=document.getElementById('todo-container')
    for(const todo of todos){
        // create the child element
        const todoDiv =document.createElement('div')
        // set innerText or innerHtml
        todoDiv.innerHTML=`
            <h3>title: ${todo.title}</h3>
            <p>User: ${todo.userId}</p>
            <p> Is Completed: ${todo.completed ===true? 'complete':'not complete'}
        `;
        // appendChild
        todoContainer.appendChild(todoDiv)
    }
}

loadTodos();


const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name); 