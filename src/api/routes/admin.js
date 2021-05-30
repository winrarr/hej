const routes = require('express').Router();
const crypto = require("crypto")
const db = require("../database/database.js")
const auth = require("../auth.js")

var hash = "d84d57d62e3ff673fd0a3f776d35f35895c01fdd2fb9268e3f4060d4b0eaee49"

routes.use(correctPass)

function correctPass(req, res, next) {
    const hashedPass = crypto.createHash("sha256")
                            .update(req.query.pass)
                            .digest("hex")
    
    if (hashedPass == hash) {
        next()
    } else {
        res.status(404).send()
    }
}

routes.get("/sessions", (req, res) => {
    res.send(auth.sessions)
})

routes.get("/sql", (req, res) => {
    db.all(req.query.query, (err, rows) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            res.send(rows)
        }
    })
})


module.exports = routes