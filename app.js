const loginForm =document.querySelector('#login-form');
const loginInput=document.querySelector('#login-form input');
const greeting=document.querySelector('#greeting')
const pwForm=document.querySelector('#pw-form')
const pwInput=document.querySelector('#pw-form input')


const HIDDEN_CLASSNAME='hidden';//중요한 정보를 담지 않은 선언은 대문자로

function loginSub(event){
    event.preventDefault();//새로고침 하는 것을 막아준다. 기본동작 방지를 위해 
    const username=loginInput.value;
    localStorage.setItem('username',username);
    console.log(username);
    loginForm.classList.add(HIDDEN_CLASSNAME);//클래스 추가요!
    greeting.innerText=`Hello ${username}`;//string 합치기는 + 태그 안에 텍스트 넣고 싶으면 innerText 사용
    greeting.classList.remove(HIDDEN_CLASSNAME);//클래스 삭제요!
}
function pwSub(event){
    event.preventDefault();
    const pw=pwInput.value;
    console.log(pw)
    pwForm.classList.add('hidden');
}







loginForm.addEventListener('submit',loginSub);
pwForm.addEventListener('submit',pwSub);