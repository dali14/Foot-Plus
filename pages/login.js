import React from 'react'
import Footer from './components/Footer'

import { useState, useEffect } from 'react'

async function loginUser(credentials) {
  return fetch('http://localhost:3004/api/auth',  {
    method: 'POST',
    
    headers: {
      'Content-Type': 'application/json',
      
      
    },
    body: JSON.stringify(credentials)
  })
    .then(data=>data.json())
   
 }
export default function login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      email: email,
      password
    });

    if(!response.accessToken){
      console.log("login failed")
      
      
 }else{  
  
     localStorage.setItem("token", response.accessToken)
    //  localStorage.setItem("iduser", response.user._id)
     window.location = "/Myterrain"
   } 
   
  
 }

  
  return (
    <div>
        
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="author" content="ThemeStarz" />
        {/*CSS */}
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/font-awesome/css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <title>FOOT + Login</title>
        <div className="ts-page-wrapper ts-has-bokeh-bg" id="page-top">
          <header id="ts-header" className="fixed-top">
            
            {/*end #ts-primary-navigation.navbar*/}
          </header>
          
          <main id="ts-main">
            {/*BREADCRUMB
            =========================================================================================================*/}
            <section id="breadcrumb">
              <div className="container">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Library</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Data</li>
                  </ol>
                </nav>
              </div>
            </section>
            {/*PAGE TITLE
            =========================================================================================================*/}
            <section id="page-title">
              <div className="container">
                <div className="ts-title">
                  <h1>Login</h1>
                </div>
              </div>
            </section>
            {/*LOGIN / REGISTER SECTION
            =========================================================================================================*/}
            <section id="login-register">
              <div className="container">
                <div className="row">
                  <div className="offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                    {/*LOGIN / REGISTER TABS
                            =========================================================================================*/}
                    <ul className="nav nav-tabs" id="login-register-tabs" role="tablist">
                      {/*Login tab*/}
                      <li className="nav-item">
                        <a className="nav-link active" id="login-tab" data-toggle="tab"  role="tab" aria-controls="login" aria-selected="true">
                          <h3>Login</h3>
                        </a>
                      </li>
                      {/*Register tab*/}
                      <li className="nav-item">
                        <a className="nav-link" id="register-tab" href="/register" data-toggle="tab" role="tab" aria-controls="register" aria-selected="false">
                          <h3>Register</h3>
                        </a>
                      </li>
                    </ul>
                    {/*TAB CONTENT
                            =========================================================================================*/}
                    <div className="tab-content">
                      {/*LOGIN TAB
                                =====================================================================================*/}
                      <div className="tab-pane active" id="login" role="tabpanel" aria-labelledby="login-tab">
                        {/*Login form*/}
                        <form className="ts-form" id="form-login"  onSubmit={handleSubmit} >
                          {/*Email*/}
                          <div className="form-group">
                            <input type="email" className="form-control" id="login-email" placeholder="Email" required  onChange={e => setEmail(e.target.value)}/>
                          </div>
                          {/*Password*/}
                          <div className="input-group ts-has-password-toggle">
                            <input type="password" className="form-control border-right-0" placeholder="Password" required  onChange={e => setPassword(e.target.value)}/>
                            <div className="input-group-append">
                              <a href="#" className="input-group-text bg-white border-left-0 ts-password-toggle">
                                <i className="fa fa-eye" />
                              </a>
                            </div>
                          </div>
                          {/*Checkbox and Submit button*/}
                          <div className="ts-center__vertical justify-content-between">
                            {/*Remember checkbox*/}
                            <div className="custom-control custom-checkbox mb-0">
                              <input type="checkbox" className="custom-control-input" id="login-check" />
                              <label className="custom-control-label" htmlFor="login-check">Remember Me</label>
                            </div>
                            {/*Submit button*/}
                            <button type="submit" className="btn btn-primary">Login</button>
                          </div>
                          <hr />
                          {/*Forgot password link*/}
                          <a href="#" className="ts-text-small">
                            <i className="fa fa-sync-alt ts-text-color-primary mr-2" />
                            <span className="ts-text-color-light">I have forgot my password</span>
                          </a>
                        </form>
                      </div>
                    </div>
                    {/*end tab-content*/}
                  </div>
                  {/*end offset-4.col-md-4*/}
                </div>
                {/*end row*/}
              </div>
              {/*end container*/}
            </section>
          </main>  
        </div>
        
        <Footer />
      </div>
      
  )
}
