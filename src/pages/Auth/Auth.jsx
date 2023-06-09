import React, { useState } from 'react'
import "./Auth.css"
import Logo from "../../img/logo.png"
import {useDispatch, useSelector} from 'react-redux'
import { logIn, signUp } from '../../actions/AuthAction'

const Auth = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state)=>state.authReducer.loading)
  const [isSignUp, setIsSignUp] = useState(true)
  const [data, setData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    password: "",
    confirmpassword: "",
  })

  const [confirmpassword, setConfirmPassword] = useState(true)
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpassword 
      ? dispatch(signUp(data)) 
      : setConfirmPassword(false);
    } else {
      dispatch(logIn(data))
    }
  }

  const resetForm = () => {
    setConfirmPassword(true)
    setData({
      username: "",
      firstname: "",
      lastname: "",
      password: "",
      confirmpassword: "",
    })
  }

  return (
    <div className="Auth">
      {/* left side */}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="WebName">
          <h1>AWC Media</h1>
          <h6>Explore the ideas throughout the world!</h6>
        </div>
      </div>
      {/* right side */}
      <div className="a-right">
        <form action="" className='infoForm authForm' onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign Up" : "Login"}</h3>
          {isSignUp &&
            <div>
              <input
                type="text"
                placeholder='First Name'
                className='infoInput'
                name='firstname'
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                type="text"
                placeholder='Last Name'
                className='infoInput'
                name='lastname'
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          }

          <div>
            <input
              type="text"
              className='infoInput'
              placeholder='Username'
              name="username"
              onChange={handleChange}
              value={data.username}
            />
          </div>
          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp &&
              <input
                type="password"
                className="infoInput"
                name="confirmpassword"
                placeholder="Confirm your password"
                onChange={handleChange}
                value={data.confirmpassword}
              />
            }
          </div>
          <span
            style={{
              display: confirmpassword ? "none" : "block",
              color: 'red',
              fontSize: "12px",
              alignSelf: 'flex-end',
              marginRight: '-8px',
            }}
          >
            *Confirmed password isn't the same.*
          </span>
          <div>
            <span style={{ fontSize: "13.5px", cursor: "pointer" }}
              onClick={() => {
                setIsSignUp((prev) => !prev)
                resetForm()
              }}
            >
              {isSignUp ? "Already have an account? Login." : "Don't have an account? Sign up."}
            </span>
          </div>
          <button className="button infoButton" type="submit" disabled={loading}>
          {loading? "Loading..." : isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Auth