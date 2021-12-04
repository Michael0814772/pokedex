import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    appbar: {
        backgroundColor: 'black'
    },
    link: {
        textDecoration: 'none'
    },
    title: {
        cursor: 'pointer',
        color: 'white'
    }
}))

function AppNavigator() {

    const classess = useStyles();

    return (
        <AppBar className={classess.appbar} position="fixed" elevation={0}>
            <Toolbar>
                <Link to="/" className={classess.link}>
                    <Typography className={classess.title} variant="h6">Pokedex</Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default AppNavigator
