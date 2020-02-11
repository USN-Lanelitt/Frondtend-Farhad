import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import EditIcon from '@material-ui/icons/Edit';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CardContent from '@material-ui/core/CardContent';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Lånelitt AS
        </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'hidden',
  },
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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

export default function EditProfile() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  let [setFirstnameRegVar] = useState('');
  let [setMiddlenameRegVar] = useState('');
  let [setLastnameRegVar] = useState('');
  let [setBirthdayRegVar] = useState('');
  let [setMobileRegVar] = useState('');
  let [setEmailRegVar] = useState('');
  let [setPasswordRegVar] = useState('');
  let [setAddressRegVar] = useState('');
  let [setAddress2RegVar] = useState('');
  let [setZipRegVar] = useState('');
  let [setCityRegVar] = useState('');


  function setFirstnameReg(e) {
    setFirstnameRegVar = e.target.value;
  }

  function setMiddlenameReg(e) {
    setMiddlenameRegVar = e.target.value;
  }

  function setLastnameReg(e) {
    setLastnameRegVar = e.target.value;
  }

  function setBirthdayReg(e) {
    setBirthdayRegVar = e.target.value;
  }

  function setMobileReg(e) {
    setMobileRegVar = e.target.value;
  }

  function setEmailReg(e) {
    setEmailRegVar = e.target.value;
  }

  function setPasswordReg(e) {
    setPasswordRegVar = e.target.value;
  }

  const [values, setValues] = useState({
    passord: '',
    showPassword: false,
  });

  function setAddressReg(e) {
    setAddressRegVar = e.target.value;
  }

  function setAddress2Reg(e) {
    setAddress2RegVar = e.target.value;
  }

  function setZipReg(e) {
    setZipRegVar = e.target.value;
  }

  function setCityReg(e) {
    setCityRegVar = e.target.value;
  }


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
        
        <Typography component="h1" variant="h5">
          Endre kontaktinformasjon
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid container
              direction="row"
              justify="center"
              alignItems="center">
            <CardContent>
                <IconButton onClick={handleClickOpen}>
                <Avatar src={"https://i.pravatar.cc/150?img=68"}
                    className={classes.large} />
                  <EditIcon />
              </IconButton>
                <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                  <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Endre Profilbilde
        </DialogTitle>
                  <DialogContent dividers>
                    <Avatar src={"https://i.pravatar.cc/150?img=68"}
                      className={classes.large} />
                    <div className={classes.root}>
                    <input
                      accept="image/*"
                      className={classes.input}
                      id="contained-button-file"
                      multiple
                      type="file"
                    />
                    <label htmlFor="contained-button-file">
                      <Button variant="contained" color="primary" component="span">
                        Velg bilde
        </Button>
                      </label>
                    </div>
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                      Lagre
                </Button>
                  </DialogActions>
                </Dialog>
              </CardContent>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstname"
                autoComplete="firstname"
                variant="outlined"
                required
                fullWidth
                id="sFirstname"
                label="Fornavn"
                autoFocus
                onChange={setFirstnameReg}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="middlename"
                autoComplete="middlename"
                variant="outlined"
                required
                fullWidth
                id="sMiddlename"
                label="Mellomnavn"
                autoFocus
                onChange={setMiddlenameReg}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="lastname"
                variant="outlined"
                required
                fullWidth
                id="sLastname"
                label="Etternavn"
                onChange={setLastnameReg}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="mobile"
                variant="outlined"
                fullWidth
                id="iMobile"
                label="Telefon (valgfri)"
                onChange={setMobileReg}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="birthday"
                variant="outlined"
                required
                fullWidth
                id="dBirthday"
                type="date"
                onChange={setBirthdayReg}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                variant="outlined"
                required
                fullWidth
                id="sEmail"
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
              <TextField
                name="address"
                variant="outlined"
                required
                fullWidth
                id="sAddress"
                label="Adresse"
                onChange={setAddressReg}

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="address2"
                variant="outlined"
                required
                fullWidth
                id="sAddress2"
                label="Adresse 2"
                onChange={setAddress2Reg}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="zipcode"
                variant="outlined"
                required
                fullWidth
                id="iZipcode"
                label="Postkode"
                onChange={setZipReg}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="city"
                variant="outlined"
                required
                fullWidth
                id="sCity"
                label="By"
                onChange={setCityReg}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >Lagre Endring
                    </Button>
          <Grid container justify="flex-end">
            <Grid item>
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