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
import { ToastContainer } from 'react-toastify'; 
import Navbar from './components/Navbar'; 
import CreateClassPage from "./pages/CreateClassPage";
import HomePage from "./pages/HomePage";
import QuestionsPage from "./pages/QuestionsPage";
import AlertStoragePage from "./pages/AlertStoragePage";
import ViewEvaluations from './pages/ViewEvaluationsPage';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/evaluations" element={<AnswerEvaluation/>} />
                    <Route path="/course" element={<StudentCourse/>} />
                    <Route path="/managestudents" element={<ManageStudentsPage />} />
                    <Route path="/createclass" element={<GenericPage><CreateClassPage /></GenericPage>} />
                    <Route path="/home" element={<GenericPage><HomePage/></GenericPage>} />
                    <Route path="/createevaluation" element={<GenericPage><QuestionsPage /></GenericPage>} />
                    <Route path="/alert" element={<GenericPage><AlertStoragePage /></GenericPage>}/> {/* Add AlertStoragePage route */}
                    <Route path="/viewevaluations" element={<ViewEvaluations/>}/>
                </Routes>
            </Router>
            <ToastContainer /> {/* Render ToastContainer for notifications */}
        </div>
    );
}

export default App;
