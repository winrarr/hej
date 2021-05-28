const express = require("express")
const cors = require("cors")
const auth = require('./auth').routes
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use(express.static("../html/public"))
app.use("/api", require("./routes/api.js"))
app.use(auth)
app.use(express.static("../html/private"))

app.use((req, res) => {
    res.status(404).send()
})

app.listen(8000, () => {
    console.log("Server running on port 8000")
})