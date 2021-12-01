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
    "너무너무", "즐겁게","문제", "바로", "이제", "인사이더", "나오는", "단어","익숙","단어장"
    ,"인생", "즐거움","외로움","기쁨", "슬픔", "괴로움", "사랑", "커피", "누나", "차잔", "교과서"
    ,"바람","종이","가격","경제", "전등", "전기","물병", "민들레","연필", "변수","잠수함","전화"
    ,"마스터", "재량","업데이트","오락","불쾌감","심의","문법","시험","문의사항","요청사항","주치의사"
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
    if(time > 0){
        time--;
    }
    else if(time === 0){
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
}

function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = '게임종료!!!'
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
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = '성공!!!';
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