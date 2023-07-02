function ListGroup() {
    const items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];

    
    return (
        <>
        <h1>List Group</h1>
        <ul className="list-group">
            {items.map((item) => <li className="list-group-item">{item}</li>)}
        </ul>
        </>
    );
}

export default ListGroup;