import { Section } from "./PageTemplate";
  
export const bottomMountSections: Section[] = [
  { 
    title: "Bottom Mount", 
    level: 1, 
    content: [`Escaping mount is much more important in the context of self-defense or MMA than in pure grappling. 
        If the top player is limited to submission attempts without the use of strikes, the bottom player can often
         defend simply by keeping their limbs tight and shelling up to avoid submissions. It's easier than you might
         think to avoid getting submitted in this way, but just surviving is egregious stalling. In Jiujitsu, the 
         goal should always be to advance toward submission. If you're in an advantageous offensive position, your
         objective isn't just to hold it; you should be actively working to advance toward a submission. Likewise,
         if you're in a disadvantageous defensive position, your first step toward submission is escaping to a 
        neutral position, and then moving toward an advantageous offensive position.`,
        `Being able to play from behind is crucial in all forms of competition. As Teddy Atlas said, “A fight 
        isn't a fight until there's a struggle.” You need to have a plan when things aren't going your way, and 
        unless you're intentionally avoiding an appropriate level of competition, you will eventually find yourself
         in a bad situation. Jiujitsu and fighting aren't just tests of technical skill, there is also a human 
        element of having the balls to persist. Too often, I've seen people give up when they fall behind, and those
         are the moments that truly reveal who we are. Don't be the kind of person who stays stuck in a bad position,
         accepting defeat instead of taking the risk to escape. Losing because you tried to win is far more preferable
         than just accepting defeat.`
    ],
    ref: "bottomMountEscapesRef",
    children: [
        {
            title: "Escapes",
            level: 2,
            content: [``],
            video: "",
            ref: "",
            children: [
                {
                    title: "Bridge and Roll",
                    level: 3,
                    content: [` This is conceptually the most simple escape from mount; you bump the player on top in a way that
                         reverses the position so that you end up on top inside their closed guard. There are a few things you
                         need to make sure of before you start your bridge and roll. The first thing is to ensure that your 
                        opponent's hips lined up over your hips; you can't displace them with a bridge if you're bridging into 
                        nothing. Maintaining frames will keep your opponent from sliding up into a high mount and keep their
                         hips lined up over your hips. Next make sure you're free from any grapevines which will allow the top
                         player to extend the bottom player's legs so that they can't bridge. Simply pummel out by extending your
                         leg and rotating outside in. Lastly, make sure that during your bridge and roll you do not expose your 
                        back. Either frame against your opponent's waist to block the path to your back or pin their knee to 
                        your hip to prevent the transition into technical mount. From there it is a simple simultaneous diagonal
                         bridge and roll to reverse the position. This isn't the highest percentage escape but you need to keep
                         the top player honest by threatening it and it will often elicit reactions that facilitate other escapes
                         such as the knee elbow escape. 
                        `],
                    video: "iXMG4a-YMqc?start=0",
                    ref: "bottomMountBridgeAndRollRef",
                    children: []
                },
                {
                    title: "Knee Elbow Escape",
                    level: 3,
                    content: [` The knee elbow escape is one of the most reliable ways to escape mount. If you can get one of your
                         knees back in between you and the top player you should be able to recover some form of guard. If the top
                         player stays attached to you by staying tight, it opens up the bridge and roll. And conversely, if they 
                        are too loose to prevent the bridge and roll, it opens up the knee elbow escape by enabling you to wedge 
                        your elbow inside their legs to create space for your knee. And again, you cannot let the top player 
                        advance to high mount which will make this escape extremely difficult and you should also be aware of 
                        exposing your back when you turn to your side. `],
                    video: "iXMG4a-YMqc?start=151",
                    ref: "bottomMountKneeElbowRef",
                    children: []
                },
                {
                    title: "Kipping Escape",
                    level: 3,
                    content: [` This is another high percentage escape that is based on displacing the top player just enough to
                         find space to wedge your knee back in between you and them. You can either end up in a butterfly guard 
                         or in straight ashi and be quickly ready to mount your own offense. Similar to other escapes, maintain
                         frames to prevent a high mount and keep their hips over yours so when you bridge you can displace them.
                         The kipping motion itself can be difficult to get at first. Keep a steady pulse to slowly create enough
                         space. Don't start your kip and then immediately stop and lose the space you created. Keep a rounded 
                        back so that you are mobile and able to create the most amount of movement. The basic premise is to pump
                         your butt to your heels repeatedly so that you move downwards and the top player moves upwards until 
                        there is enough space to get at least one knee back in between. `],
                    video: "iXMG4a-YMqc?start=282",
                    ref: "bottomMountKippingRef",
                    children: []
                },
            ]
        }
    ]
  }
];
      

export default bottomMountSections;