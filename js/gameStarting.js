
function start(){
    var language = document.getElementById("language").value;
    //window.alert(language);
    if (language == "en"){
        location.replace("eng.html");
    }
    else if (language == "ru"){
        location.replace("rus.html");
    }
    else if(language == 'ko'){
        location.replace("kor.html");
    }
    else{
        location.replace("chi.html");
    }
}
