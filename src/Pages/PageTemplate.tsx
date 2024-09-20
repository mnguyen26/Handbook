import React, { useEffect, useState } from 'react';

export interface Section {
  title: string;
  level?: number;
  content: string[];
  ref: string;
  video?: string;
  component?: React.FC;
  children?: Section[];
}

interface SectionContentProps {
    section: Section;
}

interface QuickNavProps {
    sections: Section[];
    onSectionClick: (ref: string) => void;
}

export interface PageContentProps {
    sections: Section[];
    showQuickNav?: boolean;
}

interface VideoThumbnailProps {
  videoId: string
  title: string
}

const QuickNav = (props: QuickNavProps) => {
  
  const renderSections = (sections: Section[], depth: number) => {
    const defaultFontSize = 1.4;
    const decStep = .2;
    const quickNavItem = document.querySelector('.quick-nav-item') as Element | null;
    const customFontSize = quickNavItem 
      ? parseFloat(getComputedStyle(quickNavItem).getPropertyValue('--custom-font-size')) || defaultFontSize
      : defaultFontSize;

    return (
      sections.map((section, index) => (
        <>
          <li className="quick-nav-item" 
            key={index} 
            style={{ 
              marginLeft: `${(depth - 2) * 1}em`,
              marginTop: depth === 2 ? '0.25em' : '0.125em',
              fontSize: `${customFontSize - (decStep*depth)}vw`,
              transition: 'font-size 0.2s'
            }}
            onMouseOver={(e) => {
              if (section.ref) {
                e.currentTarget.style.fontSize = `${(customFontSize+decStep) - (decStep*depth)}vw`;
              }
            }}
            onMouseOut={(e) => {
              if (section.ref) {
                e.currentTarget.style.fontSize = `${customFontSize - (decStep*depth)}vw`;
              }
            }}
          >
            <div 
              onClick={() => props.onSectionClick(section.ref)} 
              style={{ cursor: section.ref ? 'pointer' : 'default', display: 'block', padding: '1px 0' }}
            >
              {section.title}
            </div>
          </li>
          {section.children && section.children.length > 0 && (
            <div>
              {renderSections(section.children, depth + 1)}
            </div>
          )}
        </>
      ))
    );
  };

  return (
      <nav className="quick-nav">
          <ul className="quick-nav-ul">
          {renderSections(props.sections, 1)}
          </ul>
      </nav>
  );
};

const VideoThumbnail = (props: VideoThumbnailProps) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleOpenModal = () => setIsOpen(true);
    const handleCloseModal = () => setIsOpen(false);

    const extractVideoId = (url: string) => {
        const videoId = url.split('?')[0];
        return videoId;
    };

    const videoId = extractVideoId(props.videoId);
  
    return (
      <div className="video-thumbnail-container">
        <img className="video-thumbnail"
          src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
          alt="Video Thumbnail"
          onClick={handleOpenModal}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
  
        {isOpen && (
          <div className="video-modal"
            onClick={handleCloseModal}
          >
            <div className="video-container"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${props.videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: '4px' }}
              ></iframe>
            </div>
          </div>
        )}
      </div>
    );
};

const SectionContent = (props: SectionContentProps) => {
  return (
    <div className="fade-in">
      <h1>{props.section.title}</h1>
      {props.section.video && (
        <VideoThumbnail videoId={props.section.video} title={props.section.title}/>
      )}
      {props.section.content.map((item, index) => (
        <p key={`${props.section.ref}-${index}`}>
          <span style={{ marginLeft: '1em' }}>&nbsp;</span>{item}
        </p>
      ))}
      {props.section.component && <props.section.component />} 
    </div>
  )
};

export const PageContent = (props: PageContentProps) => {
  const [currentSection, setCurrentSection] = useState<Section>(props.sections[0]);

  useEffect(() => {
    setCurrentSection(props.sections[0]);
  }, [props.sections])

  const getSectionFromRef = (ref: string, sections: Section[]): Section | undefined => {
    for (const section of sections) {
      if (section.ref === ref) {
        return section;
      }
      if (section.children) {
        const childrenResults = getSectionFromRef(ref, section.children);
        if (childrenResults) {
          return childrenResults;
        }
      }
    }
    return undefined;
  }
  
  const setSectionFromRef = (ref: string) => {
    if (ref !== "") {
      const newSection = getSectionFromRef(ref, props.sections);
      if (newSection) {
        setCurrentSection(newSection);
      }
      else {
        setCurrentSection({title: "Page not found", content: [""], ref: ""})
      }
    }
  }

  return (
    <div className='page-content'>
        <div className='page-sections'>
            <SectionContent key={currentSection.ref} section={currentSection} />
        </div>
        {props.showQuickNav && (<hr />)}
        {props.showQuickNav && (
          <div className='page-quick-nav'>
            <QuickNav 
                sections={props.sections} 
                onSectionClick={setSectionFromRef} 
            />
        </div>
        )}
    </div>
  );
};

export default PageContent;

