import './App.css';
import Sidebar from './components/Sidebar.js';
import SidebarButton from "./components/SidebarButton.js";
//import HomepageContent from "./components/HomepageContent.js";
import StudentCourse from './pages/StudentCourse.js';

function App() {
  return (
    <div className="App">
      <StudentCourse/>
    </div>
  );
}
export default App;
