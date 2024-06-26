import './App.css';
import Sidebar from './components/Sidebar.js';
import SidebarButton from "./components/SidebarButton.js";
import StudentCourse from './pages/StudentCourse.js';
import LoginPage from "./pages/LoginPage.js";

function App() {
  return (
    <div className="App">
      <LoginPage />
      {/* <StudentCourse/> */}
    </div>
  );
}
export default App;