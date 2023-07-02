import { useState } from "react";

function ListGroup() {
    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];

    // items = []

    // Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);

    // if (items.length === 0)
    //     return <div className="alert alert-primary">No items available yet</div>
    
    return (
        <>
        <h1>List Group</h1>
        {items.length === 0 && <div className="alert alert-primary">No items available yet</div>}
        <ul className="list-group">
            {items.map((item, index) => 
            <li 
                key={item} 
                className={ selectedIndex === index ? "list-group-item active": "list-group-item"} 
                onClick={() => {setSelectedIndex(index)}}
            >
                    {item}
            </li>)}
        </ul>
        </>
    );
}

export default ListGroup;