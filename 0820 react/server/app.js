const http = require('http')
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require("cors")
const bodyParser = require("body-parser")

app.set('port', port)

app.use(express.static('public'))
// url 또는 포트 번호가 다른 클라이언트 요청 허용
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index')
})

const todoList = [
    {no: 101, title: "공부하기", done: false},
    {no: 102, title: "자바하기", done: true},
    {no: 103, title: "리액트하기", done: false},
    {no: 104, title: "스프링하기", done: false}
]

let noCnt = 105

app.get('/todo', (req, res) => {
    // 목록 출력\
    res.send(todoList)
})

app.post('/todo', (req, res) => {
    // 목록 입력
    const newTodo = {
        no: noCnt++,
        title: req.body.title,
        done: false
    }
    todoList.push(newTodo)
    res.send(todoList)
})

app.put("/todo", (req, res)=>{
    // 할일 수정
    const idx = todoList.findIndex((item) => {
        return item.no === parseInt(req.body.no);
    });
    if(idx !== -1) {
        todoList[idx] = req.body;
    }
    res.send(todoList);
});

app.delete('/todo', (req, res) => {
    const {no} = req.query; // 쿼리 파라미터에서 `no` 값 가져오기
    const index = todoList.findIndex(todo => todo.no === parseInt(no));
    if (index !== -1) {
        todoList.splice(index, 1); // 해당 항목 삭제
    }
    res.send(todoList); // 변경된 리스트 반환
});


const server = http.createServer(app)
server.listen(port,

    () => {
        console.log(`Listening on port ${port}`)
    })