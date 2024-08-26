import { TreeViewBaseItem } from '@mui/x-tree-view/models';
import { NEUTRAL_CHILDREN } from './Neutral';
import { TOP_CHILDREN } from './Top';
import { BOTTOM_CHILDREN } from './Bottom';

export interface TOCnode {
    id: string
    label: string
    // tags: string[]
    children: TOCnode[]
    // isExpanded: boolean
}

// export const TABLEOFCONTENTS_TREEITEMS: TreeViewBaseItem[] = [
    export const TABLEOFCONTENTS_TREEITEMS: TOCnode[] = [
    {
        id: 'neutral',
        label: 'Neutral',
        children: NEUTRAL_CHILDREN
    },
    {
        id: 'top',
        label: 'Top',
        children: TOP_CHILDREN
    },
    {
        id: 'bottom',
        label: 'Bottom',
        children: BOTTOM_CHILDREN
    },
  ];