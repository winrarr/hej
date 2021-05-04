const routes = require('express').Router();
const db = require("../database/database.js")

routes.get("/", (req, res) => {
    res.json({"message":"Ok"})
})

routes.get("/all", (req, res) => {
    let sql = "SELECT * FROM user"
    db.all(sql, [], (err, rows) => {
        if (!err) {
            res.json({ rows })
        }
    })
})

/*
routes.get("/:student", (req, res) => {
    let sql = "SELECT * FROM user WHERE name=?"
    db.all(sql, [req.params.student], (err, rows) => {
        if (!err) {
            res.json({ rows })
        }
    })
})

routes.post("/add", (req, res) => {
    var insert = 'INSERT INTO user (name) VALUES (?)'
    db.run(insert, [req.body.name])
    res.status(200).send({
        status: "ok"
    })
});
*/

module.exports = routes;