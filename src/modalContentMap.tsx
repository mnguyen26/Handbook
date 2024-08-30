import React from 'react';

const AboutContent = () => (
    <div>
        <h2>About The Grappler's Handbook</h2>
        <p>This is the about content for The Grappler's Handbook.</p>
    </div>
);

const ContactContent = () => (
    <div>
        <h2>Contact Us</h2>
        <p>Here's how you can contact us...</p>
    </div>
);

// Add more content components as needed

export const modalContentMap: { [key: string]: React.ComponentType } = {
    'about': AboutContent,
    'contact': ContactContent,
    // Add more mappings as needed
};
