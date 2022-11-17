import Item from './components/item'
import DateTime from './components/DateTime'
function App() {
  return (
    <div className="App">
     <Item titel="television"
     price="250"
     date="17/11/22"
     ></Item>
     <Item titel="dog"
     price="130"
     date="12/11/22"
     ></Item>
     <Item titel="cat"
     price="50"
     date="10/11/22"
     ></Item>
    </div>
  );
}

export default App;
