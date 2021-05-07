const routes = require('express').Router();
const db = require("../database/database.js")


routes.get("", async (req, res) => {
    const id = req.query.id
    const courseabbr = req.query.course
    let amount = req.query.amount
    if (typeof amount === 'undefined') amount = -1

    if (!id && !courseabbr) {
        getAllAssignments(amount, res)
    } else if (id) {
        getAssignmentFromId(id, res)
    } else {
        getAssignmentsFromCourseAbbr(courseabbr, amount, res)
    }
})

function getAllAssignments(amount, res) {
    const sql = 
    `select * from assignment
    -- where deadline > CURRENT_DATE
    order by deadline asc
    limit ?`

    db.all(sql, [amount], (err, rows) => res.send(rows))
}

function getAssignmentFromId(id, res) {
    const sql = "select * from Assignment where id=?"
    db.all(sql, [id], (err, rows) => res.send(rows))
}

function getAssignmentsFromCourseAbbr(courseabbr, amount, res) {
    const sql =
    `select * from assignment
    where upper(courseabbr)=upper(?)
    limit ?`
    
    db.all(sql, [courseabbr, amount], (err, rows) => res.send(rows))
}


module.exports = routes