//========================================================================================================
// IMPORTS
//========================================================================================================

// React
import React, { useState, useCallback, useEffect } from 'react';

// MUI Imports
import { Box, Button, TextField } from '@mui/material';
import { Drawer, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

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
import handbookLogo from './Images/HandbookLogo.jpg'
import {ContentMap, renderContent} from './ContentMap'

import './Styles/Header.css';
import './Styles/Pages.css';

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
    setPageId: (pageId: string) => void;
}

interface CustomTreeItemProps extends Omit<UseTreeItem2Parameters, 'rootRef'>, Omit<React.HTMLAttributes<HTMLLIElement>, 'onFocus'> {
}

interface TOCDrawerProps {
    open: boolean;
    onClose: () => void;
    setPageId: (pageId: string) => void;
}

interface ContentContainerProps {
    pageId: string;
}

interface CustomLabelProps {
    children: React.ReactNode;
}

//========================================================================================================
// FUNCTIONS
//========================================================================================================

const getButtonLabel = (expanded: string[]) => {
    return expanded.length === 0 ? 'Expand all' : 'Collapse all';
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

const StyledCustomTreeLabelText = styled(Typography)({
    color: 'inherit',
    fontFamily: 'Spectral' , 
    fontWeight: 500,
});

const CustomTreeLabel = ({children}: CustomLabelProps) => {
    return (
      <TreeItem2Label>
        <StyledCustomTreeLabelText className='customOnClick'>{children}</StyledCustomTreeLabelText>
      </TreeItem2Label>
    );
}

const CustomTreeItem = React.forwardRef(function CustomTreeItem(props: CustomTreeItemProps, ref: React.Ref<HTMLLIElement>) {
    const { id, itemId, label, disabled, children, ...other } = props;
    const {
        getContentProps,
        getIconContainerProps,
        getLabelProps,
        getGroupTransitionProps,
        status,
    } = useTreeItem2({ id, itemId, children, label, disabled, rootRef: ref });

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
    
    const currentItem = findItemById(TABLEOFCONTENTS_TREEITEMS, itemId);
    const showLibraryIcon = currentItem?.icons?.includes('LibraryBooks');
    const showVideoIcon = currentItem?.icons?.includes('OndemandVideo');

    return (
    <>
    {/* @ts-ignore */}
    <TreeItem2Provider itemId={itemId}>
        <TreeItem2Root>
        <CustomTreeItemContent {...getContentProps()}>
            <TreeItem2IconContainer {...getIconContainerProps()}>
            <TreeItem2Icon status={status} />
            </TreeItem2IconContainer>
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                    {showLibraryIcon && (
                    <LibraryBooksIcon sx={{ fontSize: 11 }} />
                    )}
                    {showVideoIcon && (
                    <OndemandVideoIcon sx={{ fontSize: 11 }} />
                    )}
                    <CustomTreeLabel {...getLabelProps()}/>
                </Box>
        </CustomTreeItemContent>
        {children && <TreeItem2GroupTransition {...getGroupTransitionProps()} />}
        </TreeItem2Root>
    </TreeItem2Provider>
    </>
    );
});

const TreeItems = (props: TreeItemsProps) => {
    const handleExpand = (event: React.SyntheticEvent, itemIds: string[]) => {
        if (!(event.target as HTMLElement).classList.contains('customOnClick')) {
            props.onExpandedItemsChange(event, itemIds);
        }
    };

    const handleItemClick = (event: React.MouseEvent, itemId: string) => {
        if ((event.target as HTMLElement).classList.contains('customOnClick')) {
            props.setPageId(itemId);
        }
    };

    return (
        <div>
            <RichTreeView 
                items={props.items} 
                expandedItems={props.expanded} 
                onExpandedItemsChange={handleExpand}
                onItemClick={handleItemClick}
                slots={{item: CustomTreeItem}}
            />
        </div>
    )
}

const TOCDrawer = (props: TOCDrawerProps) => {
    const [filteredItems, setFilteredItems] = useState(TABLEOFCONTENTS_TREEITEMS);
    const [expandedItems, setExpandedItems] = useState<string[]>([]);

    const getAllNodeIds = useCallback((items: TOCnode[]) => {
        const itemIds: string[] = [];

        const storeItemId = (item: TOCnode) => {
            if (item.children?.length) {
                itemIds.push(item.id);
                item.children.forEach(storeItemId);
            }
        };

        items.forEach(storeItemId);

        return itemIds;
    }, []);

    const filterTreeItems = useCallback((items: TOCnode[], query: string): TOCnode[] => {
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
    }, []);

    const handleTextChange = useCallback((newText: string) => {
        const filtered = filterTreeItems(TABLEOFCONTENTS_TREEITEMS, newText);
        setFilteredItems(filtered);
    }, [filterTreeItems]);

    const handleExpandClick = useCallback(() => {
        setExpandedItems(expandedItems.length === 0 ? getAllNodeIds(filteredItems) : []);
    }, [expandedItems, filteredItems, getAllNodeIds]);

    const handleExpandedItemsChange = useCallback((event: React.SyntheticEvent, itemIds: string[]) => {
        setExpandedItems(itemIds);
    }, []);

    const handleSetPageId = (newPageId: string) => {
        props.setPageId(newPageId);
    };

    return (
        <Drawer
            anchor="left"
            open={props.open}
            onClose={props.onClose}
        >
            <Box
                sx={{ width: 250 }}
                role="presentation"
            >
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
                    setPageId={handleSetPageId}
                />
            </Box>
        </Drawer>
    );
};

const ContentContainer = (props: ContentContainerProps) => {
    return (
        renderContent(props.pageId)
    );
};

//========================================================================================================
// MAIN COMPONENT
//========================================================================================================

const Handbook = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [pageId, setPageId] = useState('about');

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    const handleSetPageId = (newPageId: string) => {
        if (newPageId in ContentMap) {
            setPageId(newPageId);
        }
    };

    return (
        <div id='handbook'>
            <div className="header-container">
                <div className="title-container">
                    <h1 className="handbook-title">The Grappler's Handbook</h1>
                </div>
                <div className='logo-container'>
                    <img src={handbookLogo} alt='Handbook Logo' className='handbook-logo'/>
                </div>
            </div>
            <div className="toc-box">
                <IconButton onClick={toggleDrawer(true)} edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <span style={{ marginLeft: '8px' }}>Table of Contents</span>
            </div>
            <ContentContainer pageId={pageId} />
            <TOCDrawer
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                setPageId={handleSetPageId}
            />
        </div>
    )
}

export default Handbook;