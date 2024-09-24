import { Section } from "./PageTemplate";
import Quotes from "./Quotes";
  
export const aboutSections: Section[] = [
  { 
    title: "About the Grappler's Handbook", 
    level: 1, 
    content: [`Gym memberships are expensive. Gis and uniforms are expensive. Tournaments are expensive. And hopefully you haven't experienced this yet, but hospital visits are also expensive. It's totally reasonable to attach costs to goods and services, but I don't want simple access to information to be another financial barrier to our sport.`,
      `The Grapplers Handbook is my effort to create an open educational resource for the jiujitsu and grappling community. The material is designed as a quick reference for practitioners from white to blue belt (0-4 years of experience) but there is probably something of value here for everyone. The content is drawn from my own experience over the years—things I've learned from coaches, training partners, seminars, instructionals, and my own experimentation in training and competition. Jiujitsu is a continually evolving sport, and I'm continually learning, so the content here will constantly be changing accordingly.`,
      `Much like Wikipedia, it can only serve as an introduction to various topics and not as a comprehensive final point of reference. I hope you find this resource useful as an informational tool, but remember, the best way to learn and improve is to get on the mats and train. Get started by searching for something in the table of contents.`,
      ],
    ref: "aboutRef",
    component: () => <Quotes />
  }
];

export default aboutSections;