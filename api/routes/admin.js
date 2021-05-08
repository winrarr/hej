const routes = require('express').Router();
const db = require("../database/database.js")
const crypto = require("crypto")

var hash = "d84d57d62e3ff673fd0a3f776d35f35895c01fdd2fb9268e3f4060d4b0eaee49"

routes.get("", (req, res) => {
    const hashedPass = crypto.createHash("sha256")
                        .update(req.query.pass)
                        .digest("hex")
    
    if (hashedPass == hash) {
        db.all(req.query.query, (err, rows) => res.send(rows))
    } else {
        res.status(404).send()
    }
})


module.exports = routes