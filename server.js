let express = require('express');

let bodyParser = require('body-parser');

let app = express();


app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","http://localhost:8080");
    res.header("Access-Control-Allow-Methods","GET,POST,OPTIONS,PUT");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Tyoe,Accept,Authorization");
    if(req.method.toLowerCase==="options"){
        return res.end();
    }
    next();
})
app.use(bodyParser.json());
app.get('/user',(req,res)=>{
    res.json({name:'liu'})
})

app.listen(3000,()=>{
    console.log('3000 ok')
});