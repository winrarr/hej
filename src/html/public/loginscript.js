document.addEventListener('DOMContentLoaded', setup, false)

function setup() {
    document.getElementById("password").addEventListener("keydown", event => {
        if (event.key == "Enter") {
            if (document.getElementById("submit-button").innerHTML == "Login") {
                login()
            } else {
                register()
            }
        }
    })
}

async function login() {
    let session = await fetch("/login", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: document.getElementById("username").value,
            hPass: await sha256(document.getElementById("password").value),
        })
    })

    document.cookie = "session=" + await session.text()

    location.href = "frontpage.html"
}

async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message)
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}