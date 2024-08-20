import "./App.css";
import {useEffect, useState} from "react";
import {Input} from "./Input";
import Output from "./Output";
import axios from "axios";

const App = () => {
    // 전역변수를 state로 만들어 주어야 re rendering 된다.
    // 구조분해 할당 = state변수, setter함수
    const [name, setName] = useState("Todo List");
    const [todoList, setTodoList] = useState([]);
    const [noCnt, setNoCnt] = useState(105);
    const serverURL = "http://localhost:5000/todo"

    useEffect(() => {
        console.log('진입')
        axios.get("http://localhost:5000/todo").then(res => {
            setTodoList(res['data'])
        }).catch(err => {
            console.log(err);
        })
    }, []);

    const onClickEvent = (inputTitle) => {
        // 기존 내용에 새 내용을 추가 해서 새 배열을 생성
        axios.post(serverURL, {title: inputTitle}).then(res => {
            setTodoList(res.data)
        })
    }

    const onDelete = ({no, title, done}) => {
        axios.delete(serverURL, {
            params: {
                no: no
            }
        }).then(res => {
            setTodoList(res.data);
        }).catch(err => {
            console.error(err);
        });
    };


    const onDoneFlag = (todoItem)=>{
        // const newTodoList = [...todoList];
        // todoList.forEach((item, idx)=> {
        //     if(item.no == no) {
        //         newTodoList[idx].done = !done;
        //     }
        // });
        // setTodoList(newTodoList);
        todoItem.done = !todoItem.done;
        axios.put(serverURL, todoItem).then(function (response) {
            setTodoList(response.data); // setTodoList(response['data']);
        });
    };

    const onEdit = (todoItem)=>{
        // const newTodoList = [...todoList];
        // todoList.forEach((item, idx)=> {
        //     if(item.no == no) {
        //         newTodoList[idx].done = done;
        //         newTodoList[idx].title = title;
        //     }
        // });
        // setTodoList(newTodoList);
        axios.put(serverURL, todoItem).then(function (response) {
            setTodoList(response.data); // setTodoList(response['data']);
        });
    };

    // 취소선 스타일 설정
    const lineThroughClass = {textDecoration: "line-through", color: "blue"}

    return (<div className="todoList">
        <div className="App-header">
            <h1>{name} App</h1>
        </div>
        {/* Input Component */}
        <Input onClickEvent={onClickEvent}></Input>
        {/* Output Component */}
        <Output onDelete={onDelete} onDoneFlag={onDoneFlag} onEdit={onEdit} todoList={todoList}></Output>
    </div>);
}

export default App;