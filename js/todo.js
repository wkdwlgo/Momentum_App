const toDoForm=document.querySelector('#todo-form');
const toDoInput=toDoForm.querySelector("input");
const toDoList=document.querySelector('#todo-list');

const TODO='todo';

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=toDoInput.value;
    toDoInput.value="";
    console.log(toDoInput.value);
}

toDoForm.addEventListener("submit",handleToDoSubmit);


