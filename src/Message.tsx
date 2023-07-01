function Message() {
    // JSX: JavaScript XML 
    const name = 'Mosh';
    if (name)
        return <h1>Hello the World of React with {name}!</h1>;
    return <h1>Hello World!</h1>
}

export default Message;