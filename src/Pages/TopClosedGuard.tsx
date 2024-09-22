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
        `In general, there aren't any high-percentage submissions if you're inside someone's closed guard, and you 
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
            video: "19CXjimCrvo",
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
            video: "19CXjimCrvo?start=94",
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
                    content: [`Stand up and push one of your opponent's legs to open the guard.`],
                    video: "19CXjimCrvo?start=135",
                    ref: "topClosedGuardPushOpen",
                },
                {
                    title: "Pulling the Guard Open",
                    level: 3,
                    content: [`Stand up and pull one of your opponent's legs to open the guard.`],
                    video: "19CXjimCrvo?start=187",
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
                    video: "19CXjimCrvo?start=231",
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
                    content: [`If your stance is wide enough, it's easy to pummel your leg out when your opponent
                         attempts the lumberjack sweep. Shift your weight to one leg then circle the other outwards
                          to free it from their grip. `],
                    video: "19CXjimCrvo?start=313",
                    ref: "topClosedGuardLumberJack",
                },
                {
                    title: "Muscle Sweep",
                    level: 3,
                    content: [`The muscle sweep requires that the guard player move their hips to the outside of your
                         knee to get sufficient pressure to knock you over. Counteract this by touching your elbow 
                         to your knee and turn that knee inwards. They will need to open their guard to attempt the
                         sweep so that work will be done for you.`],
                    video: "19CXjimCrvo?start=378",
                    ref: "topClosedGuardMuscle",
                },
            ]
        }
    ]
  },
];
      

export default topClosedGuardSections;