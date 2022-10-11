function checkCode(codeId) {
    attempt = document.getElementById(codeId).value

    if (codeId == "code2") {
        answer = "1984"
    }

    if (answer == attempt) {
        document.getElementById("response" + codeId.substring(4)).innerHTML = "<h4> Correct! </h4><br>"
    }
    else {
        document.getElementById("response" + codeId.substring(4)).innerHTML = "<h2>WRONG</h2><br>"
    }
}