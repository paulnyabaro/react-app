import Navbar from './components/Navbar';
import ListGroup from './components/ListGroup';

function App() {
  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
];
  return <>
    <Navbar />
    <div className="container py-5">
    <ListGroup items = {items} heading='Cities'/>
    </div>
    </>
}

export default App;