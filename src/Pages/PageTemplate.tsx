import React, { useEffect, useState } from 'react';

export interface Section {
  title: string;
  level?: number;
  content: string[];
  ref: string;
  video?: string;
  children?: Section[];
}

interface SectionContentProps {
    // sections: Section[];
    // sectionRefs: Record<string, React.RefObject<HTMLElement>>;
    section: Section;
}

interface QuickNavProps {
    sections: Section[];
    // sectionRefs: Record<string, React.RefObject<HTMLElement>>;
    // onSectionClick: (ref: React.RefObject<HTMLElement>) => void;
    onSectionClick: (ref: string) => void;
}

export interface PageContentProps {
    sections: Section[];
    showQuickNav?: boolean;
}

// const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
//     ref.current?.scrollIntoView({ behavior: 'smooth' });
// };

const QuickNav = (props: QuickNavProps) => {
  
  const renderSections = (sections: Section[], depth: number) => {
    return sections.map((section, index) => (
      <li className="quick-nav-item" 
        key={index} 
        style={{ 
          // marginLeft: `${depth * 1}em`, marginTop: '0.125em' 
          marginLeft: `${(depth - 2) * 1}em`,
          marginTop: depth === 2 ? '0.25em' : '0.125em'
        }}
      >
        <a 
          onClick={() => props.onSectionClick(section.ref)} 
          style={{ cursor: 'pointer', display: 'block', padding: '1px 0' }}
        >
          {section.title}
        </a>
        {section.children && section.children.length > 0 && (
          <ul className="quick-nav-ul">
            {renderSections(section.children, depth + 1)}
          </ul>
        )}
      </li>
    ));
  };

    return (
        <nav className="quick-nav">
            <ul className="quick-nav-ul">
            {/* {props.sections.map((section, index) => (
                <li className="quick-nav-item"
                key={index}
                style={{ 
                    marginLeft: `${(section.level - 2) * 1}em`,
                    marginTop: section.level === 2 ? '0.25em' : '0.125em'
                }}
                >
                <a 
                    onClick={() => props.onSectionClick(section.ref)}
                    style={{ cursor: 'pointer', display: 'block', padding: '1px 0' }}
                >
                    {section.title}
                </a>
                </li>
            ))} */}
            {renderSections(props.sections, 1)}
            </ul>
        </nav>
    );
};

interface VideoThumbnailProps {
    videoId: string
    title: string
}

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
                width="560"
                height="315"
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

// const SectionContent = (props: SectionContentProps) => {
//   return (
//     <>
//       {props.sections.map((section) => (
//         <section key={section.ref} ref={props.sectionRefs[section.ref]}>
//           {section.level === 1 && <h1>{section.title}</h1>}
//           {section.level === 2 && <h2>{section.title}</h2>}
//           {section.level === 3 && <h3>{section.title}</h3>}
//           {section.level === 4 && <h4>{section.title}</h4>}
//           {section.video && (
//             <VideoThumbnail videoId={section.video} title={section.title}/>
//           )}
//           {section.content.map((paragraph, index) => (
//             <p key={index}>{paragraph}</p>
//           ))}
//         </section>
//       ))}
//     </>
//   );
// };

const SectionContent = (props: SectionContentProps) => {
  return (
    <div className="fade-in">
      <h1>{props.section.title}</h1>
      {props.section.video && (
        <VideoThumbnail videoId={props.section.video} title={props.section.title}/>
      )}
      <p key={props.section.ref}>{props.section.content}</p>
    </div>
  )
};

export const PageContent = (props: PageContentProps) => {
  // const [sectionRefs, setSectionRefs] = useState<Record<string, React.RefObject<HTMLElement>>>({});
  const [currentSection, setCurrentSection] = useState<Section>(props.sections[0]);

  // useEffect(() => {
  //   const refs: Record<string, React.RefObject<HTMLElement>> = {};
  //   props.sections.forEach((section) => {
  //     refs[section.ref] = React.createRef<HTMLElement>();
  //   });
  //   setSectionRefs(refs);
  // }, [props.sections]);

  // if (Object.keys(sectionRefs).length === 0) {
  //   return null; // do not render component until refs are set
  // }

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
    if (ref != "") {
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
            {/* <SectionContent sections={props.sections} sectionRefs={sectionRefs} /> */}
            <SectionContent key={currentSection.ref} section={currentSection} />
        </div>
        {props.showQuickNav && (<hr />)}
        {props.showQuickNav && (
          <div className='page-quick-nav'>
            <QuickNav 
                sections={props.sections} 
                // sectionRefs={sectionRefs} 
                onSectionClick={setSectionFromRef} 
            />
        </div>
        )}
    </div>
  );
};

export default PageContent;

