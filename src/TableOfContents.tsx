//========================================================================================================
// IMPORTS
//========================================================================================================

// React
import React, { useState, useCallback } from 'react';

// MUI Imports
import { Box, Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

import { RichTreeView } from '@mui/x-tree-view';
import {
  unstable_useTreeItem2 as useTreeItem2,
  UseTreeItem2Parameters,
} from '@mui/x-tree-view/useTreeItem2';
import {
  TreeItem2Content,
  TreeItem2IconContainer,
  TreeItem2GroupTransition,
  TreeItem2Label,
  TreeItem2Root,
} from '@mui/x-tree-view/TreeItem2';
import { TreeItem2Icon } from '@mui/x-tree-view/TreeItem2Icon';
import { TreeItem2Provider } from '@mui/x-tree-view/TreeItem2Provider';

// Custom imports
import { TABLEOFCONTENTS_TREEITEMS, TOCnode } from './TreeItems/Base';
import { modalContentMap } from './modalContentMap';
import DynamicModal from './DynamicModal';
import handbookLogo from './Images/HandbookLogo.jpg'

import './Styles/TableOfContents.css';

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

interface CustomTreeItemProps extends Omit<UseTreeItem2Parameters, 'rootRef'>, Omit<React.HTMLAttributes<HTMLLIElement>, 'onFocus'> {
    
}

//========================================================================================================
// FUNCTIONS
//========================================================================================================

const filterTreeItems = (items: TOCnode[], query: string): TOCnode[] => {
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

const CustomTreeItemContent = styled(TreeItem2Content)(({ theme }) => ({
  padding: theme.spacing(0.5, 1),
}));

const CustomTreeItem = React.forwardRef(function CustomTreeItem(props: CustomTreeItemProps, ref: React.Ref<HTMLLIElement>,) {
    const { id, itemId, label, disabled, children, ...other } = props;
    const {
        getRootProps,
        getContentProps,
        getIconContainerProps,
        getLabelProps,
        getGroupTransitionProps,
        status,
    } = useTreeItem2({ id, itemId, children, label, disabled, rootRef: ref });
    
    const [modalState, setModalState] = useState<{isOpen: boolean; contentKey: string | null}>({isOpen: false, contentKey: null});

    const handleItemClick = (event: React.SyntheticEvent) => {
        if (!(event.target as HTMLElement).classList.contains('MuiSvgIcon-root')) {
            event.preventDefault();
            event.stopPropagation();

            if (modalContentMap.hasOwnProperty(itemId)) {
                setModalState({isOpen: true, contentKey: itemId});
            }
        }
    };

    const currentItem = findItemById(TABLEOFCONTENTS_TREEITEMS, itemId);
    const showLibraryIcon = currentItem?.icons?.includes('LibraryBooks');

    return (
    <>
    {/* @ts-ignore */}
    <TreeItem2Provider itemId={itemId}>
        <TreeItem2Root {...getRootProps(other)}>
        <CustomTreeItemContent {...getContentProps()}>
            <TreeItem2IconContainer {...getIconContainerProps()}>
            <TreeItem2Icon status={status} />
            </TreeItem2IconContainer>
                <Box sx={{ flexGrow: 1, display: 'flex', gap: 1 }} onClick={handleItemClick}>
                    {showLibraryIcon && (
                    <LibraryBooksIcon sx={{ fontSize: 11 }} />
                    )}
                    <TreeItem2Label {...getLabelProps()} />
                </Box>
        </CustomTreeItemContent>
        {children && <TreeItem2GroupTransition {...getGroupTransitionProps()} />}
        </TreeItem2Root>
    </TreeItem2Provider>
    <DynamicModal
        isOpen={modalState.isOpen}
        contentKey={modalState.contentKey}
        onClose={() => setModalState({isOpen: false, contentKey: null})}
    />
    </>
    );
});

const TreeItems = (props: TreeItemsProps) => {
    const handleExpand = (event: React.SyntheticEvent, itemIds: string[]) => {
        if (!(event.target as HTMLElement).classList.contains('MuiTreeItem-label')) {
            props.onExpandedItemsChange(event, itemIds);
        }
    };

    return (
        <div className='treeContainer'>
            <RichTreeView 
                items={props.items} 
                expandedItems={props.expanded} 
                onExpandedItemsChange={handleExpand}
                slots={{item: CustomTreeItem}}
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

    const handleTextChange = useCallback((newText: string) => {
        const filtered = filterTreeItems(TABLEOFCONTENTS_TREEITEMS, newText);
        setFilteredItems(filtered);
    }, []);

    const handleExpandClick = useCallback(() => {
        setExpandedItems(expandedItems.length === 0 ? getAllNodeIds(filteredItems) : []);
    }, [expandedItems, filteredItems]);

    const handleExpandedItemsChange = useCallback((event: React.SyntheticEvent, itemIds: string[]) => {
        setExpandedItems(itemIds);
    }, []);

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
            />
        </div>
    )
}

export default TableOfContents;