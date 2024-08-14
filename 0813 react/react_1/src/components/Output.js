export default ({todoListArr, deleteItem, confirmItem}) => {
    return (<div>
            <table className="table table-hover"
                   style={{textAlign: "center"}}>
                <thead>
                <tr>
                    <th>no</th>
                    <th>Confirm</th>
                    <th>Title</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {todoListArr.map((item, idx) => {
                    return (<tr key={idx}>
                        <td>{item.no}</td>
                        <td><input type="checkbox" checked={item.done}
                        onChange={() => confirmItem(item.no)}/></td>
                        <td>{item.title}</td>
                        <td><button className="btn btn-danger"
                        onClick={() => deleteItem(item.no)}>Delete</button></td>
                    </tr>)
                })}

                </tbody>
            </table>
        </div>)
}