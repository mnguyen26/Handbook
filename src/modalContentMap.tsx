import React from 'react';
import AboutContent from './Pages/About';
import NeutralContent from './Pages/Neutral';
import SingleLegContent from './Pages/SingleLeg';

export const modalContentMap: { [key: string]: React.ComponentType } = {
    'about': AboutContent,
    'neutral': NeutralContent,
    'singleleg': SingleLegContent,
    // Add more mappings as needed
};
