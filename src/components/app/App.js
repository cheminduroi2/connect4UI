import Board from '../board/Board';
import './App.css';

function App() {
  return (
    <div className="content">
      <div className="color-bar">
        <button>easy</button>
        <button>hard</button>
        <button>new game</button>
      </div>
      <h1 id="title">Connect 4</h1>
      <Board />
    </div>
  );
}

export default App;
