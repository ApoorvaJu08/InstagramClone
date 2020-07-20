import React from 'react'

const SignIn = () => {
    return(
        <div className="mycard">
          <div className="card auth-card input-field">
            <h2>Instagram</h2>
            <input
            type="text"
            placeholder="email"
            />
            <input
            type="password"
            placeholder="password"
            />
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1">
                Login
            </button>
        </div>
      </div>
    )
}

export default SignIn