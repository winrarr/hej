const routes = require('express').Router();
const db = require("../database/database.js")

routes.get("", async (req, res) => {
    const id = req.query.id
    const courseabbr = req.query.course
    let amount = req.query.amount
    if (typeof amount === 'undefined') amount = -1

    if (!id && !courseabbr) {
        getAllAnnouncements(amount, res)
    } else if (id) {
        getAnnouncementFromId(id, res)
    } else {
        getAnnouncementsFromCourseAbbr(courseabbr, amount, res)
    }
})

function getAllAnnouncements(amount, res) {
    const sql = 
    `select * from announcement
    order by date desc
    limit ?`

    db.all(sql, [amount], (err, rows) => res.send(rows))
}

function getAnnouncementFromId(id, res) {
    const sql = "select * from announcement where id=?"
    db.all(sql, [id], (err, rows) => res.send(rows))
}

function getAnnouncementsFromCourseAbbr(courseabbr, amount, res) {
    const sql = 
    `select * from announcement
    where upper(courseabbr)=upper(?)
    order by date desc
    limit ?`

    db.all(sql, [courseabbr, amount], (err, rows) => res.send(rows))
}


module.exports = routes