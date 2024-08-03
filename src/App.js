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

// router for all of the pages of the app
// Each url is reflective of the element it is displaying
function App() {
    return (
        <div className="App">
            {/* The router element allows the different routes to show different page elements */}
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    {/* Where the user will go to answer the evaluations that the instructor sends */}
                    <Route path="/evaluations" element={<AnswerEvaluation/>} />
                    {/* The home page for current course for the instructor and student - can view evaluations and grades here */}
                    <Route path="/course" element={<StudentCourse/>} />
                    {/* For the instructor to manage who all is in the selected course and what group they are in */}
                    <Route path="/managestudents" element={<ManageStudentsPage />} />
                    <Route path="/createclass" element={<GenericPage><CreateClassPage /></GenericPage>} />
                    <Route path="/home" element={<GenericPage><HomePage/></GenericPage>} />
                    <Route path="/createevaluation" element={<GenericPage><QuestionsPage /></GenericPage>} />
                    <Route path="/alert" element={<GenericPage><AlertStoragePage /></GenericPage>}/> {/* Add AlertStoragePage route */}
                    <Route path="/viewevaluations" element={<ViewEvaluations/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
