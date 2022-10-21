
//put your text between the ``, and use ~ to make it go to the next line. 
const INCOMING_MESSAGE_TEXT = `
AUGUST 30th, 2022~
I have always been very curious about other planes of reality and other dimensions. Each one holds something so incredibly different and wondrous. That's what drew me to become a researcher. 
I recently made a device that would be able to create a portal to another one of the dimensions. I call it the Upside Down. It is full of many different creatures. They all seem to operate under one hive mind that is made of millions of small particles. It also seems that there is another creature out there, which goes by the name Vecna. He seems to be building up to something. I am unaware of what this is but it seems bad. 
~~
SEPTEMBER 5th, 2022~
This device is strong enough to open up a portal for however long the device is on, and as soon as it shuts off the portal closes. This device is operated by a remote. To be able to even operate the remote, you must insert a key into the remote and unlock it, allowing the remote to be used.
~~
SEPTEMBER 21st, 2022~
Whenever you travel upside down, it is best to have music playing. Music grounds you to the reality where your body is. It will draw you back. Vecna is capable of drawing onesies consciousness into a different state, trapping them there while he kills them. If you have music playing it can free your consinuess and make you awake. For this I use a cassette player. Phones stop working there; a cassette player is small enough to carry around with you.
The other thing that I always bring with me is a sword. I never know if I am going to have to fight something in there, so it is best to have it with me. Guns don't seem to work and the edge of a blade is strong enough to pierce through it.
~~
OCTOBER 3rd, 2022~
	The Hellfire Club just took my sword away from me. Well I guess they took it back. I must find another one to use, or more likely get it back from them. 
~~
OCTOBER 15th, 2022~
Campus Life is putting on a 80s themed event soon. I should stop by and see if they have any extras to spare. 
~~
OCTOBER 16th, 2022~
The key to the remote has been stolen. I went into the Upside Down and when I got back, the key was not there. The door was open to my lab. I went out in the hallway and saw someone running with it. Luckily for me, something fell out of his pocket. It was a business card for Yuris Fish and Fly. Now at least I have something to go off of. 
~~
OCTOBER 18th, 2022~
	It has been a couple of days since the key was stolen. The portal has been open for a while now. I can't turn it off without the key. Something has been coming in and out of it. The portal seems to be growing bigger. Much bigger. And what's worst of all is disappearances have started occurring on campus. Students have begun to go missing left and right. Something is seriously wrong. 
~~
OCTOBER 19th, 2022~
	It's Vecna. He is killing the students to make the portal grow. He gets in their mind and then kills them while they are incapactiated. He is going to invade all of Milwaukee and the world. He must be stopped. I have to find that key to turn the device off. I just heard a noise. I think something is coming through.
~~~
It's Vecna, He almost killed me. He stole the remote so the portal could never be closed. The portal has taken over the skybridge, the only way in is from the library side of the bridge. I am going upside down after him. If I do not return for some reason, I hope someone can fix what I could not. If that is the case then find the key, a sword, and a cassette tape then go into the upside down in the library on the 3rd floor. I must go. I am sorry for I fear I have caused the end of the world. 
~~
`
const MILLISECONDS_BETWEEN_LETTERS = 1



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


