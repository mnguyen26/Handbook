import { Section } from "./PageTemplate";
  
export const BottomHalfGuardSections: Section[] = [
    { 
        title: "Half Guard", 
        level: 1, 
        content: [`Half guard is kind of an umbrella term for a multitude of guards including z-guard, 
            reverse-de-la-riva, deep half guard, lockdown, reverse half-guard, butterfly half-guard, 
            coyote-guard and more. What they all seem to have in common is that the guard player is
            controlling or attached to one of the legs of the top player with the longitudinal axes
            of their bodies more or less pointed in the same direction. I don't think it's that 
            important to distinguish what is and what isn't half-guard. What's important to know is 
            that if you're old and/or fat, you probably play some form of half-guard because it doesn't
             require you to move dynamically; it's based on close-range attachment. `],
        ref: "bottomHalfGuardIntroRef",
        children: [
            {
                title: "Coyote Guard/Dog Fight",
                level: 2,
                content: [`The coyote-guard is one of the most common positions/sweeping sequences from half-guard.
                     It's based on building up on and underhook and slowly wrestling for top position. It's 
                     extremely simple and I think it's one of the more important skills to learn early because it
                      will be most people's first application of wrestling up from guard which you will need to be
                       able to do to balance your submission attacks from any guard. `,
                    `The guard was popularized by Lucas Leite but is better known nowadays as the dog-fight position.
                     There is a ton of crossover between finishing these sweep sequences and finishing a single-leg 
                     on the mat in wrestling. It's likely that it was developed indepedently so taking inspiration 
                     from wrestling to finish this position will be very useful. `],
                ref: "coyoteGuardRef",
                children: [
                    {
                        title: "Knee Shield: Rules of Thumb",
                        level: 3,
                        video: "RDhjyYAm7TI?start=0",
                        content: [
                            `The coyote-guard is usually entered from knee-shield half-guard/z-guard. There are a few 
                            things to consider about this position before entering in on your underhook.`
                        ],
                        ref: "zGuardRulesRef"
                    },
                    {
                        title: "Entering the Underhook",
                        level: 3,
                        video: "RDhjyYAm7TI?start=99",
                        content: [
                            `Getting your underhook should be your first look when playing half-guard and the first thing
                             to be aware of if you're trying to pass half-guard on top. Use you knee-shield to open up 
                             some space for your underhook, build up on your bottom elbow, and shoot your underhook; first
                             with your elbow and then pummel the rest of your arm. As soon as you have structure that you've
                             built up on and have taken your underhook, your next focus should be to keep your opponent from
                             rotating away from you and getting out from underneath them. Keep them from rotating away by 
                             controlling and internally rotating their leg with your outside leg and/or underhook arm and
                             get out from underneath them by hip-heisting and ending up to their side.`,
                            `The act of flaring their leg outward while pointing their knee inward should be very 
                             uncomfortable for the top player. It is, in fact, so much so that this maneuver is deemed
                             "potentially dangerous" in highschool wrestling and illegal. In jiujitsu we are allowed to 
                            stretch the limits of our ligaments so understand how controlling this technique can be but also
                             take care when using it with your training partners`
                        ],
                        ref: "enteringUnderhookRef"
                    },
                    {
                        title: "Sweeps",
                        level: 3,
                        content: [],
                        ref: "",
                        children: [
                            {
                                title: "Knee Tap",
                                level: 4,
                                video: "RDhjyYAm7TI?start=290",
                                content: [`If you can reach your oppponent's far leg, either by the knee or foot, 
                                    it's an easy sweep. Someone competently defending will not give this to you 
                                    not only because it's such an easy sweep but also because, defensively, they 
                                    should be trying to plant their opposite foot on the mat in order to be mobile
                                    and drive back into you. `],
                                ref: "kneeTapRef",
                            },
                            {
                                title: "Shelfing the Leg",
                                level: 4,
                                video: "RDhjyYAm7TI?start=321",
                                content: [`This is something I don't see very often with coyote-guard in jiujitsu but
                                    is quite common in wrestling. Getting to a position where your opponent's leg 
                                    is shelfed onto your thigh greatly limits their mobility, breaks their posture, 
                                    keeps you out of submission danger, and should put you in firm control to take
                                     top position.`],
                                ref: "shelfRef",
                                children: []
                            },
                            {
                                title: "More Options from the Shelf",
                                level: 4,
                                video: "RDhjyYAm7TI?start=380",
                                content: [`Similar to the front, if you can reach the opposite leg from the back, go 
                                    ahead and grab it because it's a pretty easy sweep from there.`],
                                ref: "moreShelfRef",
                            },
                            {
                                title: "Roll Through",
                                level: 4,
                                video: "RDhjyYAm7TI?start=409",
                                content: [`This is one that jiujitsu nerds love because it very clearly embodies the
                                     principle of using your opponent's energy against them. If you can't build up 
                                    because your opponent is driving very hard into you, go with the flow; be like water
                                     or whatever.`],
                                ref: "rollThroughRef",
                            },
                            {
                                title: "Limp arm",
                                level: 4,
                                video: "RDhjyYAm7TI?start=464",
                                content: [`This is another one that makes use of your opponent's own energy. One important
                                     thing to note is that you need to legitimately being trying to build up, circle, and 
                                    pressure your opponent or else they won't drive back into you. You need to send their 
                                    face into the mat when you limp arm. If instead you have an underhook and your opponent
                                     has a whizzer and neither is driving into the other, when you limp arm they'll just stay
                                    in place and be able to repummel their own underhook or worse you'll just end up exposing
                                     your own back. `],
                                ref: "limpArmRef",
                            },
                        ]
                    }
                ]
            }
        ]
    }   
];
      

export default BottomHalfGuardSections;