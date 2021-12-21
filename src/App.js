import './App.css';
import {NavBar} from './components/View/NavBar';
import {UserRecords} from './components/View/UserRecords';
import Api from './components/View/FetchApi';
function App() {
  return (
    <div className="App">
      <NavBar />
      <UserRecords/>
    </div>
  );
}

export default App;
 