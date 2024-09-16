import { Section } from "./PageTemplate";
  
export const underhookSections: Section[] = [
  { 
    title: "Underhook", 
    content: [`The underhook is a position when one grappler positions their arm underneath their opponent's arm, wrapping around the opponent's upper body or shoulder. It gives you a great degree of control over your opponent's posture through using it to lift or pull. Offensively, it allows you to enter the greatest variety of takedowns including leg grabs, throws, trips as well as advancing to other positions such as double underhooks or to the back. Defensively, it acts as a solid barrier to leg grabs as it limits your opponent's ability to change levels but most importantly it blocks the path to your back. `],
    ref: "underhookIntroRef",
    children: [
        {
            title: "Setup",
            content: [``],
            ref: "underhookSetupRef",
            video: "HR0gmDmtwCI?start=0"
        },
        {
            title: "Takedowns: Leg Grabs",
            content: [``],
            ref: "",
            children: [
                {
                    title: "Knee Tap",
                    content: [``],
                    ref: "kneeTapRef",
                    video: "HR0gmDmtwCI?start=74"
                },
                {
                    title: "High Crotch",
                    content: [``],
                    ref: "highCrotchRef",
                    video: "HR0gmDmtwCI?start=116"
                },
                {
                    title: "Single Leg",
                    content: [``],
                    ref: "singleLegRef",
                    video: "HR0gmDmtwCI?start=140"
                },
            ]
        },
        {
            title: "Takedowns: Throws & Foot Techniques",
            content: [``],
            ref: "throwsref",
            children: [
                {
                    title: "Hip Throw (O Goshi)",
                    content: [``],
                    ref: "hipThrowRef",
                    video: "HR0gmDmtwCI?start=160"
                },
                {
                    title: "Pinch Headlock Tai Otoshi",
                    content: [``],
                    ref: "pinchHeadlockRef",
                    video: "HR0gmDmtwCI?start=216"
                },
                {
                    title: "Hip Throw Snap",
                    content: [``],
                    ref: "hipThrowSnapRef",
                    video: "HR0gmDmtwCI?start=271"
                },
                {
                    title: "Ouchi Kouchi Knee Tap",
                    content: [``],
                    ref: "ouchiKouchiRef",
                    video: "HR0gmDmtwCI?start=316"
                },
                {
                    title: "Ouchi Sasae Foot Sweep",
                    content: [``],
                    ref: "ouchiSasaeRef",
                    video: "HR0gmDmtwCI?start=355"
                },
            ]
        },
        {
            title: "Takedowns: Misc",
            content: [``],
            ref: "miscRef",
            children: [
                {
                    title: "Throw By",
                    content: [``],
                    ref: "throwByRef",
                    video: "HR0gmDmtwCI?start=31"
                },
                {
                    title: "Snap Down",
                    content: [``],
                    ref: "snapDownRef",
                    video: "HR0gmDmtwCI?start=410"
                },
            ]
        },
        {
            title: "Takedowns: Double Unders",
            content: [``],
            ref: "miscRef",
            children: [
                {
                    title: "Bear Hug",
                    content: [``],
                    ref: "bearHugRef",
                    video: "HR0gmDmtwCI?start=436"
                },
                {
                    title: "Power Twist",
                    content: [``],
                    ref: "powerTwistRef",
                    video: "HR0gmDmtwCI?start=497"
                },
                {
                    title: "Front to Back",
                    content: [``],
                    ref: "frontToBackRef",
                    video: "HR0gmDmtwCI?start=535"
                }
            ]
        }   
    ]   
  },  
];

export default underhookSections;