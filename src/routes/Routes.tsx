import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import VideoPage from '../pages/VideoPage/VideoPage';
import AudioOnlyPage from '../pages/AudioOnlyPage/AudioOnlyPage';
import App from '../App';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "", element: <VideoPage />},
            {path: "AudioOnly", element: <AudioOnlyPage />},
        ]
    }
])
