import React from 'react';
import AboutContent from './Pages/About';
import NeutralContent from './Pages/Neutral';

export const modalContentMap: { [key: string]: React.ComponentType } = {
    'about': AboutContent,
    'neutral': NeutralContent,
    // Add more mappings as needed
};
