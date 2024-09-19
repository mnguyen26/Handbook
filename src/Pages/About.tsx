import { Section } from "./PageTemplate";
import Quotes from "./Quotes";
  
export const aboutSections: Section[] = [
  { 
    title: "About the Grappler's Handbook", 
    level: 1, 
    content: [`The Grapplers Handbook is my effort to create an open educational resource for the jiu jitsu and grappling community. This material is designed as a quick reference for practitioners at the white to blue belt level (0-4 years of experience), though there's likely something of value here for everyone. The content is drawn from my own 
            experiences over the years; things I've learned from my coaches, training partners, seminars, instructional materials I've purchased and stolen, and my own 
            experimentation in training and competition. I, myself, am continually learning and our sport is continually evolving so the content will constantly be changing
            accordingly. I hope this resource is useful to you as an informational tool, but remember, the best way to learn and improve is to get on the mats and train. 
            Get started by searching for something in the table of contents.`],
    ref: "aboutRef",
    component: () => <Quotes />
  }
];

export default aboutSections;