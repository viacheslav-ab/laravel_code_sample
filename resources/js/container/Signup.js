/**
 * Sign Up With Laravel
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import QueueAnim from 'rc-queue-anim'
import LinearProgress from '@material-ui/core/LinearProgress';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button';
import { InputLabel, FormLabel } from '@material-ui/core';
import { Form, FormGroup, Input } from 'reactstrap';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import { InputAdornment, IconButton } from '@material-ui/core';
import { Person, Visibility, VisibilityOff, Email, FormatAlignCenter, Translate } from '@material-ui/icons'

// redux
import { connect } from 'react-redux'

// redux action
import {
    action_signup_user
} from 'Actions';

import defaultImage from '../assets/avatars/profile.jpg'

import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    label: {
        backgroundColor: 'rgba(101, 14, 141, .9)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        width: 200,
        height: 30,
        marginTop: 20,
        padding: 8,
        boxShadow: '0 1px 0 2px rgba(71, 9, 101, .3)',
        '&:hover': {
            backgroundColor: 'rgba(101, 14, 141, 1)',
            cursor: 'pointer'
        }
    }
})

const ERROR_PROPS = { error: true }
const VALIDE_PROPS = { error: false }

const SignUP = ({ loading, location, history, action_signup_user }) => {
    const classes = useStyles();

    const [name, setName] = useState("")
    const [nameHelperText, setNameHelperText] = useState(null)
    const [nameHelperProps, setNameHelperProps] = useState(VALIDE_PROPS)

    const [email, setEmail] = useState("")
    const [emailHelperText, setEmailHelperText] = useState(null)
    const [emailHelperProps, setEmailHelperProps] = useState(VALIDE_PROPS)

    const [password, setPassword] = useState("")
    const [passwordHelperText, setPasswordHelperText] = useState(null)
    const [passwordHelperProps, setPasswordHelperProps] = useState(VALIDE_PROPS)
    const [isShowPassword, setIsShowPassword] = useState(false)

    const [imgFile, setImgFile] = useState('')
    const [imgSrc, setImgSrc] = useState(null)
    const [imgValidInfo, setImgValidInfo] = useState("nothing selected")

    const handleNameChange = (e) => {
        var value = e.target.value
        setName(value)
        validateName(value)
    }

    const validateName = (value) => {
        if (value === "") {
            setNameHelperText("Name is required!")
            setNameHelperProps(ERROR_PROPS)
            return false
        }
        else {
            setNameHelperText(null)
            setNameHelperProps(VALIDE_PROPS)
            return true
        }
    }

    const handleEmailChange = (e) => {
        var value = e.target.value
        setEmail(value)
        validateEmail(value)
    }

    const validateEmail = (value) => {
        if (value.length === 0) {
            setEmailHelperText("Email is required!")
            setEmailHelperProps(ERROR_PROPS)
            return false
        }
        else if (!validateEmailFormat(value)) {
            setEmailHelperText("Email Format Error")
            setEmailHelperProps(ERROR_PROPS)
            return false
        }
        else {
            setEmailHelperText(null)
            setEmailHelperProps(VALIDE_PROPS)
            return true
        }
    }

    const validateEmailFormat = (email) => {
        return new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email)
    }

    const handlePasswordChange = (e) => {
        var value = e.target.value
        setPassword(value)
        validatePassword(value)
    }

    const validatePassword = (value) => {
        if (value.length === 0) {
            setPasswordHelperText("Password is required!")
            setPasswordHelperProps(ERROR_PROPS)
            return false
        }
        else if (value.length < 6) {
            setPasswordHelperText("Password must be over 6 charecter!")
            setPasswordHelperProps(ERROR_PROPS)
            return false
        }
        else {
            setPasswordHelperText(null)
            setPasswordHelperProps(VALIDE_PROPS)
            return true
        }
    }

    const onTogglePassword = () => {
        setIsShowPassword(!isShowPassword)
    }

    const onClickSignUp = () => {
        var isValidate = true
        if (!validateName(name)) {
            isValidate = false
        }
        if (!validateEmail(email)) {
            isValidate = false
        }
        if (!validatePassword(password)) {
            isValidate = false
        }

        if (!isValidate) return

        setIsShowPassword(false)
        let userInfo = new FormData()
        userInfo.append('name', name)
        userInfo.append('email', email)
        userInfo.append('password', password)
        userInfo.append('imgFile', imgFile)
        action_signup_user(userInfo, history)
    }

    const onSelectImage = (e) => {
        const file = e.target.files[0]
        if (!file) return
        if (file.type !== "image/png" && file.type !== "image/jpg" && file.type !== "image/jpeg") {
            setImgValidInfo("invalid")
            return
        }
        const reader = new FileReader()
        reader.onload = () => {
            setImgFile(file)
            setImgSrc(reader.result)
            setImgValidInfo(null)
        }
        reader.readAsDataURL(file)
    }

    const onDeleteImage = () => {
        setImgSrc(null)
        setImgFile('')
        setImgValidInfo("nothing selected")
    }

    return (
        <QueueAnim type="bottom" duration={2000}>
            <div className="rct-session-wrapper" >
                {loading &&
                    <LinearProgress />
                }

                <AppBar position='static' className='session-header'>
                    <Toolbar>
                        <div className='container'>
                            <div className="d-flex justify-content-between">
                                {/* <div style={{position: "relative"}}> */}
                                {/* <div className='session-logo'>
                                   <img src={AppConfig.appLogo} alt='session-log' width="110" height="35" />
                               </div> */}
                                <div style={{ position: "absolute", right: "50px" }}>
                                    <Link to="/signin" className="mr-15 text-white">Already have an account?</Link>
                                    <Button
                                        component={Link}
                                        to='/signin'
                                        variant='contained'
                                        className='btn-light'
                                    >
                                        Sign In
                                   </Button>
                                </div>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>

                <div className="session-inner-wrapper">
                    <div className="container">
                        <center>
                            <div className="col-sm-6 col-md-6 col-lg-6">
                                <div className="session-body text-center">

                                    <div className="session-head mb-15">
                                        <h2>Get started</h2>
                                        <p className="mb-0">Sign up</p>
                                    </div>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField
                                                autoComplete="name"
                                                name="name"
                                                required
                                                autoFocus
                                                fullWidth
                                                id="name"

                                                variant="outlined"
                                                label="Enter Your Name"
                                                type="text"

                                                value={name}
                                                helperText={nameHelperText}
                                                FormHelperTextProps={nameHelperProps}
                                                InputLabelProps={nameHelperProps}
                                                InputProps={{
                                                    ...nameHelperProps,
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <Person />
                                                        </InputAdornment>
                                                    )
                                                }}
                                                onChange={handleNameChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                autoComplete="email"
                                                name="email"
                                                required
                                                fullWidth
                                                id="email"

                                                variant="outlined"
                                                label="Email Address"
                                                type="email"

                                                value={email}
                                                helperText={emailHelperText}
                                                FormHelperTextProps={emailHelperProps}
                                                InputLabelProps={emailHelperProps}
                                                InputProps={{
                                                    ...emailHelperProps,
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <Email />
                                                        </InputAdornment>
                                                    )
                                                }}
                                                onChange={handleEmailChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                autoComplete="password"
                                                name="password"
                                                required
                                                fullWidth
                                                id="password"

                                                variant="outlined"
                                                label="password"
                                                type={isShowPassword ? "text" : "password"}

                                                value={password}
                                                helperText={passwordHelperText}
                                                FormHelperTextProps={passwordHelperProps}
                                                InputLabelProps={passwordHelperProps}
                                                InputProps={{
                                                    ...passwordHelperProps,
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                edge="end"
                                                                onClick={onTogglePassword}
                                                            >
                                                                {isShowPassword ? <Visibility /> : <VisibilityOff />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    )
                                                }}
                                                onChange={handlePasswordChange}
                                            />
                                        </Grid>
                                    </Grid>

                                    <center>
                                        <div style={{
                                            position: "relative", textAlign: "center",
                                            marginTop: 20, width: 100, height: 100, border: '1px solid'
                                        }}>
                                            <p style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "black" }}>
                                                {imgValidInfo}
                                            </p>
                                            <Button
                                                onClick={onDeleteImage}
                                                style={{ position: "absolute", top: 2, right: 0, display: (imgSrc ? "block" : "none") }}>
                                                <i className="zmdi zmdi-calendar-note"> delete</i>
                                            </Button>
                                            <img
                                                src={imgSrc}
                                                style={{ width: "100%", height: "100%" }}
                                            />
                                        </div>
                                        <input type="file" id="files"
                                            accept=".png, .jpg, .jpeg"
                                            style={{ display: "none" }}
                                            onChange={onSelectImage} />
                                        <FormLabel
                                            htmlFor="files"
                                            className={classes.label}      // "btn-purple text-white btn-block"
                                        >
                                            select photo (optional)
                                        </FormLabel>
                                    </center>
                                    <Button
                                        className="btn-block text-white btn-block w-100"
                                        color = "primary"
                                        variant="contained"
                                        size="large"
                                        style={{ marginTop: 20 }}
                                        onClick={onClickSignUp}>
                                        Sign Up
                                    </Button>
                                </div>

                                {/* <div className="col-sm-5 col-md-5 col-lg-4">
                               <SessionSlider />
                           </div> */}
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        </QueueAnim>
    )
}

// map state to props
const mapStateToProps = ({ authUser }) => {
    const { loading } = authUser;
    return { loading };
};

export default connect(mapStateToProps, {
    action_signup_user
})(SignUP);
