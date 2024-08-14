import './App.css'
import Input from "./components/Input";
import Output from "./components/Output";
import {useState} from "react";

function App() {
    const [todoListArr, setTodoListArr] = useState([
        {
            no: 101, title: '운동하기', done: false,
        }, {
            no: 102, title: '운동하기', done: false,
        }, {
            no: 103, title: '운동하기', done: false,
        }, {
            no: 104, title: '운동하기', done: true,
        }
    ]);
    const [noCnt, setNoCnt] = useState(104);

    function appendItem(title) {
        const newNo = noCnt + 1; // 새로운 번호를 변수에 저장
        setNoCnt(newNo); // 상태 업데이트
        setTodoListArr([...todoListArr, {no: newNo, title: title, done: false}]); // 새로운 번호 사용
    }


    function deleteItem(no) {
        setTodoListArr(todoListArr.filter((item) => item.no !== no));
    }

    function confirmItem(no) {
        setTodoListArr(todoListArr.map(item => {
            return item.no === no ? {...item, done: !item.done} : item;
        }));
    }


    return (
        <div>
            <header className="jumbotron">
                <h1>TodoList</h1>
                <p>할 일을 입력하세요</p>
            </header>
            {/*입력 기능*/}
            <Input appendItem={appendItem}></Input>
            {/*목록 출력 기능*/}
            <Output todoListArr={todoListArr}
            deleteItem={deleteItem}
            confirmItem={confirmItem}></Output>
        </div>
    )
}

export default App;