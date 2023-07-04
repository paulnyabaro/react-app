import Navbar from './components/Navbar';
import ListGroup from './components/ListGroup';
import Alert from './components/Alert';

function App() {
  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return <>
    <Navbar />
    <div className="container py-5">
    <ListGroup items = {items} heading='Cities' onSelectItem={handleSelectItem}/>
    <Alert>
      <h2>Attention</h2>
      <p>Nothing serious here! Just have a good time</p>
    </Alert>
    </div>
    </>
}

export default App;