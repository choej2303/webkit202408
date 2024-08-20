import {useRef, useState} from "react";

const Input = ({onClickEvent}) => {
    const [inputTitle, setInputTitle] = useState('');
    const ref = useRef(null);
    return (
        <div className="input-title">
            <div className="container" style={{padding: "10px"}}>
                <div className="input-group mb-3">
                    <input ref={ref} value={inputTitle} onChange={e => setInputTitle(e.target.value)} type="text"
                           className="form-control"/>
                    <div className="input-group-append">
                        <button className="btn btn-success" onClick={e => {
                            if (inputTitle === '' || inputTitle === null) {
                                alert("Please enter title");
                                ref.current.focus();
                                return
                            }
                            onClickEvent(inputTitle)
                            setInputTitle("");
                        //     useRef 훅 사용하여 focus 잡아주기
                            ref.current.focus()
                        }}>Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const InputSub = () => {
    return (
        <>

        </>
    )
}

export {Input, InputSub}