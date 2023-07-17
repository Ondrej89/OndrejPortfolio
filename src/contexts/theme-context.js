import React, { createContext, useState } from 'react';

import { theDarkTheme, theLightTheme } from '../theme/theme';

export const ThemeContext = createContext()

function ThemeContextProvider(props) {
    // eslint-disable-next-line
    const [theme, setTheme] = useState(theLightTheme);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isDark, setDark] = useState(false);

    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    const changeTheme = () => {
        if (isDark) {
            setTheme(theDarkTheme);
            setDark(true);
        } else {
            setTheme(theLightTheme);
            setDark(false);
        }
    }

    const value = { theme, drawerOpen, setHandleDrawer, changeTheme, isDark }
    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
}


export default ThemeContextProvider