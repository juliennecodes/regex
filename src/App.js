import {BasicTable} from "./components/BasicTable";
import {config} from "./config/config";
import {Box, Typography} from "@mui/material";
import {Preformatted} from "./components/common/Preformatted";

const Navigation = ({headings}) => {
    const scrollToElement = (elementId) => {
        const el = document.getElementById(elementId);
        el.scrollIntoView();
    }
    return (
        headings.map(heading => {
            return <Typography key={`${heading}`}
                               component='p'
                               onClick={() => scrollToElement(heading)}
                               sx={{cursor: 'pointer'}}
            >{heading}</Typography>
        })
    )
}

const Tip = ({config}) => {
    return (
        <Box id='tip'>
            <Preformatted>
                {config.howItWorks.map((line, index) => <Typography key={`tip-${index}`}>{line}</Typography>)}
            </Preformatted>
        </Box>
    )
}
function App() {
    const headings = config.categories.map((category) => category.heading);

    return (
        <Box className="app" display='grid' sx={{justifyContent: 'center'}}>
            <Box display='flex' flexDirection='column' id='sidebar'>
                <Box>
                    <Typography variant='h6' component='h1' id='mainHeading'>
                        Regex Cheatsheet
                    </Typography>
                    <Navigation headings={headings} id='navigation'/>
                </Box>
                <Tip config={config}/>
            </Box>
            <Box display='grid' gap={8} id='mainContent'>
                {
                    config.categories
                        .map((category, index) => (
                            <BasicTable key={`${category.heading}-${index}`}
                                        heading={category.heading}
                                        subheading={category.subheading}
                                        rows={category.tableContents}/>
                        ))
                }
            </Box>

        </Box>
    );
}

export default App;
