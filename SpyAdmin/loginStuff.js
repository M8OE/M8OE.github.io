const HINT_MESSAGE = "<strong>hint</strong>: EMAIAL"
const FAIL_MESSAGE = "The Homeland did not like that."

const USERNAME = "b"
const PASSWORD = "t"

//put your text between the ``, and use ~ to make it go to the next line. 
const INCOMING_MESSAGE_TEXT = `
    INCOMING TRANSMISSION.~.~.~.~.~.~.~.~.~.~.~.~
    (TRANSLATED FROM RUSSIAN) 
    Great Job.
    ~.~.~.~.~.~.~.~.~.~.~.~
    END OF TRANSMISSION.
`
const MILLISECONDS_BETWEEN_LETTERS = 80


function submit() {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    if (!username.includes("@")) {
        document.getElementById('hintText').innerHTML = HINT_MESSAGE
    } else {
        document.getElementById('hintText').innerHTML = "<br>"
    }

    if (username.toLowerCase() == USERNAME.toLowerCase() && password == PASSWORD) {
        document.getElementById("loginForm").remove()
        let id = null;
        const elem = document.getElementById("incomingText");
        let i = 0;
        clearInterval(id);
        id = setInterval(frame, MILLISECONDS_BETWEEN_LETTERS);

        function frame() {
            if (i >= INCOMING_MESSAGE_TEXT.length) {
                clearInterval(id);
            } else {
                if (INCOMING_MESSAGE_TEXT.charAt(i) == '~') {
                    elem.innerHTML += '<br>'
                } else {
                    elem.innerHTML += INCOMING_MESSAGE_TEXT.charAt(i)
                }
                i++
            }
        }
    } else {
        document.getElementById("loginMessage").innerHTML = FAIL_MESSAGE
    }
}

enterFields = [document.getElementById("username"), document.getElementById("password")]

enterFields.forEach(element => {
    element.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
            submit();
        }
    });
});