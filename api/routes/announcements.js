const routes = require('express').Router();
const db = require("../database/database.js")

routes.get("", async (req, res) => {
    const id = req.query.id
    const courseid = req.query.courseid

    if (id) {
        getAnnouncementFromId(id, res)
    } else {
        getAnnouncementsFromCourseid(courseid, res)
    }
})

function getAnnouncementFromId(id, res) {
    const sql = "select * from announcement where id=?"
    db.all(sql, [id], (err, rows) => res.send(rows))
}

function getAnnouncementsFromCourseid(courseid, res) {
    const sql = "select * from announcement where courseid=?"
    db.all(sql, [courseid], (err, rows) => res.send(rows))
}


module.exports = routes