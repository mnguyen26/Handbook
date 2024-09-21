import { PageContent, PageContentProps } from './Pages/PageTemplate';
import { aboutSections } from './Pages/About';
import { neutralSections } from './Pages/Neutral';
import { singleLegSections } from './Pages/SingleLeg';
import { underhookSections } from './Pages/Underhook';
import { topClosedGuardSections } from './Pages/TopClosedGuard'

export const ContentMap: { [key: string]: PageContentProps } = {
    'about': { sections: aboutSections },
    'neutral': { sections: neutralSections },
    'singleleg': { sections: singleLegSections, showQuickNav: true },
    'underhook': {sections: underhookSections, showQuickNav: true},
    'topclosedguard': {sections: topClosedGuardSections, showQuickNav: true},
};

export const renderContent = (key: string) => {
    const pageContentProps = ContentMap[key];

    if (pageContentProps) {
        return <PageContent 
                sections={pageContentProps.sections} 
                showQuickNav={pageContentProps.showQuickNav} 
                />;
    }
    else {
        return null
    }
};

export default ContentMap;
