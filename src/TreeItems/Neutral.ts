import { TOCnode } from './Base';
import { LEGGRABS_CHILDREN } from './LegGrabs';
import { UPPERBODY_CHILDREN } from './UpperBody';

export const NEUTRAL_CHILDREN: TOCnode[] =
[
    {
        id: 'leggrabs',
        label: 'Leg Grabs',
        children: LEGGRABS_CHILDREN
    },
    {
        id: 'upperbody',
        label: 'Upper Body',
        children: UPPERBODY_CHILDREN
    },
    {
        id: 'sacrifice',
        label: 'Sacrifice',
        children: [
            
        ]
    },
]