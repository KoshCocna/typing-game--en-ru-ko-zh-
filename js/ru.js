const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
var level;
let time ;
let score;
let isPlaying;
let counter;

const words = [
    'Амортизация', 'Седеть', 'Полулитровый', 'Подлежащее', 'Подшофе', 'Выволочь', 'Богохульничать', 'Спрессовать', 'Одолеть', 'Островерхий',
    'Лепет', 'Замаслиться', 'Привлекательный', 'Нахмуриться', 'Воздухоплавание', 'Заветренный', 'Прибаутка', 'Ягель', 'Петух', 'Рак',
    'Порты', 'Наживной', 'Гравер', 'Ватерполист', 'Первоклассник', 'Восхищение', 'Отточие', 'Продирать', 'Защита', 'Подстричься',
    'Зажимание', 'Звериный', 'Дубовый', 'Пастух', 'Детерминизм', 'Смонтировать', 'Одиночный', 'Сельчанин', 'Рассредоточить', 'Хватка',
    'Шествовать', 'Предполагать', 'Зарваться', 'Кафешантан', 'Посконь', 'Обстановка', 'Коптильня', 'Приработок', 'Переимчивый', 'Протолкаться'
];
 
//Initialize game
function init(){
    score = 0;
    scoreDisplay.innerHTML = score;
    window.clearInterval(counter);
    level = document.getElementById("level").value;
    time = level;
    seconds.innerHTML = level-1;
    showWord(words);
    wordInput.addEventListener('input', startMatch);
    counter = setInterval(countdown, 1000);
    setInterval(checkStatus, 15);
}

function showWord(words){
    const randIndex = Math.floor(Math.random()*words.length);
    currentWord.innerHTML = words[randIndex];   
}

function countdown(){
    if(time>0){
        time--;
    }
    else if(time === 0){
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
}

function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'Проиграл!!!'
        score = -1; 
    }
}

function startMatch(){
    if(matchWords()){
        isPlaying=true;
        time = level;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    if(score === -1){
        scoreDisplay.innerHTML = 0;
    }
    else{
        scoreDisplay.innerHTML = score;
    }
}
function matchWords(){
    if(wordInput.value === (currentWord.innerHTML).toLowerCase()){
        message.innerHTML = 'Правильно!!!';
        return true;
    }
    else{
        message.innerHTML = '';
        return false;
    }
}

function gotoMain(){
    location.replace("index.html");
}