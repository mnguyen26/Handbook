import { PageContent, Section, PageContentProps } from './Pages/PageTemplate';
import { aboutSections } from './Pages/About';
import { neutralSections } from './Pages/Neutral';
import { singleLegSections } from './Pages/SingleLeg';



export const ContentMap: { [key: string]: PageContentProps } = {
    'about': { sections: aboutSections },
    'neutral': { sections: neutralSections },
    'singleleg': { sections: singleLegSections, showQuickNav: true },
};

export const renderContent = (key: string) => {
    const pageContentProps = ContentMap[key];

    if (!pageContentProps) return null;
    return <PageContent 
            sections={pageContentProps.sections} 
            showQuickNav={pageContentProps.showQuickNav} 
            />;
};

export default ContentMap;
