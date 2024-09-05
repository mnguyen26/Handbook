import React from 'react';
import AboutContent from './Pages/About';
import NeutralContent from './Pages/Neutral';
import SingleLegContent from './Pages/SingleLeg';
import DoubleLegContent from './Pages/DoubleLeg';

export const modalContentMap: { [key: string]: React.ComponentType } = {
    'about': AboutContent,
    'neutral': NeutralContent,
    'singleleg': SingleLegContent,
    'doubleleg': DoubleLegContent,
    // Add more mappings as needed
};

export default modalContentMap;
