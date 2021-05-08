const routes = require('express').Router()


routes.use("/courses", require("./courses.js"))
routes.use("/announcements", require("./announcements.js"))
routes.use("/assignments", require("./assignments.js"))
routes.use("/courseplan", require("./courseplan.js"))
routes.use("/admin", require("./admin.js"))

routes.use((req, res) => {
    res.status(404).send()
})


module.exports = routes