const express = require("express")
const app = express()

app.get("/sum",(req,res)=>{
    const n = parseInt(req.query.n);

    const sum = (n * (n+1))/2;
    res.send(`The sum of first ${n} natural numbers is: ${sum}`);


})
app.get('/me', (req, res) => {
    res.send("Hey abhi, congratulations for setting up the cicd with github actions!");
});


app.listen(3000,()=>{
    console.log("the app is listening")
});