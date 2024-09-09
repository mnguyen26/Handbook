import React, { useRef, useEffect, useState } from 'react';

interface Section {
  title: string;
  level: number;
  content: string[]; // Changed from string to string[]
  ref: string;
}

interface QuickNavProps {
  sections: Section[];
  sectionRefs: Record<string, React.RefObject<HTMLElement>>;
  onSectionClick: (ref: React.RefObject<HTMLElement>) => void;
}

const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
  ref.current?.scrollIntoView({ behavior: 'smooth' });
};

const QuickNav = (props: QuickNavProps) => {

  return (
    <nav className="quick-nav">
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {props.sections.map((section, index) => (
          <li 
            key={index}
            style={{ 
              marginLeft: `${(section.level - 2) * 10}px`,
              fontSize: `${1 - (section.level - 2) * 0.1}em`,
              marginTop: section.level === 2 ? '4px' : '2px'
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

interface SectionContentProps {
  sections: Section[];
  sectionRefs: Record<string, React.RefObject<HTMLElement>>;
}

const SectionContent = (props: SectionContentProps) => {
  return (
    <>
      {props.sections.map((section) => (
        <section key={section.ref} ref={props.sectionRefs[section.ref]}>
          {section.level === 1 && <h1>{section.title}</h1>}
          {section.level === 2 && <h2>{section.title}</h2>}
          {section.level === 3 && <h3>{section.title}</h3>}
          {section.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>
      ))}
    </>
  );
};

const SingleLegContent = () => {
  const sections: Section[] = [
    { 
      title: "Single Leg Takedown", 
      level: 1, 
      content: ["Introduction to single leg takedown..."],
      ref: "introRef"
    },
    { 
      title: "Mechanics", 
      level: 2, 
      content: [
        "Before you move onto the rest of this section, make sure you actually know how to shoot a single leg takedown.",
        "This is a short overview of the mechanics of a basic single leg. Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
      ],
      ref: "mechanicsRef"
    },
    { 
      title: "Setup", 
      level: 2, 
      content: [
        "The setup is crucial for a successful single leg takedown. It involves creating an opening or distraction to allow you to penetrate and grab the leg. Common setups include fakes, level changes, and tie-ups.",
        "This is a short overview of the mechanics of a basic single leg. Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
      ],
      ref: "setupRef"
    },
    { 
      title: "Penetration", 
      level: 3, 
      content: [
        "Penetration is the act of driving forward and getting deep on your opponent's leg. It requires explosive movement and good timing.",
        "This is a short overview of the mechanics of a basic single leg. Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
      ],
      ref: "penetrationRef"
    },
    { 
      title: "Finishing Techniques", 
      level: 2, 
      content: [
        "Once you've secured the leg, there are various ways to finish the takedown. The choice of finish depends on your opponent's reaction and your preferred style.",
        "This is a short overview of the mechanics of a basic single leg. Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
      ],
      ref: "finishingRef"
    },
    { 
      title: "Running the Pipe", 
      level: 3, 
      content: [
        "This is a classic finish where you circle towards your opponent's back while lifting their leg, causing them to lose balance and fall.",
        "This is a short overview of the mechanics of a basic single leg. Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
      ],
      ref: "runningPipeRef"
    },
    { 
      title: "Inside Trip", 
      level: 3, 
      content: [
        "An inside trip involves using your leg to block your opponent's free leg from the inside, while driving forward to complete the takedown.",
        "This is a short overview of the mechanics of a basic single leg. Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
      ],
      ref: "insideTripRef"
    },
    { 
      title: "Common Defenses", 
      level: 2, 
      content: [
        "Understanding common defenses against the single leg takedown is crucial for both offensive and defensive purposes. This section covers sprawling, whizzer, and limp leg defenses.",
        "This is a short overview of the mechanics of a basic single leg. Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
      ],
      ref: "defensesRef"
    },
    { 
      title: "Drills and Practice", 
      level: 2, 
      content: [
        "Consistent practice is key to mastering the single leg takedown. This section provides a series of drills to improve your technique, timing, and explosiveness.",
        "This is a short overview of the mechanics of a basic single leg. Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
      ],
      ref: "drillsRef"
    },
    { 
      title: "Advanced Variations", 
      level: 2, 
      content: [
        "Once you've mastered the basics, you can explore advanced variations of the single leg takedown. This section covers high crotch, sweep single, and ankle pick variations.",
        "This is a short overview of the mechanics of a basic single leg. Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
      ],
      ref: "advancedRef"
    },
    { 
      title: "Conclusion", 
      level: 2, 
      content: [
        "The single leg takedown is a fundamental technique in wrestling and mixed martial arts. With proper practice and application, it can become a powerful tool in your arsenal.",
        "This is a short overview of the mechanics of a basic single leg. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        "Remember, mastering the single leg takedown takes time and dedication. Continue to practice and refine your technique, and don't be afraid to experiment with different setups and finishes to find what works best for your style."
      ],
      ref: "conclusionRef"
    },
  ];

  const [sectionRefs, setSectionRefs] = useState<Record<string, React.RefObject<HTMLElement>>>({});

  useEffect(() => {
    const refs: Record<string, React.RefObject<HTMLElement>> = {};
    sections.forEach((section) => {
      refs[section.ref] = React.createRef<HTMLElement>();
    });
    setSectionRefs(refs);
  }, []);

  if (Object.keys(sectionRefs).length === 0) {
    return null; // do not render component until refs are set
  }

  return (
    <div style={{ display: 'flex' }} className='page-content'>
      <div style={{ flex: 1, paddingRight: '20px' }}>
        <SectionContent sections={sections} sectionRefs={sectionRefs} />
      </div>

      <div style={{
        width: '200px',
        position: 'sticky',
        top: '20px',
        alignSelf: 'flex-start',
        maxHeight: 'calc(100vh - 40px)',
        overflowY: 'auto'
      }}>
        <QuickNav 
          sections={sections} 
          sectionRefs={sectionRefs} 
          onSectionClick={scrollToSection} 
        />
      </div>
    </div>
  );
};

export default SingleLegContent;

