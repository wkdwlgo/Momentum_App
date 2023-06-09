const loginForm =document.querySelector('#login-form');
const loginInput=document.querySelector('#login-form input');
const greeting=document.querySelector('#greeting')



const HIDDEN_CLASSNAME='hidden';//중요한 정보를 담지 않은 선언은 대문자로
const USERNAME='username';

function loginSub(event){
    event.preventDefault();//새로고침 하는 것을 막아준다. 기본동작 방지를 위해 
    localStorage.setItem(USERNAME,loginInput.value);
    loginForm.classList.add(HIDDEN_CLASSNAME);//클래스 추가요!
    showGreeting(loginInput.value);
}

function showGreeting(username){
    greeting.innerText=`Hello ${username}`;//string 합치기는 + 태그 안에 텍스트 넣고 싶으면 innerText 사용
    greeting.classList.remove(HIDDEN_CLASSNAME);//클래스 삭제요!
}



const savedUsername=localStorage.getItem(USERNAME);
if (savedUsername===null){
    //show login form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit',loginSub);

}
else{
    //show the greeting
    showGreeting(savedUsername);
}



