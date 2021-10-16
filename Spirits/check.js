function checkCode(codeId){
    attempt = document.getElementById(codeId).value
    
    if (codeId == "code2"){
        answer = "4631"
    }
 
    if(answer == attempt) {
        document.getElementById("theShit" + codeId.substring(4)).innerHTML = "<h1>We have been appeased. Go show those the badge to get in</h1><br>"
        image.url('IMG_0018.JPG');
    }
    else{
        document.getElementById("response" + codeId.substring(4)).innerHTML = "<h2>WRONG</h2><br>"
    }
}