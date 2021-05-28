function logout() {
    fetch("/logout", {
        method: "POST",
    })
    document.cookie = "session= ; expires=Thu, 01 Jan 1970 00:00:00 GMT"

    location.href = "/"
}