import React, { useState } from 'react';
import "./TextAnalyzer.css"
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { GlobalStyles } from '@mui/system';

import WordInputComponent from '../Components/WordInputComponent';
import ParagraphInputComponent from '../Components/ParagraphInputComponent';
function TextAnalyzer() {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabList = {
        gap: "1rem",
        width: "fit-content",
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
            <p>Text Analyzer is a simple free online tool for SEO web content analysis that helps you <br /> find most frequent phrases and words, number of characters, words, sentences and <br /> paragraphs, and estimated read and speak time of your content.</p>
            <GlobalStyles styles={{
                '.MuiTabs-indicator': {
                    display: 'none !important',
                },
            }} />
            <TabContext value={value}>
                <TabList onChange={handleChange} aria-label="lab API tabs example" sx={tabList}>
                    <Tab label="Word Input" value="1" sx={{ ...tabsStyle, backgroundColor: value === '1' ? 'white' : 'transparent', boxShadow: value === '1' ? '0 4px 8px 0 rgba(0,0,0,0.2)' : 'none', borderRadius: '5px', '&.Mui-selected': { color: 'var(--header-color) !important', fontWeight: '600' } }} />
                    <Tab label="Paragraph" value="2" sx={{ ...tabsStyle, backgroundColor: value === '2' ? 'white' : 'transparent', boxShadow: value === '2' ? '0 4px 8px 0 rgba(0,0,0,0.2)' : 'none', borderRadius: '5px', '&.Mui-selected': { color: 'var(--header-color) !important', fontWeight: '600' } }} />
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