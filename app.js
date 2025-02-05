const express = require('express')
const app = express()

const port = 3000



// MIDDLEWARES
app.use(express.static('public'));



// VIEW ENGINE
// app.set("view engine", "ejs");
// app.set("views", __dirname+"/views");



// ROUTES
app.get('/', function(req,res) {
    res.render("index")
})



app.listen(port, () => {
    console.log("server running on localhost:"+port)
})