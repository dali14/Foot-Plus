import React, {useState} from 'react'
import Map from './components/Map'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

export default function contact() {
    const [lng, setLng] = useState(10.1);
    const [lat, setLat] = useState(36.8);
  return (
    <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="author" content="ThemeStarz" />
        {/*CSS */}
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/font-awesome/css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="assets/css/leaflet.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <title>MyHouse - Advanced Real Estate HTML Template by ThemeStarz</title>
        {/* WRAPPER
    =================================================================================================================*/}
        <div className="ts-page-wrapper ts-has-bokeh-bg" id="page-top">
          {/***********************************************************************************************************/}
          {/*HEADER ***************************************************************************************************/}
          {/***********************************************************************************************************/}
          <header id="ts-header" className="fixed-top">
            {/* SECONDARY NAVIGATION
        =============================================================================================================*/}
            
            {/*end #ts-primary-navigation.navbar*/}
          </header>
          <NavBar />
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
                  <h1>Contact</h1>
                </div>
              </div>
            </section>
            {/*MAP
            =========================================================================================================*/}
            <section id="map-address">
              <div className="container mb-5">
                <div className="ts-contact-map ts-map ts-shadow__sm position-relative">
                  {/*Address on map*/}<Map 
                      lat={lat}
                      setLat={setLat}
                      lng={lng}
                      setLng={setLng}
                      />

                
                  {/*Map*/}
                  <div id="ts-map-simple" className="h-100 ts-z-index__1">
                      
                  <address className="position-absolute ts-bottom__0 ts-left__0 text-black m-3 p-4 ts-z-index__2" data-bg-color="rgba(0,0,0,.8)">
                    <strong>Real Estate Agency</strong>
                    <br/>
                    2501 Rosemont Avenue
                    <br/>
                    Orlando, FL 32801
                  </address>
                      </div>
                </div>
              </div>
            </section>
            {/*CONTACT INFO & FORM
            =========================================================================================================*/}
            <section id="contact-form">
              <div className="container">
                <div className="row">
                  {/*CONTACTS (LEFT SIDE)
                        =============================================================================================*/}
                  <div className="col-md-4">
                    {/*Title*/}
                    <h3>Get In Touch</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat tempor sapien.
                      In lobortis posuere tincidunt.
                    </p>
                    {/*Phone*/}
                    <figure className="ts-center__vertical">
                      <i className="fa fa-phone ts-opacity__50 mr-3 mb-0 h4 font-weight-bold" />
                      <dl className="mb-0">
                        <dt>Phone</dt>
                        <dd className="ts-opacity__50">+1 321-978-5552</dd>
                      </dl>
                    </figure>
                    {/*Email*/}
                    <figure className="ts-center__vertical">
                      <i className="fa fa-envelope ts-opacity__50 mr-3 mb-0 h4 font-weight-bold" />
                      <dl className="mb-0">
                        <dt>Email</dt>
                        <dd className="ts-opacity__50">
                          <a href="#">hello@example.com</a>
                        </dd>
                      </dl>
                    </figure>
                    {/*Skype*/}
                    <figure className="ts-center__vertical">
                      <i className="fab fa-skype ts-opacity__50 mr-3 mb-0 h4 font-weight-bold" />
                      <dl className="mb-0">
                        <dt>Skype</dt>
                        <dd className="ts-opacity__50">
                          <a href="#">real.estate.agency</a>
                        </dd>
                      </dl>
                    </figure>
                  </div>
                  {/*end col-md-4*/}
                  {/*FORM (RIGHT SIDE)
                        =============================================================================================*/}
                  <div className="col-md-8">
                    {/*Title*/}
                    <h3>Contact Form</h3>
                    {/*Form*/}
                    <form id="form-contact" method="post" className="clearfix ts-form ts-form-email" data-php-path="assets/php/email.php">
                      {/*Row*/}
                      <div className="row">
                        {/*Name*/}
                        <div className="col-md-6 col-sm-6">
                          <div className="form-group">
                            <label htmlFor="form-contact-name">Name *</label>
                            <input type="text" className="form-control" id="form-contact-name" name="name" placeholder="Your Name" required />
                          </div>
                        </div>
                        {/*Email*/}
                        <div className="col-md-6 col-sm-6">
                          <div className="form-group">
                            <label htmlFor="form-contact-email">Email *</label>
                            <input type="email" className="form-control" id="form-contact-email" name="email" placeholder="Your Email" required />
                          </div>
                        </div>
                      </div>
                      {/*end row */}
                      {/*Subject*/}
                      <div className="form-group">
                        <label htmlFor="form-contact-email">Subject*</label>
                        <input type="text" className="form-control" id="form-contact-subject" name="subject" placeholder="Subject" required />
                      </div>
                      {/*Message*/}
                      <div className="form-group">
                        <label htmlFor="form-contact-message">Message *</label>
                        <textarea className="form-control" id="form-contact-message" rows={5} name="message" placeholder="Your Message" required defaultValue={""} />
                      </div>
                      {/*Submit button*/}
                      <div className="form-group clearfix">
                        <button type="submit" className="btn btn-primary float-right" id="form-contact-submit">Send
                          a Message
                        </button>
                      </div>
                      <div className="form-contact-status" />
                    </form>
                    {/*end form-contact */}
                  </div>
                  {/*end col-md-8*/}
                </div>
                {/*end row*/}
              </div>
              {/*end container*/}
            </section>
          </main>
          
          <Footer />
          {/*end #ts-footer*/}
        </div>
        {/*end page*/}
      </div>
  )
}
