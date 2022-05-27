import React, { useState } from 'react'

import axios from "axios";

export default function register() {

    const [data, setData] = useState({
		name: "",
		email: "",
		cin: "",
		tel:"",
		ville:"",
		role:"Client",
		password: "",
	});
    const [error, setError] = useState("");
	const [msg, setMsg] = useState("");
    
        const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

    const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:3004/api/users";
			const { data: res } = await axios.post(url, data);
			setMsg(res.message);
            window.location = "/login"

		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

  
  return (
    <div>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="author" content="ThemeStarz" />
    {/*CSS */}
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="assets/font-awesome/css/fontawesome-all.min.css" />
    <link rel="stylesheet" href="assets/css/style.css" />
    <title>Register Foot Plus +</title>
    {/* WRAPPER
=================================================================================================================*/}
    <div className="ts-page-wrapper ts-has-bokeh-bg" id="page-top">
      {/***********************************************************************************************************/}
      {/*HEADER ***************************************************************************************************/}
      {/***********************************************************************************************************/}
    
      {/*end Header*/}
      {/***********************************************************************************************************/}
      {/* MAIN ****************************************************************************************************/}
      {/***********************************************************************************************************/}
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
              <h1>Register</h1>
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
                    <a className="nav-link" id="login-tab" data-toggle="tab" href="/login" role="tab" aria-controls="login" aria-selected="true">
                      <h3>Login</h3>
                    </a>
                  </li>
                  {/*Register tab*/}
                  <li className="nav-item">
                    <a className="nav-link active" id="register-tab" data-toggle="tab" href="/register" role="tab" aria-controls="register" aria-selected="false">
                      <h3>Register</h3>
                    </a>
                  </li>
                </ul>
                {/*TAB CONTENT
                               =========================================================================================*/}
                <div className="tab-content">
                  <div className="tab-pane active" id="register" role="tabpanel" aria-labelledby="register-tab">
                    {/*Register tab*/}

                    <form className="ts-form" id="form-register" onSubmit={handleSubmit} >

                      {/*Name*/} 
                      <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="register-name" 
                            name="name"
							onChange={handleChange}
							value={data.name}
                            placeholder="name" 
                            required 
                            />
                      </div>

                      {/*Email*/}
                      <div className="form-group">
                        <input type="email" 
                          className="form-control"
                          id="register-email" 
                          placeholder="Email"
                          name="email"
                          onChange={handleChange}
                          
                          required />
                      </div>

                      <div className="form-group">
                        <input type="text" 
                            className="form-control" 
                            id="register-name" 
                            placeholder="Cin"
                            name="cin"
							onChange={handleChange}
							value={data.cin}
							required
                         />
                      </div>

                      <div className="form-group">
                        <input type="text"
                            className="form-control"
                            id="register-name"
                            placeholder="Telehpne"
                            name="tel"
							onChange={handleChange}
							value={data.tel}
                            required />
                      </div>

                      <div className="form-group">
                        <input type="text" 
                            className="form-control" 
                            id="register-name" 
                            placeholder="Ville" 
                            name="ville"
                            onChange={handleChange}
                            value={data.ville}
                            required />
                      </div>


                      {/*Password*/}
                      <div className="input-group ts-has-password-toggle">
                        <input type="password" 
                            className="form-control border-right-0" 
                            placeholder="Password" 
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            required />
                        <div className="input-group-append">
                          <a href="#" className="input-group-text bg-white border-left-0 ts-password-toggle">
                            <i className="fa fa-eye" />
                          </a>
                        </div>
                      </div>
                      <div className="custom-control custom-checkbox mb-4">
                        <input type="checkbox" className="custom-control-input" id="register-check" required />
                        <label className="custom-control-label" htmlFor="register-check">I Agree With <a href="#" className="btn-link">Terms and Conditions</a></label>
                      </div>
                      {/*Submit button*/}
                        {error && <div>{error}</div>}
						{msg && <div>{msg}</div>}
                      <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                  </div>
                  {/*end #register.tab-pane*/}
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
      <footer id="ts-footer">
        {/*MAIN FOOTER CONTENT
        =========================================================================================================*/}
        <section id="ts-footer-main">
          <div className="container">
            <div className="row">
              {/*Brand and description*/}
              <div className="col-md-6">
                <a href="#" className="brand">
                  <img src="assets/img/logo.png" alt="" />
                </a>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat tempor sapien.
                  In lobortis posuere tincidunt. Curabitur malesuada tempus ligula nec maximus. Nam tortor
                  arcu,
                  tincidunt quis molestie non, sagittis dignissim ligula. Fusce est ipsum, pharetra in felis
                  ac,
                  lobortis volutpat diam.
                </p>
                <a href="#" className="btn btn-outline-dark mb-4">Contact Us</a>
              </div>
              {/*Navigation*/}
              <div className="col-md-2">
                <h4>Navigation</h4>
                <nav className="nav flex-row flex-md-column mb-4">
                  <a href="#" className="nav-link">Home</a>
                  <a href="#" className="nav-link">Listing</a>
                  <a href="#" className="nav-link">About Us</a>
                  <a href="#" className="nav-link">Sign In</a>
                  <a href="#" className="nav-link">Register</a>
                  <a href="#" className="nav-link">Submit Property</a>
                </nav>
              </div>
              {/*Contact Info*/}
              <div className="col-md-4">
                <h4>Contact</h4>
                <address className="ts-text-color-light">
                  2590 Rocky Road
                  <br />
                  Philadelphia, PA 19108
                  <br />
                  <strong>Email: </strong>
                  <a href="#" className="btn-link">office@example.com</a>
                  <br />
                  <strong>Phone:</strong>
                  +1 215-606-0391
                  <br />
                  <strong>Skype: </strong>
                  real.estate1
                </address>
              </div>
            </div>
            {/*end row*/}
          </div>
          {/*end container*/}
        </section>
        {/*end ts-footer-main*/}
        {/*SECONDARY FOOTER CONTENT
        =========================================================================================================*/}
        <section id="ts-footer-secondary">
          <div className="container">
            {/*Copyright*/}
            <div className="ts-copyright">(C) 2018 ThemeStarz, All rights reserved</div>
            {/*Social Icons*/}
            <div className="ts-footer-nav">
              <nav className="nav">
                <a href="#" className="nav-link">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" className="nav-link">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#" className="nav-link">
                  <i className="fab fa-pinterest-p" />
                </a>
                <a href="#" className="nav-link">
                  <i className="fab fa-youtube" />
                </a>
              </nav>
            </div>
            {/*end ts-footer-nav*/}
          </div>
          {/*end container*/}
        </section>
        {/*end ts-footer-secondary*/}
      </footer>
      {/*end #ts-footer*/}
    </div>
    {/*end page*/}
  </div>
      
  )
}
