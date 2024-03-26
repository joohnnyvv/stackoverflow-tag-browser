import React from 'react';
import './App.css';
import TopBar from "./Components/TopBar/TopBar";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useAtom} from "jotai";
import {themeAtom} from "./lib/themeAtom";

function App(): React.JSX.Element {
    const [themeMode] = useAtom(themeAtom)

    const theme = createTheme({
        palette: {
            mode: themeMode
        }
    })
    return (
        <ThemeProvider theme={theme}>
            <TopBar/>
        </ThemeProvider>
    );
}

export default App;
