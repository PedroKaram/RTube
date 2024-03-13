import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import VideoPage from '../pages/VideoPage/VideoPage';
import AudioOnlyPage from '../pages/AudioOnlyPage/AudioOnlyPage';
import App from '../App';
import HistoryPage from '../pages/HistoryPage/HistoryPage';
import AccountPage from '../pages/AccountPage/AccountPage';
import SettingsPage from '../pages/SettingsPage/SettingsPage';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "", element: <VideoPage />},
            {path: "AudioOnly", element: <AudioOnlyPage />},
            {path: "History", element: <HistoryPage />},
            {path: "Account", element: <AccountPage />},
            {path: "Settings", element: <SettingsPage />}
        ]
    }
])
