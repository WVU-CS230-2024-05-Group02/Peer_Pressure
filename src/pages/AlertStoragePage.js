import React, { useEffect, useState } from 'react';
import { notifySuccess, notifyWarning, notifyError } from '../components/Alert';
import '../App.css';

const getRecentAlerts = () => {
    const alerts = JSON.parse(localStorage.getItem('alerts')) || [];
    const now = new Date();
    const sevenDaysAgo = new Date(now.setDate(now.getDate() - 7));
    return alerts.filter(alert => new Date(alert.timestamp) >= sevenDaysAgo);
};

const AlertStoragePage = () => {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        setAlerts(getRecentAlerts().reverse());
    }, []);

    return (
        <div className="alert-storage-container">
            <h1>Alert Storage Page</h1>
            <div style={{ marginTop: '10px' }}>
                <button onClick={() => notifySuccess('success!')}>Test Success Notification</button>
                <button onClick={() => notifyWarning('warning!')}>Test Warning Notification</button>
                <button onClick={() => notifyError('error!')}>Test Error Notification</button>
            </div>
            <div style={{ marginTop: '20px' }}>
                <h2>Recent Alerts (Last 7 Days)</h2>
                <ul>
                    {alerts.map(alert => (
                        <li key={alert.id}>
                            <strong>{alert.type.toUpperCase()}:</strong> {alert.message} <em>({new Date(alert.timestamp).toLocaleString()})</em>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AlertStoragePage;
