import {useState} from "react";

export default function Input ({appendItem}) {
    const [inputValue, setInputValue] = useState('');
    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Something clever.."
            value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <div className="input-group-append">
                <button className="btn btn-primary" type="button"
                onClick={() => {appendItem(inputValue)}}>OK</button>
                <button className="btn btn-danger" type="button"
                onClick={() => {setInputValue('')}}>Cancel</button>
            </div>
        </div>
    )
}