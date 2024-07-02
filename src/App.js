// src/App.js
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
import Alert, { notifySuccess, notifyWarning, notifyError } from './components/Alert';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyles';
import themes from './themes';
import ManageStudentsPage from "./pages/ManageStudentsPage";

function App() {
    return (
        <ThemeProvider theme={themes}>
            {/* apply global styles */}
            <GlobalStyle />
        <div className="App">
            {/* set up routing for the application */}
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/manageStudents" element={<ManageStudentsPage />} />
                    {/* add other routes here */}
                </Routes>
            </Router>
            {/* render the Alert component to handle notifications */}
            <Alert />
            {/* example buttons to trigger different notifications */}
            <button onClick={() => notifySuccess('Success!')}>Notify Success</button>
            <button onClick={() => notifyWarning('Something is not correct!')}>Notify Warning</button>
            <button onClick={() => notifyError('Error!')}>Notify Error</button>
        </div>
        </ThemeProvider>
    );
}

export default App;
