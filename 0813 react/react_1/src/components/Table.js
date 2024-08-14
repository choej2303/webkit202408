import './Table.css'

function Table() {
    return (
        <div>
            <h1>hello react world!</h1>
            <button className='btn-primary'>클릭</button>
            <h2>Hoverable Dark Table</h2>
            <p>The .table-hover class adds a hover effect (grey background color) on table rows:</p>
            <table className="table table-dark table-hover">
                <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr>
                <tr>
                    <td>Mary</td>
                    <td>Moe</td>
                    <td>mary@example.com</td>
                </tr>
                <tr>
                    <td>July</td>
                    <td>Dooley</td>
                    <td>july@example.com</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;