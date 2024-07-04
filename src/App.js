import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import SidebarButton from "./components/SidebarButton";
import StudentCourse from './pages/StudentCourse';
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import GenericPage from "./pages/GenericPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnswerEvaluation from './pages/AnswerEvaluation';
import ManageStudentsPage from "./pages/ManageStudentsPage"; 
import Alert from './components/Alert'; 
import Navbar from './components/Navbar'; // new
import CreateClassPage from "./pages/CreateClassPage";
import HomePage from "./pages/HomePage";
import QuestionsPage from "./pages/QuestionsPage";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/evaluations" element={<AnswerEvaluation />} />
                    <Route path="/course" element={<GenericPage><StudentCourse /></GenericPage>} />
                    <Route path="/managestudents" element={<GenericPage><ManageStudentsPage/></GenericPage>}/> {/* Add ManageStudentsPage route */}
                    <Route path="/createclass" element={<CreateClassPage />} />
                    <Route path="/home" element={<GenericPage><HomePage/></GenericPage>}/>
                    <Route path="/questionspage" element={<GenericPage><QuestionsPage/></GenericPage>}/>

                    {/* add other routes here */}
                </Routes>
            </Router>
            <Alert /> {/* render Alert component */}
        </div>
    );
}

export default App;
