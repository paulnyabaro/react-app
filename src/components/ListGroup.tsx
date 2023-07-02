function ListGroup() {
    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];
    items = []

    if (items.length === 0)
        return <div className="alert alert-primary">No items available yet</div>
    
    return (
        <>
        <h1>List Group</h1>
        <ul className="list-group">
            {items.map((item) => <li key={item} className="list-group-item">{item}</li>)}
        </ul>
        </>
    );
}

export default ListGroup;