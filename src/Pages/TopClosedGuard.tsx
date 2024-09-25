import { Section } from "./PageTemplate";
  
export const topClosedGuardSections: Section[] = [
  { 
    title: "Top Closed Guard", 
    level: 1, 
    content: [`Opening closed guard is one of the most important yet often overlooked skills for a beginner grappler.
         It can be easy to ignore because not many people play closed guard nowadays, and even fewer will try to 
         stall you out from closed guard in training. However, in competition, it's one of the easiest ways to stall 
         someone to protect a lead. You might face an opponent who is either ahead on points or trying to maintain a 
         lead based on the judges' criteria, keeping you in their closed guard for as long as possible. It looks just 
         active enough offensively that a referee won't warn them for passivity. This can be an extremely frustrating 
         experience, and you need to know how to reliably get out of it.`,
        `In general, there aren't any high-percentage submissions if you're inside someone's closed guard and you 
        won't be able to initiate any offense until you open it. For this reason, I highly recommend thinking of 
        closed guard as a position to escape from. Breaking guard is an escape, and if you don't know how to escape, 
        someone can put you there and keep you there.`
    ],
    ref: "topClosedGuardIntroRef",
    children: [
        {
            title: "Rules of Thumb",
            level: 2,
            content: [`Because closed guard heavily favors the guard player offensively, there are several rules of 
                thumb to keep in mind when inside someone's closed guard. However, I find it easier just to focus
                 on the fewer things that you should be doing instead of the many more things you shouldn't be doing.
                  Always be working to get to your feet and build your posture. If there is a moment when your 
                opponent has paused their attack, immediately form a grip/frame and stand up. `],
            video: "DQH8HxcZG0k",
            ref: "topClosedGuardRules"
        },
        {
            title: "Standing Up",
            level: 2,
            content: [`Standing up nullifies the vast majority of closed guard attacks and narrows it down to only 
                a few you need to be aware of. It puts pressure on your opponent's lock and makes it harder for them
                to keep it closed. Once you're comfortable and stable in this position there are a few very simple
                guard breaks that you can use to open the guard.`,
                `When you're in the standing position, it can be helpful to slightly point your knees inward into your 
                opponent's hips to create a little pressure to make it easier to open the guard. Stand with your
                 feet slightly wider that shoulder width and be able to shift your weight between legs. `],
            video: "DQH8HxcZG0k?start=98",
            ref: "topClosedGuardStandingUp"
        },
        {
            title: "Guard Breaks",
            level: 2,
            content: [],
            ref: "",
            children: [
                {
                    title: "Pushing the Guard Open",
                    level: 3,
                    content: [`We start this guard break by standing up in the closed guard. The goal is to push on one of the
                         guard player's legs to open it. Choosing which leg or side doesn't really matter; just figure out 
                        which side you're more comfortably with. Ideally we would know which leg has the foot on the bottom 
                        but but there's no way of knowing looking forward. My intuition from experience is that it's usually 
                        ther left leg which is on your right side but I might be wrong about this. Do a side crunch to the 
                        opponsite side so that you can straighten your arm. We don't just want to use the strength of our arms 
                        to open the guard, but to use our weight as well. Straighten your arm, reenforce it with your other arm
                        , and push the guard open. Once it's open keep pushing it to the ground as you slide your knee through
                        and over their thigh so that you can staple their leg to the ground with your shin. With your arm on 
                        the opposite side you can take a scoop grip on the opposite leg or a farside underhook and this should
                         put you in a good position to pass. `],
                    video: "DQH8HxcZG0k?start=166",
                    ref: "topClosedGuardPushOpen",
                },
                {
                    title: "Pulling the Guard Open",
                    level: 3,
                    content: [`I know this violates the rule of keeping both arms in or both arms out but you really aren't
                         in danger of a triangle here. The guard player has to get their hips all the way up to the level 
                        of your shoulders to close a strong lock that's and nearly impossible to do when they're hanging off of 
                        you. If they open their guard they should fall straight down towards the mat rather than be able
                         to shoot their hips up at all. `],
                    video: "DQH8HxcZG0k?start=225",
                    ref: "topClosedGuardPullOpen",
                },
                {
                    title: "Splitting the Guard Open",
                    level: 3,
                    content: [`This guard break may be necessary if your opponent has a super tight closed guard. It makes
                         use of your knee as a wedge rather than relying on the strength of you pushing or pulling one of
                          their legs to open the guard. This guard break is particularly effective if your opponent has 
                          much longer legs relative to the size of  your body since the space you're trying to fit your 
                          knee into will be much larger.`],
                    video: "DQH8HxcZG0k?start=250",
                    ref: "topClosedGuardSplitOpen",
                },
            ]
        },
        {
            title: "Common Sweeps",
            level: 2,
            content: [`Standing up in closed guard limits the guard players offense. You will typically see one of 
                two reactions in this situation: they will either grab behind both your ankles or take a scoop grip
                 behind one of your legs. `],
            ref: "topClosedGuardCommonSweeps",
            children: [
                {
                    title: "Lumberjack Sweep",
                    level: 3,
                    content: [`This is the most common reaction when standing up in someone's closed guard. While 
                        the threat of this sweep discourages a lot of people early on from trying to stand up in 
                        the closed guard ,if your stance is wide enough, it's easy to pummel your leg out when your opponent
                         attempts the lumberjack sweep. Shift your weight to one leg then circle the other outwards
                          to free it from their grip. If you feel like you haven't yet quite widened your stance 
                        enough to pummel you foot out, shift your upper body forward a little so you won't be 
                        standing straight up, and this will buy you a little time to readjust your feet position
                         because it's more difficult to execute the sweep when the top player is leaning forward. `],
                    video: "DQH8HxcZG0k?start=337",
                    ref: "topClosedGuardLumberJack",
                },
                {
                    title: "Muscle Sweep",
                    level: 3,
                    content: [`You will also often see the guard player take a scoop grip behind one of the legs
                         when the top player stands up. There are number of techniques that can be performed from
                        this grip including the muscle sweep, the ballerina sweep, and funk rolls. All can be 
                        nullified by  touching your elbow to your knee and turn that knee inwards. They will need
                         to open their guard to attempt the sweep so that work will be done for you. A k-guard 
                        entry is also available to the guard player with this grip. Defending that is another 
                        topic but as far as sweeps go there really isn't a threat of one when entering k-guard.`],
                    video: "DQH8HxcZG0k?start=411",
                    ref: "topClosedGuardMuscle",
                },
            ]
        }
    ]
  },
];
      

export default topClosedGuardSections;