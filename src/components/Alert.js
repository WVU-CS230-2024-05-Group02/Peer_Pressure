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
    // Add the new alert to the list
    alerts.push(newAlert);

    // Filter out alerts older than 7 days
    const now = new Date();
    const sevenDaysAgo = new Date(now.setDate(now.getDate() - 7));
    const recentAlerts = alerts.filter(alert => new Date(alert.timestamp) >= sevenDaysAgo);

    // Keep only the most recent 50 alerts
    while (recentAlerts.length > 50) {
        recentAlerts.shift(); // Remove the oldest alert
    }

    // Save the updated list to localStorage
    localStorage.setItem('alerts', JSON.stringify(recentAlerts));
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
