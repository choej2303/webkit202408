const http = require('http')
const express = require('express')
const path = require("node:path");
const bodyParser = require("body-parser");
const app = express()
const port = process.env.PORT || 3000
const cors = require("cors")

app.set('views', path.join(__dirname + 'views'))
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.get('/', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    res.end('안녕')
})

//localhost:3000/data?user=HONG&message=LOVE
app.get('/data', function (req, res) {
    const user = req.query.user
    const message = req.query.message

    const jsonData = {
        user,
        message
    }

    res.send(jsonData)
})

// 임시 todoList
const todoList = [
    {no: 101, title: '자연 보호하기', done: false},
    {no: 102, title: '집에 가고 싶기', done: true},
    {no: 103, title: '산책가기', done: false},
    {no: 104, title: '저녁 요리하기', done: false},
    {no: 105, title: '시원하게 샤워하기', done: false},
    {no: 106, title: '뒹굴거리기', done: false},
]
var noSeq = 107

app.get('/todo/search', function (req, res) {
    var keyWord = req.query.keyWord
    var newTodoList = todoList.filter((todo) => {
        return todo.title.includes(keyWord)
    })

    res.send(newTodoList)
})

app.get('/todo', function (req, res) {
    if (req.query.no)
    {
        var no = parseInt(req.query.no)
        var idx = todoList.findIndex((todo) => {
            return parseInt(todo.no) === no
        })

        if (idx > -1) {
            res.send(todoList[idx])
        }
        else {
            res.send(null)
        }
        return
    }
    res.send(todoList)
})

app.post('/todo', function (req, res) {
    var title = req.body.title
    todoList.push({no: noSeq++, title, done: false})
    res.send(todoList)
})

app.put('/todo', function (req, res) {

    const newTodo = {
        ...req.body
    }

    var todo = todoList.find(todo => {
        return newTodo.no === todo.no
    })

    if (todo !== undefined) {
        todo = newTodo
    }
    res.send(todoList)
})

app.delete('/todo', function (req, res) {
    var no = parseInt(req.query.no)
    var idx = todoList.findIndex(todo => {
        return todo.no === no
    })
    if (idx > -1) {
        todoList.splice(idx, 1)
    }
    res.send(todoList)
})

const server = http.createServer(app)
server.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

