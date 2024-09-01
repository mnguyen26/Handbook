import { TreeViewBaseItem } from '@mui/x-tree-view/models';
import { NEUTRAL_CHILDREN } from './Neutral';
import { TOP_CHILDREN } from './Top';
import { BOTTOM_CHILDREN } from './Bottom';

export interface TOCnode extends TreeViewBaseItem {
    // tags: string[]
    children: TOCnode[]
    icons?: string[]
}

// export const TABLEOFCONTENTS_TREEITEMS: TreeViewBaseItem[] = [
    export const TABLEOFCONTENTS_TREEITEMS: TOCnode[] = [
        {
            id: 'neutral',
            label: 'Neutral',
            children: NEUTRAL_CHILDREN,
            icons: ['LibraryBooks']
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
        {
            id: 'about',
            label: 'About',
            children: [],
            icons: ['LibraryBooks']
        },
  ];