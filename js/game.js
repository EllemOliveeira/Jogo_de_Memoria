const grid = document.querySelector('.grid');


/*-------Função para adicionar as imagens -------*/
const characters = [ // criando um Arrays
    'arara',
    'bambi',
    'cavalomarrom',
    'coelho',
    'coruja',
    'esquilo',
    'gato',
    'girafa',
    'macaco',
    'onca',
];

/*---1-Passo----------Criando as cartas------------ */
const createCard = (character) => {  // função para criar as cartas

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    //front.style.backgroudImage = `url('../imagens/${character}.png')`;
    front.style.backgroudImage = `url('../imagens/${character}.jpg')`;

   card.appendChild(front);  
   card.appendChild(back);

   card.addEventListener('click', revealCard);
   card.setAttribute('data-character', character);

   return card;

   //grid.appendChild(card);
}
/*---2-Passo-------Criando elemento Carta--------- */

const createElement = (tag, className) => {  //função responsavel para criar as cartas
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

/*---3- Passo---------Função para Carregar o Jogo----------*/

const loadGame = () => { //  função para carregar nosso jogo

    const duplcateCharacters = [...characters, ...characters]; // duplicar as cartas

     // o metódo sort() ordena os elementos em lista" tem que ser uma função se ele retornar uma fução menor que 0 ex -1, vai colocar na frente, retornar 1 outro elemento na frente e 0 não faz nada "
    // metódo Math.random() deixa de uma lista aleotória entre 0 e 1. -0.5-> tras numeros positivos e negativos menores que zero.
      
    const shuffledArray = duplcateCharacters.sort( () => Math.random()- 0.5 );


    shuffledArray.forEach((character) => { // pecorre nosso arrays " funçao das imagens " atraves do parametro

        const card = createCard(character); // criando cartas 
        grid.appendChild(card); // criando dentro do grid

    
    });

}

/*---4- Passo---------Função revelar cartas----------*/

const revealCard = ({target}) => {

    if(target.parentNode.className.includes('reveal-card')){
    return;
    }

    if(primeiraCard ==''){ // verificar se a carta ja foi revelada
        target.parentNode.classList.add('reveal-card'); // relevar a carta inteira no click
        primeiraCard = target.parentNode; // se não foi guardar a informação

    }else if (segundaCard ==''){ // limitar só revelar suas cartas por vez
        target.parentNode.classList.add('reveal-card'); // relevar a carta inteira no click
        segundaCard = target.parentNode; // guardar a informação da segunda carta revelada 

        checarCards();

    }

}

    let primeiraCard = ''; // criar atributo tipo let
    let segundaCard = '';

    /*---5-Passo---------Função revelar cartas----------*/

const checarCards = () => { // funçaõ para comparar as cartas

    const primeiraCharacter = primeiraCard.getAttribute('data-character');
    const segundaCharacter = segundaCard.getAttribute('data-character');

        if(primeiraCharacter == segundaCharacter){ // quando a pessoa acertar a carta ficar preta e branca.

           primeiraCard.classList.add('disabled-card');  //fristChild.
           segundaCard.classList.add('disable-card');

           primeiraCard = '';
           segundaCard = '';

        FimGame ();

        } else {
            setTimeout(() => { // se errar ter um tempo de 500 s para tentar de novo
         
               primeiraCard.classList.remove('reveal-card');
               segundaCard.classList.remove('reveal-card');

               primeiraCard ='';
               segundaCard = '';

    }, 500);
   }
}

/*---6-Passo---------Função função cartas----------*/

 const FimGame = () => {

    const disabledCards = document.querySelectorAll('.disable-card'); // está procurando todas as cartas que estão desabilitadas/reveladas
        if(disabledCards,length == 20){
            alert('Parabéns, você conseguiu!');
        }

}



loadGame(); // carrega o jogo




/*
let primeiraCard = ''; // criar atributo
let segundaCard = '';




const revelarCard = ({ target} ) => {

    if(target.parentNode.className.includes('revelar-card')){ // se a carta já foi revelada não tem retorno nenhum
        return;
    }

    if (primeiraCard == ''){  // esse IF E ELSE serve para revelar somente duas cardas por vez

        target.parentNode.classList.add('revelar-card');
        primeiraCard = target.parentNode;

    }else if (segundaCard == ''){

        target.parentNode.classList.add('revelar-card');
        segundaCard = target.parentNode;

    }

    target.parentNode.classList.add('revelar-card'); // para revelar a carta
}


const checarFinalGame = () => {

    const disabledCards = document.querySelector('.disabled-card');

    if(disabledCards.length == 20) {
        alert('Parabéns, você conseguiu');
    }

}


const checarCards = () => { //checar as cartas se são iguais 
    const primeiraCard = segundaCard.getAttribute('data-nomecarta');
    const segundaCard = primeiraCard.getAttribute('data-nomecarta');

    if(primeiraCard == segundaCard){ // para quando acertar ficar preta e branca 

        primeiraCard.primeiraCard.classList.add('disabled-card');
        segundaCard.primeiraCard.classList.add('disabled-card');

        let primeiraCard = ''; // coloca aqui para que ter a proxima vez de tentar de novo
        let segundaCard = '';
        
    }else{
        setTimeout(() => {
          primeiraCard.classList.remove('revelar-card'); 
          segundaCard.classList.remove('revelar-card');

         let primeiraCard = ''; // coloca aqui para que ter a proxima vez de tentar de novo
         let segundaCard = '';

         checarFinalGame();

    }, 500); // tempo para revelar e ocultar 
  }
}


const createCard = (nomecarta) => {
      const card = createElement('div', 'card');
      const front = createElement('div', 'face front');
      const back = createElement('div', 'face back');

      front.style.backgroudImage = `url('../imagens/${nomecarta}.png')`;
      //front.style.backgroudImage = `url('../imagens/${nomecarta}.jpg')`;

     card.appendChild(front);  
     card.appendChild(back);

     card.addEventListener('click', revelarCard);
     card.setAttribute('data-nomecarta', nomecarta);

     return card;

     //grid.appendChild(card)
}


const createCard = () => { // função para criar as cartas

    const card = document.createElement('div', 'card'); // aqui chama a função element - essa document.createElement() criar um elemento html para vc, só passar a tag que deseja criar ex: <div>
    const front = document.createElement('div', 'face front');
    const back = document.createElement('div', 'face back'); 
    
     card.className = 'card'; //adicionar sua classe do html a div que criou acima.
     front.className = 'face front';
     back.className = 'face back';

     card.appendChild(front);  // adicionar tags filhas Ex: a class="card" é a mãe e a class="face front e face back " são as filhas
     card.appendChild(back);

     return card;

     //grid.appendChild(card); // colocando as cartas dentro da class="grid".
}


*/


/*const loadGame = () => { // função do Arrays(Matrizes) para carregar o game (loadGame)

    const duplicateNomeCartas =[...nomecartas, ...nomecartas]; // duplicar as cartas

    const Embaralhar = duplicateNomeCartas.sort(() => Math.random(- 0.5)); // o funçaõ sort retorna um elemnto maior ou menor que 0  isso é regra.  -- ele ordenar os elementos

    // Math.random (); //retorna um numero aleatório entre 0 e 1, porém nunca vai chegar a ser 1
    //nomecartas.forEach((nomecarta) => { // forEach (para cada) para executar o paramentro cartas "cria um carta para cada personagem/nomecarta" 
    
    embaralhar.forEach((nomecarta) =>{ // PARA PECORRER O ARRAYS
       
        const embaralhar = createCard(nomecarta);
        grid.appendChild(card); // adicionando/criando as cartas no html

        //console.log(card);

     });
}

loadGame(); // para cada carta ele registro no consolo.log com o nome de cada carta
*/