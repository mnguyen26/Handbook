import React, { useRef, useState } from 'react';
import { Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface Section {
  title: string;
  ref: React.RefObject<HTMLElement>;
  level: number;
}

interface QuickNavProps {
  sections: Section[];
  onSectionClick: (ref: React.RefObject<HTMLElement>) => void;
}

interface StickyHeaderProps {
    onMenuClick: (event: React.MouseEvent | React.KeyboardEvent) => void;
}

interface NavigationDrawerProps {
    isOpen: boolean;
    onClose: (event: React.MouseEvent | React.KeyboardEvent) => void;
    sections: Section[];
    onSectionClick: (ref: React.RefObject<HTMLElement>) => void;
}

const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
  ref.current?.scrollIntoView({ behavior: 'smooth' });
};

const StickyHeader: React.FC<StickyHeaderProps> = ({ onMenuClick }) => {
    return (
        <div 
            style={{
                position: 'sticky',
                top: 0,
                backgroundColor: 'white',
                padding: '8px 16px',
                display: 'flex',
                alignItems: 'center',
                zIndex: 1000,
                boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
            }}
        >
            <IconButton 
                onClick={onMenuClick} 
                edge="start" 
                color="inherit" 
                aria-label="menu"
                size="small"
            >
                <MenuIcon fontSize="small" />
            </IconButton>
        </div>
    );
};

const QuickNav: React.FC<QuickNavProps> = ({ sections, onSectionClick }) => {
  return (
    <nav className="quick-nav">
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {sections.map((section, index) => (
          <li 
            key={index}
            style={{ 
              marginLeft: `${(section.level - 2) * 10}px`,
              fontSize: `${1 - (section.level - 2) * 0.1}em`,
              marginTop: section.level === 2 ? '4px' : '2px'
            }}
          >
            <a 
              onClick={() => onSectionClick(section.ref)}
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

const NavigationDrawer: React.FC<NavigationDrawerProps> = ({ isOpen, onClose, sections, onSectionClick }) => {
    return (
        <div id="modal-container" className="modal-container relative">
            <Drawer 
                anchor="left" 
                open={isOpen} 
                onClose={onClose}
                variant="temporary"
                ModalProps={{
                    container: document.getElementById('modal-container'),
                    style: { position: 'absolute' }
                }}
                PaperProps={{
                    style: { 
                        position: 'absolute',
                        left: 0,
                        width: '280px',
                    }
                }}
                SlideProps={{
                    style: {
                        width: '100%',
                        transform: 'none',
                    }
                }}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: '200px', 
                        position: 'absolute',
                        height: '100%',
                    },
                }}
            >
                <div
                    role="presentation"
                    onClick={onClose}
                    onKeyDown={onClose}
                    style={{ width: '60%', padding: '32px' }}
                >
                    <QuickNav sections={sections} onSectionClick={onSectionClick} />
                </div>
            </Drawer>
        </div>
    );
};

const SingleLegContent = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const topRef = useRef<HTMLElement>(null);
    const mechanicsRef = useRef<HTMLElement>(null);
    const setupsRef = useRef<HTMLElement>(null);
    const finishesRef = useRef<HTMLElement>(null);
    const standingFinishesRef = useRef<HTMLElement>(null);
    const matFinishesRef = useRef<HTMLElement>(null);

    const sections: Section[] = [
        { title: 'Top', ref: topRef, level: 2 },
        { title: 'Mechanics', ref: mechanicsRef, level: 2 },
        { title: 'Setups', ref: setupsRef, level: 2 },
        { title: 'Finishes', ref: finishesRef, level: 2 },
        { title: 'Standing Finishes', ref: standingFinishesRef, level: 3 },
        { title: 'Mat Finishes', ref: matFinishesRef, level: 3 },
    ];

    const toggleDrawer = (open: boolean) => (event: React.MouseEvent | React.KeyboardEvent) => {
        if (event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Tab') {
        return;
        }
        if (event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Shift') {
            return;
        }
        setIsDrawerOpen(open);
    };

    return (
        <div>
            <StickyHeader onMenuClick={toggleDrawer(true)} />   

            <NavigationDrawer 
                isOpen={isDrawerOpen}
                onClose={toggleDrawer(false)}
                sections={sections}
                onSectionClick={(ref) => {
                    scrollToSection(ref);
                    setIsDrawerOpen(false);
                }}
            />

            <section ref={topRef}>
                <h1>Single Leg Takedown</h1>
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
        </div>
  );
};

export default SingleLegContent;

