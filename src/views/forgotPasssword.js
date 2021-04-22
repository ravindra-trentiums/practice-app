import React, { useState } from 'react'
import forgotPassword from "../assets/logo/forgot-password.png"
import Sidebar from "../containers/sidebar"

function LoginPage() {
    const initialState = {
        fields: {},
        errors: {},
    }
    const [loginDetails, setLoginDetails] = useState(initialState)
    const handleChange = (e, field) => {
        let fields = loginDetails.fields
        let errors = loginDetails.errors
        fields[field] = e.target.value
        errors[field] = undefined
        setLoginDetails({ ...loginDetails, fields, errors })
    }
    const handleSubmit = () => {

    }

    return (
        <div className="login-page">
            <div className="login-container">
              <Sidebar/>
                 <div className="login-form">
                    <div className="signin-block">
                        <div className="signin-option">
                            <div style={{ flex: "0.3" }}>
                                <img src={forgotPassword} width="80%"></img>
                            </div>
                            <div className="mt-5    " style={{ flex: '0.7', textAlign: "left" }}>
                                <p style={{ fontWeight: "bold", fontSize: "34px" }}>Forgot Passsword ?</p>
                            </div>
                        </div>
                        <div style={{ fontSize: "15px" }}>
                            Enter your registered email address below and we'll send you a reset password link

                        </div>
                        <div className="line-container mt-0" >
                            <hr width="100%" color="E8E8E8" align="left"></hr>
                        </div>

                    </div>
                    <div className="signin-form" >
                        <form className="form-signin" onSubmit={handleSubmit}>
                            <div className=" mt-3" >
                                <input
                                    type="email"
                                    id="email"
                                    className={`mt-1 form-control${loginDetails?.errors?.email ? ' is-invalid' : ''}`}
                                    placeholder="Email address"
                                    style={{ borderRadius: "25px", border: "3px solid rgb(233, 231, 231)" }}
                                    value={loginDetails?.fields?.email || ''}
                                    onChange={(e) => handleChange(e, 'email')}
                                />
                            </div>
                            <div className="button mt-4" style={{ display: "flex", justifyContent: "center" }} onClick={handleSubmit}>
                                <button className="button" type="submit">Send</button>
                            </div>
                            <div className="mt-3 mb-2 " style={{ textAlign: "center" }} tabIndex>Continue to Signin  </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
