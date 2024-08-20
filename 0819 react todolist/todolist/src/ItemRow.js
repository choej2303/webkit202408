import {useState} from "react";

const ItemRow = ({item, onDoneFlag, onDelete, onEdit}) => {
    const [flag, setFlag] = useState(false);
    const [outputTitle, setOutputTtile] = useState(item.title);
    const [initialTitle, setInitialTitle] = useState(item.title); // 초기 타이틀 저장
    const lineThroughClass = {textDecoration: "line-through", color: "blue"}

    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <div className="input-group-text">
                    <input onChange={() => {
                        onDoneFlag(item);
                    }} checked={item.done && "checked"} type="checkbox"/>
                </div>
            </div>
            <input
                style={item.done ? lineThroughClass : {}}
                type="text" className="form-control"
                readOnly={flag ? "" : "readOnly"}
                value={outputTitle}
                onChange={(e) => {
                    setOutputTtile(e.target.value);
                }}
                onFocus={(e) => {
                    setFlag(true);
                    setInitialTitle(outputTitle); // 포커스될 때 초기 타이틀 저장
                }}
                onBlur={(e) => {
                    if (!flag) { // onEdit이 아닌 경우에만 복원
                        setOutputTtile(initialTitle);
                    }
                    setFlag(false);
                }}
            />
            <div className="input-group-append">
                <button
                    onMouseDown={() => setFlag(true)} // Edit 버튼을 누를 때 플래그 설정
                    onClick={() => {
                        onEdit({no: item.no, title: outputTitle, done: item.done});
                        setInitialTitle(outputTitle); // 수정된 타이틀을 초기 타이틀로 갱신
                    }}
                    className="btn btn-primary"
                    type="button">
                    Edit
                </button>
                <button onClick={() => {
                    onDelete(item);
                }} className="btn btn-danger" type="button">Delete
                </button>
            </div>
        </div>
    );
}

export default ItemRow;
