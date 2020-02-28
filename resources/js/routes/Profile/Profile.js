/**
 * Sign Up With Laravel
 */
import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// rct card box
import { RctCard } from 'Components/RctCard';
// intl messages
import IntlMessages from 'Util/IntlMessages';

import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { InputAdornment, IconButton } from '@material-ui/core';
import { Person, Visibility, VisibilityOff, Email, FormatAlignCenter, Translate } from '@material-ui/icons'

// redux
import { connect } from 'react-redux'

// redux action
import {
    action_signup_user
} from 'Actions';

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

const Profile = ({ location, history, match, authUser }) => {

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
    const [imgSrc, setImgSrc] = useState()
    const [imgValidInfo, setImgValidInfo] = useState("nothing selected")

    useEffect(() => {
        console.log("=== profile useEffect ==", authUser)
        setName(authUser.name)
        setEmail(authUser.email)
        setImgSrc(authUser.imgUrl)
    }, [authUser])

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

    const onClickUpdate = () => {
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
        alert("ok")
        // let userInfo = new FormData()
        // userInfo.append('name', name)
        // userInfo.append('email', email)
        // userInfo.append('password', password)
        // userInfo.append('imgFile', imgFile)
        // action_signup_user(userInfo, history)
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
        <div className="user-profile-wrapper">
            <Helmet>
                <title>User Profile</title>
                <meta name="description" content="User Profile" />
            </Helmet>
            <PageTitleBar title="userProfile" match={match} />
            <RctCard >
                <div className="profile-top">
                    <img src={require('Assets/img/profile-banner.jpg')} alt="profile banner" width="1920" height="200" />
                </div>
                <div className="profile-bottom">
                    <div className="user-image text-center mb-30">
                        <img
                            src={imgSrc ? imgSrc : require('Assets/avatars/profile.jpg')}
                            className="img-fluid rounded-circle rct-notify mx-auto"
                            alt="user images"
                            width="150"
                            height="150"
                        />
                    </div>
                    <div className="user-list-content">
                        <div className="text-center">
                            <h3 className="fw-bold">{authUser.name}</h3>
                            <p>Web & Mobile Developer</p>
                        </div>
                    </div>
                </div>

                <div className="container" >
                    <center>
                        <div className="col-sm-6 col-md-6 col-lg-6">

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

                                        value={name? name: ''}
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

                                        value={email? email : ''}
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
                            <Button
                                className="btn-block text-white btn-block w-100"
                                color="primary"
                                variant="contained"
                                size="large"
                                style={{ marginTop: 20, marginBottom: 30 }}
                                onClick={onClickUpdate}>
                                Update Profile
                            </Button>
                        </div>
                    </center>
                </div>

            </RctCard>
        </div>
    )
}

// map state to props
const mapStateToProps = ({ authUser }) => {
    return { authUser };
};

export default connect(mapStateToProps)(Profile);
