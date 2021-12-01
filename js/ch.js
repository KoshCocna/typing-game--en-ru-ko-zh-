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
    "酸甜苦辣", "中文","学习","天天向上","老板","公司","女朋友","游戏","考试结果","打印机","超级英雄","杯子","易如反掌","杞人忧天","以毒攻毒","人生的喜怒哀乐","三国演义","水浒传","五大名著","红楼梦","婚姻是爱情的坟墓","小城故事"
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
        message.innerHTML = '失败!!!'
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
        message.innerHTML = '成功!!!';
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