import './App.css';
import Sidebar from './components/Sidebar.js';
import SidebarButton from "./components/SidebarButton.js";
import StudentCourse from './pages/StudentCourse.js';
import LoginPage from "./pages/LoginPage.js";
import SignupPage from "./pages/SignupPage.js";
import GenericPage from "./pages/GenericPage.js";
import { BrowserRouter as Router, createBrowserRouter, RouterProvider, Routes, Route, Link } from 'react-router-dom'
import AnswerEvaluation from './pages/AnswerEvaluation.js';

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <LoginPage />,
        },
        {
            path: "/login",
            element: <LoginPage />,
        },
        {
            path: "/signup",
            element: <SignupPage />,
        },
    ])

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}
export default App;