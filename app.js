const express = require("express")
const multer = require("multer")
const app = express()
const upload = multer()
const port = 3234;
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.render("register");
});
let arrUser = [];
app.post('/user/register',(req, res)=>{
    console.log(req.body);
    if(req.body.username && req.body.password){
        let user = {
            username: req.body.username,
            password: req.body.password
        }

        arrUser.push(user)
        res.render('succses',{user:user})
    }else{
        res.render("error")
    }
})
app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})

