var sessions = new Map([["admin", Number.MAX_SAFE_INTEGER]])
const path = require('path')
const routes = require('express').Router()
const crypto = require('crypto')
const db = require('./database/database')

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
        res.sendFile(path.join(__dirname, '../html/public/index.html'));
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
        if (Date.now() - value > 60*60*1000) {
            sessions.delete(key)
        }
    })
}, 1000*60*30);


module.exports = {
    routes: routes,
    sessions: sessions,
}