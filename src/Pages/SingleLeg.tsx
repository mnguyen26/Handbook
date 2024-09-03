import React, { useRef } from 'react';

interface Section {
  title: string;
  ref: React.RefObject<HTMLElement>;
  level: number;
}

interface QuickNavProps {
  sections: Section[];
  onSectionClick: (ref: React.RefObject<HTMLElement>) => void;
}

const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
  ref.current?.scrollIntoView({ behavior: 'smooth' });
};

const QuickNav: React.FC<QuickNavProps> = ({ sections, onSectionClick }) => {
  return (
    <nav className="quick-nav">
      <p className="text-xs text-gray-500">Jump to:</p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {sections.map((section, index) => (
          <li 
            key={index}
            style={{ 
              marginLeft: `${(section.level - 2) * 20}px`,
              fontSize: `${1 - (section.level - 2) * 0.1}em`,
              marginTop: section.level === 2 ? '10px' : '5px'
            }}
          >
            <a 
              onClick={() => onSectionClick(section.ref)}
              style={{ cursor: 'pointer' }}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const SingleLegContent = () => {
  const topRef = useRef<HTMLElement>(null);
  const mechanicsRef = useRef<HTMLElement>(null);
  const setupsRef = useRef<HTMLElement>(null);
  const finishesRef = useRef<HTMLElement>(null);
  const standingFinishesRef = useRef<HTMLElement>(null);
  const matFinishesRef = useRef<HTMLElement>(null);

  const sections: Section[] = [
    { title: 'Top', ref: topRef, level: 1 },
    { title: 'Mechanics', ref: mechanicsRef, level: 2 },
    { title: 'Setups', ref: setupsRef, level: 2 },
    { title: 'Finishes', ref: finishesRef, level: 2 },
    { title: 'Standing Finishes', ref: standingFinishesRef, level: 3 },
    { title: 'Mat Finishes', ref: matFinishesRef, level: 3 },
  ];

  const scrollToTop = () => {
    scrollToSection(topRef);
  };

  return (
    <div className="single-leg-content relative">
      <section ref={topRef}>
        <h1>Single Leg Takedown</h1>
        <QuickNav sections={sections.slice(1)} onSectionClick={scrollToSection} />
      </section>
      
      <section ref={mechanicsRef}>
        <h2>1. Mechanics</h2>
        <p>Before you move onto the rest of this section, make sure you actually know how to shoot a single leg takedown. This is a short overview of the mechanics of a basic single leg.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id aliquam tincidunt, nisi nunc tincidunt urna, nec tincidunt nunc nunc nec nunc. Sed euismod, nunc id aliquam tincidunt, nisi nunc tincidunt urna, nec tincidunt nunc nunc nec nunc. Sed euismod, nunc id aliquam tincidunt, nisi nunc tincidunt urna, nec tincidunt nunc nunc nec nunc.</p>
        <p>Praesent vel ante in sapien placerat rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut non enim eleifend felis pretium feugiat. Vivamus quis mi. Phasellus a est. Phasellus magna. In hac habitasse platea dictumst. Curabitur at lacus ac velit ornare lobortis.</p>
      </section>

      <section ref={setupsRef}>
        <h2>2. Setups</h2>
        <p>Various setups for entering on a single leg.</p>
        <p>Fusce neque. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Vivamus aliquet elit ac nisl. Fusce fermentum odio nec arcu. Vivamus euismod mauris. In ut quam vitae odio lacinia tincidunt. Praesent ut ligula non mi varius sagittis. Cras sagittis. Praesent ac sem eget est egestas volutpat.</p>
        <p>Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Fusce pharetra convallis urna. Quisque ut nisi. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Suspendisse non nisl sit amet velit hendrerit rutrum. Ut leo. Ut a nisl id ante tempus hendrerit.</p>
      </section>

      <section ref={finishesRef}>
        <h2>3. Finishes</h2>
        
        <section ref={standingFinishesRef}>
          <h3>Standing Finishes</h3>
          <p>Various finishes for the single leg from the standing position.</p>
          <p>Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci.</p>
        </section>
        
        <section ref={matFinishesRef}>
          <h3>Mat Finishes</h3>
          <p>Various finishes for the single leg on the mat.</p>
          <p>Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam sagittis.</p>
          <p>Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis diam. Pellentesque ut neque.</p>
        </section>
      </section>

      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: 10,
          right: "calc(1em + 30px)",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "20px",
          color: "#888"
        }}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
};

export default SingleLegContent;

