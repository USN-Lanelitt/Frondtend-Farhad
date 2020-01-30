import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link as Links} from "react-router-dom";
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Registrer() {

    let [firstname_reg, setFirstnameRegVar] = useState('');
    let [lastname_reg, setLastnameRegVar] = useState('');
    let [birthday_reg, setBirthdayRegVar] = useState('');
    let [phone_reg, setPhoneRegVar] = useState('');
    let [email_reg, setEmailRegVar] = useState('');
    let [password_reg, setPasswordRegVar] = useState('');


    function Register() {
        if (setFirstnameRegVar.length > 1 && setLastnameRegVar.length > 1 && setBirthdayRegVar.length > 1
            && setPhoneRegVar.length >= 0 && setEmailRegVar.length > 1 && setPasswordRegVar.length > 1) {
            fetch('http://127.0.0.1:8000/api/register', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    //'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstname: setFirstnameRegVar,
                    lastname: setLastnameRegVar,
                    birthday: setBirthdayRegVar,
                    phone: setPhoneRegVar,
                    email: setEmailRegVar,
                    password: setPasswordRegVar
                })
            })
                .then((Response) => Response.json())
                .then((Result) => {
                    alert(Result);
                })
        }
        else {
            alert("Alle feltene må fylles ut");
        }
    }

    function setFirstnameReg(e) {
        setFirstnameRegVar = e.target.value;
    }

    function setLastnameReg(e) {
        setLastnameRegVar = e.target.value;
    }

    function setBirthdayReg(e) {
        setBirthdayRegVar = e.target.value;
    }

    function setPhoneReg(e) {
        setPhoneRegVar = e.target.value;
    }

    function setEmailReg(e) {
        setEmailRegVar = e.target.value;
    }

    function setPasswordReg(e) {
        setPasswordRegVar = e.target.value;
    }


    const classes = useStyles();
    const [values, setValues] = useState({
        fornavn: '',
        etternavn:'',
        fdato: '',
        telefon:'',
        epost:'',
        passord: '',
        showPassword: false,
    });



    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Opprett konto
                </Typography>

                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="firstname"
                                autoComplete="firstname"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstname"
                                label="Fornavn"
                                autoFocus
                                onChange={setFirstnameReg}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="lastname"
                                variant="outlined"
                                required
                                fullWidth
                                id="lastname"
                                label="Etternavn"
                                onChange={setLastnameReg}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="birthday"
                                variant="outlined"
                                required
                                fullWidth
                                id="birthday"
                                type="date"
                                onChange={setBirthdayReg}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="phone"
                                variant="outlined"
                                fullWidth
                                id="phone"
                                label="Telefon (valgfri)"
                                onChange={setPhoneReg}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="email"
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Epost"
                                onChange={setEmailReg}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" fullWidth>
                                <InputLabel htmlFor="outlined-adornment-password" required>Passord</InputLabel>
                                <OutlinedInput
                                    name="confirmPassword"
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={setPasswordReg}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>

                                    }
                                    labelWidth={70}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="Jeg ønsker å motta nyheter på mail"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => Register()}
                    >Opprett konto
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                        <Links to="/log">
                            <Link href="#" variant="body2">
                                Har allerede en konto? Logg på!
                            </Link>
                        </Links>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Lånelitt
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}