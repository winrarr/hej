const routes = require('express').Router();
const db = require("../database/database.js")


routes.get("", async (req, res) => {
    const sql =
    `select * from courseplanelement
    where upper(courseabbr)=upper(?)
    order by lecturedate asc`
    db.all(sql, [req.query.course], (err, rows) => res.send(rows))
})


module.exports = routes