const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 8081
var cors = require('cors')
var jwt = require('jsonwebtoken')

//

// const low = require('lowdb')
// const FileSync = require('lowdb/adapters/FileSync')
// const adapter = new FileSync('db.json')
// const db = low(adapter)
// db.defaults({ user:[ 
//     {   
//         id : 1,
//         username : "admin",
//         password : "admin"
//     }
// ]})
//   .write()

app.use(cors())
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const dataUser = [
    {
        username : "admin",
        password : "admin",
        name : "ADMIN"
    }
];

app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.get('/users', (req, res) => {
    res.send('Hello World!')
})
app.post('/users', (req, res) => {
    const user = dataUser.find( item => item.username === req.body.username && item.password === req.body.password)
    if( user ){
        var token = jwt.sign({ name : user.name }, 'shhhh');
        res.json(token);
        // var decoded = jwt.decode(token, {complete: true});
        // console.log(decoded.payload)
        // console.log(token);
    }else{
        res.send({ err: 'Tài khoản không tồn tại' , sucess : false});
    }
})

app.get('/register', (req, res) => {
    res.send('Hello World!')
})
app.post('/register', (req, res) => {
    console.log(req.body);
    dataUser.push(req.body);
    res.send({sucess : true});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



















// const jsonServer = require('json-server')
// const server = jsonServer.create()
// const router = jsonServer.router('db.json')
// const middlewares = jsonServer.defaults()

// server.use(middlewares)
// server.use(router)
// server.listen(8080, () => {
//   console.log('JSON Server is running')
// })
