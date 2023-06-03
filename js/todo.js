const toDoForm=document.querySelector('#todo-form');
const toDoInput=toDoForm.querySelector("input");
const toDoList=document.querySelector('#todo-list');

const TODO='todo';

function paintToDo(newTodo){
    const li =document.createElement("li");
    const span=document.createElement("span");
    const button=document.createElement("button");
    li.appendChild(span);
    li.appendChild(button);
    span.innerText=newTodo;
    button.innerText='Delete'; 
    console.log(li);
    toDoList.appendChild(li);

}




function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=toDoInput.value;
    toDoInput.value="";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit",handleToDoSubmit);


