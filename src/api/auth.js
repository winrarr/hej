var sessions = new Map([["admin", Number.MAX_SAFE_INTEGER]])
const routes = require('express').Router()
const crypto = require('crypto')

routes.post("/login", (req, res) => res.send(addSession()))

routes.post("/logout", (req, res) => {
    sessions.delete(getSessionFromCookie(req.headers.cookie))
})

function auth(req, res, next) {
    let session = getSessionFromCookie(req.headers.cookie)
    if (sessions.has(session)) {
        sessions.set(session, Date.now())
        next()
    } else {
        res.redirect('/')
    }
}

function getSessionFromCookie(cookie) {
    var match = cookie.match('(^| )session=([^;]+)');
    if (match) return match[2];
  }

routes.use(auth)

function addSession() {
    const session = crypto.randomBytes(20).toString('hex') + Date.now()
    sessions.set(session, Date.now())
    return session
}

setInterval(() => {
    sessions.forEach((value, key) => {
        if (Date.now() - value > 1000*60*60) {
            sessions.delete(key)
        }
    })
}, 1000*60*60);


module.exports = {
    routes: routes,
    sessions: sessions,
}