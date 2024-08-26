import React, { useState } from 'react';
import { TreeViewBaseItem } from '@mui/x-tree-view/models';
import TextField from '@mui/material/TextField';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { TABLEOFCONTENTS_TREEITEMS, TOCnode } from './TreeItems/Base';
import './Styles/TableOfContents.css';

interface SearchBarProps {
    onTextChange: (newText: string) => void;
}

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

const SearchBar: React.FC<SearchBarProps> = ({onTextChange}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onTextChange(event.target.value)
    };

    return (
        <div id='searchbar'>
            <TextField
                label="Search..."
                variant="outlined"
                onChange={handleChange}
                fullWidth
            >
            </TextField>
        </div>
    );
};

const TreeItems = (props: any) => {
    return (
        <div className='treeContainer'>
            <RichTreeView items={props.items} />
        </div>
    )
}

const TableOfContents = () => {
    // const [searchText, setSearchText] = useState<string>('');
    const [filteredItems, setFilteredItems] = useState(TABLEOFCONTENTS_TREEITEMS);

    const handleTextChange = (newText: string) => {
        // setSearchText(newText);

        // const filtered = TABLEOFCONTENTS_TREEITEMS.filter((node) => {
        //     if (newText == "") return TABLEOFCONTENTS_TREEITEMS
        //     else return node.label.toLowerCase().includes(newText);
        // })

        const filtered = filterTreeItems(TABLEOFCONTENTS_TREEITEMS, newText);

        setFilteredItems(filtered);
      };

    return (
        <div id='tableofcontents'>
            <SearchBar 
                onTextChange={handleTextChange}
            />
            <TreeItems 
                items={filteredItems}
            />
        </div>
    )
}

export default TableOfContents;