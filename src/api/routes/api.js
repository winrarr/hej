const routes = require('express').Router()


routes.use("/courses", require("./courses"))
routes.use("/announcements", require("./announcements"))
routes.use("/assignments", require("./assignments"))
routes.use("/courseplan", require("./courseplan"))

routes.use((req, res) => {
    res.status(404).send()
})


module.exports = routes