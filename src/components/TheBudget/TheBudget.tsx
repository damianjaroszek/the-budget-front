import React from 'react';
import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material";
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export const TheBudget = () => {
    return <>

        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        {/*<MenuIcon />*/}
                    </IconButton>
                    <Typography variant="h4" component="div" sx={{flexGrow: 1}} align="center">
                        The Budget
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>

        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-around',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
            }}
        >
            <Item>Item 1</Item>
            <Item>Item 2</Item>
        </Box>
    </>
}
