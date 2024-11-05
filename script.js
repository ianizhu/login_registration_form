const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register__btn');
const loginBtn = document.querySelector('.login__btn'); 
const registerBox = document.querySelector('.register');
const leftPannel = document.querySelector('.toggle-left');
const submitBtn = document.getElementById('submitBtn');

const showEye = document.getElementById('showEye');
const hideEye = document.getElementById('hideEye');
const pass = document.getElementById('formPass');
const passField = document.querySelector('.pass__field');
let infoLogin = document.querySelector('.info__login');
let infoRegister = document.querySelector('.info__register');

passField.onclick = () => {
    if (pass.type === 'password') {
        pass.type = 'text';
        hideEye.classList.add('active');
        showEye.classList.add('active');
        hideEye.hidden = false;
    }else if (pass.type === 'text'){
        pass.type = 'password';
        hideEye.classList.remove('active');
        showEye.classList.remove('active');
    }
}


registerBtn.addEventListener('click', () => {
    container.classList.add('active');
    registerBox.classList.add('active');
    
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

async function sendForm(form) {
    let response = await fetch("php/reg.php", {
        method: "POST",
        body: new FormData(form),
    });
    let result = await response.text();
    if (result == "ok") {
        infoRegister.innerText = "Вы успешно зарегистрированы";
        setTimeout(() => {
        container.classList.remove('active');
        }, 1500);

    }else if(result == "exist") {
        infoRegister.innerText = "Похоже, такой пользователь есть";
    }
}

async function authForm(form) {
    let response = await fetch("php/auth.php", {
        method: "POST",
        body: new FormData(form),
    });
    let result = await response.text();
    if (result == "ok") {
        alert("Вы успешно вошли и будете перенаправлены в личный кабинет через несколько секунд");
        setTimeout(() => {
            location.href = "php/lk.php"
        }, 2000)
    }else if(result == "not_found") {
        infoLogin.innerText = "Пользователь не найден";
    } else {
        infoLogin.innerText = "Неизвестная ошибка";
    }
}
