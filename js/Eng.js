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
    'wasp','plague','grumpy','turd','pup','upfront','crack down',
    'concoct','peril','heed','cistern','headstrong','scrapping','kindred','onslaught','shortfall','engulf',
    'rudimentary', 'medieval', 'looting', 'procrastinating', 'extricate', 'siege','swashbuckling','gallant', 'endeavor',
    'chum', 'snog','thong','undercover','janitor','typo','chivalry','crunchy','rookie','abrasive','dismissive','sarcastic','snippet',
    'heystack','deteriorate','boxers','prohibited','snappy','custody','hunch','hideous','quitter','cramp','impervious','cordial',
    'excel','virtuoso','devoid','mediate','arbitrate','intercede','intervene','bunk','skid','overturn','repurpose','combustion','infiltrate','wellspring',
    'hierarchical','maze','whim','lucrative','fledgling','notch','crumple','fling','petrified','punchy','collar','barrage','nerve-wracking',
    'authenticity','hustler','bridegroom','bride','groom','seclude','requisition','allegedly', 'jelly', 'slap', "trade","jar","draw","native","is","equipment","arm","dropped","broad","concerned","quarter","notice","angle","stairs","widely","simple",
    "nobody","teeth","snake","what","difference","wash","heard","lying","bring","begun","climate","trip","desert","must","instant","off",
    "port","claws","rush","cabin","pound","six","diameter","ever","fix","carefully","said","stream","differ","curious","farm","canal",
    "widely","trip","straw","mirror","tightly","fur","garage","unit","customs","studied","rapidly","metal","birth","help","strength","missing",
    "she","student","form","coffee","bite","must","provide","primitive","machinery","entire","twelve","program","feet","pocket","happen","she",
    "which","shorter","difficulty","replied","asleep","crowd","does","tried","average","straw","bus","sound","group","visitor","worker","fresh",
    "shallow","sight","glass","magic","shorter","clothes","lie","blue","fort","shelter","month","it","somebody","younger","art","volume",
    "fat","globe","smell","solar","drove","nest","wait","wire","orbit","pass","research","wash","answer","longer","helpful","function",
    "younger","leg","apple","place","become","difficult","price","quarter","correctly","mass","society","deal","serious","discovery","sight","aloud",
    "molecular","citizen","accident","men","tell","along","country","fast","bill","quiet","quiet","taste","shelter","steady","test","settle",
    "people","tight","arrow","loss","man","away","map","fireplace","eye","given","wrong","shall","lunch","brave","telephone","blow","school","soon","myself","cotton","space","carefully","special","tip","strange","sing","baby","gun","eleven","ready","original","brass","breeze","as","climb","giant","upper","view","sweet","fallen","leather","catch","suddenly","inch","cap","prepare","near","below","world","vast","entirely","wagon","raw","put","page","simplest","ear","customs","these","ants","driver","cut","useful","favorite","property","nor","our","bottle","due","office","live","sit","pale","load","complex","somewhere","to","shot","aloud","experience","bottom","suit","because","bright","date","angle","broken","stage","may","managed","connected","level","unless","type","coach","slope","everything","allow","took","when","town","tank","than","greatest","report","shallow","noun","fairly","come","dance","sharp","stay","ground","breathe","movement","changing","from","chamber","development","within","under","carried","hello","instrument","born","silver","can","best","reader","fresh","mental","sick","lucky","camp","claws","left","hit","stove","thought","string","matter","muscle","freedom","surface","provide","lamp","gently","wild","forward","themselves","automobile","smile","element",
    "secret","moon","doctor","size","go","place","loose","sound","talk","immediately","worry","expression","manufacturing","mind","fight","environment","practical","bigger","direction","duty","wealth","ruler","title","were","death","adventure","sugar","secret","fell","model","become","structure","indeed","uncle","knife","represent","dull","flat","should","face","knife","frame","pictured","luck","straight","taken","along","occasionally","held","hurt","single","wealth","first","whole","tired","quickly","minerals","neighborhood","plastic","sound","shade","recall","heart","sad","idea","voice","beyond","plates","spite","they","bridge","bowl","automobile","continued","meat","old","chamber","dress","wire","bridge","serious","driving","ants","wet","happy","baby","bound","begun","cave","caught","taken","engine","owner","exchange","play","brave","tightly","needs","week","noon","union","string","properly","kids","cave","increase","mission","see","wrapped","cool","involved","rhyme","forget","collect","pig","characteristic","screen","useful","scared","lay","park","health","faster","mighty","down","easily","angle","nose","being","minerals","search","dust","rope","common","energy","mice","hunt","parent","these","brush","rock","aware","reader","live","deal","eleven","smoke","invented","cowboy","strong","driven","lead","airplane"
     
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
        message.innerHTML = 'GameOver!!!'
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
        message.innerHTML = 'Correct!!!';
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