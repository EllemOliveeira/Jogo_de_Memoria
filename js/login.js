const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');


const validateInput = ({target}) => {
    if(target.value.length > 2) {
        button.removeAttribute('disabled');
    
    }else{
        button.setAttribute('disabled');
    }

}

const handleSubmit=(event) =>{
    event.preventDefaut(); //previnir o carregamento da pagina de acesso toda hora
    //console.log(input.value);
    localStorage.setItem('player', input.value);// salvado o cadastro da pessoa e criando um pagina no strorage. console
    window.location = 'pages/game.html'; // direcionar o usuario para pagina do game.
}

input.addEventListener('input', validateInput);
input.addEventListener('submit', handleSubmit);


