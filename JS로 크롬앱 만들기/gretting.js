const form = document.querySelector('.js-form'),
    input = form.querySelector('input'),
    greeting = document.querySelector('.js-grettings');

const USER_LS = 'user',
    SHOWING_CN = 'showing';

function askName(){
    form.classList.add(SHOWING_CN);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `${text}님 반갑습니다!`;
}

function loadName(){
    const user = localStorage.getItem(USER_LS);
    if(user !== null){
        paintGreeting(user);
    }else{
        askName();
        console.log('유저이름이 없는 뎁쇼')
    }
}

function init(){
    loadName();
}

init();