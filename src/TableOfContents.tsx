//========================================================================================================
// IMPORTS
//========================================================================================================

import React, { useState } from 'react';
import { TreeViewBaseItem } from '@mui/x-tree-view/models';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { TABLEOFCONTENTS_TREEITEMS, TOCnode } from './TreeItems/Base';
import handbookLogo from './Images/HandbookLogo.jpg'
import './Styles/TableOfContents.css';

//========================================================================================================
// FUNCTIONS
//========================================================================================================

function filterTreeItems(items: TOCnode[], query: string): TOCnode[] {
    const lowerCaseQuery = query.toLowerCase();

    return items
        .map(item => {
            const filteredChildren = filterTreeItems(item.children, lowerCaseQuery);

            const itemMatches = item.label.toLowerCase().includes(lowerCaseQuery);

            if (itemMatches) {
                return {
                    ...item,
                    children: item.children
                };
            } 
            else if (filteredChildren.length > 0) {
                return {
                    ...item,
                    children: filteredChildren
                };
            }
            else return null;
        })
        .filter(item => item !== null) as TOCnode[];
}

const getAllNodeIds = (items: TOCnode[]) => {
    const itemIds: string[] = [];

    const storeItemId = (item: TOCnode) => {
      if (item.children?.length) {
        itemIds.push(item.id);
        item.children.forEach(storeItemId);
      }
    };
  
    TABLEOFCONTENTS_TREEITEMS.forEach(storeItemId);
  
    return itemIds;
  };

  const getButtonLabel = (expanded: string[]) => {
    return expanded.length === 0 ? 'Expand all' : 'Collapse all';
  };

//========================================================================================================
// INTERFACES
//========================================================================================================

interface SearchBarProps {
    onTextChange: (newText: string) => void;
}

interface TreeItemsProps {
    items: TOCnode[];
    expanded: string[];
    onExpandedItemsChange: (event: React.SyntheticEvent, itemIds: string[]) => void;
}

//========================================================================================================
// COMPONENTS
//========================================================================================================

const SearchBar = (props: SearchBarProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onTextChange(event.target.value)
    };

    return (
        <div id='searchbar'>
            <TextField
                label="Search..."
                placeholder="Search for a position or technique...e.g. 'half guard' or 'armbar'"
                variant="outlined"
                onChange={handleChange}
                fullWidth
            >
            </TextField>
        </div>
    );
};

const TreeItems = (props: TreeItemsProps) => {
    return (
        <div className='treeContainer'>
            <RichTreeView 
            items={props.items} 
            expandedItems={props.expanded} 
            onExpandedItemsChange={props.onExpandedItemsChange}
            />
        </div>
    )
}

//========================================================================================================
// MAIN COMPONENT
//========================================================================================================

const TableOfContents = () => {
    const [filteredItems, setFilteredItems] = useState(TABLEOFCONTENTS_TREEITEMS);
    const [expandedItems, setExpandedItems] = useState<string[]>([]);

    const handleTextChange = (newText: string) => {
        const filtered = filterTreeItems(TABLEOFCONTENTS_TREEITEMS, newText);
        setFilteredItems(filtered);
    };

    const handleExpandClick = () => {
        setExpandedItems(expandedItems.length === 0 ? getAllNodeIds(filteredItems) : []);
    };

    const handleExpandedItemsChange = (event: React.SyntheticEvent, itemIds: string[],) => {
        setExpandedItems(itemIds);
    };

    return (
        <div id='tableofcontents'>
            <h1 className="handbook-title">The Grappler's Handbook</h1>
            <div className='logo-container'>
                <img src={handbookLogo} alt='Handbook Logo' className='handbook-logo'/>
            </div>
            <SearchBar 
                onTextChange={handleTextChange}
            />
            <Button onClick={handleExpandClick}>
                {getButtonLabel(expandedItems)}
            </Button>
            <TreeItems 
                items={filteredItems}
                expanded={expandedItems}
                onExpandedItemsChange={handleExpandedItemsChange}
            />
        </div>
    )
}

export default TableOfContents;