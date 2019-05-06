function gdpr() {
    prompt("Mountain Bikers often ride alone. Despite the fun, an accident could be fatal. Imagine you break your ribs, spine or collar bone and smash your phone. Even if you are able to call for help, can you accurately describe your location? How long will it take for help to find you? Engel detects a crash and calls for help, even if you are unconscious. It calls help and sends your exact location.</p>")
    console.log("ssss")
}
function emailHandler() {
    const email = document.getElementById('email').value;

    if( isValid(email)) {
        document.getElementById("email-form").className = "valid";
        document.getElementById("submit-btn").disabled = false;
    } else {
        document.getElementById("email-form").className = "invalid";
        document.getElementById("submit-btn").disabled = true;
    }
}

function isValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function sendToAPI(event) {

    event.preventDefault();
    
    const email = document.getElementById('email').value;

    if(!document.getElementById('gdpr').checked) {
        alert('You have to accept our privacy policy.');
        return;
    }

    if(!isValid(email)) {
        alert('Invalid email!');
        return;
    }

    var URL = window.location.href;
    var heshmark = URL.indexOf('#');
    if (heshmark != -1) {
        URL = URL.substring(0, heshmark);
    }

    //const proxy = 'https://cors-anywhere.herokuapp.com/';

    const xhr = new XMLHttpRequest();
    xhr.open('POST', /*proxy +*/ URL, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 201) {
            alert('Email sendt successfully');
        }
        if (this.readyState == 4 && this.status != 201){
            alert('There were some problem. Your email has not been sendt. Please try later.');
        }
    };
    xhr.send(JSON.stringify({
        email: email,
    }));

}