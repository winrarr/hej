const routes = require('express').Router();
const db = require("../database/database.js")

routes.get("", async (req, res) => {
    const id = req.query.id
    const courseid = req.query.courseid

    if (id) {
        getAssignmentFromId(id, res)
    } else {
        getAssignmentsFromCourseid(courseid, res)
    }
})

function getAssignmentFromId(id, res) {
    const sql = "select * from assignment where id=?"
    db.all(sql, [id], (err, rows) => res.send(rows))
}

function getAssignmentsFromCourseid(courseid, res) {
    const sql = "select * from assignment where courseid=?"
    db.all(sql, [courseid], (err, rows) => res.send(rows))
}


module.exports = routes