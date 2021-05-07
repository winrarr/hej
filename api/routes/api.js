const routes = require('express').Router()

routes.use("/course", require("./courses.js"))
routes.use("/announcement", require("./announcements.js"))
routes.use("/assignment", require("./assignments.js"))

routes.use((req, res) => {
    res.status(404).send()
})

module.exports = routes