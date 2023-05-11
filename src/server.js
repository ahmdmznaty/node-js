import express from "express";

let app = express()

app.get("/", (req, res) => {
    console.log( req.url )
    res.send(
        "<h1> Welcome people </h1>"
    )
})

app.get("/:id", (req, res) => {
    console.log( req.params.id )
    res.end( "Welcome " + req.params.id )
})

app.listen( process.env.PORT || 3000 )
