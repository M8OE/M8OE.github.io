function checkCode(codeId){
    attempt = document.getElementById(codeId).value
    
    if (codeId == "code2"){
        answer = "15342"
    }
 
    if(answer == attempt) {
        document.getElementById("theShit" + codeId.substring(4)).innerHTML = "<h1>Happy 6th Birthday Lucy</h1><br>"
        document.body.style.backgroundImage = "url('20200208_175104.jpg')";
    }
    else{
        document.getElementById("response" + codeId.substring(4)).innerHTML = "<h2>WRONG</h2><br>"
    }
}