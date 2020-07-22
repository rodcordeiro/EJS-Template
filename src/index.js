const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || '3333'

app.use(express.static(path.join(__dirname,'views')));
app.set('views',path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine','html');

app.get('/',(req, res)=>{
    res.render('index',{
        "title":"Cordeiro"
    });
});

app.listen(port, err=>{
    console.log(`Listening on http://localhost:${port}`);
})