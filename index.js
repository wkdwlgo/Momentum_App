//to do: finish this
/*
난 짱이다
*/
const title=document.querySelector('#title');
`const title=document.getElementById("title"); 위와 같음`

const BASE_COLOR='#015487';

const CLICKED_CLASS="clicked";

const hellos=document.getElementsByClassName("hello");


console.log(hellos);



function handleClick(){
    /**
    이거 왜쓰는 거임? 
    * 
     */
    const currentClass=title.className;
    console.log(currentClass);
    if(currentClass !== CLICKED_CLASS){
        title.classList.add(CLICKED_CLASS);
    }else{
        title.className=""
    }
}

function init2(){
    title.addEventListener("click",handleClick);
}




function init(){
    title.style.color=BASE_COLOR;
    title.addEventListener("click",carat);
}


function carat(){
    const favorite=prompt("Do you love svt?");
    console.log(favorite)
    if(favorite==='yes'){
        title.innerHTML='We Are Carat!'
        title.style.color='#f7cac9'
    }
    else{
        title.innerHTML='ㅋ'
        title.style.color='#92a8d1'
    }

}




