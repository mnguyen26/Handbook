import { PageContent, PageContentProps } from './Pages/PageTemplate';
import { aboutSections } from './Pages/About';
import { neutralSections } from './Pages/Neutral';
import { singleLegSections } from './Pages/SingleLeg';
import { underhookSections } from './Pages/Underhook';
import { topClosedGuardSections } from './Pages/TopClosedGuard';
import { BottomHalfGuardSections } from './Pages/BottomHalfGuard';
import { bottomMountSections } from './Pages/BottomMount';


export const ContentMap: { [key: string]: PageContentProps } = {
    'about': { sections: aboutSections },
    'neutral': { sections: neutralSections },
    'singleleg': { sections: singleLegSections},
    'underhook': {sections: underhookSections},
    'topclosedguard': {sections: topClosedGuardSections},
    'bottomhalfguard': {sections: BottomHalfGuardSections},
    'bottomMount': {sections: bottomMountSections},
};

export const renderContent = (key: string) => {
    const pageContentProps = ContentMap[key];

    if (pageContentProps) {
        return <PageContent 
                sections={pageContentProps.sections} 
                />;
    }
    else {
        return null
    }
};

export default ContentMap;
