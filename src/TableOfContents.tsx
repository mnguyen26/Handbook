//========================================================================================================
// IMPORTS
//========================================================================================================

import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { RichTreeView, TreeItemProps } from '@mui/x-tree-view';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { TreeItem2 } from '@mui/x-tree-view/TreeItem2';
import { Box } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

import { TABLEOFCONTENTS_TREEITEMS, TOCnode } from './TreeItems/Base';
import handbookLogo from './Images/HandbookLogo.jpg'
import DynamicModal from './DynamicModal';
import { modalContentMap } from './modalContentMap';

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
    onNodeSelect: (event: React.SyntheticEvent, nodeId: string) => void;
}

interface CustomTreeItemProps extends TreeItemProps {
    treeItems: TOCnode[];
    onNodeSelect: (event: React.SyntheticEvent, nodeId: string) => void;
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

const CustomTreeItem = ({ treeItems, onNodeSelect, ...props }: CustomTreeItemProps) => {
    const handleClick = (event: React.SyntheticEvent) => {
        if (!(event.target as HTMLElement).classList.contains('MuiSvgIcon-root')) {
            event.preventDefault();
            event.stopPropagation();
            onNodeSelect(event, props.itemId);
        }
    };
    
    const findItemById = (items: TOCnode[], id: string): TOCnode | undefined => {
        for (const item of items) {
            if (item.id === id) return item;
            if (item.children) {
                const found = findItemById(item.children, id);
                if (found) return found;
            }
        }
        return undefined;
    };
    const currentItem = findItemById(treeItems, props.itemId);
    const showLibraryIcon = currentItem?.icons?.includes('LibraryBooks');
    
    return (
        <TreeItem
            {...props}
            label={
                <Box display="flex" alignItems="center" justifyContent="space-between" width="auto"
                    onClick={handleClick}
                    >
                    {showLibraryIcon && (
                        <Box paddingRight={1}>
                            <LibraryBooksIcon sx={{ fontSize: 11 }} />
                        </Box>
                    )}
                    <span>{props.label}</span>
                </Box>
            }
        >
            {props.children}
        </TreeItem>
    );
};

const TreeItems = (props: TreeItemsProps) => {
    const handleExpand = (event: React.SyntheticEvent, itemIds: string[]) => {
        if (!(event.target as HTMLElement).classList.contains('MuiTreeItem-label')) {
            props.onExpandedItemsChange(event, itemIds);
        }
    };

    // const handleClick = (event: React.SyntheticEvent, itemId: string) => {
    //     if ((event.target as HTMLElement).classList.contains('MuiTreeItem-label')) {
    //         props.onNodeSelect(event, itemId);
    //     }
    // }

    return (
        <div className='treeContainer'>
            <RichTreeView 
                items={props.items} 
                expandedItems={props.expanded} 
                onExpandedItemsChange={handleExpand}
                // onItemClick={handleClick}
                slots={{
                    item: (itemProps: TreeItemProps) => (
                        <CustomTreeItem
                            {...itemProps}
                            treeItems={props.items}
                            onNodeSelect={props.onNodeSelect}
                        />
                    ),
                }}
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
    const [modalState, setModalState] = useState<{isOpen: boolean; contentKey: string | null}>({isOpen: false, contentKey: null});

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

    const handleItemClick = (event: React.SyntheticEvent, nodeId: string) => {
        if (modalContentMap.hasOwnProperty(nodeId)) {
            setModalState({isOpen: true, contentKey: nodeId});
        }
    };

    return (
        <div id='tableofcontents'>
            <div className="title-container">
                <h1 className="handbook-title">The Grappler's Handbook</h1>
            </div>
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
                onNodeSelect={handleItemClick}
            />
            <DynamicModal
                isOpen={modalState.isOpen}
                contentKey={modalState.contentKey}
                onClose={() => setModalState({isOpen: false, contentKey: null})}
            />
        </div>
    )
}

export default TableOfContents;