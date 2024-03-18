import React, { useState } from 'react';
import "./TextAnalyzer.css"
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import WordInputComponent from '../Components/WordInputComponent';
import ParagraphInputComponent from '../Components/ParagraphInputComponent';
function TextAnalyzer() {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabList = { 
        gap: "1rem",
        width:"fit-content",
        border: "1px solid red", 
        backgroundColor: "var( --tabs-list-color)",
        border: "1px solid var( --tabs-list-border)",
        borderRadius: "10px", 
    }
    const tabsStyle = { 
        width: "500px", 
    }



    return (
        <div className='text-analyzer-wrapper'>
            <h1> Text Analyzer</h1>
            <p>Text Analyzer is a simple free online tool for SEO web content analysis that helps you <br/> find most frequent phrases and words, number of characters, words, sentences and <br/> paragraphs, and estimated read and speak time of your content.</p>
            <TabContext value={value}>
                <TabList onChange={handleChange} aria-label="lab API tabs example" sx={tabList}>
                    <Tab label="Word" value="1" sx={{ ...tabsStyle, backgroundColor: value === '1' ? 'var(--white)' : 'transparent' , '&.Mui-selected': { color: value === '1' ? 'var(--header-color) !important' : 'var(--not-selected) !important'}, '& .MuiTab-indicator': { display: 'none' } }} />
                    <Tab label="Paragraph" value="2" sx={{ ...tabsStyle, backgroundColor: value === '1' ? 'var(--white)' : 'transparent' , '&.Mui-selected': { color: value === '1' ? 'var(--header-color) !important' : 'var(--not-selected) !important'}, '& .MuiTab-indicator': { display: 'none' } }}/>
                </TabList>
                <TabPanel value="1">
                    <>
                        <WordInputComponent />
                        
                    </>
                </TabPanel>
                <TabPanel value="2">
                    <>
                        <ParagraphInputComponent />
                    </>
                </TabPanel>
            </TabContext>
        </div>
    )
}

export default TextAnalyzer