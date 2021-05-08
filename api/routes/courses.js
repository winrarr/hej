const routes = require('express').Router()
const db = require("../database/database.js")


routes.get("", (req, res) => {
    const abbreviation = req.query.abbr

    if (abbreviation) {
        getCourseFromAbbr(abbreviation, res)
    } else {
        getAllCourses(res)
    }
})

function getCourseFromAbbr(abbreviation, res) {
    const sql = "select * from course where upper(abbreviation)=upper(?)"
    db.all(sql, [abbreviation], (err, rows) => res.send(rows))
}

function getAllCourses(res) {
    const sql = "select * from course"
    db.all(sql, (err, rows) => res.send(rows))
}


module.exports = routes