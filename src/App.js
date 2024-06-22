import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar.js';
import HomepageContent from "./components/HomepageContent.js";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <HomepageContent />
    </div>
  );
}

export default App;