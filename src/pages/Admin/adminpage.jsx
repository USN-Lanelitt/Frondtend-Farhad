import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Copyright from '../../components/home/Copyright';
import UserList from "../../components/admin/userlist";



const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));


export default function Home() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Administrator
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Bruker Administrasjon
                        </Typography>
                    </Container>
                </div>

                <Container className={classes.cardGrid} maxWidth="md">
                    <div>
                        <TextField
                            id="outlined-full-width"
                            label="Søk"
                            style={{ margin: 8 }}
                            placeholder="Brukernavn / Epost"
                            helperText="Søk opp Brukernavn / Epost / Mobilnr"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                    </div>
                    <h3>Brukerliste</h3>
                    <hr/>
                        <Grid item xs={12}>
                          <UserList/>
                        </Grid>
                </Container>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Lånelitt
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    ProgTeam Lånelitt
                </Typography>
                <Copyright />
            </footer>
        </React.Fragment>
    );
}