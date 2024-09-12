import React, { useEffect, useState } from 'react';

export interface Section {
  title: string;
  level: number;
  video?: string;
  content: string[];
  ref: string;
}

interface SectionContentProps {
    sections: Section[];
    sectionRefs: Record<string, React.RefObject<HTMLElement>>;
}

interface QuickNavProps {
    sections: Section[];
    sectionRefs: Record<string, React.RefObject<HTMLElement>>;
    onSectionClick: (ref: React.RefObject<HTMLElement>) => void;
}

export interface PageContentProps {
    sections: Section[];
    showQuickNav?: boolean;
}

const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
};

const QuickNav = (props: QuickNavProps) => {
    return (
        <nav className="quick-nav">
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
            {props.sections.map((section, index) => (
                <li className="quick-nav-item"
                key={index}
                style={{ 
                    marginLeft: `${(section.level - 2) * 1}em`,
                    marginTop: section.level === 2 ? '0.25em' : '0.125em'
                }}
                >
                <a 
                    onClick={() => props.onSectionClick(props.sectionRefs[section.ref])}
                    style={{ cursor: 'pointer', display: 'block', padding: '1px 0' }}
                >
                    {section.title}
                </a>
                </li>
            ))}
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

const SectionContent = (props: SectionContentProps) => {
  return (
    <>
      {props.sections.map((section) => (
        <section key={section.ref} ref={props.sectionRefs[section.ref]}>
          {section.level === 1 && <h1>{section.title}</h1>}
          {section.level === 2 && <h2>{section.title}</h2>}
          {section.level === 3 && <h3>{section.title}</h3>}
          {section.level === 4 && <h4>{section.title}</h4>}
          {section.video && (
            <VideoThumbnail videoId={section.video} title={section.title}/>
          )}
          {section.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>
      ))}
    </>
  );
};

export const PageContent = (props: PageContentProps) => {
  const [sectionRefs, setSectionRefs] = useState<Record<string, React.RefObject<HTMLElement>>>({});

  useEffect(() => {
    const refs: Record<string, React.RefObject<HTMLElement>> = {};
    props.sections.forEach((section) => {
      refs[section.ref] = React.createRef<HTMLElement>();
    });
    setSectionRefs(refs);
  }, [props.sections]);

  if (Object.keys(sectionRefs).length === 0) {
    return null; // do not render component until refs are set
  }

  return (
    <div className='page-content'>
        <div className='page-sections'>
            <SectionContent sections={props.sections} sectionRefs={sectionRefs} />
        </div>
        {props.showQuickNav && (
        <div className='page-quick-nav'>
            <QuickNav 
                sections={props.sections} 
                sectionRefs={sectionRefs} 
                onSectionClick={scrollToSection} 
            />
        </div>
        )}
    </div>
  );
};

export default PageContent;

