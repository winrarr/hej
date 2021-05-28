var sessions = ['admin']
const path = require('path')
const routes = require('express').Router()
const crypto = require('crypto')
const db = require('./database/database')

routes.post("/login", (req, res) => {
    const sql = `select 1 from user where username=? and hpassword=?`
    db.get(sql, [req.body.username, req.body.hPass], (err, row) => {
        if (row) {
            res.send(addSession())
        } else {
            res.status(401).send()
        }
    })
})

routes.post("/register", (req, res) => {
    const sql = `insert into user(username, hpassword) values (?, ?)`
    db.run(sql, [req.body.username, req.body.hPass], (err) => { })
    res.send(addSession())
})

routes.post("/logout", (req, res) => {
    removeSession(getSession(req.headers.cookie))
})

function auth(req, res, next) {
    let s = getSession(req.headers.cookie)
    if (sessions.includes(s)) {
        next()
    } else {
        res.sendFile(path.join(__dirname, '../html/public/index.html'));
    }
}

function getSession(cookie) {
    var match = cookie.match('(^| )session=([^;]+)');
    if (match) return match[2];
  }

routes.use(auth)

function addSession() {
    const session = crypto.randomBytes(32).toString('hex')
    sessions.push(session)
    return session
}

function removeSession(session) {
    sessions.splice(sessions.indexOf(session), 1)
}

module.exports = {
    routes: routes,
    sessions: sessions,
}