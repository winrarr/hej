const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use("/api/student", require("./routes/students.js"))

app.use(function(req, res){
    res.status(404);
});

app.listen(8000, () => {
    console.log("Server running on port 8000")
});