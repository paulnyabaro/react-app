import { useState } from "react";

// Props
interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}
function ListGroup({items, heading}: Props) {

    // items = []

    // Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);

    // if (items.length === 0)
    //     return <div className="alert alert-primary">No items available yet</div>
    
    return (
        <>
        <h1>{heading}</h1>
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