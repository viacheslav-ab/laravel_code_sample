/**
 * Signin Laravel
 */

import React, { useState } from 'react';
import RcQueueAnim from 'rc-queue-anim';
import { LinearProgress } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Input } from 'reactstrap';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import { InputAdornment, IconButton } from '@material-ui/core';
import { Person, Visibility, VisibilityOff, Email } from '@material-ui/icons'

//== test google login==/
import { GoogleLogin, GoogleLogout } from 'react-google-login'

// redux
import { connect } from 'react-redux'
// redux action
import {
   action_signin_user
} from '../actions'


const ERROR_PROPS = { error: true }
const VALIDE_PROPS = { error: false }

const SignIn = ({ loading, history, action_signin_user }) => {
   const [name, setName] = useState("")
   const [nameHelperText, setNameHelperText] = useState(null)
   const [nameHelperProps, setNameHelperProps] = useState(VALIDE_PROPS)

   const [password, setPassword] = useState("")
   const [passwordHelperText, setPasswordHelperText] = useState(null)
   const [passwordHelperProps, setPasswordHelperProps] = useState(VALIDE_PROPS)
   const [isShowPassword, setIsShowPassword] = useState(false)

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

   const onClickSignIn = () => {
      var isValidate = true
      if (!validateName(name)) {
         isValidate = false
      }
      if (!validatePassword(password)) {
         isValidate = false
      }

      if (!isValidate) return

      setIsShowPassword(false)
      action_signin_user({ name, password }, history)
   }

   const responseGoogle = response => {
      console.log("== google login response ==", response);
   }

   const logout = () => {
      console.log("Logout Success!")
   }

   return (

      <RcQueueAnim type="bottom" duration={2000}>
         <div className="rct-session-wrapper">
            {loading &&
               <LinearProgress />
            }
            <AppBar position="static" className="session-header">
               <Toolbar>
                  <div className="container">
                     <div className="d-flex justify-content-between">
                        {/* <div className="session-logo">
                                        <Link to="/">
                                            <img src={AppConfig.appLogo} alt="session-logo" className="img-fluid" width="110" height="35" />
                                        </Link>
                                    </div> */}
                        <div style={{ position: "absolute", right: "50px" }}>
                           <Link to="/signup" className="mr-15 text-white">Create New account?</Link>
                           <Button
                              component={Link}
                              to='/signup'
                              variant='contained'
                              className='btn-light'
                           >
                              Sign up
                                    </Button>
                        </div>
                     </div>
                  </div>
               </Toolbar>
            </AppBar>

            <div className="session-inner-wrapper" style={{ marginTop: "3%" }}>
               <div className="container">
                  <center>
                     {/* <div className="row row-eq-height"> */}

                     <div className="col-sm-6 col-md-6 col-lg-6">
                        {/* <div style={{width: "500px", margin: "0 auto"}}> */}
                        <div className="session-body text-center">
                           <div className="session-head mb-30">
                              <h2 className="font-weight-bold">Get started</h2>
                              <p className="mb-0">Login please</p>
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
                           <Form style={{ marginTop: "50px" }}>
                              <FormGroup className="mb-15">
                                 <Button
                                    color="primary"
                                    className="btn-block text-white w-100"
                                    variant="contained"
                                    size="large"
                                    onClick={onClickSignIn}
                                 >
                                    Sign In
                            			        </Button>
                              </FormGroup>
                           </Form>

                           <GoogleLogin
                              clientId="198873896591-h9d7vol8a4tk06g8phagl6l9a8onrsn0.apps.googleusercontent.com"
                              buttonText="Google Login"
                              onSuccess={responseGoogle}
                              onFailure={responseGoogle}
                              cookiePolicy={'single_host_origin'}
                           />

                           <GoogleLogout
                              clientId="198873896591-h9d7vol8a4tk06g8phagl6l9a8onrsn0.apps.googleusercontent.com"
                              buttonText="Logout"
                              onLogoutSuccess={logout}
                           />
                        </div>
                     </div>
                     {/* <div className="col-sm-5 col-md-5 col-lg-4">
                                    <SessionSlider />
                                </div> */}
                     {/* </div> */}
                  </center>
               </div>
            </div>

         </div>
      </RcQueueAnim>

   )
}

// map state to props
const mapStateToProps = ({ authUser }) => {
   const { user, loading } = authUser;
   return { user, loading }
}

export default connect(mapStateToProps, {
   action_signin_user
})(SignIn);
