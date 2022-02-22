import './App.css';
import Hooks from './Component/Hooks';
import { UseContextAPI } from './Component/UseContextAPI';

function App() {
  return (
    <UseContextAPI>
      <div className="App">
        <Hooks />
      </div>
    </UseContextAPI>
  );
}

export default App;
