import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const storeAlert = (type, message) => {
    const alerts = JSON.parse(localStorage.getItem('alerts')) || [];
    const newAlert = {
        id: Date.now(),
        type,
        message,
        timestamp: new Date().toISOString(),
    };
    alerts.push(newAlert);
    localStorage.setItem('alerts', JSON.stringify(alerts));
};

export const notifySuccess = (message) => {
    toast.success(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    storeAlert('success', message);
};

export const notifyWarning = (message) => {
    toast.warn(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    storeAlert('warning', message);
};

export const notifyError = (message) => {
    toast.error(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    storeAlert('error', message);
};

const Alert = () => {
    return <ToastContainer />;
};

export default Alert;
