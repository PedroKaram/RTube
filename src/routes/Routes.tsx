import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import VideoPage from '../pages/VideoPage/VideoPage.tsx';
import AudioOnlyPage from '../pages/AudioOnlyPage/AudioOnlyPage.tsx';
import App from '../App.tsx';
import HistoryPage from '../pages/HistoryPage/HistoryPage.tsx';
import AccountPage from '../pages/AccountPage/AccountPage.tsx';
import SettingsPage from '../pages/SettingsPage/SettingsPage.tsx';

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
