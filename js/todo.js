const toDoForm=document.querySelector('#todo-form');
const toDoInput=toDoForm.querySelector("input");
const toDoList=document.querySelector('#todo-list');

const TODOS_KEY='todos';

let toDos=[];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function todoDel(event)
{
    const li=event.target.parentElement;
    li.remove();
    toDos=toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodoObj){
    const li =document.createElement("li");
    li.id=newTodoObj.id;//li id에 newTodoObj.id 주기
    const span=document.createElement("span");
    span.innerText=newTodoObj.text;//가독성 좋게 바로 아래로
    const button=document.createElement("button");
    button.innerText='X'; 
    button.addEventListener("click",todoDel);
    li.appendChild(span);
    li.appendChild(button);    
    toDoList.appendChild(li); 
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=toDoInput.value;
    toDoInput.value="";
    const newTodoObj={
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos=localStorage.getItem(TODOS_KEY);

if(savedToDos!==null)
{
    const parsedToDos=JSON.parse(savedToDos);
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo);// array의 각 item에 대해 function을 실행하게 해줘
}
