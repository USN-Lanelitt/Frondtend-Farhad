import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
    },
    paper: {
        maxWidth: 400,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
}));

export default function Profile() {
    const classes = useStyles();

    const usernameInfo = `Farhad Ahmmadhadi`;
    const userNickname = `Nickname: Fluffy`;
    const userStatus = `Status: Online`;

    return (
        <React.Fragment>
            <CssBaseline />
                <div className={classes.root}>
                    <Paper className={classes.paper}>
                        <Grid container wrap="nowrap" spacing={3} alignItems='right'>
                            <Grid item>
                                <Avatar alt="Profile picture" src="https://source.unsplash.com/random"/>
                            </Grid>
                            <Grid item xs>
                                <Typography>{usernameInfo}</Typography>
                                <Typography>{userNickname}</Typography>
                                <Typography>{userStatus}</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
        </React.Fragment>
    );
}
